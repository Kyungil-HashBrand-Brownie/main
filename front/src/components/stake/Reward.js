import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { claimReward } from 'api';
import { nftAction } from 'redux/actions/nftAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  border-color: black;

  margin: 0rem 1.42rem 0rem 1.4rem;
`;

const Reward = ({ myAddress, myStakedNFTs, nftInstance, loading }) => {
    const { reward } = useSelector(state => state.nft);
    const dispatch = useDispatch();
    const clickRefresh = () => {
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
    }

    const clickClaim = async () => {
        await claimReward(myAddress)
        dispatch(nftAction.getReward(nftInstance, myStakedNFTs));
        dispatch({type: "WALLET_REFRESH"})
    }

    return (
        <div className='myNFT-info-box'>
            <div className='reward-box'>
                <div className='nftlist-reward'>
                <FontAwesomeIcon 
                    bounce
                    transform="shrink-3"
                    mask={faCircle}
                    icon={faRotateRight}
                    className='refresh-reward-icon'
                    onClick={clickRefresh}
                />
                    total reward : &nbsp;
                    <ClipLoader loading={loading} css={override} size={20} />
                    {!loading &&<>{(reward / 10000).toFixed(4)}</>} BTK
                <button 
                    className='reward-button'
                    onClick={clickClaim}
                    >
                    claim
                    </button>
                
                </div>
            </div>
        </div>
    )
}

export default Reward