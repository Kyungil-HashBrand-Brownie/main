import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { Check } from '../../img'
import { FilterDetailOuter, FilterDetailBox } from './collectionModule'

const Background = [
    'Iceberg', 'Desert', 'Grand Canyon', 'Cream', 'Winter',
    'NorthPole', 'Forest', 'Sea', 'Sky',
]

const Body = ['BrownBody', 'PinkBody', 'RedBody', 'GreenBody']

const Face = ['LivelyFace', 'SmileFace', 'PlayfulFace', 'MadFace', 'AngryFace']

const Hat = [
    'WhiteHat', 'StrawHat ', 'DumbHat', 'NewVilageHat',
    'PuffypermHair', 'MarineHat', 'BeanieHat']

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
    // const { filterOption } = useSelector(state => state.nft);
    const { filterOption } = useSelector(state => state.main);
    let partOptions = data[parts];

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
                >
                    {check == part && <img src={Check} />}
                    {part}
                </FilterDetailBox>)
        }
    </FilterDetailOuter>
)
}

export default FilterDetail