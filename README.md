# π₯¨ BROWNY NFT
![νμ΄νμ΄λ―Έμ§](docs/images/title.png)

## π§ νλ‘μ νΈ μ§ν κΈ°κ°
2022.06.02 ~ μμ  μμ
κ²½μΌκ²μ μμΉ΄λ°λ―Έ λΈλ‘μ²΄μΈ4κΈ° κΈ°μ νμ½ νλ‘μ νΈ - BROWNY NFT
</br>

## π₯― BROWNY μ£Όμ κΈ°μ 
---

**Backend - Express.js**
- Visual Studio Code
- Node.js 16.14
- MariaDB

**BlockChain - klaytn**
- Solidity 0.8.4
- openzeppelin/contracts
- KLAYTN - IDE

**Storage**
- IPFS
- IPFS-Cluster

**Frontend**
- React
- Redux
- Web3.js
- FIGMA
- caver

**Environment**
- GCP VM INSTANCE
- PM2
- GCP SQL


## β νλ‘μ νΈ νμΌ κ΅¬μ‘°
---
### Frontend

```
front
ββ .env
ββ config-overrides.js
ββ jsconfig.json
ββ package-lock.json
ββ package.json
ββ public
β  ββ BLogo.ico
β  ββ BLogo.png
β  ββ index.html
ββ README.md
ββ src
   ββ api
   β  ββ contractMethods.js
   β  ββ customHook.js
   β  ββ index.js
   β  ββ kaikas.js
   β  ββ utils.js
   β  ββ viewMethods.js
   β  ββ votingMethods.js
   ββ App.css
   ββ App.js
   ββ components
   β  ββ AlertModal.js
   β  ββ Animation.js
   β  ββ ChangeNicknameModal.js
   β  ββ ClockTest.js
   β  ββ collection
   β  β  ββ CollectionMain.js
   β  β  ββ collectionModule.js
   β  β  ββ DetailCollecion.js
   β  β  ββ DetailCollectionModal.js
   β  β  ββ Filter.js
   β  β  ββ FilterDetail.js
   β  β  ββ Sort.js
   β  β  ββ SortTop.js
   β  ββ EarthVote.js
   β  ββ Footer.js
   β  ββ Header.js
   β  ββ home
   β  β  ββ D3.js
   β  β  ββ Home.js
   β  β  ββ HomeImgCard.js
   β  β  ββ HomeImgCardMain.js
   β  β  ββ HomeImgCardSide.js
   β  β  ββ homeModule.js
   β  β  ββ SlideShow.js
   β  β  ββ Team.js
   β  β  ββ TeamCard.js
   β  β  ββ Viliage.js
   β  ββ MainHeader.js
   β  ββ mint
   β  β  ββ MintCard.js
   β  β  ββ PreSale.js
   β  ββ Profile.js
   β  ββ Proposal.js
   β  ββ QuitMint.js
   β  ββ QuitVote.js
   β  ββ Slider.js
   β  ββ SlideTest.js
   β  ββ stake
   β  β  ββ CardContainer.js
   β  β  ββ CardHead.js
   β  β  ββ NftCard.js
   β  β  ββ Pagination.js
   β  β  ββ Reward.js
   β  ββ swap
   β  β  ββ SwapBody.js
   β  β  ββ SwapFooter.js
   β  β  ββ SwapHeader.js
   β  ββ vote
   β  β  ββ CommunityApproval.js
   β  β  ββ CommunityPostButton.js
   β  β  ββ CommunityRead.js
   β  β  ββ CommunityTable.js
   β  β  ββ CommunityTopic.js
   β  β  ββ CommunityVoteTable.js
   β  β  ββ ImageSelect.js
   β  β  ββ VoteDescription.js
   β  β  ββ VoteDetail.js
   β  β  ββ voteModule.js
   β  β  ββ VoteTableCard.js
   β  ββ WhiteListMember.js
   ββ configs
   β  ββ abi
   β  β  ββ index.js
   β  β  ββ mintingAbi.json
   β  β  ββ nftAbi.json
   β  β  ββ tokenAbi.json
   β  β  ββ votingAbi.json
   β  β  ββ whitelistAbi.json
   β  ββ caverjs.js
   β  ββ contractAddress.js
   β  ββ contractInstance.js
   β  ββ index.js
   ββ font
   β  ββ Y λλ§μ λΉμΆ€μ²΄_λ§€λ΄μΌ.pdf
   β  ββ Y1.otf
   β  ββ Y2.ttf
   ββ img
   β  ββ arrow.png
   β  ββ background
   β  β  ββ back12.png
   β  β  ββ back13.png
   β  β  ββ background1.jpg
   β  β  ββ background10.png
   β  β  ββ background11.png
   β  β  ββ background2.jpg
   β  β  ββ background3.jpg
   β  β  ββ background4.jpg
   β  β  ββ background5.jpg
   β  β  ββ background6.jpg
   β  β  ββ background7.jpg
   β  β  ββ background8.jpg
   β  β  ββ index.js
   β  ββ browny
   β  β  ββ browny10.png
   β  β  ββ browny6.jpg
   β  β  ββ browny7.png
   β  β  ββ browny8.png
   β  β  ββ browny9.png
   β  β  ββ group1.png
   β  β  ββ group2.png
   β  β  ββ img1.png
   β  β  ββ index.js
   β  ββ brownyLogo.png
   β  ββ check.png
   β  ββ exit.png
   β  ββ footer
   β  β  ββ disc.png
   β  β  ββ footer.png
   β  β  ββ index.js
   β  β  ββ inst.png
   β  β  ββ kakao1.png
   β  β  ββ kakao2.png
   β  β  ββ tele.png
   β  β  ββ twit.png
   β  ββ index.js
   β  ββ main1.jpg
   β  ββ main2.jpg
   β  ββ main3.jpg
   β  ββ mint
   β  β  ββ background7.png
   β  β  ββ fireplace.png
   β  ββ nft
   β  β  ββ 1.png
   β  β  ββ 10.png
   β  β  ββ 11.png
   β  β  ββ 12.png
   β  β  ββ 13.png
   β  β  ββ 14.png
   β  β  ββ 15.png
   β  β  ββ 16.png
   β  β  ββ 2.png
   β  β  ββ 3.png
   β  β  ββ 4.png
   β  β  ββ 5.png
   β  β  ββ 6.png
   β  β  ββ 7.png
   β  β  ββ 8.png
   β  β  ββ 9.png
   β  β  ββ index.js
   β  ββ stake
   β  β  ββ cancel.png
   β  β  ββ check.png
   β  ββ swap
   β  β  ββ arrowRight.png
   β  β  ββ browny1.png
   β  β  ββ klaytn.png
   β  ββ trash.png
   β  ββ trash2.png
   β  ββ viliage.png
   β  ββ viliage2.jpeg
   β  ββ vote
   β     ββ delete.png
   β     ββ detail
   β     β  ββ Epro.png
   β     β  ββ index.js
   β     β  ββ Kpro1.png
   β     β  ββ ModalAni1.png
   β     β  ββ ModalKpro.png
   β     ββ organizations
   β        ββ Ani1.png
   β        ββ Ani2.png
   β        ββ Ani3.png
   β        ββ Apro.png
   β        ββ Ep1.png
   β        ββ Ep2.png
   β        ββ Ep3.png
   β        ββ index.js
   β        ββ Kp1.png
   β        ββ Kp2.png
   β        ββ Kp3.png
   ββ index.js
   ββ page
   β  ββ AdminPage.js
   β  ββ Collection.js
   β  ββ Community.js
   β  ββ DifNetwork.js
   β  ββ HomePage.js
   β  ββ index.js
   β  ββ Mint.js
   β  ββ NftList.js
   β  ββ NoPage.js
   β  ββ Swap.js
   β  ββ Testpage.js
   β  ββ VoteWrite.js
   β  ββ Voting.js
   β  ββ WhiteList.js
   ββ redux
   β  ββ actions
   β  β  ββ nftAction.js
   β  ββ reducers
   β  β  ββ index.js
   β  β  ββ nftReducer.js
   β  ββ store.js
   ββ route
   β  ββ CommunityReadRoute.js
   β  ββ CommunityWriteRoute.js
   β  ββ index.js
   β  ββ PrivateRoute.js
   ββ scss
   β  ββ detailCollecion.css
   β  ββ style.css
   ββ styles
      ββ slider.css
      ββ stopwatch.css
```

