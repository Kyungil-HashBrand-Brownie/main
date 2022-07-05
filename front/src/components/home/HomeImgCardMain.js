import React from 'react'
import { Container } from 'react-bootstrap'

const HomeImgCardMain = ({ click }) => {
    return (
        <Container>
            {
                click === 1 ?
                    <div>
                        <h1>우리들의 일그러진 영웅</h1>
                        <b> Warior Browny</b>
                        <div className="grid-template">브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.</div>
                    </div>
                    : click === 2 ?
                        <div>
                            <h2>황무화 된 땅에서  희망</h2>
                            <b> Got Browny</b>
                            <div className='grid-template'>브라우니의 제조법은 보스턴 요리학교 요리기본서("The Boston Cooking School Cook Book")의 1906년판에 최초로 등장하였다. 이 제조법에 따른 초기의 브라우니는 케이크형이며 부드러운 맛이었다. "브라우니"라는 이름은 1896년판의 책에서 처음으로 등장했으나 이것은 양철 틀에 구운 당밀 케이크였다. 즉, 현재의 브라우니는 아니었다.</div>
                        </div>
                        : <div>
                            <h1>#666</h1>
                            <b> Owned By Suh</b>
                            <div className='grid-template'>초콜릿 브라우니(영어: chocolate brownie)는 사각 형태로 잘린 진한 초콜릿 케이크이다. 브라우니라고 줄여서 부르기도 한다. 퍼지인가 케이크형인가, 맛의 농도, 견과, 아이싱, 크림 치즈, 초콜릿 칩 등 재료의 포함 등에 따라 다양한 형태의 브라우니가 만들어지고 있다. 초콜릿은 넣지 않고 갈색 설탕을 첨가해 제조한 브라우니는 블론디로 불린다. 브라우니는 흔히 크림과 함께 내놓기도 하며 식당에서는 커피나 우유와 함께 디저트로 곁들여 내오기도 한다. </div>
                        </div>
            }
        </Container>
    )
}

export default HomeImgCardMain