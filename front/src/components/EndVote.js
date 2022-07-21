import { endVote, useAlert } from "api"
import axios from "axios"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { nftAction } from "redux/actions/nftAction"
import AlertModal from 'components/AlertModal'

const EndVote = ()=> {
    const dispatch = useDispatch()
    const customAlert = useAlert()

    const clickEndVote = async () => {

        // selectedProposal
        
        // const result = await Promise.all(
        //     proposals.map(async (proposal)=>{
        //         return Number(await getVoteCount(proposal.proposalId)) // 최대값 구하기 위해 Number
        //     })
        //   )
        //   console.log(result)
        //   let selectedProposalId = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0) + 1; // proposalId의 index는 1부터 시작하기 때문에 + 1

        try {
            let result = await endVote()
            console.log('result: ', result)
            if (result.status) {
                customAlert.open('투표가 종료되었습니다!')
                await axios.get('/api/community/endVote')
                dispatch(nftAction.setVoteStatus())
            }
            else {
                customAlert.open('진행중인 투표가 없습니다.')
            }
        } catch(e) {
            console.log(e)
            customAlert.open('에러 발생')
        }
      }


    return (
        <>
        <AlertModal {...customAlert} />
        <Button onClick={clickEndVote}>투표 리셋</Button>
        </>
    )
}

export default EndVote