import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { mintingContract, votingAddr, nftInstance, caver } from "configs";
import { getMintList } from 'api/viewMethods';
// import { getContractOwner } from "./viewMethods";
import axios from 'axios'
import Sort from 'components/collection/Sort'
import CollectionMain from 'components/collection/CollectionMain'
import styled from 'styled-components'

const CollectionOuter = styled.div `
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    /* background-color: brown; */
`

const Collection = () => {
    const [data, setData] = useState(null);
    const { sortOption, filterOption } = useSelector(state => state.nft);

    const getData = async () => {
        let result = await axios.get('/image/images')
        let _data = result.data;
        let _filterOption = _.cloneDeep(filterOption).filter(item => item.opt !== null)

        if (_filterOption.length > 0) {
            _filterOption.forEach((option) => {
                console.log('option: ', option)
                let _id = (option.id == 'Background') ? 'Back' : option.id
                _data = _data.filter((item) => item[_id]==option.opt)
            })
        }
        checkMinting(_data);
        // setData(_data)
    }

    const checkMinting = async (_data) => {
        let minted = await getMintList()
        minted = minted.map(item => parseInt(item))

        switch (sortOption) {
            case 0: 
                break;
            case 1:
                _data = _data.filter(item => 
                    !minted.includes(item.edition))
                break;
            case 2:
                _data = _data.filter(item =>
                    minted.includes(item.edition))
                break;
            default: 
                break;
        }
        // console.log('_data:', _data)
        _data = _data.sort((a,b) => a.edition - b.edition)
        console.log('_data: ', _data);
        setData(_data);
    }

    useEffect(() => {
        getData()
    }, [filterOption, sortOption])

    return (
        <CollectionOuter>
            <Sort />
            <CollectionMain data={data}/>
        </CollectionOuter>
    )
}

export default Collection