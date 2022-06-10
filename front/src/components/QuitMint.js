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
        width: 18%;
        height: 500px;
        margin: 15px;
        display: flex ;
        justify-content: center;
        align-items: center;
    `

    const CardDiv = styled.div`
        width: 100%;
        height: 500px;
        display: flex ;
        justify-content: center;
        align-items: center;
    `


const QuitMint = () => {

  return (
    <div>
        <Styled>
        <h2> Mint 현황 </h2>
        <CardGroup className="CardGroup">
            <MintCard className=''>
                <CardDiv >
                    <Card className='cardnft'>
                        <Card.Img  variant="top" src={browny8} width="100%" height="100%" />
                        <Card.Body>
                        <Card.Title>Nft title </Card.Title>
                        <Card.Text>
                            남은 개수 : 40 / 100
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDiv>
            </MintCard >
            
            <MintCard>
                <CardDiv >
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} width="100%" height="100%" />
                    <Card.Body>
                    <Card.Title>Nft title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDiv >

            </MintCard>
            <MintCard>
            <CardDiv >
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} height="100%" width="100%" />
                    <Card.Body>
                    <Card.Title>Nft title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDiv >
            </MintCard>

            <MintCard>
            <CardDiv >
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} height="100%" width="100%" />
                    <Card.Body>
                    <Card.Title>Nft title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDiv >
            </MintCard>

            <MintCard>
            <CardDiv >
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} height="100%" width="100%" />
                    <Card.Body>
                    <Card.Title>Nft title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDiv >
            </MintCard>

            <MintCard>
            <CardDiv >
                <Card className="cardnft">
                    <Card.Img variant="top" src={browny9} height="100%" width="100%" />
                    <Card.Body>
                    <Card.Title>Nft title</Card.Title>
                    <Card.Text>
                        남은 개수 : 40 / 100
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDiv >
            </MintCard>

            <MintCard>
                <CardDiv >
                    <Card className="cardnft">
                        <Card.Img variant="top" src={browny9} height="100%" width="100%" />
                        <Card.Body>
                        <Card.Title>Nft title</Card.Title>
                        <Card.Text>
                            남은 개수 : 40 / 100
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDiv >
                </MintCard>
            </CardGroup>
            <Button variant="danger" size="lg">
                mint 종료
            </Button>
            </Styled>

    </div>
  );
};

export default QuitMint;