import { nftInstance, votingContract, whitelistInstance } from "configs";

// NFT instance view 함수

// NFT 컨트랙트의 배포자
const getContractOwner = async() => await whitelistInstance.methods.owner().call();

const nftNum = async () => await nftInstance.methods.checkMintedNormalNFTNum().call();

const checkWhite = async(address) => await nftInstance.methods.isWhitelisted(address).call() ;

const whitelistNftNum = async() => await nftInstance.methods.checkMintedWhitelistNFTNum().call();

const getUserRank = async(from) => await nftInstance.methods.userRank().call({from});

const getMintList = async() => await nftInstance.methods.checkMintedNftList().call();

const getMyNFTs = async(from) => await nftInstance.methods.ownTokens().call({from});

const getMyStaked = async(from) => await nftInstance.methods.checkStakedNFTs().call({from});

// voting view 함수

const getVoteStatus = async() => await votingContract.methods.voteStatus().call();

const getVoteCount = async(index) => await votingContract.methods.numberOfVotes(index-1).call();

const checkVote = async(from) => await votingContract.methods.checkVote().call({from});

const checkVoteWhich = async(from) => await votingContract.methods.checkVoteWhich().call();

export {
    getContractOwner,
    nftNum,
    checkWhite,
    whitelistNftNum,
    getUserRank,
    getMintList,
    getMyNFTs,
    getMyStaked,
    getVoteStatus,
    getVoteCount,
    checkVote,
    checkVoteWhich,
};