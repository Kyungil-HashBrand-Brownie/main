import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';

const CommunityTable = () => {
    return (
        // <Table striped bordered hover size='sm'
        //     className='vote-table'
        // >
        <>
        {/* <div>전체글보기</div> */}
        <table className='vote-table'>
        <thead className='vote-table-header'>
            <tr>
            <th className='title-flex'>글제목</th>
            <th className='table-writer'>작성자</th>
            <th className='table-date'>작성일</th>
            <th className='table-view'>조회수</th>
            </tr>
        </thead>
        <tbody className='vote-table-header'>
            <tr>
            <td className='table-title'>
                <FontAwesomeIcon className='table-icon' icon={faCircle} />
                <div className='title'>보팅 ㅈㄴ하기싫네</div>
            </td>
            <td className='table-writer'>NJH</td>
            <td className='table-date'>2022.7.4</td>
            <td className='table-view'>333</td>
            </tr>
            <tr>
            <td className='table-title'>
                <FontAwesomeIcon className='table-icon' icon={faCircle} />
                <div className='title'>빨리 위빠사나 가고싶다</div>
            </td>
            <td className='table-writer'>PSJ</td>
            <td className='table-date'>2022.7.3</td>
            <td className='table-view'>1</td>
            </tr>
            <tr>
            <td className='table-title'>
                <FontAwesomeIcon className='table-icon' icon={faCircle} />
                <div className='title'>홍대 클럽 아그자아</div>
            </td>
            <td className='table-writer'>WSJ</td>
            <td className='table-date'>2022.7.2</td>
            <td className='table-view'>1991</td>
            </tr>
        </tbody>
        </table>
        </>
    )
}

export default CommunityTable