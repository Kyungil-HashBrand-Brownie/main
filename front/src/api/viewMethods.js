import { nftInstance } from "configs";

const getContractOwner = async() => await nftInstance.methods.owner().call();

const nftNum = async () => await nftInstance.methods.nftNum().call();

const checkWhite = async(address) => await nftInstance.methods.isWhitelisted(address).call() ;

const whitelistNftNum = async() => await nftInstance.methods.whitelistNftNum().call();

const getUserRank = async(from) => await nftInstance.methods.userRank().call({from});

const getMintList = async(from) => await nftInstance.methods.checkMinting().call();

export {getContractOwner, nftNum, checkWhite, whitelistNftNum, getUserRank, getMintList};