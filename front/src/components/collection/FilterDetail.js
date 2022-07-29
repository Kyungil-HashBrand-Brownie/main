import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { FilterDetailOuter, FilterDetailBox } from './collectionModule'

const Background = [
    'Iceberg', 'Desert', 'GC', 'Cream', 'Winter',
    'NorthPole', 'Forest', 'Sea', 'Sky',
]

const Body = ['BrownBody', 'PinkBody', 'RedBody', 'GreenBody']

const Face = ['LivelyFace', 'SmileFace', 'PlayfulFace', 'MadFace', 'AngryFace']

const Hat = [
    'WhiteHat', 'StrawHat ', 'DumbHat', 'NewVillage',
    'Puffyperm', 'MarineHat', 'BeanieHat']

const Item = ['NoWar', 'NoKillAnimal', 'NoPlastic', 'NoSmoking', 'Earth']

const data = {
    'Background': Background,
    'Body': Body,
    'Face': Face,
    'Hat': Hat,
    'Item': Item
}

const FilterDetail = ({ parts }) => {
    const dispatch = useDispatch();
    const { filterOption } = useSelector(state => state.main);
    let partOptions = data[parts];
    let checked = filterOption.find((item) => item.id === parts);

    const [check, setCheck] = useState(checked.opt);
    // console.log('check: ', check)

    const changeCheck = (part) => {
        let _part = part;
        if (parts === 'Back') parts = 'Background';
        if (part === 'GC') _part = 'Grand Canyon';
        else if (part === 'NewVillage') _part = 'NewVilageHat';
        else if (part === 'Puffyperm') _part = 'PuffypermHair';
        let copy = _.cloneDeep(filterOption).map((item) => {
            if (item.id === parts) {
                if (item.opt === _part) item.opt = null
                else item.opt = _part
            }
            return item
        })
        if (check == part) {
            setCheck(null);
        }
        else {
            setCheck(part)
        }
        console.log(filterOption)
        dispatch({ type: 'CHANGE_FILTER_OPTION_STATE', payload: copy })
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
                        state={check === part}
                    >
                        {/* {check == part && <img className='filter-check' src={Check} />} */}
                        {part}
                    </FilterDetailBox>)
            }
        </FilterDetailOuter>
    )
}

export default FilterDetail