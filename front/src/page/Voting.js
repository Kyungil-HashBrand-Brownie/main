import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import axios from "axios"
import { newProposal } from 'api';


const useInput = (defaultValue) => {
  const [value , setValue] = useState(defaultValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}

function Voting() {
  const {myAddress, userRank, isDeployer} = useSelector(state=>state.nft)

  const [vote, setVote] = useState(0)
  const [proposals, setProposals] = useState([])

  const proposal = useInput("")
  
    const callApi = async () => {
      // db안건 데이터 불러오기
      // 랭크 불러오기
    }

    useEffect(()=>{
      callApi();
    },[userRank])

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
    await newProposal("0xAc45689e82aE9F93ED325b9254fe42BB77bA7849");
    setProposals([...proposals, proposal.value])
  }

  const votingButtonProps = () => {
    
    return {
      // children:,
      // onClick:,
    }
  }

  const ChangeVotingButton = ({children, onClick})=> {

    return <Button variant="success" onClick={onClick}>{children}</Button>
    
  }

  return (
    <div className="App">
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
      <Button variant="success"></Button>
      <div>USER RANK : {userRank}</div>
    </div>
  )
}

export default Voting