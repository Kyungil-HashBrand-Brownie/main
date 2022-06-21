import React from 'react';
import { Pagination } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const PageButton = () => {
    // console.log('page: ', page, length)
    // const navigate = useNavigate();
    // console.log('page: ', page);

    // const movePage = (to) => {
    //     // console.log(page);
    //     if (to != page + 1 && (to > 0 && to <= length)) navigate(`/movie/${to}`);
    // }

    // let quotient = parseInt(page / 5);
    // let array = [1, 2, 3, 4, 5].map((ele) => 5 * quotient + ele);

    return (
        <Pagination className='pageA'>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item >2</Pagination.Item>
            <Pagination.Item >3</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default PageButton