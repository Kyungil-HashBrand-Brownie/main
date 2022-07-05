import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import axios from "axios"
import { endVote, getMyNFTs, newProposal, resetVote, startVote, submitVote, useAlert, useInput } from 'api';
import { nftAction } from 'redux/actions/nftAction';
import AlertModal from 'components/AlertModal';



function Voting() {
  const customAlert = useAlert();

  const dispatch = useDispatch();
  const {myAddress, userRank, isDeployer, voteStatus} = useSelector(state=>state.nft);

 

  const [vote, setVote] = useState(0);
  const [proposals, setProposals] = useState([]);
  const [proposalId, setProposalId] = useState(1);
  const [voteIdx, setVoteIdx] = useState(1);
  const [votingPower, setVotingPower] = useState(0);
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
    console.log(vote);

    await submitVote(myAddress);
  }

  const changeSelected = (e) => {
    console.log(e.target.value)
    setVote(e.target.value)
  }

  const addProposal = async (e) => {
    e.preventDefault()
    await newProposal(myAddress);
    await axios.post("/vote/add",{proposalId, proposalContent : proposal.value ,voteIdx})
    console.log(proposals)
    await getCurrent()
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
        onClick= async ()=>{
          await endVote()
          dispatch(nftAction.setVoteStatus())
          // selectedProposal과 endDate 업데이트
        }
        break;

      case "2":
        // afterVote
        value="투표초기화"
        onClick= async ()=>{
          await resetVote()
          dispatch(nftAction.setVoteStatus())
          // votes에 새로운 row 추가하고 (voteIdx는 새로운것 참조 proposals는 비움) => getCurrent실행
        }
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
            proposals.map((proposal,index) => <Proposal key={index} label={proposal.proposalContent} index={index+1} changeSelected={changeSelected} />)
          }
        </div>
        <button type='submit'>제출</button>
      </Form>

      {/* contract owner이거나 userRank가 3이어야 안건 발의 가능 */}
      {(isDeployer || userRank === 3)
      ?
      <Form
      onSubmit={addProposal}
      >
        <InputGroup className='mb-3'>
          <Form.Control type='text' {...proposal}/>
          <Button type='submit' variant='success'>Add proposal</Button>
        </InputGroup>
      </Form>
      : null
      }
      <ChangeVotingButton {...votingProps} ></ChangeVotingButton>
      <div>MY RANK : {userRank}</div>
      <div>MY VOTING POWER (NFT COUNT) : {votingPower}  </div>
      <div><h4>보팅 리스트</h4></div>
      { voteList.length &&
      voteList.map((vote,index)=>
        <div key={index}>
        <div>voteIdx : {vote.voteIdx}</div>
        <div>startDate : {vote.startDate}</div>
        <div>endData : {vote.endData}</div>
        <div>selectedProposal : {vote.selectedProposal}</div>
        </div>
      )}
    </div>
    
    </>
  )
}

export default Voting