<img src="https://github.com/Kyungil-HashBrand-Brownie/main/blob/feature_njh/docs/images/title.png" width="100%" height="700px" title="" alt="RubberDuck"></img><br/>


Front end 박승재
=============
1. Css 및 기본 폴더 구조를 작업 하였습니다.
2. UI / UX 디자인 작업을 했습니다.
3. NFT를 위한 PFP Asset을 구성 하였습니다.
4. API 연결
5. 반응형 페이지 css






Components
=============
1. 쉽게 접근을 위해 페이지 별로 Componets 구성을 하였습니다.
2. UI / UX 디자인 작업을 했습니다.
3. NFT를 위한 Asset을 구성 하였습니다.
4. Iamge들은 import를 편하게 하기 위해 페이지 각각의 index에 담아 관리를 하였습니다
5. 코드 순은 이렇습니다.
./page/collection/ <br/>
./components/collection/CollectionMain/ <br/>
./redux/actions/nftAction.js <br/>
./redux/reducers/mainReducer.js<br/>
./redux/reducers/nftReducer.js<br/>



---------------------------------------


###### front end 폴더 구조


```bash
├── front/
│   ├── README.md
│   ├── config-overrides.js
│   ├── jsconfig.json
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   └── src
         ├── App.css
         ├── App.js
         ├── api
         │   ├── contractMethods.js
         │   ├── customHook.js
         │   ├── index.js
         │   ├── kaikas.js
         │   ├── utils.js
         │   ├── viewMethods.js
         │   └── votingMethods.js
         ├── components
         │   ├── AlertModal.js
         │   ├── Animation.js
         │   ├── ChangeNicknameModal.js
         │   ├── ClockTest.js
         │   ├── EarthVote.js
         │   ├── EndVote.js
         │   ├── Footer.js
         │   ├── Header.js
         │   ├── ImgComponent.js
         │   ├── MainHeader.js
         │   ├── Profile.js
         │   ├── Proposal.js
         │   ├── QuitMint.js
         │   ├── QuitVote.js
         │   ├── SlideTest.js
         │   ├── Slider.js
         │   ├── Test.js
         │   ├── UserBar.js
         │   ├── WhiteListMember.js
         │   ├── collection
         │   │   ├── CollectionMain.js
         │   │   ├── DetailCollecion.js
         │   │   ├── DetailCollectionModal.js
         │   │   ├── Filter.js
         │   │   ├── FilterDetail.js
         │   │   ├── Sort.js
         │   │   ├── SortTop.js
         │   │   └── collectionModule.js
         │   ├── home
         │   │   ├── D3.js
         │   │   ├── Home.js
         │   │   ├── HomeImgCard.js
         │   │   ├── HomeImgCardMain.js
         │   │   ├── HomeImgCardSide.js
         │   │   ├── SlideShow.js
         │   │   ├── Team.js
         │   │   ├── TeamCard.js
         │   │   ├── Viliage.js
         │   │   └── homeModule.js
         │   ├── mint
         │   │   ├── MintCard.js
         │   │   └── PreSale.js
         │   ├── module.js
         │   ├── stake
         │   │   ├── CardContainer.js
         │   │   ├── CardHead.js
         │   │   ├── NftCard.js
         │   │   ├── Pagination.js
         │   │   └── Reward.js
         │   ├── swap
         │   │   ├── SwapBody.js
         │   │   ├── SwapFooter.js
         │   │   └── SwapHeader.js
         │   ├── testDispatch.js
         │   └── vote
         │       ├── CommunityApproval.js
         │       ├── CommunityImageSelect.js
         │       ├── CommunityPostButton.js
         │       ├── CommunityRead.js
         │       ├── CommunityTable.js
         │       ├── CommunityTopic.js
         │       ├── CommunityVoteTable.js
         │       ├── ImageSelect.js
         │       ├── Pagination.js
         │       ├── VoteDescription.js
         │       ├── VoteDetail.js
         │       ├── VoteTableCard.js
         │       └── voteModule.js
         ├── configs
         │   ├── abi
         │   │   ├── index.js
         │   │   ├── mintingAbi.json
         │   │   ├── nftAbi.json
         │   │   ├── tokenAbi.json
         │   │   ├── votingAbi.json
         │   │   └── whitelistAbi.json
         │   ├── caverjs.js
         │   ├── contractAddress.js
         │   ├── contractInstance.js
         │   └── index.js
         ├── page
         │   ├── AdminPage.js
         │   ├── Collection.js
         │   ├── Community.js
         │   ├── DifNetwork.js
         │   ├── HomePage.js
         │   ├── Mint.js
         │   ├── NoPage.js
         │   ├── Staking.js
         │   ├── Swap.js
         │   ├── Testpage.js
         │   ├── VoteWrite.js
         │   ├── WhiteList.js
         │   └── index.js
         ├── redux
         │   ├── actions
         │   │   └── nftAction.js
         │   ├── reducers
         │   │   ├── index.js
         │   │   ├── mainReducer.js
         │   │   └── nftReducer.js
         │   └── store.js
         ├── route
         │   ├── CommunityReadRoute.js
         │   ├── CommunityWriteRoute.js
         │   ├── PrivateRoute.js
         │   └── index.js
         ├── scss
         │   ├── detailCollecion.css
         │   └── style.css
         └── styles
            ├── main.css
            ├── slider.css
            └── stopwatch.css