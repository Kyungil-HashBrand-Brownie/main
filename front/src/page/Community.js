import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainHeader from 'components/MainHeader'
import CommunityPostButton from 'components/vote/CommunityPostButton'
import CommunityVoteTable from 'components/vote/CommunityVoteTable'
import VoteDescription from 'components/vote/VoteDescription'
import { useSelector } from 'react-redux'
import ImgComponent from 'components/ImgComponent'
import { nftInstance } from 'configs'
import axios from 'axios';
import CommunityImageSelect from 'components/vote/CommunityImageSelect'

const rank = {
    1: 'BRONZE',
    2: 'SILVER',
    3: 'GOLD',
}

const VoteDOuter = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const CommunityMainOuter = styled.div`
    margin: auto;
    opacity: 0.9;
    background: white;
    width: 1200px;
    border-radius: 20px;
`
const CommunitySide = styled.div`
    position: absolute;
    right: 3%;
    top: 16%;
    display: flex;
    flex-direction: column;
    width: 240px;
    /* height: 200px; */
    background: white;
    border-radius: 40px;
    border: thick double #32a1ce;
`
const ProfileBox = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: auto;
`
const ProfileNone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: auto;
    background: lightgray;
`
const SelectBox = styled.div`
    width: 200px;
    background: red;
`
const UserInfoBox = styled.div`
    width: 200px;
    height: 60px;
    margin: auto;
`
const UserDiv = styled.div`
    display: flex;
`
const UserLeft = styled.div`
    width: 110px;
    text-align: end;
`
const UserRight = styled.div`
    width: 90px;
    text-align: center;
`


const Community = () => {
    const { userRank, isDeployer } = useSelector(state => state.main)
    const { myAddress } = useSelector(state => state.nft);

    const [image, setImage] = useState(null);
    const [myImage, setMyImage] = useState(null);

    const action = async () => {
        let myBrownyNFTs = await nftInstance.methods.ownTokens().call(
            { from: myAddress })
        let stakedNFTs = await nftInstance.methods.checkStakedNFTs().call(
            { from: myAddress })
        const result = await axios.post('/api/image/images', { myBrownyNFTs, stakedNFTs })
        let data = result.data;
        setImage(data);
        setMyImage(`/api/image/images/${data[0].addr}`)
    }

    useEffect(() => {
        if(myAddress){
            action();
        }
    }, [myAddress])

    return (
        <>
            <ImgComponent />
            <VoteDOuter>
                <CommunityMainOuter>
                    <MainHeader />
                    <VoteDescription />
                    {(isDeployer || userRank === 3) &&
                        <CommunityPostButton />
                    }
                    <CommunityVoteTable />
                </CommunityMainOuter>
            </VoteDOuter>
            {myImage != null &&
                <CommunitySide>
                    {image.length > 0 
                    ? <>
                        <ProfileBox src={myImage} />
                        <CommunityImageSelect 
                        image={image}
                        setMyImage={setMyImage}
                        />
                      </> 
                    : <ProfileNone>
                        <div>No Image</div>
                      </ProfileNone>
                    }
                    <UserInfoBox>
                        <UserDiv>
                            <UserLeft>NFT OWNED: </UserLeft>
                            <UserRight>{image.length}</UserRight>
                        </UserDiv>
                        <UserDiv>
                            <UserLeft>USERRANK: </UserLeft>
                            <UserRight>{image.length ? rank[userRank] : 'UNRANK'}</UserRight>
                        </UserDiv>
                    </UserInfoBox>
                </CommunitySide >
            }
        </>
    )
}

export default Community