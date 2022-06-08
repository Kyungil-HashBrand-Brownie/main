import React, {useState , useRef} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'

const WhiteList = () => {

    

    let WhiteList = [{
        id: "초기값 ",
        publicKey: "0xzksnj421431ebbf700f436b15c672840asjce32",
    }];

    const {accounts} = useSelector(state => state.nft)

    console.log("account s~~~#@" , accounts)

    const [list, setList] = useState(WhiteList)
    const [clickState, setClickState] = useState(false)
    const [valueId, setValueId] = useState('')
    // props 가 없어서?
    const [valueKey, setValueKey] = useState('')

    const tdHandler = () => {

    }

    const clickHandler = () => {
        if (!clickState) setClickState(true)
        else {
            if(/* valueId == "" ||  */valueKey == ""){
                alert("입력해주세요")
            }else {
                // publickey = div 에 있는 초기값 publickey 이름 넣어주기 
                setList(list.concat([{publicKey : valueKey}]));
                setClickState(!clickState)
                setValueKey("")
            }
        }
    }
    console.log(list)

    
  return (
    <div>
        <h2>White List key</h2>
        <Table striped>
            <thead>
                <tr>
                    {/* 주소를 입력해서 추가  */}
                    <th>#</th>
                    <th>public key</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => {
                        return <tr key={index}>
                                    <td> *</td>
                                    <td>{item.publicKey}</td>
                                </tr>
                    })
                }
                <tr>
                    <td>*</td>
                    <td>{accounts} </td>
                </tr>
            </tbody>
        </Table>
        { clickState &&
            <div className="addInfo">
                <input placeholder='publicKey' value={valueKey}  onChange={(e) => setValueKey(e.target.value)}/> 
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