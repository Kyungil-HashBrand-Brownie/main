import React, { useEffect, useState } from "react";
import "../../scss/detailCollecion.css";
import { nft1 } from "../../img/nft/";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { nftAction } from "redux/actions/nftAction";
import DetailCollectionModal from "./DetailCollectionModal";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import ImgComponent from "components/ImgComponent";


const DetailCollecion = () => {
  let params = useParams();
  // 리렌더링 해야 해당 페이지로 간다.
  let page = params.edition;
  const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState({});
  const [collectionAlldata, setCollectionAllData] = useState(null);

  const getData = async () => {
    let result = await Promise.all([axios.get('/api/image/images'), axios.get(`/api/image/image/${page}`)])
    let data = result[1].data[0]; // 데이터 배열 형식을 객체로 바꾸기 위해서
    let allData = result[0].data.map((item, index) => {
      return {edition: item.edition, addr: item.addr};
    }).sort((a,b) => parseInt(a.edition) - parseInt(b.edition))

    setCollectionData(data)
    setCollectionAllData(allData)
  };

  const preButton_collection = () => {
    console.log("pre")
    if (parseInt(collectionData.edition) <= 10 ) {
      navigate(`/detailcollection/1`)
    } else{
      navigate(`/detailcollection/${collectionData.edition -1}`)
    }
  }

  const nextButton_collection = () => {
    console.log("next")
    if (parseInt(collectionData.edition) >= 200 ) {
      navigate(`/detailcollection/200`)
    } else{
      navigate(`/detailcollection/${collectionData.edition + 1}`)
    }
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <ImgComponent />
      {collectionData.addr &&
      <div className="layout-container">
        <div className="detailImglNft-item1">
            <img src={`/api/image/images/${collectionData.addr}`} alt="subI1" />
        </div>
        <div className="detailImglNft-item2">
          <div className="detailImglNft-description_1">
            <div className="div-section-two">

              <div className="left-layout">              
                <button className="btn-hover color-9" onClick={() =>preButton_collection()}>pre</button>
              </div>
              <div className="detailTitle"> Browny #<i>{collectionData.edition}</i> </div>
              <div className="right-layout">
                <button className="btn-hover color-9" onClick={() =>nextButton_collection()}>next</button>
              </div>
            </div>
          </div>
          <div className="detailImglNft-description_2">
            <div className="div-section">
              <div className="left-layoutP">
                  Body  
                </div>
              <div className="right-layout">
                <i>{collectionData.Body}</i>
              </div>
            </div>
            <div className="div-section">
              <div className="left-layoutP">Hat</div>
              <div className="right-layout">
                <i>{collectionData.Hat}</i>
              </div>
            </div>
            <div className="div-section">
              <div className="left-layoutP">Face</div>
              <div className="right-layout"><i>{collectionData.Face}</i></div>
            </div>
            <div className="div-section">
              <div className="left-layoutP">Item</div>
              <div className="right-layout"><i>{collectionData.Item}</i></div>
            </div>
            <div className="div-section">
              <div className="left-layoutP">Background</div>
              <div className="right-layout"><i>{collectionData.Back}</i></div>
            </div>
          </div>
          {/* <div className="detailImglNft-description_3">상세 내용</div> */}
        </div>

      </div>
      }
        <DetailCollectionModal  collectionAlldata={collectionAlldata} page={page}/>
    </div>

  );
};

export default DetailCollecion;
