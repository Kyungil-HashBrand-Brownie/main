import React, {useEffect, useState} from 'react'
import EarthVote from '../components/EarthVote'
import {REMOVE_BOOKMARK_TEST} from '../redux/reducers/testReducer'
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";


const Testpage = () => {
  const dispatch = useDispatch()

  const {posts} = useSelector(state => state.testnft)
  
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
          , data: {checkItems: checkItems}
      })

        // 초기화
        // setCheckItems([])
  }


  useEffect(() => {
      console.log(checkItems)
  }, [checkItems])



  return (
      <div style={{padding: "10px"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h1>test</h1>
          <div>
              <Form.Check
                  type={"checkbox"}
                  label={"전체선택"}
                  onChange={(e) => checkAllHandler(e.target.checked)}
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
                      <span>o.title</span>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Testpage