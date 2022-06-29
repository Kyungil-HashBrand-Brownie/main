import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import Proposal from 'components/Proposal';
import axios from "axios"


function Voting() {
  const {myAddress, userRank} = useSelector(state=>state.nft)

  const [vote, setVote] = useState(0)
  
    const callApi = async () => {
      // db안건 데이터 불러오기
      // 랭크 불러오기
      if(myAddress) {
        console.log(userRank)
      }
    }

    useEffect(()=>{
      callApi();
    },[])

  const voteSubmit = async (e) => {
    e.preventDefault();
    console.log(vote)
  }

  const changeSelected = (e) => {
    console.log(e.target.value)
    setVote(e.target.value)
  }

  // db에 저장된 안건 example
  const proposals = ["vote1","vote2","vote3"]

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
    </div>
  )
}

export default Voting