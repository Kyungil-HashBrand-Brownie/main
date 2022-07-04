import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import axios from "axios"
import { endVote, getMyNFTs, newProposal, resetVote, startVote, useAlert, useInput } from 'api';
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
  const [votingPower, setVotingPower] = useState(0)

  const proposal = useInput("")

  const getVotingPower = async () => {
    const myNFTs = await getMyNFTs(myAddress);
    console.log(myNFTs)
    setVotingPower(myNFTs.length)
  }

  const getList = async () => {
    const {data} = await axios.get("/vote/list");
    
  }

  const getCurrent = async () => {
    const {data:{voteIdx, proposals}} = await axios.get("/vote/current")
    setVoteIdx(voteIdx);
    setProposals(proposals)
  }
  
  const voteSubmit = async (e) => {
    e.preventDefault();
    console.log(vote)
  }

  const changeSelected = (e) => {
    console.log(e.target.value)
    setVote(e.target.value)
  }

  const addProposal = async (e) => {
    e.preventDefault()
    await newProposal(myAddress);
    const {data} = await axios.post("/vote/add",{proposalId, proposalContent : proposal.value ,voteIdx})
    setProposals([...proposals, proposal.value]);
    setProposalId(proposalId+1)
  }

  useEffect(()=> {
    getVotingPower();
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
        }
        break;

      case "2":
        // afterVote
        value="투표초기화"
        onClick= async ()=>{
          await resetVote()
          dispatch(nftAction.setVoteStatus())
        }
      
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
            proposals.map((label,index) => <Proposal key={index} label={label} index={index+1} changeSelected={changeSelected} />)
          }
        </div>
        <button type='submit'>제출</button>
      </Form>

      {/* contract owner이거나 userRank가 3이어야 안건 발의 가능 */}
      {(isDeployer || userRank == 3)
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
    </div>
    
    </>
  )
}

export default Voting