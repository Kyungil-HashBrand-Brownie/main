let initialState = {
    myNFTpage: 1,
    myStakedpage: 1,
    nftList: "",
    myNFTs: [],
    myStakedNFTs: [],
    reward: 0,
    loading: false,
    voteStatus: "0",
    // userInfo
    myAddress: "",
}

function nftReducer(state = initialState, action) {
    let { type, payload } = action

    switch (type) {

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

        case 'NFTCARD_UNSTAKE' :
            return {
                ...state,
                myNFTs: state.myNFTs.concat(payload.myNFTs),
                myStakedNFTs: payload.myStakedNFTs,
            }


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


        case "SET_VOTE_STATUS" :
            return {
                ...state,
                voteStatus : payload
            }


        default:
            return { ...state }
    }
}

export default nftReducer; 