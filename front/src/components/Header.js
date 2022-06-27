import React, { useState, useEffect } from 'react'
import {Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/brownyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import {btkInstance, brownyContract} from "configs";

import { background10 ,background13} from '../img/background';
import D3 from './D3';

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
    const { modalState, myAddress, walletRefresh, isDeployer } = useSelector(state => state.nft);

    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState(0);
    const [btkBalance, setBtkBalance] = useState(0);

    const weiToFixed = (wei) => {
        const toKlay = window.caver.utils.convertFromPeb(wei);
        const fixed = parseFloat(toKlay).toFixed(2);
        return fixed;
    }

    const setTokenBalance = async (address) => {
        const weiBalance = await window.caver.klay.getBalance(address)
        const fixedBalance = weiToFixed(weiBalance)
        console.log(fixedBalance)
        const weibtkBalance = await btkInstance.balanceOf(address) //BigNumber 객체
        const fixedbtkBalance = weiToFixed(weibtkBalance)

        setBalance(fixedBalance)
        setBtkBalance(fixedbtkBalance);
    }

    const setUserInfo = async () => {
        if(myAddress){
            setAddress(myAddress);
            await setTokenBalance(myAddress)
            const contractOwner = await brownyContract.methods.owner().call()
            const isDeployer = window.caver.utils.toChecksumAddress(myAddress) === contractOwner
            dispatch({type: 'CHECK_ISDEPLOYER', payload: isDeployer})
        }
        else dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: window.klaytn.selectedAddress});
    }

    const enableKikas = () => {
        window.klaytn.enable()
        dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: window.klaytn.selectedAddress});
    }

    const copyAddress = () => {
        navigator.clipboard.writeText(address)
    }

    const showInfo = () => {
        dispatch({type: "MODAL_CLICK"})
    }

    const closeModal = () => {
        dispatch({type: "MODAL_CLOSE"})
    }

    useEffect(() => {
        setUserInfo();
    }, [myAddress,walletRefresh])

    useEffect(()=>{
        window.klaytn.on('accountsChanged', async function(accounts) {
            console.log(accounts[0])
            sessionStorage.setItem('id', accounts[0]);
            dispatch({type: 'ADDRESS_CHANGE_SUCCESS', payload: accounts[0]});
            setAddress(accounts[0]);
            await setTokenBalance(accounts[0])
        })
        window.klaytn.on('networkChanged', async function(network) {
            console.log(network)
        })
    },[])

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
                    <Link onClick={closeModal} className='nav-item' to="/">Home</Link>
                    <Link onClick={closeModal} className='nav-item' to="/mint">Mint</Link>
                    {/* <Link className='nav-item' to="/whitelist">Whitelist</Link> */}
                    <Link onClick={closeModal} className='nav-item' to="/test">testpage</Link>
                    <Link onClick={closeModal} className='nav-item' to="/swap">swap</Link>
                    <Link onClick={closeModal} className='nav-item' to="/nftlist">nftlist</Link>
                    {isDeployer ? <Link onClick={closeModal} className='nav-item' to="/admin">admin</Link> : null}
                </Nav>
                {
                address != null
                ? 
                <div className="info-box">  
                    <PFPContainer
                        onClick={showInfo}
                    >
                    {address.toString().slice(0,7)+'...'+address.toString().slice(-7)}
                    </PFPContainer>
                    {modalState && 
                        <StyledInfo>
                        WHITELIST<br/>
                        Copy Address
                        <FontAwesomeIcon 
                            className='copy-icon'
                            icon={faCopy} 
                            onClick={copyAddress}    
                        />
                        <br />
                        {balance + " KLAYS"}
                        <br />
                        {btkBalance + " BTK"}
                        </StyledInfo>
                    }
                </div>
                : <><Button className="mint-wal-connect-btn" variant="success" onClick={enableKikas}>지갑 연결하기</Button>{' '}</>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header