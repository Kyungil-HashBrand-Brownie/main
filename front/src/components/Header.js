import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { enableKaikas, getTokenBalance, useAlert } from 'api';
import { nftAction } from 'redux/actions/nftAction';
import AlertModal from './AlertModal';
import ChangeNicknameModal from './ChangeNicknameModal';
import UserBar from './UserBar';
import Logo from '../img/brownyLogo.png';
import { background13 } from '../img/background';
import { closeModal } from './testDispatch';

const LogoContainer = styled.div`
    background-image: url(${Logo});
    width: 130px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    margin-left: 1px;
`

const Header = () => {
    const dispatch = useDispatch();
    const { myAddress } = useSelector(state => state.nft);
    const { modalState, walletRefresh, isDeployer, isWhite, klayBalance, btkBalance, nickname } = useSelector(state => state.main)

    const customAlert = useAlert();
    const changeNickname = useAlert();

    const setToken = (address) => {
        dispatch(nftAction.setToken(address))
    }

    const setNickname = async (address) => {
        try {
            const result = await axios.post("/api/user/view", { publicKey: address })
            const nickname = result.data;
            dispatch({ type: "SET_NICKNAME", payload: nickname })
        }
        catch (e) {
            console.log(e);
        }
    }

    const checkWhitelist = (address) => {
        dispatch(nftAction.checkWhitelist(address));
    }

    const setUserInfo = async (address) => {
        if (address) {
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

    const showInfo = () => {
        dispatch({ type: "MODAL_CLICK" })
    }

    const reset = () => {
        closeModal();
        resetCollection();
    }

    const resetCollection = () => {
        dispatch({ type: 'RESET_COLLECTION' })
    }

    // const closeModal = () => {
    //     dispatch({ type: "MODAL_CLOSE" })
    // }

    useEffect(() => {
        setUserInfo(myAddress);
    }, [myAddress, walletRefresh])

    useEffect(() => {
        checkWhitelist(myAddress);
    }, [myAddress])

    useEffect(() => {
        if (window.klaytn) {
            window.klaytn.on('accountsChanged', async function (accounts) {
                // 카이카스 계정 정보 리덕스에 저장하는 부분
                dispatch({ type: 'ADDRESS_CHANGE_SUCCESS', payload: accounts[0] });
                setToken(accounts[0])
                await axios.post("/api/user/add", { publicKey: accounts[0] })
            })
            window.klaytn.on('networkChanged', async function (network) {
                console.log(network)
            })
        }

        setVoteStatus();
    }, [])

    const paths = ['/', '/mint', '/collection', '/test', '/swap', '/nftlist', '/community'];
    const texts = ['Home', 'Mint', 'Collection', 'Testpage', 'Swap', 'Nftlist', 'Community'];

    let pages = paths.map((path, index) => {
        return {
            path: path,
            text: texts[index],
        }
    })

    return (
        <>
            <AlertModal {...customAlert} />
            <ChangeNicknameModal {...changeNickname} setNickname={setNickname} />
            <Navbar className="nav" expand="lg">
                <img src={background13} className="backG-img-left" />
                <img src={background13} className="backG-img-right" />
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/"><LogoContainer /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 main-nav"
                            // style={{ maxHeight: '100px' }}
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
                                ? <UserBar
                                    showInfo={showInfo} myAddress={myAddress}
                                    modalState={modalState} isWhite={isWhite}
                                    nickname={nickname} changeNickname={changeNickname}
                                    klayBalance={klayBalance} btkBalance={btkBalance}
                                />
                                : <><Button className="mint-wal-connect-btn" variant="success" onClick={clickEnableKaikas}>지갑 연결하기</Button>{' '}</>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header