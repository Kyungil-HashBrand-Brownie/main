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

function getReward(contract, stake, renewMine, renewStaked) {

    return async (dispatch) => {
        let reward = 0;
        // console.log('there')
        // console.log(stake)
        // console.log(contract)

        try {
            dispatch({type: 'LOADING_START'})
            for (let i = 0; i < stake.length; i++) {
                let totalStakedNFTs = await contract.methods.totalStaked().call()
                let whenStaked = await contract.methods.whenStaked(stake[i].id.slice(1)).call();            
                let currentTimestamp = parseInt(+ new Date() / 1000);
                reward += ((currentTimestamp - whenStaked) / totalStakedNFTs) * 10;
                // console.log('reward: ', reward);
            }
            dispatch({type: 'GET_REWARD_SUCCESS', payload: reward })
        } catch(error) {
            console.log(error);
            dispatch({type: 'GET_REWARD_FAILURE'})
        }
    }
}

export const nftAction = {
    getReward,
}