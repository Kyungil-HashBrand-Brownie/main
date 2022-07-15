import React, { useEffect } from 'react'

const ImageSelect = () => {

    const action = () => {
        let myBrownyNFTs = await nftInstance.methods.ownTokens().call(
            { from: myAddress })
        let dummy = [];
        const result = await axios.post('/api/image/images', { myBrownyNFTs, dummy })
        let data = result.data;
        console.log('data: ', data)

    }

    useEffect(() => {
        action();
    },[])

    return (
        
    )
}

export default ImageSelect