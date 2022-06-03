let initialState = {
    nft : {},
}

function nftReducer(state=initialState, action) {
    let {type, payload} = action

    switch (type) {
        case "":
            return {...state}

        default:
            return {...state}
    }
}

export default nftReducer;