import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft , faAngleLeft , faAngleRight  , faAnglesRight} from "@fortawesome/free-solid-svg-icons";



const DetailCollectionModal = ({collectionAlldata,page,bool}) => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [positionMiddle, setPositionMiddle] = useState(parseInt(page < 3 ? 3 : page));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
    
    useEffect(()=> {
        // 뭐가 바뀔때마다
        setShow(false)
    },[page])

    return (
        <>
            <button onClick={() => setShow(true)} className="but raise">
                More<br />NFT
            </button>

            <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            className='ModalPosition'
            >
                <Modal.Body className='collectionmodal-body'>
                <div className="modal_content_postion" >
                        <div className='addf1'>
                            #{positionMiddle - 2} ~ #{positionMiddle + 2}
                        </div>
                        <button className='button arrowDetailLeft absLL fill' onClick={()=>setPositionMiddle(3)}>            
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </button>
                        <button className='button arrowDetailLeft absLeft fill' onClick={()=>setPositionMiddle(positionMiddle > 7 ? positionMiddle - 5 : 3)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>

                        <button className='button arrowDetailRight absRight fill' onClick={()=>setPositionMiddle(positionMiddle < 193 ? positionMiddle + 5 : 198)}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <button className='button arrowDetailRight absRR fill' onClick={()=>setPositionMiddle(198)}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                </div>
                <div>
                <Slider {...settings}>
                {
                    // bool === !bool {
                    collectionAlldata!= null ? 
                    collectionAlldata.slice(positionMiddle-3, positionMiddle+2).map((item, idx) => 
                    <div className='modal-collection-box' key={idx}>
                    <img
                    className='modal-collection-img' 
                    alt="" onClick={() => { 
                    setPositionMiddle(item.edition < 3 ? 3 : item.edition < 199 ? item.edition : 198)
                    navigate(`/detailcollection/${item.edition}`)}}
                    // selectCollection()}
                    src={`/api/image/images/${item.addr}`}
                    />
                    <div className='modal-collection-detail'>#{item.edition}</div>
                    </div>
                    )
                    : null
                }
                </Slider>
                </div>
                </Modal.Body>   

                </Modal>
        </>
    );
  }
  

export default DetailCollectionModal;
