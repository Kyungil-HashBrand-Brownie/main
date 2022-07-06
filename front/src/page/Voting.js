import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import axios from "axios"
import { endVote, getMyNFTs, getVoteCount, newProposal, resetVote, startVote, submitVote, useAlert, useInput } from 'api';
import { nftAction } from 'redux/actions/nftAction';
import AlertModal from 'components/AlertModal';



function Voting() {
  const customAlert = useAlert();

  const dispatch = useDispatch();
  const {myAddress, userRank, isDeployer, voteStatus} = useSelector(state=>state.nft);

 
  // 현재 선택된 안건 번호
  const [currentProposal, setCurrentProposal] = useState(0);
  // voteIdx에 해당하는 안건들
  const [proposals, setProposals] = useState([]);
  // addProposal 했을 때 추가되는 id
  const [proposalId, setProposalId] = useState(1);
  // 최신 voteIdx(투표 종료되지 않은)
  const [voteIdx, setVoteIdx] = useState(0);
  // nft 보유수(투표권 수)
  const [votingPower, setVotingPower] = useState(0);
  // 지난 투표를 포함한 전체 투표 리스트
  const [voteList, setVoteList] = useState([]);

  const proposal = useInput("")

  const getVotingPower = async () => {
    const myNFTs = await getMyNFTs(myAddress);
    setVotingPower(myNFTs.length)
  }

  const getList = async () => {
    const {data} = await axios.get("/vote/list");
    console.log(data);
    setVoteList(data);

    getCurrent();
  }

  const getCurrent = async () => {
    const {data:{voteIdx, proposals}} = await axios.get("/vote/current")
    console.log(voteIdx,proposals)
    
    setVoteIdx(voteIdx);
    setProposals(proposals)
    setProposalId(proposals.length+1)
  }
  
  const voteSubmit = async (e) => {
    e.preventDefault();

    await submitVote(myAddress,currentProposal);
  }

  const changeSelected = (e) => {
    console.log(e.target.value)
    setCurrentProposal(e.target.value)
  }

  const addProposal = async (e) => {
    e.preventDefault()
    await newProposal(myAddress);
    await axios.post("/vote/add",{proposalId, proposalContent : proposal.value ,voteIdx})
    await getCurrent()
  }

  const clickEndVote = async ()=>{
    await endVote()
    dispatch(nftAction.setVoteStatus())
    // selectedProposal과 endDate 업데이트
    const result = await Promise.all(
      proposals.map(async (proposal)=>{
          return Number(await getVoteCount(proposal.proposalId)) // 최대값 구하기 위해 Number
      })
    )
    console.log(result)
    let selectedProposalId = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0) + 1; // proposalId의 index는 1부터 시작하기 때문에 + 1
    await axios.post("/vote/end",{voteIdx, selectedProposalId})

    getList(); // 종료된 것 바로 리스트에 반영
  }

  const clickResetVote = async () => {
      await resetVote()
      dispatch(nftAction.setVoteStatus())
      // votes에 새로운 row 추가하고 (voteIdx는 새로운것 참조 proposals는 비움) => getList실행
      const voteIdx = await axios.post("/vote/reset")
      console.log(voteIdx)
      setVoteIdx(voteIdx)
      await getList()
  }

  useEffect(()=> {
    getVotingPower();
    getList();
  },[myAddress])

  const getVotingButtonProps = () => {
    let value, onClick;
    switch(voteStatus) {
      case "0":
        // beforeVote
        value="투표시작"
        onClick= async ()=>{
          await startVote()
          dispatch(nftAction.setVoteStatus())
        }
        break;

      case "1":
        // nowVote
        value="투표종료"
        onClick= clickEndVote
        break;

      case "2":
        // afterVote
        value="투표초기화"
        onClick= clickResetVote
        break;
      default:
        value="에러 발생"
        onClick = async () => {}
    }
    return {
      value,
      onClick
    }
  }

  const votingProps = getVotingButtonProps()

  const ChangeVotingButton = ({value, onClick})=> {
    return <Button as='input' type='button' variant="success" value={value} onClick={onClick}></Button>
  }

  return (
    <>
    <div className="App">
      <AlertModal {...customAlert} />
      <Form
        onSubmit={voteSubmit}
      >
        <div key={`inline-radio`} className="mb-3">
          {
            proposals.map((proposal,index) => <Proposal key={index} label={proposal.proposalContent} index={index+1} onChange={changeSelected} />)
          }
        </div>
        <button type='submit'>투표</button>
      </Form>

      {/* contract owner이거나 userRank가 3이어야 안건 발의 가능 */}
      {(isDeployer || userRank === 3)
      ?
      <>
      <Form
      onSubmit={addProposal}
      >
        <InputGroup className='mb-3'>
          <Form.Control type='text' {...proposal}/>
          <Button type='submit' variant='success'>Add proposal</Button>
        </InputGroup>
      </Form>
      <ChangeVotingButton {...votingProps} ></ChangeVotingButton>
      </>
      : null
      }
      
      <div>MY RANK : {userRank}</div>
      <div>MY VOTING POWER (NFT COUNT) : {votingPower}  </div>
      <div><h4>보팅 리스트</h4></div>
      { voteList.length &&
      voteList.map((vote,index)=>
        <div key={index}>
        <div>voteIdx : {vote.voteIdx}</div>
        <div>startDate : {vote.startDate}</div>
        <div>endDate : {vote.endDate}</div>
        <div>selectedProposal : {vote.selectedProposal}</div>
        </div>
      )}
    </div>
    
    </>
  )
}

export default Voting