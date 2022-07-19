import React from 'react'

const HomeImgCardSide = ({ getData, setClick }) => {
    return (
        <>
            {getData.map((item, index) =>
                // css 적용시키기 위해 위치 고정을 위해서 index ===0 을 사용한다? 
                <div key={index} className={index === 0 ? 'box_vertical2' : 'box_vertical3'}
                    style={{
                        backgroundColor:
                            item.id === 1 ?
                                "#52a2fe"
                                : item.id === 2 ?
                                    "rgb(242, 142, 70)"
                                    : "#fe6652"
                    }}
                    onClick={() => setClick(item.id)}>
                    <h1>{item.num}</h1>
                    <h2 className={index == 0 ? 'tapestry-side-header1' : 'tapestry-side-header2'}>{item.header}</h2>
                </div>
            )}
        </>
    )
}
export default HomeImgCardSide