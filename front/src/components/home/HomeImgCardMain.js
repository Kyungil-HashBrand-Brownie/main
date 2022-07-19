import React from 'react'
import { Container } from 'react-bootstrap'

const HomeImgCardMain = ({ click }) => {
    return (
        <Container className='tapestry-main'>
            {
                click === 1 ?
                    <div>
                        <div className='tapestry-header'>GIVE</div>
                        <b className='tapestry-subheader'>Win-win Browny</b>
                        <div className="grid-template">
                            <span className='tapestry-span'>(Give)</span>
                            브라우니는 환경을 생각하는 마음을 무엇보다 중요하게 생각합니다.<br />
                            <span className='tapestry-span'>(Interact & Vote)</span>
                            유저는 브라우니를 소유함과 동시에 자동으로 저희만의 거버넌스(보팅) 시스템에 등록됩니다.  
                            투표는 환경과 관련된 주제로 진행되며, 투표를 통해 벌어들인 모든 수익금은 해당 주제에 기부됩니다. 
                            저희 커뮤니티에서 투표권을 행사하고, 환경에 대한 다양한 정보도 공유해보세요!<br />
                            <span className='tapestry-span'>(Entitle)</span>
                            유저 등급에 따라 차등 권리가 부여됩니다. 골드 등급 이상은 커뮤니티 의견을 종합하여 
                            투표안건을 등록할 권리를 갖습니다.

                            브라우니 NFT도 소유하고, 환경에 대해서도 알아가면서 브라우니랑 같이 win-win gogoSsing!!
                        </div>
                    </div>
                    : click === 2 ?
                        <div>
                            <div className='tapestry-header'>스테이킹, 토큰스왑 즐거움이 두 배!</div>
                            <b className='tapestry-subheader'>Entertainer Browny</b>
                            <div className='grid-template'>
                                브라우니 토큰으로 다양한 환경 살라기 캠패인에 참여해보세요!<br />
                                소유한 브라우니 NFT들을 저희 뱅킹에 예치하면 스테이킹 보상이 제공됩니다.<br />
                                브라우니 팀은 자체 토큰을 보다 다양한 분야에 (렌탈, 패션 마케팅) 활용하는 계획을 세우고 있습니다. <br />
                                유저들에게 최대한의 즐거움을 주는 방식으로 확장성을 넓혀가겠습니다!!
                            </div>
                        </div>
                        : <div>
                            <div className='tapestry-header'>브라우니의 탄생</div>
                            <b className='tapestry-subheader'>Warrior Browny</b>
                            <div className='grid-template'>
                                <span className='tapestry-span'>환경을 보호하라.</span><br />
                                날마다 심해지는 환경오염에 대응하기 위해, 깊은 땅속에서 브라우니 용사들이 탄생했습니다.<br />
                                브라우니 - 표면적으로는 인간의 얼굴을 하고 있으면서도 우리가 살고있는 지표면을 상징하기도 합니다.<br />
                                하나뿐인 지구를 살리자는 슬로건으로 브라우니들은 환경단체들과 활동을 해나가고 있습니다. <br />
                                브라우니들과 함께 환경을 살리는 모험을 떠나보자구요!!
                            </div>
                        </div>
            }
        </Container>
    )
}

export default HomeImgCardMain