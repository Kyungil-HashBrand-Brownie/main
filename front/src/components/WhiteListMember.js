import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'

const WhiteList = () => {


    let WhiteList = [{
        id: "초기값 ",
        publicKey: "0xzksnj421431ebbf700f436b15c672840asjce32",
    }];

    const {accounts} = useSelector(state => state.nft)
    // const 

    const [List, setList] = useState(WhiteList)
    const [clickState, setClickState] = useState(false)
    const [valueId, setValueId] = useState('')
    const [valueKey, setValueKey] = useState('')



    const tdHandler = () => {

    }

    const clickHandler = () => {
        if (!clickState) 
            setClickState(true)
        else {
            if(valueId == "" || valueKey == ""){
                alert("입력해주세요")
            }
        }
    }

  return (
    <div>
        <h2>민트</h2>
        <Table striped>
            <thead>
                <tr>
                    {/* 주소를 입력해서 추가  */}
                    <th>#</th>
                    <th>화이트 리스트 명단</th>
                    <th>public key</th>
                </tr>
            </thead>
            <tbody>
                    {
                        WhiteList.map((item) => { 
                            return <tr>
                                        <td> 1</td>
                                        <td>{item.id} </td>
                                        <td>{item.publicKey}</td>
                                    </tr>
                        })
                    }
                <tr>
                    <td>2</td>
                    <td>박승재</td>
                    <td>{accounts ? accounts : null}</td>
                </tr>
            </tbody>
        </Table>
        { clickState &&
            <div className="addInfo">
                <input placeholder='id' value={valueId} type='text' onChange={(e) => setValueId(e.target.value)}/> 
                <input placeholder='publicKey' value={valueKey} type='' onChange={(e) => setValueKey(e.target.value)}/> 
            </div>
        }

        <Button variant="info" size="lg" onClick={clickHandler}>
            {
                !clickState ? "등록하기" : "추가하기" 
            }
        </Button>
    </div>
  )
}

export default WhiteList