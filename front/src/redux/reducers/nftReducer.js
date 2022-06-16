let initialState = {
    nft: {},
    countAnimal: 0,
    countKid: 0,
    countMinority: 0,
    countTotal: 0,
    myAddress: "",
    brownieContract: {},
    modalState: false,
    btkInstance: "",
    walletRefresh: 1,
    nftList: "",
    myNFTs: [],
    myStakedNFTs: [],
    posts: [{
        id: 1
        , title: "test1"
    }, {
        id: 2
        , title: "test2"
    }, {
        id: 3
        , title: "test3"
    }]
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

        case "CONTRACT_SUCCESS":
            console.log("contract: ", payload);
            return {
                ...state,
                brownieContract: payload,
            }

        case "BTK_INSTANCE":
            console.log("btk instance : ", payload);
            return {
                ...state,
                btkInstance: payload
            }

        case "NFTCARD_STAKING":
            console.log("NFTLIST_DATA : ", payload);
            return {
                ...state,
                nftList: payload
            }

        case 'NFTCARD_MYNFTS' :
            return {
                ...state,
                myNFTs: payload.myNFTs,
                myStakedNFTs: payload.myStakedNFTs,
            }

        case 'NFTCARD_MYNFTS_CLICK' :
            return {
                ...state,
                myNFTs: payload,
            }

        case 'NFTCARD_STAKE_CLICK' :
            return {
                ...state,
                myStakedNFTs: payload,
            }

        case 'NFTCARD_STAKE' :
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

        case "ADDRESS_CHANGE_SUCCESS":
            return {
                ...state,
                myAddress: payload,
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

        case "WALLET_REFRESH":
            return {
                ...state,
                walletRefresh: !state.walletRefresh
            }

        default:
            return { ...state }
    }
}

export default nftReducer; 