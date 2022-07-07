import React, { useEffect, useState } from "react";
import "../../scss/detailCollecion.css";
import { nft1 } from "../../img/nft/";
import { useParams } from "react-router-dom";
import axios from "axios";
/* 
    1. redux로 데이터 받기
*/

const DetailCollecion = () => {
  let params = useParams();
  console.log(params);

  
  const [collectionData, setCollectionData] = useState({});

  const getData = async () => {
    let result = await axios.get(`/api/image/image/${params.edition}`);
    let data = result.data[0]; // 데이터 배열 형식을 객체로 바꾸기 위해서
    console.log(data);

    setCollectionData(data)
    console.log("addr",data.addr)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <button className="bubbly-button" onClick={() =>animateButton()}>Click me!</button> */}
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
              <button class="btn-hover color-9">OPENSEA</button>
            </div>
            {/* <button className="btn-hover color-5">BUTTON</button> */}
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
              <div className="left-layout">eye : </div>
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
    </div>
  );
};

export default DetailCollecion;
