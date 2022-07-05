import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { nftInstance } from "configs";
import { nftAction } from 'redux/actions/nftAction';
import Pagination from './Pagination';
import { stakeNFTs, unstakeNFTs, useAlert } from 'api';
import axios from 'axios';
import Reward from './Reward';
import CardHead from './CardHead';
import CardContainer from './CardContainer';
import AlertModal from 'components/AlertModal';

const Cardjustify = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 
        ${props => !props.bool && '56px'}; 
`
const Main = styled.div`
    width: 31.25rem;    
    /* height: auto; */
    min-height: 54.6875rem;
    margin: .625rem;
    border: 
        ${props => !props.bool ? '.1875rem solid white'
                                : '.1875rem solid black'};
    border-radius: 2.5rem;
    padding: .625rem .625rem;
    background: 
        ${props => props.bool ? '#F5FADB' 
                                : 'radial-gradient(transparent, #854207)'};
    /* background: radial-gradient(transparent, #FFF9F9); */
    /* background: linear-gradient(to right, #d78034 0%, transparent 50%, #d78034 100%); */
    /* background: #6e3503; */
`

function NftCard({ bool }) {
    const dispatch = useDispatch();
    const { myAddress, myNFTs, myStakedNFTs, loading } = useSelector(state => state.nft);
    const customAlert = useAlert()

    const [page, setPage] = useState(1);
    const [inputCheck, setInputCheck] = useState(false)

    let list = bool ? myNFTs : myStakedNFTs;
    let checkedList = list.filter((item) => item.checked);

    const changeAllState = (checked) => {
        let newArr = list.sort((a, b) => a.id.slice(1) - b.id.slice(1))
        newArr = newArr.map((item, index) => {
            if (index >= (page - 1) * 4 && index < (page - 1) * 4 + 4) {
                item.checked = checked;
            }
            return item;
        })

        let myClickState = bool ? { myNFTs: newArr } : { myStakedNFTs: newArr };
        setInputCheck(!inputCheck);
        dispatch({ type: 'NFTCARD_CHANGE_ALL', payload: myClickState })
    }

    const changeClickState = (id) => {
        setInputCheck(false);

        let newArr = list.map((li) => {
            if (li.id === id) {
                li.checked = !li.checked;
            }
            return li
        })

        let click = bool ? { myNFTs: newArr } : {myStakedNFTs: newArr };
        dispatch({ type: 'NFTCARD_CLICK', payload: click });
    }

    const transactNFT = async () => {
        let renewMyNFTs = list.filter((item) => !item.checked)
        let nftIdArr = list.filter((item) => item.checked).map((item) => item.id.slice(1));

        if (nftIdArr.length > 0) {
            try {
                const result = bool ? await stakeNFTs(myAddress, nftIdArr) 
                                    : await unstakeNFTs(myAddress, nftIdArr)
                
                if (result.status) {
                    let changedNFTs = list.filter((item) => item.checked).map((item) => {
                        item.checked = false;
                        return item;
                    })

                    let data = bool ? { myNFTs: renewMyNFTs, myStakedNFTs: myStakedNFTs.concat(changedNFTs) }
                                    : { myNFTs: myNFTs.concat(changedNFTs), myStakedNFTs: renewMyNFTs }

                    dispatch({ type: 'NFTCARD_TRANSACT', payload: data })
                    dispatch({ type: "WALLET_REFRESH" })

                    if (bool) customAlert.open("스테이킹 성공");
                    else customAlert.open("선택한 NFT가 정상적으로 unstaking 되었습니다.");
                }
                
                else customAlert.open("transaction fail")

            } catch (e) {
                console.log(e.message)
            }
        }
        else {
            bool ? customAlert.open('스테이킹할 아이템을 선택하세요.')
                : customAlert.open('언스테이킹할 아이템을 선택하세요.')
        }
    }

    const getCurrentReward = async () => {
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
    }

    const checkNfts = async () => {
        getCurrentReward()
        let myBrownyNFTs = await nftInstance.methods.myNFTs().call(
            { from: myAddress })

        let stakedNFTs = await nftInstance.methods.checkStakedNFTs().call(
            { from: myAddress })

        myBrownyNFTs = myBrownyNFTs.filter((item) => !stakedNFTs.includes(item));

        let dict;
        let dict1;
        const result = await axios.post('/image/images', { myBrownyNFTs, stakedNFTs })
        dict = result.data.data;
        dict1 = result.data.data1;

        let binaryArr = [];
        for (let i = 0; i != myBrownyNFTs.length; i++) {
            let metajson = {
                id: `#${myBrownyNFTs[i]}`,
                image: `/image/images/${dict[myBrownyNFTs[i]]}`,
                checked: false,
            }
            binaryArr.push(metajson)
        }

        let processedStakedNFTs = stakedNFTs.map((NFT) => {
            let data = {
                id: `#${NFT}`,
                image: `/image/images/${dict1[NFT]}`,
                checked: false,
            }
            return data;
        })
        myBrownyNFTs = binaryArr.filter((item) => {
            if (stakedNFTs.indexOf(item.id.slice(1)) < 0) return item
        })

        dispatch({ type: "NFTCARD_MYNFTS", payload: { myNFTs: myBrownyNFTs, myStakedNFTs: processedStakedNFTs } })
    }

    useEffect(() => {
        if (bool) checkNfts()
    }, [myAddress, myStakedNFTs.length, page])

    return (
        <div className='nftlist-outer'>
            <AlertModal {...customAlert} />
            <div className='nftcard-header'>
                {bool ? 'My NFTs' : 'Staked NFTs'}
            </div>
                    {(myNFTs.length > 0 || myStakedNFTs.length > 0) && bool &&
                        <Reward 
                            myAddress={myAddress}
                            myStakedNFTs={myStakedNFTs}
                            nftInstance={nftInstance} 
                            loading={loading}
                        />
                    }
            <Cardjustify bool={bool}>
                <Main bool={bool}>
                    {list.length > 0 &&
                        <CardHead 
                            bool={bool}
                            checkedList={checkedList}
                            inputCheck={inputCheck}
                            transactNFT={transactNFT}
                            changeClickState={changeClickState}
                            changeAllState={changeAllState}
                            total={myNFTs.length + myStakedNFTs.length}
                            current={bool? myNFTs.length : myStakedNFTs.length}
                        />
                    }
                    <div className='InnerMain'>
                        {list.length > 0
                            ? <CardContainer 
                                list={list}
                                page={page}
                                changeClickState={changeClickState}
                            />
                            : <div className='no-display'>
                                <h1>Nothing to display</h1>
                            </div>
                        }
                    </div>
                    {list.length > 0 &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            total={list.length}
                            setInputCheck={setInputCheck}
                            inputCheck={inputCheck}
                        />
                    }
                </Main>
            </Cardjustify>
        </div>
    );
}

export default NftCard;