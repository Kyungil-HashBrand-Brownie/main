import React from 'react'

const SliderTest = () => {
    return (
        <section class="section slider">

            <div class="section__entry section__entry--center">
            </div>

            <input type="radio" name="slider" id="slide-1" class="slider__radio" checked/>
            <input type="radio" name="slider" id="slide-2" class="slider__radio" />

            <div class="slider__holder">

                <label for="slide-1" class="slider__item slider__item--1 card">
                <div class="slider__item-content">
                <p class="heading-3 heading-3--light">Development</p>
                <p class="heading-3">SCSS Only slider</p>
                <p class="slider__item-text serif">This tutorial will teach you how to create
                a SCSS only responsive slider. Feel free to read the whole tutorial or
                just download and try it by yourself.</p>
                <a class="heading-3 link" href="https://blog.significa.pt/css-only-slider-71727effff0b#.e5t9l7b55">Read on Medium</a>
                </div>
                </label>

                <label for="slide-2" class="slider__item slider__item--2 card">
                <div class="slider__item-content">
                <p class="heading-3 heading-3--light">Development</p>
                <p class="heading-3">SCSS Only slider</p>
                <p class="slider__item-text serif">This tutorial will teach you how to create
                a SCSS only responsive slider. Feel free to read the whole tutorial or
                just download and try it by yourself.</p>
                <a class="heading-3 link" href="https://blog.significa.pt/css-only-slider-71727effff0b#.e5t9l7b55">Read on Medium</a>
                </div>
                </label>

            </div>
        </section>
    )
}

export default SliderTest