# 🥨 BROWNY NFT
![타이틀이미지](docs/images/title.png)


## 🧇 프로젝트 진행 기간
2022.06.02 ~ 2022.07.22
경일게임 아카데미 블록체인4기 기업 협약 프로젝트 - BROWNY NFT
</br>

## 🥯 BROWNY 주요 기술 - Blockchain part
---
**BlockChain - klaytn**
- Solidity
- openzeppelin
- KLAYTN - IDE

**Storage**
- IPFS

**Frontend**
- Visual Studio Code
- caver.js


## ✔ 프로젝트 파일 구조  - Blockchain part
---
### Frontend
```
front
└─ src
   └─ configs
      ├─ abi
      │  ├─ index.js
      │  ├─ mintingAbi.json
      │  ├─ nftAbi.json
      │  ├─ tokenAbi.json
      │  ├─ votingAbi.json
      │  └─ whitelistAbi.json
      ├─ caverjs.js
      ├─ contractAddress.js
      ├─ contractInstance.js
      └─ index.js
```

### BlockChain
```
sol
└─ proxycontract
   ├─ Minting
   │  ├─ Minting.sol
   │  ├─ MintingBeacon.sol
   │  └─ MintingFactory.sol
   ├─ NFT
   │  ├─ NFT copy.sol
   │  ├─ NFT.sol
   │  ├─ NFTBeacon.sol
   │  └─ NFTFactory.sol
   ├─ Token
   │  ├─ Token.sol
   │  ├─ TokenBeacon.sol
   │  └─ TokenFactory.sol
   ├─ Whitelist
   │  ├─ Whitelist.sol
   │  ├─ WhitelistBeacon.sol
   │  └─ WhitelistFactory.sol
   ├─ Voting.sol
   ├─ NormalListTokenId.sol
   └─ WhiteListTokenId.sol
```

### 협업 툴
- Github
- Notion
- Slack

## 🥞 Blockchain part - 노진형
smart contract를 전담하였습니다. 모든 contract code는 sol 폴더에서 확인이 가능합니다. 
프론트 파트에서 klaytn baobab 노드, 즉 contract와 통신하기 위해서 caver.js를 사용하였으며 front/src/configs에서 확인이 가능합니다.

### NFT && Tokne
erc20 기반 자체 토큰 생성과 erc721 기반 자체 nft 생성을 하였으며 그 코드들은 각각 token, nft 폴더에 있습니다.
본래는 ERC20.sol, ERC721.sol을 상속받아 작성했지만 beacon proxy 방식의 upgradeable smart contract로 작성하기 위하여 
ERC20Upgradeable.sol, ERC721Upgradeable.sol를 상속받아 작성하는 방식으로 하였습니다.
같이있는 Beacon.sol과 Factory.sol은 upgradeable smart contract 부분으로 beacon에서 logic contract address를 저장 및 교체가 가능합니다. 
Factory에서 storage를 담당할 proxy contract를 생성하면 proxy contract는 beacon contract로부터 logic contract 정보를 전달받아 작동합니다.

### Minting
Minting.sol에서는 klaytn과 자체 토큰의 swap 기능, nft의 staking, unstaking 기능과 nft staking시 token 보상 기능이 있습니다.

### Voting
Voting.sol에서는 nft 홀더인지 확인 및 nft 보유량에 따른 voting power를 부여했으며 enum VoteStatus로 관리자가 vote 상태를 관리하여 안건 발의 상태와 
투표 상태를 분리하여 투표 중에도 안건이 발의되는 등의 오류를 방지하였습니다.

### ListTokenId.sol
저희 프로젝트는 유저가 전체 NFT list를 확인하는 기능을 제공하기에 본인이 이번에 minting 받을 NFT를 유추할 수 있었습니다. 따라서 minting시 받을 nft에 랜덤성을 
부여하고자 miting시 받을 token id를 랜덤하게 제공하는 기능 부분입니다.

### caver.js
klaytn baobab에 배포된 smart contract와의 통신을 위해서 필요한 contract Abi와 address를 정리하여 export하여 
어디서든 쉽게 import하여 사용하도록 구성하였습니다.