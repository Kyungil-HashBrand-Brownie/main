let initialState = {
    modalState: false,
    voteStatus: "0",
    // userInfo
    userRank:0,
    walletRefresh: 1,
    isDeployer: false,
    isWhite: false,
    klayBalance: 0,
    btkBalance : 0,
    nickname : "",
    

    // Collection
    sortOption: 0,
    filterOpenState: [
        { id: 'Body', click: false },
        { id: 'Eye', click: false },
        { id: 'Mouth', click: false },
        { id: 'Item', click: false },
        { id: 'Background', click: false },
    ],
    filterOption: [
        { id: 'Body', opt: null },
        { id: 'Eye', opt: null },
        { id: 'Mouth', opt: null },
        { id: 'Item', opt: null },
        { id: 'Background', opt: null },
    ],
}

function nftReducer(state = initialState, action) {
    let { type, payload } = action

    switch (type) {
        case "MODAL_CLICK":
            return {
                ...state,
                modalState: !state.modalState,
            };

        case "MODAL_CLOSE":
            return {
                ...state,
                modalState: false,
            };

        case "VOTE_INCREMENT":
            return {
                ...state,
                [Object.keys(payload)[0]]: Object.values(payload)[0],
                countTotal: state.countTotal + 1,
            };

        // case 'NFTCARD_CLICK' :
        //     return {
        //         ...state,
        //         [Object.keys(payload)[0]]: Object.values(payload)[0],
        //     }


        case "REMOVE_BOOKMARK_TEST":
            let copy = [...state.posts]
            payload.checkItems.forEach((item) => {
                let deleteIndex = copy.findIndex((value) => value.id === item)
                copy.splice(deleteIndex, 1)
            });
            return {
                ...state, posts: copy
            }


        // address, walletRefresh, isDeployer update
        
        case "WALLET_REFRESH":
            return {
                ...state,
                walletRefresh: !state.walletRefresh
            }
        
        case "CHECK_ISDEPLOYER":
            return {
                ...state,
                isDeployer: payload
            }
        
        case "CHECK_ISWHITELIST":
            return {
                ...state,
                isWhite: payload
            }
        
        case "GET_USER_RANK" :
            return {
                ...state,
                userRank : payload
            }

        case "GET_TOKEN_BALANCE" :
            return {
                ...state,
                klayBalance : payload.KLAY,
                btkBalance : payload.BTK
            }

        case "SET_NICKNAME" : 
            return {
                ...state,
                nickname : payload
            }

        // Collection
        case 'CHANGE_SORT_OPTION' : 
            return {
                ...state,
                sortOption: payload,
            }

        case 'CHANGE_FILTER_STATE' :
            return {
                ...state,
                filterOpenState: payload,
            }

        case 'CHANGE_FILTER_OPTION_STATE' :
            return {
                ...state,
                filterOption: payload,
            }

        case 'RESET_COLLECTION' : 
            return {
                ...state,
                sortOption: 0,
                filterOpenState: [
                    { id: 'Body', click: false },
                    { id: 'Eye', click: false },
                    { id: 'Mouth', click: false },
                    { id: 'Item', click: false },
                    { id: 'Background', click: false },
                    ],
                filterOption: [
                    { id: 'Body', opt: null },
                    { id: 'Eye', opt: null },
                    { id: 'Mouth', opt: null },
                    { id: 'Item', opt: null },
                    { id: 'Background', opt: null },
                ],
            }

        default:
            return { ...state }
    }
}

export default nftReducer; 