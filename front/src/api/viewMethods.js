import { nftInstance, votingContract } from "configs";

// NFT instance view 함수

// NFT 컨트랙트의 배포자
const getContractOwner = async() => await nftInstance.methods.owner().call();

const nftNum = async () => await nftInstance.methods.nftNum().call();

const checkWhite = async(address) => await nftInstance.methods.isWhitelisted(address).call() ;

const whitelistNftNum = async() => await nftInstance.methods.whitelistNftNum().call();

const getUserRank = async(from) => await nftInstance.methods.userRank().call({from});

const getMintList = async(from) => await nftInstance.methods.checkMinting().call();

// voting view 함수

const getVoteStatus = async() => await votingContract.methods.voteStatus().call();

export {getContractOwner, nftNum, checkWhite, whitelistNftNum, getUserRank, getMintList, getVoteStatus};