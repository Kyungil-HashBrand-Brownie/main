import { nftInstance } from "configs";

const getContractOwner = async() => await nftInstance.methods.owner().call();

const nftNum = async () => await nftInstance.methods.nftNum().call();

const checkWhite = async(address) => await nftInstance.methods.isWhitelisted(address).call() ;

const whitelistNftNum = async() => await nftInstance.methods.whitelistNftNum().call();

export {getContractOwner, nftNum, checkWhite, whitelistNftNum};