import React from 'react'
import styled from 'styled-components'
import { nft1, nft2, nft3, nft4, nft5 } from '../../img/nft';

const CollectionMainOuter = styled.div`
    margin-left: 100px;
    width: 1300px;
    min-height: 760px;
    background: white;
    /* opacity: 0.9; */
    border: 3px solid white;
    border-radius: 20px;
    margin-bottom: 20px;
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
    justify-content: center;
    /* border: 3px solid black; */
    /* padding:  */
    min-height: 650px;
    margin-top: 30px;
    border-radius: 15px;
    flex-wrap: wrap;
`
const CollectionRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 96%;
    margin-top: 20px;
    /* padding: 20px 0; */
    background: lightgray;
    height: 300px;
    border-radius: 5px;
`
const CollectionCardOuter = styled.div`
    width: 220px;
    height: 270px;
    background: lightgray;
    margin: auto;
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

const images = [nft1, nft2, nft3, nft4, nft5];

const CollectionMain = ({ data }) => {
    return (
        <CollectionMainOuter>
            <CollectionHeader>Collections</CollectionHeader>
            <CollectionBody>
                {/* <CollectionRow> */}
                    {/* {images.map((image, index) => */}
                    { data !== null &&  
                    data.map((item, index) => 
                        <CollectionCardOuter key={index}>
                            <CollectionCard>
                                <CollectionCardImg image={`/image/images/${item.images}`}>
                                </CollectionCardImg>
                                <CollectionCardDetail>
                                    Browny#{item.idx}
                                </CollectionCardDetail>
                            </CollectionCard>
                        </CollectionCardOuter>
                    )}
                {/* </CollectionRow> */}
            </CollectionBody>
        </CollectionMainOuter>
    )
}

export default CollectionMain