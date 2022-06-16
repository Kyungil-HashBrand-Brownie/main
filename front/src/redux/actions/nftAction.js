import api from "../api"

const api_key =process.env.REACT_APP_API_KEY

function getNft(id) {

    return async(dispatch) => {

        try {

            const nft = await api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`);


            let [
                /* 함수 */
             ] = await Promise.all([/* 함수 */])
            


            dispatch({
                type: "/* '보낼 메세지' */",
                payload: {
                    /* state : let함수.data */
                }
            })


    }catch(e) {
        // 에러 핸들링 하는 곳 
        dispatch({type:"GET_Nft_FAILURE"})
    }
}
}

export const nftAction = {
    getNft,
}