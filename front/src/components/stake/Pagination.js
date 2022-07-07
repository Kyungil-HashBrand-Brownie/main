import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  /* margin: 16px; */
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: black;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: tomato;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const PageButton = ({ total, page, setPage, setInputCheck, changeAllState }) => {
    const numPages = Math.ceil(total / 4);
    const changeCheckState = () => {
        setInputCheck(false)
    }

    return (
        <div className={page !=numPages ? 'pageB' : page == numPages && (total % 4 == 1 || total % 4 == 2) ? 'pageA': 'pageB'}>
        <Nav>
            <Button onClick={() => {
                setPage(page - 1)
                // changeCheckState()
                changeAllState(false, 0)
            }} disabled={page === 1}>
            &lt;
            </Button>
            {
            Array(numPages)
            .fill()
            .map((_, i) => (
                <Button
                key={i + 1}
                onClick={() => {
                    setPage(i + 1)
                    // changeCheckState()
                    changeAllState(false, 0)
                }}
                aria-current={page === i + 1 ? "page" : null}
                >
                {i + 1}
                </Button>
            ))
            }
            <Button onClick={() => {
                setPage(page + 1)
                // changeCheckState()
                changeAllState(false, 0)
                }} disabled={page === numPages}>
            &gt;
            </Button>
        </Nav>
        </div>
    )
}

export default PageButton