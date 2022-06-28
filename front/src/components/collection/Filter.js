import React from 'react'
import styled from 'styled-components'

const filterData = ['Body', 'Eye', 'Mouth', 'Item', 'Background']

const FilterOuter = styled.div`
    margin-top: 20px;
    /* background: gray; */
`
const FilterInner = styled.div`
    width: 300px;
    height: 90%;
    /* border:  */
    /* background: green; */
`

const FilterHeader = styled.div`
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
    /* background: red; */
`
const FilterMain = styled.div `
    width: 80%;
    margin: auto;
    margin-top: 10px;
    height: 270px;
    background: white;
    /* background: red; */
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
    /* background: blue; */
    margin-bottom: 10px;
`

const FilterOption = styled.div`
    width: 90%;
    height: 40px;
    /* background: purple; */
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;

    &:hover {
        font-size: 20px;
    }
`

const Filter = () => {
    return (
      <FilterOuter>
          <FilterHeader>Filter</FilterHeader>
          <FilterMain>
            <FilterInner>
              <FilterSubHeader>
                <FilterText>Filter By</FilterText>
              </FilterSubHeader>
              { filterData.map((data, index) => 
                <FilterOption key={index}>{data}</FilterOption>)}
            </FilterInner>
          </FilterMain>
      </FilterOuter>
    )
}

export default Filter