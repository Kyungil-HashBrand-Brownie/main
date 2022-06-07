let initialState = {
    nft : {},
    countAnimal : 0,
    countKid : 0,
    countMinority : 0,
    countTotal : 0,
}

function nftReducer(state=initialState, action) {
    let {type, payload} = action

    // const result = Object.keys(payload)[0] || null;

    console.log("action", action )
    console.log("payload", payload)
    switch (type) {
        case "VOTE_INCREMENT":
            return {...state,
                [Object.keys(payload)[0]] : Object.values(payload)[0],
                countTotal: state.countTotal + 1,
            };

        // case "VOTE_INCREMENT2":
        //     console.log(Object.keys(payload)[0])
        //     return {...state,
        //         countKid : state.countKid +1,
        //     };

        default:
            return {...state}
    }
}

export default nftReducer; 