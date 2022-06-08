import React, {useState, useRef } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import contractAbi from "../abi.json"

const WhiteList = () => {

    

    let WhiteList = [{
        id: "초기값 ",
        publicKey: "0xzksnj421431ebbf700f436b15c672840asjce32",
    }];

    const {accounts} = useSelector(state => state.nft)


    const [list, setList] = useState(WhiteList)
    const [clickState, setClickState] = useState(false)
    // const [valueId, setValueId] = useState('')
    const [valueKey, setValueKey] = useState('')

    const input1 = useRef("")
    const input2 = useRef("")
    const input3 = useRef("")



    const clickHandler = () => {
        if (!clickState) setClickState(true)
        else {
            if(/* valueId == "" ||  */valueKey === ""){
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

    const clickInput1 = async () => {
        const myContract = new window.caver.klay.Contract(contractAbi.output.abi ,"0xe17fafe9ffbacce005f271216e764d86ff1e7bc3")
        console.log(await myContract.methods.add(input1.current).send({from:window.klaytn.selectedAddress, gas: 300000 ,value: 0}))
    }
    const clickInput2 = async () => {
        const myContract = new window.caver.klay.Contract(contractAbi.output.abi ,"0xe17fafe9ffbacce005f271216e764d86ff1e7bc3")
        console.log(await myContract.methods.remove(input2.current).send({from:window.klaytn.selectedAddress, gas: 300000 ,value: 0}))
    }
    const clickInput3 = async () => {
        const myContract = new window.caver.klay.Contract(contractAbi.output.abi ,"0xe17fafe9ffbacce005f271216e764d86ff1e7bc3")
        console.log(await myContract.methods.isWhitelisted(input3.current).call())
    }
    
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
        {/* { clickState &&
            <div className="addInfo">
                <input placeholder='publicKey' value={valueKey}  onChange={(e) => setValueKey(e.target.value)}/> 
            </div>
        }

        <Button variant="info" size="lg" onClick={clickHandler}>
            {
                !clickState ? "등록하기" : "추가하기" 
            }
        </Button> */}
        <input onChange={(e)=>input1.current= e.target.value}></input><button onClick={clickInput1}>화리 등록</button>
        <input onChange={(e)=>input2.current= e.target.value}></input><button onClick={clickInput2}>화리 삭제</button>
        <input onChange={(e)=>input3.current= e.target.value}></input><button onClick={clickInput3}>화리 확인</button>
    </div>
  )
}

export default WhiteList