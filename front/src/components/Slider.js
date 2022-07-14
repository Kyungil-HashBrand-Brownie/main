import React from 'react'
import NftCard from './stake/NftCard'

const Slider = () => {
    return (
        <>
            <div className="section__entry section__entry--center">
            </div>

            <input type="radio" name="slider" id="slide-1" className="slider__radio" checked/>
            <input type="radio" name="slider" id="slide-2" className="slider__radio" />

            <div className="slider__holder">

                <label htmlFor="slide-1" className="slider__item slider__item--1 card">
                <div className="slider__item-content">
                <NftCard bool={true} />
                </div>
                </label>

                <label htmlFor="slide-2" className="slider__item slider__item--2 card">
                <div className="slider__item-content">
                <NftCard bool={false} />
                </div>
                </label>

            </div>
        </>
    )
}

export default Slider