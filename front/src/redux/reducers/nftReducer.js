let initialState = {
    myNFTpage: 1,
    myStakedpage: 1,
    countAnimal: 0,
    countKid: 0,
    countMinority: 0,
    countTotal: 0,
    modalState: false,
    nftList: "",
    myNFTs: [],
    myStakedNFTs: [],
    reward: 0,
    loading: false,
    voteStatus: "0",
    // userInfo
    myAddress: "",
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

        case 'GET_REWARD':
            return {
                ...state,
                reward: payload,
            }

        case 'LOADING_START' :
            return {
                ...state, 
                loading: true,
            }

        case "NFTCARD_STAKING":
            console.log("NFTLIST_DATA : ", payload);
            return {
                ...state,
                nftList: payload
            }

        case 'NFTCARD_CHANGE_ALL' :
            // console.log(payload)
            // console.log(Object.keys(payload)[0])
            // console.log(Object.values(payload)[0])
            // payload = {myNFTs: [{id: 1, image: '1adasd', checked: true}]}
            return {
                ...state,
                [Object.keys(payload)[0]]: Object.values(payload)[0],
            }

        case 'NFTCARD_MYNFTS' :
            return {
                ...state,
                myNFTs: payload.myNFTs,
                myStakedNFTs: payload.myStakedNFTs,
            }

        case 'NFTCARD_CLICK' :
            return {
                ...state,
                [Object.keys(payload)[0]]: Object.values(payload)[0],
            }

        case 'NFTCARD_STAKE_CLICK' :
            return {
                ...state,
                myStakedNFTs: payload,
            }

        case 'NFTCARD_TRANSACT' :
            return {
                ...state,
                myNFTs: payload.myNFTs,
                myStakedNFTs: payload.myStakedNFTs,
            }

        // case 'NFTCARD_UNSTAKE' :
        //     return {
        //         ...state,
        //         myNFTs: state.myNFTs.concat(payload.myNFTs),
        //         myStakedNFTs: payload.myStakedNFTs,
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


        case 'GET_REWARD_SUCCESS' : 
            return  {
                ...state, 
                reward: payload,
                loading: false,
            }

        case 'GET_REWARD_FAILURE' :
            return {
                ...state, 
                reward: 0,
                loading: false,
            }
        // address, walletRefresh, isDeployer update

        case "ADDRESS_CHANGE_SUCCESS":
            return {
                ...state,
                myAddress: payload,
            }
        
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

        case "SET_VOTE_STATUS" :
            return {
                ...state,
                voteStatus : payload
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