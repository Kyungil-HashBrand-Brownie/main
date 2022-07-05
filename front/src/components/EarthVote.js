import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Ani1, Ani2, Ani3, Apro, Ep1, Ep2, Ep3, Kp1, Kp2, Kp3 } from '../img/vote/organizations'
import { Epro , ModalAni1, ModalKpro, Kpro1 } from '../img/vote/detail'
import styled from 'styled-components'

    const MainStyled = styled.div`
        display: flex;
        justify-content: center;
        text-align: center;
        margin: auto ;
        padding: 10px ;
    `

    const E_Title = styled.div`
        font-size: 20px;
        display: flex;
        justify-content: center;
        padding: 10px;
        margin: 10px ;
    `

function EarthVote() {

    // const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const dispatch = useDispatch();
    const [lgShow, setLgShow] = useState(false);
    const {countAnimal , countKid, countMinority } = useSelector(state =>state.nft);
    const [show, setShow] = useState(false);

    const radios = [
        { name: '멸종위기 동물 구조단체', value: '1' },
        { name: '기아 구조단체', value: '2' },
        { name: '소수민족', value: '3' },
        // { name: '서기영', value: '4' },
    ];

    const voteHandlerAni = (e) => {
        dispatch({type: "VOTE_INCREMENT" , payload: {countAnimal: countAnimal +1 } });
        // setChecked(e.currentTarget.checked)
    }

    const voteHandlerKid = () => {
        dispatch({type: "VOTE_INCREMENT" , payload: {countKid: countKid +1 }});
    }

    const voteHandlerMin = () => {
        dispatch({type: "VOTE_INCREMENT" , payload: {countMinority: countMinority +1 }});
    }

    return (
    <>
        <br />
        <E_Title> 보내고 싶은 단체를 선택해 주세요</E_Title>

        <MainStyled>
            <div>
            <Card style={{ width: '18rem' }} className="cardclass">
            <Card.Img width="100px" height="300px" variant="top" src={Apro} />
                <Card.Body>
                    <Card.Title>멸종 위기 동물 구조 단체 </Card.Title>
                    <Card.Text>
                    This is one of best of big of World problems.
                    So you keep to watch in your morden day 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>참여하고 있는 단체</Accordion.Header>
                        <Accordion.Body>
                        <div>
                            <img width="200px" height="100px" src={Ani1} alt="help_company" />
                            <img width="200px" height="100px" src={Ani2} alt="help_company" />
                            <img width="200px" height="100px" src={Ani3} alt="help_company" />
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </ListGroup>
                <Card.Body>
                <Button onClick={() => setLgShow(true)}>상세보기 </Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        멸종 위기 동물 구조 단체
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2> 설명</h2>
                        <img src={ModalAni1} width="100%" alt="modal_img1"/>
                        인류는 전 세계에서 번성하며 동물이 가지고 있는 가죽, 뼈, 뿔, 기름, 고기 등을 얻기 위해, 단순히 사냥하는 재미를 위해서, 박제 등의 제작을 위해 등등 수많은 남획, 밀렵을 저질렀으며, 기후 변화를 일으키며 환경 변화에 적응하지 못한 동물들을 도태시키기도 했다. 현대 시기에 들어 인류는 사라져가는 생물들에 위협을 느끼고 멸종위기종을 지정해 관리할 필요성을 느끼기 시작했다.

                        멸종위기종을 지정하여 관리하는 가장 큰 이유는 생태계 보존이다. 간혹 멸종위기종이 도태되는 것은 자연의 섭리라며 어쩔 수 없다는 의견이 존재하기도 하고 심지어는 다른 생물이 멸종위기종의 자리를 대체할 것이라며 별 상관이 없다고 하기도 하는데, 적응이라는 측면에서는 맞는 말이지만 보존이라는 측면에서는 틀린 말이다.

                        생물은 자연의 섭리로 멸종할 수도 있다. K-Pg 멸종같이 인류 문명 이전에도 지구 환경 변화에 의한 대멸종은 있었다. 또한 다른 생물이 환경에 적응하며 그 자리를 메꾸게 된다는 말도 사실이다. 하지만 중요한 점은, 자연을 보존했다면 멸종하지 않았을 종들조차 인류의 개입으로 멸종하거나 멸종 위협을 받는 경우가 많아졌다는 것이다. 이는 서식지 파괴, 외래종 전파, 남획같은 직접적인 영향뿐만 아니라 지구 온난화같은 간접적인 영향도 포함한다. 이러한 인위적인 멸종으로 인한 불가역적인 피해는 지구상 모든 생물들에게 고스란히 돌아올 것이며, 인류와 인류 후손들에게도 돌이킬 수 없는 피해를 입힐 것이다.

                        인류가 멸종을 막는 것은 산업적, 경제적으로도 이득이다. 현대 인류도 동물이나 식물의 성분에서 추출한 물질을 그대로 이용하거나 비슷한 구조를 화학적으로 합성하여 산업 곳곳에서 이용하고있다. 인류를 구한 항생제라는 페니실린은 푸른곰팡이에서 발견되었고, 산업 필수재인 고무는 고무나무의 수액에서 비롯되었다. 하나의 종이 멸종한다는 것은 인류가 누릴 수 있는 지구의 자원이 하나 줄어든다는 것을 의미한다. 인류가 현생종을 최대한 보존하여 후손들에게 물려주기 위해, 그리고 먼 미래에 해당 종이 인류에게 도움이 될 가능성을 없애지 않게하기 위해서라서라도 멸종은 최대한 막는 것이 이득인 것이다.[2]

                        근대 이후 멸종된 종의 일부는 과학관 등지에서 박제된 모습으로 실물을 볼 수 있지만, 박제 표본도 없는 경우는 그림이나 화석 또는 화석을 근거로 한 추정 모델링으로만 볼 수 있다. 멸종 위기 동물은 세계적으로 포획, 수렵, 매매가 금지된 경우가 대부분이며[3] 몇몇 알려진 자연 서식지나 보호시설 등의 인공 서식지에서 볼 수 있다.

                        카타르의 일부 지역에서는 오일머니를 가지고 보호소를 만들어 멸종 위기 동물을 보호하고 번식시키는 일을 하고 있다고 한다. 인터넷의 글이므로 신뢰도는 반반이다. 단 보호소의 웹사이트는 실재한다.

                        드물게 인간의 남획이 원인이 아니라 자연 선택으로 인해 도태되어 가는 멸종위기종도 있는데 이런 종들도 전부 인간의 잘못으로 치부하여 보호해야 하는지에 대한 논쟁이 종종 있곤 하다. 대표적으로 태즈메이니아데블이 있는데, 이 동물은 2000년대 들어 ‘데블 안면 종양’이라는 이 동물에게만 발병하는 신종 암으로 인해 멸종위기에 처해있었으나, 인간이 치료법을 개발하여 점차 개체수가 늘고 있다. 멸종위기에 처하게 된 과정에는 그 어떠한 인간의 잘못도 없었으며, 오히려 인간이 아니었으면 이 동물은 그대로 멸종했을 것이다.

                        일반인들 눈에 낯선 동물들은 무조건 멸종위기종으로 간주하는 잘못된 풍조가 있다. 하프물범, 퓨마, 북극여우, 미어캣 등 낯설고 신기한 동물들에 대한 기사나 애완용으로 기르는 영상 등이 뜨면 꼭 멸종위기종이라고 성토하는 댓글이 달리곤 하지만 위 네 동물들은 전부 IUCN LC 등급으로 멸종위기종이 아니다.[4]

                        퓨마는 CITES 부속서에 해당된다지만 북극여우와 미어캣은 여기에도 해당되지 않는다. 이건 언론의 잘못도 큰데, 위 네 동물에 멸종위기를 붙여서 검색해보면 해당 동물들이 멸종위기라는 언론기사가 대량으로 뜬다. 반대로 흔해 보여 '어딜 봐서 멸종 위기 동물이냐!'고 할 법한 동물도 있으나 이 경우 대부분은 특정 국가나 지역에서만 서식하여 총 개체 수가 적거나 해당 지역의 서식 환경이 급격히 변화할 때 단번에 멸종으로 향할 위험이 있을 때다. 후술된 고라니가 이러한 대표 사례다. 다른 한편으로 해외의 이국적인 (그러나 멸종위험을 겪고 있지 않는) 생물들의 사진이 멸종위기종으로 홍보되며 세간의 관심을 받는 사이, 인간의 눈에 그리 잘생겨보이지 않으나 심각한 멸종위험을 겪고 있는 고유종 등이 관심의 뒤편으로 밀려나고 있다.

                        원래는 해당 동물의 이름 + IUCN을 붙여 구글 검색을 하면 최상단에 IUCN 등급이 떴으나 지금은 위키백과나 IUCN 홈페이지를 통해서만 확인 가능하다.

                        멸종위기 여부는 야생 개체수로 따지기 때문에 샴악어나 악어거북, 늑대거북처럼 사육 밎 양식이 보편화되어 개체수가 엄청 불어났음에도 야생 개체수가 적다는 이유로 등급이 높게 책정되는 경우가 많다.[5]

                        멸종 위기 식물 관련 내용은 멸종 문서를 참고.
                    </Modal.Body>
                </Modal>
                </Card.Body>
            </Card>
            </div>
            <br />
            <div>
            <Card style={{ width: '18rem' }} className="cardclass">
            <Card.Img width="100px" height="300px" variant="top" src={Kpro1} />
                <Card.Body>
                    <Card.Title>세계 난민 구조 단체 </Card.Title>
                    <Card.Text>
                    This is one of best of big of World problems.
                    So you keep to watch in your morden day 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>참여하고 있는 단체</Accordion.Header>
                        <Accordion.Body>
                        <div>
                            <img width="200px" height="100px" src={Kp1} alt="help_company"/>
                            <img width="200px" height="100px" src={Kp2} alt="help_company"/>
                            <img width="200px" height="100px" src={Kp3} alt="help_company"/>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </ListGroup>
                <Card.Body>
                <Button onClick={() => setLgShow(true)}>상세보기 </Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        세계 난민 구조 단체
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2> 설명</h2>
                        <img src={ModalKpro} width="100%" alt="modal_img2" />
                            인류는 전 세계에서 번성하며 동물이 가지고 있는 가죽, 뼈, 뿔, 기름, 고기 등을 얻기 위해, 단순히 사냥하는 재미를 위해서, 박제 등의 제작을 위해 등등 수많은 남획, 밀렵을 저질렀으며, 기후 변화를 일으키며 환경 변화에 적응하지 못한 동물들을 도태시키기도 했다. 현대 시기에 들어 인류는 사라져가는 생물들에 위협을 느끼고 멸종위기종을 지정해 관리할 필요성을 느끼기 시작했다.

                            멸종위기종을 지정하여 관리하는 가장 큰 이유는 생태계 보존이다. 간혹 멸종위기종이 도태되는 것은 자연의 섭리라며 어쩔 수 없다는 의견이 존재하기도 하고 심지어는 다른 생물이 멸종위기종의 자리를 대체할 것이라며 별 상관이 없다고 하기도 하는데, 적응이라는 측면에서는 맞는 말이지만 보존이라는 측면에서는 틀린 말이다.

                            생물은 자연의 섭리로 멸종할 수도 있다. K-Pg 멸종같이 인류 문명 이전에도 지구 환경 변화에 의한 대멸종은 있었다. 또한 다른 생물이 환경에 적응하며 그 자리를 메꾸게 된다는 말도 사실이다. 하지만 중요한 점은, 자연을 보존했다면 멸종하지 않았을 종들조차 인류의 개입으로 멸종하거나 멸종 위협을 받는 경우가 많아졌다는 것이다. 이는 서식지 파괴, 외래종 전파, 남획같은 직접적인 영향뿐만 아니라 지구 온난화같은 간접적인 영향도 포함한다. 이러한 인위적인 멸종으로 인한 불가역적인 피해는 지구상 모든 생물들에게 고스란히 돌아올 것이며, 인류와 인류 후손들에게도 돌이킬 수 없는 피해를 입힐 것이다.

                            인류가 멸종을 막는 것은 산업적, 경제적으로도 이득이다. 현대 인류도 동물이나 식물의 성분에서 추출한 물질을 그대로 이용하거나 비슷한 구조를 화학적으로 합성하여 산업 곳곳에서 이용하고있다. 인류를 구한 항생제라는 페니실린은 푸른곰팡이에서 발견되었고, 산업 필수재인 고무는 고무나무의 수액에서 비롯되었다. 하나의 종이 멸종한다는 것은 인류가 누릴 수 있는 지구의 자원이 하나 줄어든다는 것을 의미한다. 인류가 현생종을 최대한 보존하여 후손들에게 물려주기 위해, 그리고 먼 미래에 해당 종이 인류에게 도움이 될 가능성을 없애지 않게하기 위해서라서라도 멸종은 최대한 막는 것이 이득인 것이다.[2]

                            근대 이후 멸종된 종의 일부는 과학관 등지에서 박제된 모습으로 실물을 볼 수 있지만, 박제 표본도 없는 경우는 그림이나 화석 또는 화석을 근거로 한 추정 모델링으로만 볼 수 있다. 멸종 위기 동물은 세계적으로 포획, 수렵, 매매가 금지된 경우가 대부분이며[3] 몇몇 알려진 자연 서식지나 보호시설 등의 인공 서식지에서 볼 수 있다.

                            카타르의 일부 지역에서는 오일머니를 가지고 보호소를 만들어 멸종 위기 동물을 보호하고 번식시키는 일을 하고 있다고 한다. 인터넷의 글이므로 신뢰도는 반반이다. 단 보호소의 웹사이트는 실재한다.

                            드물게 인간의 남획이 원인이 아니라 자연 선택으로 인해 도태되어 가는 멸종위기종도 있는데 이런 종들도 전부 인간의 잘못으로 치부하여 보호해야 하는지에 대한 논쟁이 종종 있곤 하다. 대표적으로 태즈메이니아데블이 있는데, 이 동물은 2000년대 들어 ‘데블 안면 종양’이라는 이 동물에게만 발병하는 신종 암으로 인해 멸종위기에 처해있었으나, 인간이 치료법을 개발하여 점차 개체수가 늘고 있다. 멸종위기에 처하게 된 과정에는 그 어떠한 인간의 잘못도 없었으며, 오히려 인간이 아니었으면 이 동물은 그대로 멸종했을 것이다.

                            일반인들 눈에 낯선 동물들은 무조건 멸종위기종으로 간주하는 잘못된 풍조가 있다. 하프물범, 퓨마, 북극여우, 미어캣 등 낯설고 신기한 동물들에 대한 기사나 애완용으로 기르는 영상 등이 뜨면 꼭 멸종위기종이라고 성토하는 댓글이 달리곤 하지만 위 네 동물들은 전부 IUCN LC 등급으로 멸종위기종이 아니다.[4]

                            퓨마는 CITES 부속서에 해당된다지만 북극여우와 미어캣은 여기에도 해당되지 않는다. 이건 언론의 잘못도 큰데, 위 네 동물에 멸종위기를 붙여서 검색해보면 해당 동물들이 멸종위기라는 언론기사가 대량으로 뜬다. 반대로 흔해 보여 '어딜 봐서 멸종 위기 동물이냐!'고 할 법한 동물도 있으나 이 경우 대부분은 특정 국가나 지역에서만 서식하여 총 개체 수가 적거나 해당 지역의 서식 환경이 급격히 변화할 때 단번에 멸종으로 향할 위험이 있을 때다. 후술된 고라니가 이러한 대표 사례다. 다른 한편으로 해외의 이국적인 (그러나 멸종위험을 겪고 있지 않는) 생물들의 사진이 멸종위기종으로 홍보되며 세간의 관심을 받는 사이, 인간의 눈에 그리 잘생겨보이지 않으나 심각한 멸종위험을 겪고 있는 고유종 등이 관심의 뒤편으로 밀려나고 있다.

                            원래는 해당 동물의 이름 + IUCN을 붙여 구글 검색을 하면 최상단에 IUCN 등급이 떴으나 지금은 위키백과나 IUCN 홈페이지를 통해서만 확인 가능하다.

                            멸종위기 여부는 야생 개체수로 따지기 때문에 샴악어나 악어거북, 늑대거북처럼 사육 밎 양식이 보편화되어 개체수가 엄청 불어났음에도 야생 개체수가 적다는 이유로 등급이 높게 책정되는 경우가 많다.[5]

                            멸종 위기 식물 관련 내용은 멸종 문서를 참고.
                    </Modal.Body>
                </Modal>
                </Card.Body>
            </Card>
            </div>
            <br/>
            <div>
            <Card style={{ width: '18rem' }} className="cardclass">
            <Card.Img width="100px" height="300px" variant="top" src={Epro} />
                <Card.Body>
                    <Card.Title>세계 난민 구조 단체 </Card.Title>
                    <Card.Text>
                    This is one of best of big of World problems.
                    So you keep to watch in your morden day 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>참여하고 있는 단체</Accordion.Header>
                        <Accordion.Body>
                        <div>
                            <img width="200px" height="100px" src={Ep1} alt="help_company"/>
                            <img width="200px" height="100px" src={Ep2} alt="help_company"/>
                            <img width="200px" height="100px" src={Ep3} alt="help_company"/>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </ListGroup>
                <Card.Body>
                <Button onClick={() => setLgShow(true)}>상세보기 </Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        세계 난민 구조 단체
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2> 설명</h2>
                        <img src={ModalKpro} width="100%" alt="modal_img3" />
                            인류는 전 세계에서 번성하며 동물이 가지고 있는 가죽, 뼈, 뿔, 기름, 고기 등을 얻기 위해, 단순히 사냥하는 재미를 위해서, 박제 등의 제작을 위해 등등 수많은 남획, 밀렵을 저질렀으며, 기후 변화를 일으키며 환경 변화에 적응하지 못한 동물들을 도태시키기도 했다. 현대 시기에 들어 인류는 사라져가는 생물들에 위협을 느끼고 멸종위기종을 지정해 관리할 필요성을 느끼기 시작했다.

                            멸종위기종을 지정하여 관리하는 가장 큰 이유는 생태계 보존이다. 간혹 멸종위기종이 도태되는 것은 자연의 섭리라며 어쩔 수 없다는 의견이 존재하기도 하고 심지어는 다른 생물이 멸종위기종의 자리를 대체할 것이라며 별 상관이 없다고 하기도 하는데, 적응이라는 측면에서는 맞는 말이지만 보존이라는 측면에서는 틀린 말이다.

                            생물은 자연의 섭리로 멸종할 수도 있다. K-Pg 멸종같이 인류 문명 이전에도 지구 환경 변화에 의한 대멸종은 있었다. 또한 다른 생물이 환경에 적응하며 그 자리를 메꾸게 된다는 말도 사실이다. 하지만 중요한 점은, 자연을 보존했다면 멸종하지 않았을 종들조차 인류의 개입으로 멸종하거나 멸종 위협을 받는 경우가 많아졌다는 것이다. 이는 서식지 파괴, 외래종 전파, 남획같은 직접적인 영향뿐만 아니라 지구 온난화같은 간접적인 영향도 포함한다. 이러한 인위적인 멸종으로 인한 불가역적인 피해는 지구상 모든 생물들에게 고스란히 돌아올 것이며, 인류와 인류 후손들에게도 돌이킬 수 없는 피해를 입힐 것이다.

                            인류가 멸종을 막는 것은 산업적, 경제적으로도 이득이다. 현대 인류도 동물이나 식물의 성분에서 추출한 물질을 그대로 이용하거나 비슷한 구조를 화학적으로 합성하여 산업 곳곳에서 이용하고있다. 인류를 구한 항생제라는 페니실린은 푸른곰팡이에서 발견되었고, 산업 필수재인 고무는 고무나무의 수액에서 비롯되었다. 하나의 종이 멸종한다는 것은 인류가 누릴 수 있는 지구의 자원이 하나 줄어든다는 것을 의미한다. 인류가 현생종을 최대한 보존하여 후손들에게 물려주기 위해, 그리고 먼 미래에 해당 종이 인류에게 도움이 될 가능성을 없애지 않게하기 위해서라서라도 멸종은 최대한 막는 것이 이득인 것이다.[2]

                            근대 이후 멸종된 종의 일부는 과학관 등지에서 박제된 모습으로 실물을 볼 수 있지만, 박제 표본도 없는 경우는 그림이나 화석 또는 화석을 근거로 한 추정 모델링으로만 볼 수 있다. 멸종 위기 동물은 세계적으로 포획, 수렵, 매매가 금지된 경우가 대부분이며[3] 몇몇 알려진 자연 서식지나 보호시설 등의 인공 서식지에서 볼 수 있다.

                            카타르의 일부 지역에서는 오일머니를 가지고 보호소를 만들어 멸종 위기 동물을 보호하고 번식시키는 일을 하고 있다고 한다. 인터넷의 글이므로 신뢰도는 반반이다. 단 보호소의 웹사이트는 실재한다.

                            드물게 인간의 남획이 원인이 아니라 자연 선택으로 인해 도태되어 가는 멸종위기종도 있는데 이런 종들도 전부 인간의 잘못으로 치부하여 보호해야 하는지에 대한 논쟁이 종종 있곤 하다. 대표적으로 태즈메이니아데블이 있는데, 이 동물은 2000년대 들어 ‘데블 안면 종양’이라는 이 동물에게만 발병하는 신종 암으로 인해 멸종위기에 처해있었으나, 인간이 치료법을 개발하여 점차 개체수가 늘고 있다. 멸종위기에 처하게 된 과정에는 그 어떠한 인간의 잘못도 없었으며, 오히려 인간이 아니었으면 이 동물은 그대로 멸종했을 것이다.

                            일반인들 눈에 낯선 동물들은 무조건 멸종위기종으로 간주하는 잘못된 풍조가 있다. 하프물범, 퓨마, 북극여우, 미어캣 등 낯설고 신기한 동물들에 대한 기사나 애완용으로 기르는 영상 등이 뜨면 꼭 멸종위기종이라고 성토하는 댓글이 달리곤 하지만 위 네 동물들은 전부 IUCN LC 등급으로 멸종위기종이 아니다.[4]

                            퓨마는 CITES 부속서에 해당된다지만 북극여우와 미어캣은 여기에도 해당되지 않는다. 이건 언론의 잘못도 큰데, 위 네 동물에 멸종위기를 붙여서 검색해보면 해당 동물들이 멸종위기라는 언론기사가 대량으로 뜬다. 반대로 흔해 보여 '어딜 봐서 멸종 위기 동물이냐!'고 할 법한 동물도 있으나 이 경우 대부분은 특정 국가나 지역에서만 서식하여 총 개체 수가 적거나 해당 지역의 서식 환경이 급격히 변화할 때 단번에 멸종으로 향할 위험이 있을 때다. 후술된 고라니가 이러한 대표 사례다. 다른 한편으로 해외의 이국적인 (그러나 멸종위험을 겪고 있지 않는) 생물들의 사진이 멸종위기종으로 홍보되며 세간의 관심을 받는 사이, 인간의 눈에 그리 잘생겨보이지 않으나 심각한 멸종위험을 겪고 있는 고유종 등이 관심의 뒤편으로 밀려나고 있다.

                            원래는 해당 동물의 이름 + IUCN을 붙여 구글 검색을 하면 최상단에 IUCN 등급이 떴으나 지금은 위키백과나 IUCN 홈페이지를 통해서만 확인 가능하다.

                            멸종위기 여부는 야생 개체수로 따지기 때문에 샴악어나 악어거북, 늑대거북처럼 사육 밎 양식이 보편화되어 개체수가 엄청 불어났음에도 야생 개체수가 적다는 이유로 등급이 높게 책정되는 경우가 많다.[5]

                            멸종 위기 식물 관련 내용은 멸종 문서를 참고.
                    </Modal.Body>
                </Modal>
                </Card.Body>
            </Card>
            </div>
        </MainStyled> 

        <E_Title>
            <button onClick={voteHandlerAni} > Animal click vote </button>
            <button onClick={voteHandlerKid} > Kid click vote</button>
            <button onClick={voteHandlerMin} > countMinority click vote </button>
        </E_Title>
        </>
    );
}


export default EarthVote;