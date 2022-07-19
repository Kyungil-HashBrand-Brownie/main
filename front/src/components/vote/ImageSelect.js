import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft , faAngleRight} from "@fortawesome/free-solid-svg-icons"

const WriteImgContainer = styled.div`
    position: absolute;
    width: 400px;
    height: 200px;
    background: lightgray;
    border: 2px solid black;
    border-radius: 20px;
    top: 40%;
    right: 23%;
`
const ImgOuter = styled.div`
    width: 95%;
    height: 94%;
    background: white;
    margin: auto;
    margin-top: 1.5%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const ImgContainer = styled.img`
    width: 80px;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }
`

const ImageSelect = ({ image, setMyImage, closeModal }) => {
    const { imgModalState } = useSelector(state => state.main);
    const [page, setPage] = useState(0);
    
    const movePageLeft = () => {
        if (page > 0) setPage(page - 1)
    }
    
    const movePageRight = () => {
        let totalPage = Math.ceil(image.length / 8)
        if (page < totalPage - 1) setPage(page + 1)
    }

    const changeImg = (addr) => {
        setMyImage(addr);
        closeModal();
    }

    return (
        <>
        { image != null && imgModalState 
        ?
        <WriteImgContainer>
            <button 
                className='button arrowDetailLeft1 fill'
                onClick={movePageLeft()}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button 
                className='button arrowDetailRight1 fill'
                onClick={movePageRight()}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <ImgOuter>
                {new Array(Math.ceil(image.slice(8*page, 8*page + 8).length/8)*8).fill(0).map((item, index) => {
                    if (index < image.length) {
                        return (
                            <ImgContainer 
                                key={index}
                                src={`/api/image/images/${image[index].addr}`}
                                onClick={() => changeImg(`/api/image/images/${image[index].addr}`)}
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

export default ImageSelect