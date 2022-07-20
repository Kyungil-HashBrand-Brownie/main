import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getMintList } from 'api/viewMethods';
import axios from 'axios'
import Sort from 'components/collection/Sort'
import CollectionMain from 'components/collection/CollectionMain'
import styled from 'styled-components'
import ImgComponent from 'components/ImgComponent';

const CollectionOuter = styled.div`
    display: flex;
    justify-content: center;

`

const Collection = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [row, setRow] = useState(0);
    // const { sortOption, filterOption } = useSelector(state => state.nft);
    const { sortOption, filterOption } = useSelector(state => state.main);

    const [test, setTest] = useState("<Sort></Sort>")

    const getData = async () => {
        let result = await axios.get('/api/image/images')
        let _data = result.data;
        let _filterOption = _.cloneDeep(filterOption).filter(item => item.opt !== null)

        if (_filterOption.length > 0) {
            _filterOption.forEach((option) => {
                let _id = (option.id == 'Background') ? 'Back' : option.id
                _data = _data.filter((item) => item[_id] == option.opt)
            })
        }
        checkMinting(_data);
    }

    const checkMinting = async (_data) => {
        let minted = await getMintList()
        minted = minted.map(item => parseInt(item))

        switch (sortOption) {
            case 0:
                break;
            case 1:
                _data = _data.filter(item =>
                    !minted.includes(item.edition-1))
                break;
            case 2:
                _data = _data.filter(item =>
                    minted.includes(item.edition-1))
                break;
            default:
                break;
        }
        _data = _data.sort((a, b) => a.edition - b.edition)
        setRow(Math.ceil(_data.length / 5));
        setData(_data);
        dispatch({type: 'MINT_COUNT', payload: minted.length})
    }

    useEffect(() => {
        getData()
    }, [filterOption, sortOption])

    return (
        <>
        <ImgComponent />
        {/* <CollectionOuter> */}
            <Sort />
            <CollectionMain data={data} row={row} />
        {/* </CollectionOuter> */}
        </>
    )
}

export default Collection