import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CommunityTable = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    const getData = async () => {
        let result = await axios.get('/api/community/view/board');
        // console.log('data: ', result.data);
        setData(result.data);
    }

    useEffect(()=> {
        getData();
    })


    return (
        <>
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
            {
                data?.map((item, index) => 
                <tr>
                <td className='table-title'>
                    <FontAwesomeIcon className='table-icon' icon={faCircle} />
                    <div 
                        className='title'
                        onClick={() => navigate(`/community/read/board/${item.idx}`)}
                    >{item.title}
                    </div>
                </td>
                <td className='table-writer'>{item.nickname}</td>
                <td className='table-date'>2022.7.4</td>
                <td className='table-view'>333</td>
                </tr>
                )
            }
            
        </tbody>
        </table>
        </>
    )
}

export default CommunityTable