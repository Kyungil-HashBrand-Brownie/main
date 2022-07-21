import { caver, nftInstance, } from "configs";
import { checkWhite, getContractOwner, getTokenBalance, getUserRank, getVoteStatus } from "api";

function getReward(contract, stake) {

    return async (dispatch) => {
        let reward = 0;

        try {
            dispatch({ type: 'LOADING_START' })
            for (let i = 0; i < stake.length; i++) {
                let whenStaked = await contract.methods.whenStaked(stake[i].id.slice(1)).call();
                let currentTimestamp = parseInt(+ new Date() / 1000);
                reward += (currentTimestamp - whenStaked);
            }
            dispatch({ type: 'GET_REWARD_SUCCESS', payload: reward })
        } catch (error) {
            console.log(error);
            dispatch({ type: 'GET_REWARD_FAILURE' })
        }
    }
}


const setUserInfo = (address) => {

    return async (dispatch) => {
        try {
            if (address) {
                const contractOwner = await getContractOwner()
                const isDeployer = caver.utils.toChecksumAddress(address) === contractOwner
                dispatch({ type: 'CHECK_ISDEPLOYER', payload: isDeployer })
                const userRank = await getUserRank(address);
                dispatch({ type: "GET_USER_RANK", payload: userRank })
            }
            else dispatch({ type: 'ADDRESS_CHANGE_SUCCESS', payload: window.klaytn.selectedAddress });
        } catch (e) {
            console.log(e)
        }
    }
}

const checkWhitelist = (address) => {

    return async (dispatch) => {
        if (address) {
            try {
                const isWhite = await checkWhite(address)
                dispatch({ type: "CHECK_ISWHITELIST", payload: isWhite })
            }
            catch (e) {
                throw e
            }
        }
    }
}

const setVoteStatus = () => {
    
    return async (dispatch) => {
        try {
            const voteStatus = await getVoteStatus()
            // beforeVote : 0 , nowVote : 1, afterVote : 2
            dispatch({ type: "SET_VOTE_STATUS", payload: voteStatus })
        }
        catch (e) {
            console.log(e)
        }
    }
}

const setToken = (address) => {
    return async (dispatch) => {
        try {
            const tokenBalance = await getTokenBalance(address)

            dispatch({ type: 'GET_TOKEN_BALANCE', payload: tokenBalance })
        } catch (e) {
            console.log(e)
        }
    }
}


// const getDataCollecion = async () => {
//     let result = await axios.get(`/image/image/${params.edition}`);
//     let data = result.data[0]; // 데이터 배열 형식을 객체로 바꾸기 위해서
//     console.log(data);

//     setCollectionData(data)
//     console.log("addr",data.addr)
//   };

export const nftAction = {
    getReward,
    setUserInfo,
    checkWhitelist,
    setVoteStatus,
    setToken
}