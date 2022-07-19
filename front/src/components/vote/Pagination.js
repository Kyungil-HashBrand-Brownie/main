import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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

const Pagination = ({ total, page, setPage }) => {
    const numPages = total != null ? Math.ceil(total.length / 2) : null

    const movePageLeft = () => {
        if (page > 1) setPage(page - 1)
    }

    const movePageRight = () => {
        if (page < numPages) setPage(page + 1)
    }

    return (
        <Nav>
            <Button onClick={movePageLeft} disabled={page === 1}>&lt;</Button>
            {   total &&
                Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            aria-current={page === i + 1 ? "page" : null}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))
            }
            <Button onClick={movePageRight} disabled={page === numPages}>&gt;</Button>
        </Nav>
    )
}

export default Pagination