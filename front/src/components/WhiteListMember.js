import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'

const WhiteList = () => {
  return (
    <div>
        <h2>민트</h2>
        <Table striped>
            <thead>
                <tr>
                  <th>#</th>
                  <th>화이트 리스트 명단</th>
                  <th>public key</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>서기영</td>
                    <td>abcd</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>박승재</td>
                    <td>efgh</td>
                </tr>
            </tbody>
        </Table>
        <Button variant="info" size="lg">
            추가하기 
        </Button>
    </div>
  )
}

export default WhiteList