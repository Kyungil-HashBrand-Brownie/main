import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'

const CollectionMainOuter = styled.div`
    margin-left: 100px;
    width: 1300px;
    min-height: 160px;
    background: white;
    /* opacity: 0.9; */
    border: 3px solid white;
    border-radius: 20px;
    margin-bottom: 20px;
    transform: translate(10%, 0);
`
const CollectionHeader = styled.div`
    /* background: blue; */
    text-align: center;
    font-size: 45px;
    font-weight: bold;
`
const CollectionBody = styled.div`
    /* width: 100%; */
    /* background: green; */
    display: flex;
    transform: translate(3.5%, 0);
    /* justify-content: center; */
    /* border: 3px solid black; */
    /* padding:  */
    min-height: 250px;
    margin-top: 30px;
    border-radius: 15px;
    flex-wrap: wrap;
`
const CollectionRow = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 96%; */
    margin: 10px 0 15px 0;
    /* padding: 20px 0; */
    background: lightgray;
    height: 300px;
    border-radius: 5px;
    align-items: center;
`
const CollectionCardOuter = styled.div`
    width: 220px;
    height: 270px;
    background: lightgray;
    /* margin: */
        /* ${props => props.state ? 'auto' : '10px 14.1px'}; */
    margin: 10px 10px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: brown 6px 5px;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.05);
    }

    ::before {
        content: '';
        /* position: absolute; */
        background: red;
        opacity: 0.9;
    }
`

const CollectionCard = styled.div`
    /* background: red; */
    width: 200px;
    height: 250px;
    /* margin: 10px; */
    margin: auto;
    margin-top: 10px;
`
const CollectionCardImg = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(
        ${(props) => props.image && props.image});
    background-size: cover;
`
const CollectionCardDetail = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: pink; */
    /* background: green; */
`

const moveToDetailPage = (edi) => {
    console.log(edi);
}

const CollectionMain = ({ data, row }) => {
    return (
        <CollectionMainOuter>
            <CollectionHeader>Collections</CollectionHeader>
            { data !== null && 
                <div className='collection-info-outer'>
                    <div className='collection-info-box'>total: {data.length} / 150</div>
                </div>
            }
            <CollectionBody>
                    { data !== null &&  
                    new Array(row).fill(0).map((item, index) => 
                        <CollectionRow 
                            key={index}
                            // className={(index == row - 1) && data.slice(5*index, 5*index+5).length != 5 ? 'collection-last-row' : undefined}
                        >
                            {data.slice(5*index, 5*index+5).map((img, idx) => 
                                <CollectionCardOuter 
                                    key={idx + 1000} 
                                    state={(index == row - 1) && data.slice(5 * index, 5 * index + 5).length != 5 ? false : true}
                                    onClick={() => moveToDetailPage(img.edition)}>
                                    <CollectionCard>
                                        <CollectionCardImg image={`/image/images/${img.addr}`}>
                                        </CollectionCardImg>
                                        <CollectionCardDetail>
                                            Browny#{img.edition}
                                        </CollectionCardDetail>
                                    </CollectionCard>
                                </CollectionCardOuter>
                            )}
                        </CollectionRow>
                    )}
            </CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain