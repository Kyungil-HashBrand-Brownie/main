import React, { useEffect, useState } from "react";
import "../../scss/detailCollecion.css";
import { nft1 } from "../../img/nft/";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { nftAction } from "redux/actions/nftAction";
/* 
    1. redux로 데이터 받기
*/

const DetailCollecion = () => {
  let params = useParams();
  // 리렌더링 해야 해당 페이지로 간다.
  let page = params.edition;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  /* 
    1. 현재 페이지 알기. params 알기 ,  내가 어떤 페이지를 보고 있는지.
    2. 마지막 페이지 알기
    3. 페이지에 근처 nft parmas띄우기
    4.  animation css 

    // total 페이지
    // 내가 어떤페이지를 보고있는지
    // 페이지 그룹
  */


  
  const [collectionData, setCollectionData] = useState({});
  const [collectionAlldata, setCollectionAllData] = useState(null);
  const [positionMiddle, setPositionMiddle] = useState(parseInt(page));

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

  const firstButton_collection = () => {
    // 총 데이터 개수 

    console.log('first')

  }

  const lastButton_collection = () => {
    console.log('last')
  }



  useEffect(() => {
    getData();
    // dispatch(nftAction.getDataCollecion(collectionData))
  }, [page]);

  return (
    <div>
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
              <button class="btn-hover color-9">OPENSEA</button>
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
        <div>
        <button onClick={()=>setPositionMiddle(2)}>first</button>
        <button onClick={()=>setPositionMiddle(positionMiddle - 5)}>pre</button>
        all data
        <button onClick={()=>setPositionMiddle(positionMiddle + 5)}>next</button>
        <button onClick={()=>setPositionMiddle(146)}>last</button>

          <div>
          {
            collectionAlldata!= null ? collectionAlldata.slice(positionMiddle-3, positionMiddle+2).map((item, idx) => <><img width='100px' key={idx} src={`/image/images/${item.addr}`} /></> )
            : null
          }
          </div>
        </div>
      </div>
      }
    </div>

  );
};

export default DetailCollecion;
