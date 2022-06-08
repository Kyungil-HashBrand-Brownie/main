import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import {browny1} from '../img'
import { FreeImg } from '../img'
import { WhiteImg } from '../img'

const QuitMint = () => {
    
  return (
    <div>

        <h2>민트</h2>
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>사진</th>
                <th>남은 개수</th>
                <th>분포율</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src={FreeImg} width="100px"/></td>
                    <td>1/100</td>
                    <td>3%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src={WhiteImg} width="100px"/></td>
                    <td>30/59</td>
                    <td>59%</td>
                </tr>
            </tbody>
        </Table>
        <Button variant="danger" size="lg">
            mint 종료
        </Button>
    </div>
  )
}

export default QuitMint