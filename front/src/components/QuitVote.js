import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'


const QuitVote = () => {
    
    // const dispatch = useDispatch();
    const {countAnimal , countKid, countMinority, countTotal} = useSelector(state =>state.nft);

    // const voteHandlerAni = () => {
    //     dispatch({type: "VOTE_INCREMENT" , payload: {countAnimal: countAnimal +1 } });
    // }

    // const voteHandlerKid = () => {
    //     dispatch({type: "VOTE_INCREMENT" , payload: {countKid: countKid +1 }});
    // }

    // const voteHandlerMin = () => {
    //     dispatch({type: "VOTE_INCREMENT" , payload: {countMinority: countMinority +1 }});
    // }



    const beforeArr = ["countAnimal", "countKid", "countMin"];
    const sortArr = [["countAnimal", countAnimal], ["countKid", countKid], ["countMin", countMinority]].sort((a,b) => b[1] - a[1]) // [["countKid, 4], 2, 0]   
                    .map((ele) => ele[0]) // ele = ["countKid", 4] => ["countKid", "countAnimal", "countMin"];
    const finalArr = beforeArr.map((ele) => 
        sortArr.indexOf(ele) + 1    
    )
    

    const percentlArr = [countAnimal, countKid, countMinority].map((ele) =>
        ele / countTotal * 100
    )


  return (
    <div>
        <div>
            {/* <button onClick={voteHandlerAni} > Animal click</button>
            <button onClick={voteHandlerKid} > Kid click</button>
            <button onClick={voteHandlerMin} > countMinority click</button> */}
            <h2>투표 현황 </h2>
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>멸종위기 동물 구조 단체</th>
                    <th>기아 구조 컴먼</th>
                    <th>소수민족 기부단체</th>
                    <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>집계 현황</td>
                        <td>{countAnimal}</td>
                        <td>{countKid}</td>
                        <td>{countMinority}</td>
                        <td>{countTotal}</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        {
                            percentlArr.map((item,index) => <td key={index} >{Math.floor(item)} %</td>)
                        }
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>투표 순위</td>
                        {
                            finalArr.map((item, index) => <td key={index}>  {item } </td>)
                        }
                    </tr>
                </tbody>
            </Table>
            <Button variant="primary" size="lg" active>
                투표 종료
            </Button>
        </div>
    </div>
  )
}

export default QuitVote