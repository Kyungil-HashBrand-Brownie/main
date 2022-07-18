import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Test = () => {
    const { filterOption } = useSelector(state => state.nft)
    const [input, setInput] = useState('');

    const changeState = () => {
        console.log(input)
        let temp = Array.from(filterOption).map((item) => {
            if (item.id=='Body') {
                item.opt = input
            }
            return item;
        })
    }

    return (
        <div>
            {filterOption.map((id, index) => 
                <div key={index}>{id.id}: {id.opt}</div>
            )}
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={changeState}>클릭</button>
        </div>
    )
}

export default Test