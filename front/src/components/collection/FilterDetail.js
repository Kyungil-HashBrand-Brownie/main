import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'
import { Check } from '../../img'

const partsCount = {
    'Body': 1,
    'Eye': 7,
    'Mouth': 5,
    'Item': 5,
    'Background': 11,
}

const FilterDetailOuter = styled.div`
    width: 100%;
    margin: 8px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
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
    const dispatch = useDispatch();
    // const { filterOption } = useSelector(state => state.nft);
    const { filterOption } = useSelector(state => state.main);
    let partOptions = new Array(partsCount[parts]).fill(0).map((item, index) => {
        if (parts == 'Background') parts = 'Back' 
        return parts + (index+1)
    })
    const [check, setCheck] = useState(null);

    const changeCheck = (part) => {
        if (parts == 'Back') parts = 'Background';
        let copy = _.cloneDeep(filterOption).map((item) => {
            if (item.id == parts) {
                if (item.opt == part) item.opt = null
                else item.opt = part
            }
            return item
        })
        if (check == part) {
            setCheck(null);
        }
        else {
            setCheck(part) 
        }
        dispatch({type: 'CHANGE_FILTER_OPTION_STATE', payload: copy})
    }

    return (
        <FilterDetailOuter>
            {
                parts &&
                partOptions.map((part, index) => 
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