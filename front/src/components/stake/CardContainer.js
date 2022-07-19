import React from 'react'
import Card from 'react-bootstrap/Card';
import { Check } from '../../img';

const CardContainer = ({ list, page, changeClickState }) => {
    return (
        <>
        {list.sort((a, b) => a.id.slice(1) - b.id.slice(1)).slice((page - 1) * 4, (page - 1) * 4 + 4).map((item, index1) => {
            return <div className='card-container' key={index1}>
                <Card
                    className="Ncard"
                    style={{
                        width: '192px',
                    }}>
                    {
                        !item.checked ?
                        null
                        : 
                        <img src={Check}
                            alt="checked"
                            id='stake-checkbox'
                        />
                    }
                    <div className='nftlist-card-detail'>
                        <Card.Img className='nftlist-card-img' style={{ width: '160px', height: '160px' }} onClick={() => changeClickState(item.id)} variant="top" src={item.image} />
                        <Card.Title >{'#' + (parseInt(item.id.split('#')[1]) + 1)}</Card.Title>
                    </div>
                </Card>
            </div>
            })}
        </>
    )
}

export default CardContainer