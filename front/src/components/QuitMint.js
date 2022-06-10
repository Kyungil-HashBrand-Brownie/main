import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import {browny1} from '../img'
import { FreeImg , WhiteImg, browny8 , browny9} from '../img'
import Card from 'react-bootstrap/Card'
import { Row, Col}from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import styled from 'styled-components'

    const Styled = styled.div`
        width:  100%;
        text-align: center;
        margin: auto;
        color: blue;
    `

    const MintCard = styled.div`
        width: 33%;
        height: 500px;
        display: flex ;
        justify-content: center;
        align-items: center;
    `


const QuitMint = () => {

  return (
    <div>
        {/* <Table striped>
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
        </Table> */}
        <Styled>
        <h2> Mint 현황 </h2>
        <CardGroup className="CardGroup">
            <MintCard >
                <Card className='cardnft'>
                    <Card.Img  variant="top" src={browny8} width="100px"/>
                    <Card.Body>
                    <Card.Title>Nft title </Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
            </MintCard >
            
            <MintCard>
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
            </MintCard>
            <MintCard>
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
            </MintCard>
            </CardGroup>
            <Button variant="danger" size="lg">
                mint 종료
            </Button>
            </Styled>

    </div>
  )
}

export default QuitMint



/* 
    컨트랙트에 주소밸류
*/