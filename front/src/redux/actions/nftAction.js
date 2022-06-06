
function getNft() {

    return async(dispatch) => {

        try {

            // const 

            // let [] = await Promise.all([])


            dispatch({
                type: 'GET_NFT_SUCCESS',
                payload: {
                    
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