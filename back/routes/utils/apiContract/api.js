const Caver = require("caver-js");
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

const abi = require("./abi.json");
var brownie;
var projectAddress = "0xe17fafe9ffbacce005f271216e764d86ff1e7bc3";
brownie = new caver.klay.Contract(abi, projectAddress);

/*test address*/
let u_addr = "0xac45689e82ae9f93ed325b9254fe42bb77ba7849";

/**
* @brief `Mint` methods api
*/

// view
let isWhitelisted = async (address)=>{ // 유저가 화이트리스트에 속했는지 확인하는 함수 return boolean
    let result = await brownie.methods.isWhitelisted(address).call();
       console.log(result);
    return result;
}




let tokenURI = async (tokenId)=>{ // IPFS안에서의 NFT에대한 해시값 보는 함수 (미지수)
    let result = await brownie.methods.tokenURI(tokenId).call();
    console.log(result);
}

// NFT구매함수
let batchMint = async (amount)=>{ // 모든 일반 유저가 NFT구매하는 함수
    let result = await brownie.methods.batchMint(to_address, amount).send();
    console.log(result);
    return result;
}

// console.log(batchMint(u_addr, 1));

let whitelistMint = async (amount)=>{ // 화이트리스트만 NFT를 구매하는 함수
    let result = await brownie.methods.whitelistMint( amount).send();
    console.log(result);
    return result;
}
// whitelistMint(u_addr, 1);

// onlyOwner
let add = async (address)=>{ //화이트리스트 추가
    let result = await brownie.methods.add(address).send();
    console.log(result);
}

let remove = async (address)=>{ //화이트리스트 명단 제거
    let result = await brownie.methods.remove(address).send();
    console.log(result);
}
let widthdraw = async (balance)=>{ //민팅 후 수익 출금용
    let result = await brownie.methods.withdrawKLAY(balance).send();
    console.log(result);
}

/**
* @brief `Staking` methods api
*/
// view
let viewIns = async ()=>{ // view return address(instance)
    let result = await brownie.methods.viewIns().call();
    console.log(result);
}
//
let getBtk = async (amount)=>{ //내가 가진 클레이튼 지불해서 우리의 토큰 사는 메소드
    let result = await brownie.methods.getBtk(amount).send();
    console.log(result);
}

// for send
let stake = async (tokenId)=>{ // external stake(tokenId)
    let result = await brownie.methods.stake(tokenId).send();
    console.log(result);
}
let unstake = async(tokenId)=>{ // external unstake(tokenId)
    let result = await brownie.methods.unstake(tokenId).send();
    console.log(result);
}
//보상 대기중


/**
*@brief `Token` method api
*/

//
let viewThis = async()=>{ // view return address(this)  컨트랙트의 address체크
    let result = await brownie.methods.viewThis().call();
    console.log(result);
}
let balan = async ()=>{ // view return address(this).balance; //컨트랙트의 계정내 잔액 체크
    let result = await brownie.methods.balan().call();
    console.log(result);
}


// onlyOwner //스테이킹 별도기능 작업중
let pause = async ()=>{ 
	await brownie.methods.pause().send();
}
let unpause = async ()=>{ //민팅 정지용도 
   await brownie.methods.unpause().send();
}




module.exports = { isWhitelisted, tokenURI, batchMint, whitelistMint, viewIns, stake, unstake, viewThis, instanceGetBtk, balan, pause, unpause  }