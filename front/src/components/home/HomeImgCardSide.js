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
                                "#FAF4B7"
                                : item.id === 2 ?
                                    "#F9F9F9"
                                    : "#F6C6EA"
                    }}
                    onClick={() => setClick(item.id)}>
                    <h1>{item.num}</h1>
                    <h2>{item.header}</h2>
                </div>
            )}
        </>
    )
}
export default HomeImgCardSide