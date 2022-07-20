import React from 'react'
import {
    CollectionCardImg, CollectionMainOuter, CollectionHeader, CollectionBody,
    CollectionRow, CollectionCardOuter, CollectionCard, CollectionCardDetail,
    CollectionNoItem
} from './collectionModule'
import { useNavigate } from 'react-router-dom'

const CollectionMain = ({ data, row }) => {

    const navigate = useNavigate('')

    const moveToDetailPage = (edi) => {
        navigate(`/detailcollection/${edi}`)
    }

    return (
        <CollectionMainOuter>
            <CollectionHeader>Collections</CollectionHeader>
            {data !== null &&
                <div className='collection-info-outer'>
                    <div className='collection-info-box'>total: {data.length} / 200</div>
                </div>
            }
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
                : <CollectionNoItem>No Item</CollectionNoItem>
                }
            </CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain