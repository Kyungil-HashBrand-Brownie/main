import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { CollectionMainOuter, CollectionHeader, CollectionBody, 
    CollectionRow, CollectionCardOuter, CollectionCard, CollectionCardDetail
} from './collectionModule' 
import { useNavigate } from 'react-router-dom'

const CollectionCardImg = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(
        ${(props) => props.image && props.image});
    background-size: cover;
`

const CollectionMain = ({ data, row }) => {

    const navigate = useNavigate('')

    const moveToDetailPage = (edi) => {
        console.log(edi);
        navigate(`/detailcollection/${edi}`)
    }

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
                                    
                                    <CollectionCard >
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