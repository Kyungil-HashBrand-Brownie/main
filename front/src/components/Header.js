import React, { useState, useEffect } from 'react'
import {Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/brownyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { nftAction } from 'redux/actions/nftAction';
import { background10 ,background13} from '../img/background';
import { enableKaikas, getTokenBalance, useAlert } from 'api';
import AlertModal from './AlertModal';
import axios from 'axios';
import ChangeNicknameModal from './ChangeNicknameModal';

const LogoContainer = styled.div`
    background-image: url(${Logo});
    width: 130px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    margin-left: 1px;
`
const PFPContainer = styled.div`
  margin-left: 10px;
  font-size: 20px;
  padding: 2px 10px;
  border: 3px solid;
  border-radius: 20px;
  background-color: #198754;
  border-color: #198754;
  letter-spacing: -1px;
  padding: 1px 20px;
  cursor: pointer;
  color: white;
  /* position: fixed; */
  &:hover{  
    transform: scale(1.1);
  }
`
const StyledInfo = styled.div`
    width: 90%;
    height: auto;
    background-color: white;
    margin-top: 5px;
    transform: translate(17.5px, 0);
    /* position: relative; */
    /* border: 1px solid black; */
    border-radius: 20px;
    /* padding: 3px 0px; */
    line-height: 30px;
    text-align: center;
    z-index: 3;
    opacity: 90%;
    /* background: ; */

    .header-white {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: white;
        padding-top: 3px;
        font-size: 19px;
        font-weight: bold;
        letter-spacing: 1.0px;
        border-bottom: 3px solid gray;
    }
    .header-line {
        /* background: green; */
        /* margin: 3px 0; */
        display: flex;
        justify-content: center;
        align-items : center;
        font-weight: 500;
        font-size: 17px;
    }
    .header-address {
        font-size: 13px;
        text-align: center;
        /* padding-right: 5px; */
    }
`


const Header = () => {
    const dispatch = useDispatch();
    const { modalState, myAddress, walletRefresh, isDeployer, isWhite, klayBalance, btkBalance, nickname } = useSelector(state => state.nft);

    const customAlert = useAlert();
    const changeNickname = useAlert();

    const setToken = (address) =>{
        dispatch(nftAction.setToken(address))
    }

    const setNickname = async (address) => {
        try {
            const result = await axios.post("/api/user/view",{publicKey : address})
            const nickname = result.data;
            dispatch({type : "SET_NICKNAME", payload: nickname})
        }
        catch(e) {
            console.log(e);
        }
}

    const checkWhitelist = (address) => {
         dispatch(nftAction.checkWhitelist(address));
    }

    const setUserInfo = async (address) => {
        if(address){
            setToken(address)
            setNickname(address)
        }
        dispatch(nftAction.setUserInfo(address));
    }

    const setVoteStatus = () => {
        dispatch(nftAction.setVoteStatus())
    }

    const clickEnableKaikas = (customAlert) => {
        enableKaikas(customAlert);
    }

    const copyAddress = () => {
        navigator.clipboard.writeText(myAddress)
    }

    const showInfo = () => {
        dispatch({type: "MODAL_CLICK"})
    }

    const reset = () => {
        closeModal();
        resetCollection();
    }

    const resetCollection = () => {
        dispatch({type: 'RESET_COLLECTION'})
    }

    const closeModal = () => {
        dispatch({type: "MODAL_CLOSE"})
    }

    useEffect(() => {
        setUserInfo(myAddress);
    }, [myAddress, walletRefresh])

    useEffect(() => {
        checkWhitelist(myAddress);
    }, [myAddress])

    useEffect(()=>{
        if(window.klaytn) {
            window.klaytn.on('accountsChanged', async function(accounts) {
                console.log(accounts[0])
                sessionStorage.setItem('id', accounts[0]);
                // 카이카스 계정 정보 리덕스에 저장하는 부분
                dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: accounts[0]});
                setToken(accounts[0])
                await axios.post("/api/user/add",{publicKey : accounts[0]})
            })
            window.klaytn.on('networkChanged', async function(network) {
                console.log(network)
            })
        }
        
        setVoteStatus();
    },[])
    const paths = ['/', '/mint', '/collection', '/test', '/swap', '/nftlist', '/voting'];
    const texts = ['Home', 'Mint', 'Collection', 'Testpage', 'Swap', 'Nftlist', 'Voting'];

    let pages = paths.map((path, index) => {
        let data = {
                    path: path, 
                    text: texts[index],
                   };
        return data;
    })


    return (
        <>
        <AlertModal {...customAlert} />
        <ChangeNicknameModal {...changeNickname} setNickname={setNickname} />
        <Navbar className="nav" expand="lg">
            <img src={background13} className="backG-img-left" />
            <img src={background13} className="backG-img-right" />
            {/* <D3/> */}
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/"><LogoContainer /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {pages.map((item, index) => 
                        <Link key={index}
                            onClick={reset} 
                            className='nav-item' 
                            to={item.path}>
                            {item.text}</Link>
                    )}

                    {isDeployer ? <Link onClick={reset} className='nav-item' to="/admin">Admin</Link> : null}
                </Nav>
                {
                myAddress
                ? 
                <div className="info-box">  
                    <PFPContainer
                        onClick={showInfo}
                    >
                    {myAddress.slice(0,7)+'...'+myAddress.slice(-7)}
                    </PFPContainer>
                    {modalState && 
                        <StyledInfo>
                        <div className='header-white'>{isWhite ? 'WHITE' : 'NORMAL'}</div>
                        {/* <div className='header-address'>Address
                        <FontAwesomeIcon 
                            className='copy-icon'
                            icon={faCopy} 
                            onClick={copyAddress}    
                        />
                        </div> */}
                        
                        <div className='header-line'>
                            {nickname} 
                            <FontAwesomeIcon 
                                shake
                                icon={faPenToSquare}
                                className='change-nickname-icon'
                                onClick={()=> changeNickname.open()}
                            />
                        </div>
                        <div className='header-line'>{klayBalance + " KLAY"}</div>
                        <div className='header-line'>{btkBalance + " BTK"}</div>
                        </StyledInfo>
                    }
                </div>
                : <><Button className="mint-wal-connect-btn" variant="success" onClick={clickEnableKaikas}>지갑 연결하기</Button>{' '}</>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header