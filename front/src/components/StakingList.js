import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";


const Main = styled.div`

`

const StakingList = () => {

    const dispatch = useDispatch();

    const {posts} = useSelector(state => state.nft)
    // checked 된 것들
    const [checkItems, setCheckItems] = useState([])


    // 개별선택
    function checkHandler(checked, id) {
        if(checked) {
            setCheckItems([...checkItems, id])
        } else {
            // 체크해제
            setCheckItems(checkItems.filter(o=>o!==id))
        }
    }

    // 전체선택
    function checkAllHandler(checked) {
        if(checked) {
            const ids = []
            posts.forEach(v => ids.push(v.id))
            setCheckItems(ids)
        } else {
            setCheckItems([])
        }
    }

    // 삭제
    function deleteHandler() {
        dispatch({
            type: "REMOVE_BOOKMARK_TEST"
            , payload: {checkItems: checkItems}
        })

        // 초기화
        // setCheckItems([])
    }


    useEffect(() => {
        console.log(checkItems)
    }, [checkItems])



    return (
        <Main>
            <div style={{padding: "10px"}}>
                <h1>Staking Test list(전체 선택 및 삭제)</h1>
                <div>
                    <Form.Check
                        type={"checkbox"}
                        label={"전체선택"}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                        component="span"
                        // checked={}
                    >
                    </Form.Check>

                    <Button
                        className={"baseButton"}
                        variant={"default"}
                        size={"sm"}
                        onClick={deleteHandler}>
                        삭제
                    </Button>
                </div>
                <div>
                    {posts?.map(o => (
                        <div key={o.id}>
                            <span>
                                <Form.Check
                                    type={"checkbox"}
                                    onChange={(e) => checkHandler(e.target.checked, o.id)}
                                    checked={checkItems.indexOf(o.id) >= 0 ? true : false}
                                >
                                </Form.Check>
                                체크
                            </span>
                            <span>, 이미지 항목 ,체크 삭제</span>
                        </div>
                    ))}
                </div>
            </div>
        </Main>
    )
}

export default StakingList