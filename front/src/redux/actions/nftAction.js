// import api from "../api"

// const api_key =process.env.REACT_APP_API_KEY

// function getNft(id) {
//     return async(dispatch) => {

//         try {
//             // const nft = await api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`);
//             let [
//                 /* 함수 */
//              ] = await Promise.all([/* 함수 */])
            
//             dispatch({
//                 type: "/* '보낼 메세지' */",
//                 payload: {
//                     /* state : let함수.data */
//                 }
//             })

//     }catch(e) {
//         // 에러 핸들링 하는 곳 
//         dispatch({type:"GET_Nft_FAILURE"})
//     }
// }
// }

import { caver, nftInstance,  } from "configs";
import { checkWhite, getTokenBalance, getUserRank, getVoteStatus } from "api";

function getReward(contract, stake, renewMine, renewStaked) {

    return async (dispatch) => {
        let reward = 0;
        // console.log('there')
        // console.log(stake)
        // console.log(contract)

        try {
            dispatch({type: 'LOADING_START'})
            for (let i = 0; i < stake.length; i++) {
                let whenStaked = await contract.methods.whenStaked(stake[i].id.slice(1)).call();            
                let currentTimestamp = parseInt(+ new Date() / 1000);
                reward += (currentTimestamp - whenStaked);
                // console.log('reward: ', reward);
            }
            dispatch({type: 'GET_REWARD_SUCCESS', payload: reward })
        } catch(error) {
            console.log(error);
            dispatch({type: 'GET_REWARD_FAILURE'})
        }
    }
}

const enableKaikas = () => {
    return async (dispatch) => {
        if(window.klaytn){
            window.klaytn.enable()
            // 카이카스 계정 정보 리덕스에 저장하는 부분
            dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: window.klaytn.selectedAddress});
        }
        else {
            alert("카이카스 설치 필요")
            window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko")
        }
    }
}

const setUserInfo =  (address) => {
    return async (dispatch) => {
        if(address){
            const contractOwner = await nftInstance.methods.owner().call()
            const isDeployer = caver.utils.toChecksumAddress(address) === contractOwner
            dispatch({type: 'CHECK_ISDEPLOYER', payload: isDeployer})
            const userRank = await getUserRank(address);
            dispatch({type: "GET_USER_RANK", payload: userRank})
        }
        else dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: window.klaytn.selectedAddress});
    }
}

const checkWhitelist = (address) => {
    return async (dispatch) => {
        if (address) {
            try {
                const isWhite = await checkWhite(address)
                dispatch({ type : "CHECK_ISWHITELIST" , payload:isWhite })
            }
            catch (e) {
                throw e
            }
        }
    }
}

const setVoteStatus = () => {
    return async (dispatch) => {
        const voteStatus = await getVoteStatus()
        dispatch({type:"GET_VOTE_STATUS", payload : voteStatus})
    }
}

const setToken = (address) => {
    return async (dispatch) => {
        const tokenBalance = await getTokenBalance(address)

        dispatch({type: 'GET_TOKEN_BALANCE',payload: tokenBalance})
    }
}

export const nftAction = {
    getReward,
    enableKaikas,
    setUserInfo,
    checkWhitelist,
    setVoteStatus,
    setToken
}