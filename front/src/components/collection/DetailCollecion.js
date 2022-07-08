import React, { useEffect, useState } from "react";
import "../../scss/detailCollecion.css";
import { nft1 } from "../../img/nft/";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { nftAction } from "redux/actions/nftAction";
import DetailCollectionModal from "./DetailCollectionModal";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  border-color: black;
  margin: 0rem 1.42rem 0rem 1.4rem;
`;


const DetailCollecion = () => {
  let params = useParams();
  // 리렌더링 해야 해당 페이지로 간다.
  let page = params.edition;
  const { loading } = useSelector(state => state.nft);

  // let [page, setPage] = useState(params.edition) 

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [collectionData, setCollectionData] = useState({});
  const [collectionAlldata, setCollectionAllData] = useState(null);
  const [positionMiddle, setPositionMiddle] = useState(parseInt(page < 3 ? 3 : page));
  // const [testData, settestData] = useState(1)

  console.log('pos: ', positionMiddle);

  const getData = async () => {
    let result = await Promise.all([axios.get('/api/image/images'), axios.get(`/api/image/image/${page}`)])
    // let result = await axios.get(`/image/image/${page}`);
    console.log(result)
    let data = result[1].data[0]; // 데이터 배열 형식을 객체로 바꾸기 위해서
    console.log("dataaaaaa" , data);
    let allData = result[0].data.map(a => {
      let d = {};
      d.edition = a.edition;
      d.addr= a.addr;
      return d
    }).sort((a,b) => parseInt(a.edition) - parseInt(b.edition))
    console.log("all data " , allData)


    setCollectionData(data)
    setCollectionAllData(allData)
    console.log("addr",data.addr)
    // setPositionMiddele(data.)
  };

  const preButton_collection = () => {
    console.log("pre")

    navigate(`/detailcollection/${collectionData.edition -1}`)
  }

  const nextButton_collection = () => {
    console.log("next")
    navigate(`/detailcollection/${collectionData.edition + 1}`)
    // navigate(`/detailcollection/${collectionData.edition } `)
    // console.log(collectionData.edition)
  }



  useEffect(() => {
    
    getData();
    // dispatch(nftAction.getDataCollecion(collectionData))
  }, [page]);

  return (
    <div>
      <ClipLoader loading={loading} css={override} size={20} />
      {collectionData.addr &&
      <div className="layout-container">
        <div className="detailImglNft-item1">
          <div className="detailImglNft-mainImg">
            <img src={`/api/image/images/${collectionData.addr}`} alt="subI1" />
          </div>
          <div className="detailImglNft-subImg">
            <div className="detailImglNft-subImg_item">
              <img alt="subI1" src={`/api/image/images/${collectionData.addr}`} />
            </div>
            <div className="detailImglNft-subImg_item">
              <img alt="subI1" src={`/api/image/images/${collectionData.addr}`} />
            </div>
            <div className="detailImglNft-subImg_item">
              <img alt="subI1" src={`/api/image/images/${collectionData.addr}`} />
            </div>
          </div>
        </div>
        <div className="detailImglNft-item2">
          <div className="detailImglNft-description_1">
            <div className="detailTitle"> Browny # {collectionData.edition} </div>
            <p> charactor : Browny , angel, 메타몽 </p>
            <div className="detail_OwnedBy"> Owned by #2ad355njnjnjn</div>
            <div className="btn-opensea">
              <button className="btn-hover color-9">OPENSEA</button>
            </div>
            <button className="btn-hover color-5" onClick={() =>preButton_collection()}>pre</button>
            <button className="btn-hover color-5" onClick={() =>nextButton_collection()}>next</button>
          </div>
          <div className="detailImglNft-description_2">
            <div className="div-section">
              <div className="left-layout">
                  Body : 
                </div>
              <div className="right-layout">
                {collectionData.Body}
              </div>
            </div>
            <div className="div-section">
              <div className="left-layout">Eye : </div>
              <div className="right-layout">
                {collectionData.Eye}
              </div>
            </div>
            <div className="div-section">
              <div className="left-layout">Mouth :  </div>
              <div className="right-layout">{collectionData.Mouth} </div>
            </div>
            <div className="div-section">
              <div className="left-layout">Item :  </div>
              <div className="right-layout">{collectionData.Item} </div>
            </div>
            <div className="div-section">
              <div className="left-layout">Background : </div>
              <div className="right-layout">{collectionData.Back} </div>
            </div>
          </div>
          <div className="detailImglNft-description_3">상세 내용</div>
        </div>

      </div>
      }
        <DetailCollectionModal  collectionAlldata={collectionAlldata} page={page}/>
    </div>

  );
};

export default DetailCollecion;
