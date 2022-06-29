import React, { useState } from 'react'
import styled from 'styled-components'
import { Check } from '../../img';

// const parts = ['body1', 'body2', 'body3', 'body4', 'body5'];

const FilterDetailOuter = styled.div`
    width: 100%;
    margin: 8px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    /* border-top-left-radius: 10px; */
    /* border-bottom-right-radius: 10px; */
    /* background: lightgrey; */
    /* background: gray; */
    display: flex;
    justify-content: center;
    /* margin: auto; */
    flex-wrap: wrap;
`
const FilterDetailBox = styled.div`
    margin: auto;
    background: white;
    min-width: 
        ${props => props.info.includes('Background') ? '150px' : '120px'};
    margin-top: 6px; 
    margin-bottom: 4px; 
    text-align: center;
    cursor: pointer;
    background: rgb(151, 223, 220);  
    border-radius: 10px; 

    &:hover {
        transform: scale(1.03)
    }

    img {
        position: absolute;
        width: 20px;
        height: 20px;
        transform: translate(-28px, 3px);
    }
`

const FilterDetail = ({ parts }) => {
    parts = parts.map((item) => item.replace('Background', 'Back'))
    const [check, setCheck] = useState(null);

    const changeCheck = (part) => {
        if (check == part) setCheck(null);
        else setCheck(part) 
    }

    return (
        <FilterDetailOuter>
            {
                parts &&
                parts.map((part, index) => 
                    <FilterDetailBox 
                        key={index}
                        info={part}
                        onClick={() => changeCheck(part)} 
                    >
                        {check == part && <img src={Check}/>}
                        {part}
                    </FilterDetailBox>)
            }
        </FilterDetailOuter>
    )
}

export default FilterDetail