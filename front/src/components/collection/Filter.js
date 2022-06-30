import React, { useState } from 'react'
import _ from 'lodash';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import FilterDetail from './FilterDetail';

const filterData = ['Body', 'Eye', 'Mouth', 'Item', 'Background']

const FilterOuter = styled.div`
    margin-top: 20px;
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
let selectInit = filterData.map((data) => {
    let d = {};
    d.id = data;
    d.click = false;
    return d
})

const Filter = () => {
    const [select, setSelect] = useState(selectInit)

    const changeSelect = (data) => {
        let copy = _.cloneDeep(select).map((item) => {
            if (item.id === data.id) {
                item.click = !item.click;
            }
            return item
        });
    
        setSelect(copy)
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
              { select.map((data, index) => 
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
                        <FilterDetail parts={[data.id+'1', data.id+'2', data.id+'3', data.id+'4', data.id+'5']}/>
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