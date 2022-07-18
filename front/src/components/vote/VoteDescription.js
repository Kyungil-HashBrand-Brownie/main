import React from 'react'
import { DescriptionOuter, Description } from './voteModule'

const VoteDescription = () => {
    return (
        <DescriptionOuter>
            <Description>
                Browny 커뮤니티에 오신걸 환영합니다.
                자유롭게 소통하시되 다음 규칙사항을 준수해주세요.
                <br />  
                <br />

                <div>1. 비방/욕설 절대금지! </div>
                <div>2. 일주일에 한번 커뮤니티 안건이 등록됩니다. 각 안건당 투표는 한 번씩만 가능 하며, 득표수에 따라 프로젝트의 방향성이 좌우되므로 신중하게 투표해주시기 바랍니다^^</div>
            </Description>
        </DescriptionOuter>
    )
}

export default VoteDescription