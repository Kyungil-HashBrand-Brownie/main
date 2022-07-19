import { endVote, resetVote } from "api"
import axios from "axios"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { nftAction } from "redux/actions/nftAction"

const EndVote = ()=> {
    const dispatch = useDispatch()

    const clickEndVote = async () => {

        // selectedProposal
        
        // const result = await Promise.all(
        //     proposals.map(async (proposal)=>{
        //         return Number(await getVoteCount(proposal.proposalId)) // 최대값 구하기 위해 Number
        //     })
        //   )
        //   console.log(result)
        //   let selectedProposalId = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0) + 1; // proposalId의 index는 1부터 시작하기 때문에 + 1


        await endVote()
        dispatch(nftAction.setVoteStatus())

        await axios.get('/api/community/endVote')
      }


    return (
        <Button onClick={clickEndVote}>투표 리셋</Button>
    )
}

export default EndVote