### Backend

```
back
ββ .env
ββ db.js
ββ package-lock.json
ββ package.json
ββ routes
β  ββ communityRouter
β  β  ββ community.control.js
β  β  ββ index.js
β  ββ imageRouter
β  β  ββ images.control.js
β  β  ββ index.js
β  β  ββ s3.js
β  ββ index.js
β  ββ userRouter
β  β  ββ index.js
β  β  ββ user.control.js
β  ββ voteRouter
β  β  ββ index.js
β  β  ββ vote.control.js
β  ββ whiteRouter
β     ββ index.js
β     ββ white.control.js
ββ server.js
ββ sql
   ββ community.sql
   ββ users.sql
   ββ voting.sql
   ββ whitelist.sql

```

### BlockChain
```
sol
ββ proxycontract
   ββ Minting
   β  ββ Minting.sol
   β  ββ MintingBeacon.sol
   β  ββ MintingFactory.sol
   ββ NFT
   β  ββ NFT copy.sol
   β  ββ NFT.sol
   β  ββ NFTBeacon.sol
   β  ββ NFTFactory.sol
   ββ NormalListTokenId.sol
   ββ Token
   β  ββ Token.sol
   β  ββ TokenBeacon.sol
   β  ββ TokenFactory.sol
   ββ Voting.sol
   ββ Whitelist
   β  ββ Whitelist.sol
   β  ββ WhitelistBeacon.sol
   β  ββ WhitelistFactory.sol
   ββ WhiteListTokenId.sol

```

## β νμ ν΄
---
- Github
- Notion
- Discord
