let initialState = {
    nft : {},
    countAnimal : 0,
    countKid : 0,
    countMinority : 0,
    countTotal : 0,
    myAddress : "",
    myContract: {},
    modalState: false,
    btkInstance: "",
}

function nftReducer(state=initialState, action) {
    let {type, payload} = action

    // const result = Object.keys(payload)[0] || null;

    // console.log("action", action)
    // console.log("payload", payload)
    switch (type) {
        case "MODAL_CLICK": 
            return {...state,
                modalState: !state.modalState,
            };

        case "MODAL_CLOSE":
            return {...state,
                modalState: false,
            };
            
        case "VOTE_INCREMENT":
            return {...state,
                [Object.keys(payload)[0]] : Object.values(payload)[0],
                countTotal: state.countTotal + 1,
            };

        case "CONTRACT_SUCCESS": 
            console.log("contract: ", payload);
            return {...state,
                myContract: payload,                
            }

        case "BTK_INSTANCE":
            console.log("btk instance : ", payload);
            return {...state,
                btkInstance: payload
            }

        case "ADDRESS_CHANGE_SUCCESS":
            return {...state,
                myAddress: payload,
            }

        default:
            return {...state}
    }
}

export default nftReducer; 