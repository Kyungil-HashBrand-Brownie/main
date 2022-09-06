import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
    CollectionCardImg, CollectionMainOuter, CollectionHeader, CollectionBody,
    CollectionRow, CollectionCardOuter, CollectionCard, CollectionCardDetail,
    CollectionNoItem
} from './collectionModule'
import { useNavigate } from 'react-router-dom'

const Filterinfo = styled.div`
    /* background: red; */
    display: flex;
    padding-left: 4%;
    transform: translate(0, 25px);
    flex-wrap: wrap;
    width: 35%;
`
const Filtered = styled.div`
    /* margin: auto; */
    margin: 0 3px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    background: rgb(151, 223, 220);
    border-radius: 10px; 
    padding: 0 5px;
    margin-bottom: 5px;
`
const sortedBy = ['All(default)', 'Not Minted', 'Minted'];

const CollectionMain = ({ data, row }) => {
    const { filterOption, sortOption } = useSelector(state => state.main);
    console.log(filterOption, sortOption);
    const navigate = useNavigate('');

    let filteredBy = filterOption.filter(item => item.opt!==null);

    const moveToDetailPage = useCallback((edi) => {
        navigate(`/detailcollection/${edi}`)
    },[navigate])

    return (
        <CollectionMainOuter>
            <CollectionHeader>Collections</CollectionHeader>

            {data !== null &&
                <div className='collection-info-outer'>
                    <div className='collection-info-box'>total: {data.length} / 200</div>
                </div>
            }
            <Filterinfo>
                <Filtered >{sortedBy[sortOption]}</Filtered>
                {filteredBy.map(item => <Filtered index={item.opt}>{item.opt}</Filtered>) }
            </Filterinfo>

            <CollectionBody>
                {data !== null &&
                    data.length > 0 ?
                    new Array(row).fill(0).map((item, index) =>
                        <CollectionRow
                            key={index}
                        // className={(index == row - 1) && data.slice(5*index, 5*index+5).length != 5 ? 'collection-last-row' : undefined}
                        >
                            {data.slice(5 * index, 5 * index + 5).map((img, idx) =>
                                <CollectionCardOuter
                                    key={idx + 1000}
                                    state={(index == row - 1) && data.slice(5 * index, 5 * index + 5).length != 5 ? false : true}
                                    onClick={() => moveToDetailPage(img.edition)}>

                                    <CollectionCard >
                                        <CollectionCardImg image={`/api/image/images/${img.addr}`}>
                                        </CollectionCardImg>
                                        <CollectionCardDetail>
                                            Browny#{img.edition}
                                        </CollectionCardDetail>
                                    </CollectionCard>
                                </CollectionCardOuter>
                            )}
                        </CollectionRow>
                    )
                : <CollectionNoItem>No Item to display</CollectionNoItem>
                }
            </CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain