import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import FilterDetail from './FilterDetail';

const filterData = ['Body', 'Eye', 'Mouth', 'Item', 'Background']

const FilterOuter = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const FilterInner = styled.div`
    width: 300px;
    height: 90%;
`

const FilterHeader = styled.div`
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
`
const FilterMain = styled.div `
    width: 80%;
    margin: auto;
    margin-top: 10px;
    background: white;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`

const FilterText = styled.div`
    background: pink;
    border-radius: 10px;
    width: 90px;
    padding: 0 10px;
`
const FilterSubHeader = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
`

const FilterOption = styled.div`
    width: 90%;
    height: 40px;
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        font-size: 20px;
    }

`
const FilterContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const FilterContent = styled.div`
    display: flex;
    align-items: center;

    .arrow-icon {
        position: relative;
        right: 10%;
        cursor: pointer;
    }

    &:hover {
        .arrow-icon {
            transform: scale(1.2);
        }
    }
`
// let selectInit = filterData.map((data) => {
//     let d = {};
//     d.id = data;
//     d.click = false;
//     return d
// })

const Filter = () => {
    const dispatch = useDispatch();
    const { filterOpenState, filterOption } = useSelector(state => state.nft)

    const changeSelect = (data) => {
        // console.log(filterOption);
        console.log(data)
        let copyFilterOption = _.cloneDeep(filterOption).map(item => {
            if (data.click) {
                if (item.id == data.id) item.opt = null;
            }
            return item
        })
        
        let copy = _.cloneDeep(filterOpenState).map((item) => {
            if (item.id === data.id) {
                item.click = !item.click;
            }
            return item
        });
        
        dispatch({type: 'CHANGE_FILTER_OPTION_STATE', payload: copyFilterOption});
        dispatch({type:'CHANGE_FILTER_STATE', payload: copy});
    } 

    return (
      <FilterOuter>
          <FilterHeader>Filter</FilterHeader>
          <FilterMain>
            <FilterInner>
              <FilterSubHeader>
                <FilterText>Filter By</FilterText>
              </FilterSubHeader>
              <FilterContentBox>
              { filterOpenState.map((data, index) => 
                <div key={index}>
                    <FilterContent onClick={() => changeSelect(data)}>
                        <FilterOption key={index}>
                            {data.id}    
                        </FilterOption>
                        <FontAwesomeIcon 
                            className='arrow-icon'
                            icon={data.click ? faCircleArrowDown : faCircleArrowRight}     
                        />
                    </FilterContent>
                    {data.click && 
                        <FilterDetail parts={data.id}/>
                    }
                </div>
            )}
            </FilterContentBox>
            </FilterInner>
          </FilterMain>
      </FilterOuter>
    )
}

export default Filter