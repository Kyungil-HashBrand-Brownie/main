import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import FilterDetail from './FilterDetail'
import { FilterOuter, FilterInner, FilterHeader, FilterMain, 
    FilterText, FilterSubHeader, FilterOption, FilterContentBox, FilterContent
} from './collectionModule'

const Filter = () => {
    const dispatch = useDispatch();
    // const { filterOpenState, filterOption } = useSelector(state => state.nft)
    const { filterOpenState, filterOption } = useSelector(state => state.main)

    const changeSelect = (data) => {
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