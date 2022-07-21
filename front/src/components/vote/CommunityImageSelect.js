import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft , faAngleRight} from "@fortawesome/free-solid-svg-icons"

const WriteImgContainer = styled.div`
    /* width: 200px; */
    display: flex;
    background: lightgray;
    border: 1px solid pink;
    border-radius: 20px;
    margin: 5px 0;
    align-items: center;
    justify-content: center;
`
const ImgOuter = styled.div`
    width: 95%;
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
const ImgContainer = styled.img`
    width: 44px;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }
`

const CommunityImageSelect = ({image, setMyImage}) => {
    const [page, setPage] = useState(0);
    
    const movePageLeft = () => {
        console.log(page)
        console.log(image)
        if (page > 0) setPage(page - 1)
    }
    
    const movePageRight = () => {
        console.log(page)
        console.log(image)
        let totalPage = Math.ceil(image.length / 4)
        if (page < totalPage - 1) setPage(page + 1)
    }

    const changeImg = (addr) => {
        setMyImage(addr);
    }

    return (
        <>
        { image != null
        ?
        <WriteImgContainer>
            <button 
                className='arrowDetailLeft2'
                onClick={movePageLeft}
            >

                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button 
                className='arrowDetailRight2'
                onClick={movePageRight}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <ImgOuter>
                {new Array(Math.ceil(image.slice(4*page, 4*page + 4).length/4)*4).fill(0).map((item, index) => {
                    if (index < image.slice(4*page, 4*page + 4).length) {
                        return (
                            <ImgContainer 
                                key={index}
                                src={`/api/image/images/${image[4*page + index].addr}`}
                                onClick={() => changeImg(`/api/image/images/${image[4*page +index].addr}`)}
                            />
                        )
                    }
                    else {
                        return (
                            <ImgContainer
                                key={index}
                                src={`/api/image/images/${image[0].addr}`}
                                style={{'visibility': 'hidden'}}
                            />
                        )
                    }
                })
                }
            </ImgOuter>
        </WriteImgContainer>
        : null
        }
        </>
    )
}

export default CommunityImageSelect