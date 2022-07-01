import React from 'react'
import Cancel from '../../img/stake/cancel.png';

const CardMain = ({bool, inputCheck, checkedList, transactNFT, changeClickState, changeAllState}) => {
    return (
        <>
            <div className="cont21">
                <button
                    className='stake-button'
                    onClick={transactNFT}
                >
                    {bool ? 'stake' : 'unstake'}
                </button>
            </div>
            <div className='nftlist-box'>
                <div className='nftlist-header'>
                    <i>{bool ? 'Stakelist' : 'Unstakelist'}</i>
                </div>
                <div className='nftlist-select-all'>
                    <div>
                        <input
                            onChange={(e) => { changeAllState(e.target.checked) }}
                            type='checkbox'
                            className='nftlist-select-all-checkbox' 
                            checked={inputCheck}
                            />
                        Select All
                    </div>
                </div>
                <div className='nftlist-justify'>
                    <div className='nftlist'>
                        {checkedList.length > 0 ?
                            checkedList.map((item) =>
                                <div className='nftlist-id-box'>
                                    {item.id}
                                    <div className='overlay'>
                                        <img src={Cancel}
                                            onClick={() => changeClickState(item.id)}
                                            className='nftlist-cancel' />
                                    </div>
                                </div>)
                            : <div className='nftlist-text'>Select an item from below!</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMain