import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {browny4} from '../img'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';


const Cardjustify = styled.div`
    .Main {
        position: relative;
        opacity: 1;
        display: flex ;
        justify-content: center ;
        z-index:5;
        margin: 10px;
        border: 1px solid;
    }


    .card:hover {
        opacity: 1;
        transform :scale(1.1);
    }

    .card:hover  button{
        opacity: 1.0;
    }

    .nftcardbutton{
        position: relative;
        display: flex ;
        justify-content: center ;
        bottom: 200px;
    }

    .spaan {
        background-color: pink ;
        opacity: 0;
    }

    .containerCard {
        width: 100%;
        height: 100%;
        background-color: gray;
        border-radius: 0.5rem;
    }

    .col_1 {
        color: blue;
    }

    .col_2 {
        color: pink;
    }

    .Ncard {
        padding: 7px;
        margin: 10px;
    }

    .width1 {
        width: 100% ;
        /* background-color:  red; */
    }
    .width2 {
        width: 100% ;
        /* background-color:  red; */
    }

    .rel{
        background-color: red;
        position: absolute;
        /* top : 25px; */
        transform: translate(150%, 150%);
    }



    .cont21 {
        display: flex ;
        justify-content: center ;
    }
`


function NftCard() {


    let data = [{
        id: "#4312",
        eth: 0.056,
        height: 200,
    }, {
        id: "#1223",
        eth: 0.04,
        height: 130,
    },{
        id: "#213",
        eth: 0.302,
        height: 57,
    }];

    const [list, setList] = useState(data);
    const dispatch = useDispatch();


    // 카드 staking 버튼
    const stakingButton = () => {

        dispatch({type: "NFTCARD_STAKING", payload: nftList});
    }

    useEffect(() => {
        stakingButton()
    }, [])

  return (
      <>
      <Cardjustify>
        <div className="Main">
            {
                list.map((item) => {
                    return  <Card className="Ncard" style={{ width: '18rem' }}>
                                <div className="rel">
                                    <button className="spaan">staking</button>
                                </div>
                                <div className="button1"  >
                                    <Card.Img variant="top" src={browny4} />
                                <div className='width1'>
                                    <Card.Title >{item.id}</Card.Title>
                                    </div>
                                    <Card.Text>
                                        <Container className="containerCard">
                                            <Row>
                                                <Col className="col_1">price</Col>
                                                <Col className="col_1">highst</Col>
                                            </Row>
                                            <Row>
                                                <Col className="col_2">{item.eth} ETH</Col>
                                                <Col className="col_2">{item.height}</Col>
                                            </Row>
                                        </Container>
                                    </Card.Text>
                                </div>
                            </Card>
                })
            }
        </div>
        <div className="cont21">
                <button className="" onClick={stakingButton}> staking</button>
        </div>
    </Cardjustify>
    </>
  );
}

export default NftCard;