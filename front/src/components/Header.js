import React, { useState } from 'react'
import { ToggleButton, Nav, Form, FormControl, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

const SearchBox = styled.div`
    background-color: rgb(26, 126, 213);
    border-radius: 30px;
    width: 290px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 10px 350px;
    border: 1px solid black;
`
const SearchInput = styled.input`
    padding-left: 20px;
    width: 16rem;
    height: 2.5rem;
    font-size: medium;
`

const LogoContainer = styled.div`
    background-image: url(${Logo});
    width: 65px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    margin-left: 1px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 0px; */
    /* position: absolute; */
    /* right: 10%; */
`

const Header = () => {
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const moveToMint = () => {
        navigate('/mintpage')
    }

    return (
        <Navbar className="nav" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <LogoContainer />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link className='nav-item' to="/">Home</Link>
                    <Link className='nav-item' to="/mint">Mint</Link>
                    <Link className='nav-item' to="/whitelist">Whitelist</Link>
                </Nav>
                <SearchBox>
                    <SearchInput 
                    type="text"
                    placeholder="Search By ID..."
                    aria-label="Search"
                    />
                </SearchBox>

                <ButtonContainer>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        Search
                    </ToggleButton>
                </ButtonContainer>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className='mint-container'>
        //     <LogoContainer />

        //     <SearchBox>
        //         <SearchInput 
        //         type="text"
        //         placeholder="Search By ID..."
        //         aria-label="Search"
        //         />
        //     </SearchBox>
        //     <ButtonContainer>
        //         <ToggleButton
        //             className="mb-2"
        //             id="toggle-check"
        //             type="checkbox"
        //             variant="outline-primary"
        //             checked={checked}
        //             value="1"
        //             onChange={(e) => setChecked(e.currentTarget.checked)}
        //         >
        //             Kaikas 열기
        //         </ToggleButton>
        //     </ButtonContainer>
        // </div>
    )
}

export default Header