import React from 'react'
import '../../scss/detailCollecion.css'
import { nft1 } from '../../img/nft/'

const DetailCollecion = () => {
  return (
    <div>
        <div className="layout-container">
            <div className="detailImglNft-item1">
                <div className='detailImglNft-mainImg'>
                    <img src={nft1}/>
                </div>
                <div className='detailImglNft-subImg'>
                    <div className='detailImglNft-subImg_item'><img src={nft1}/> </div>
                    <div className='detailImglNft-subImg_item'><img src={nft1}/></div>
                    <div className='detailImglNft-subImg_item'><img src={nft1}/></div>
                </div>

            </div>
            <div className="detailImglNft-item2">
                <div className="detailImglNft-description_1">
                    <div> </div>
                    <div> Owned by #2ad355njnjnjn</div>
                </div>
                <div className="detailImglNft-description_2">
                    <div className="div-section">
                        <div className="left-layout">Body : </div>
                        <div className='right-layout'>hi </div>
                    </div>
                    <div className="div-section">
                        <div className="left-layout">eye : </div>
                        <div className='right-layout'>hi </div>
                    </div>
                    <div className="div-section">
                        <div className="left-layout">Mouth : </div>
                        <div className='right-layout'>hi </div>
                    </div>
                    <div className="div-section">
                        <div className="left-layout">Item : </div>
                        <div className='right-layout'>hi </div>
                    </div>
                    <div className="div-section">
                        <div className="left-layout">Background : </div>
                        <div className='right-layout'>hi </div>
                    </div>
                </div>
                <div className="detailImglNft-description_3">c</div>
            </div>
        </div>
    </div>
  )
}

export default DetailCollecion