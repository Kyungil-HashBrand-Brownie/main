import React, { useState, useEffect } from 'react'
import {Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/brownyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { nftAction } from 'redux/actions/nftAction';
import { background10 ,background13} from '../img/background';
import { getTokenBalance } from 'api';

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
    background-color: white;
    width: 105%;
    margin-top: 7px;
    position: relative;
    border: 1px solid black;
    border-radius: 8px;
    padding: 6px 10px;
    font-weight: bold;
    line-height: 30px;
    /* margin-right: 20px; */
    /* background: white; */
    text-align: center;
    z-index: 3;
    opacity: 90%;
`


const Header = () => {
    const dispatch = useDispatch();
    const { modalState, myAddress, walletRefresh, isDeployer, isWhite, klayBalance,  btkBalance } = useSelector(state => state.nft);


    const setToken = (address) =>{
        dispatch(nftAction.setToken(address))
    }

    const checkWhitelist = (address) => {
         dispatch(nftAction.checkWhitelist(address));
    }

    const setUserInfo = async (address) => {
        if(address){
            setToken(address)
        }
        dispatch(nftAction.setUserInfo(address));
    }

    const setVoteStatus = () => {
        dispatch(nftAction.setVoteStatus())
    }

    const enableKaikas = () => {
        dispatch(nftAction.enableKaikas());
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
                dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: accounts[0]});
                setToken(accounts[0])
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
                        {isWhite ? 'WHITELIST' : 'NORMAL'}<br/>
                        Copy Address
                        <FontAwesomeIcon 
                            className='copy-icon'
                            icon={faCopy} 
                            onClick={copyAddress}    
                        />
                        <br />
                        {klayBalance + " KLAYS"}
                        <br />
                        {btkBalance + " BTK"}
                        </StyledInfo>
                    }
                </div>
                : <><Button className="mint-wal-connect-btn" variant="success" onClick={enableKaikas}>지갑 연결하기</Button>{' '}</>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header