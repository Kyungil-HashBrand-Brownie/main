import styled from 'styled-components'

/* Header */
export const PFPContainer = styled.div`
  padding: 2px 10px;
  border: 3px solid;
  border-radius: 20px;
  background-color: #198754;
  border-color: #198754;
  letter-spacing: -1px;
  text-align: center;
  cursor: pointer;
  color: white;
  &:hover{  
    transform: scale(1.1);
  }

  @media(max-width: 550px) {
    font-size: 13px;
  }
`
export const StyledInfo = styled.div`
    width: 90%;
    height: auto;
    background-color: white;
    margin: auto;
    margin-top: 5px;
    /* transform: translate(17.5px, 0); */
    border-radius: 20px;
    line-height: 30px;
    text-align: center;
    z-index: 3;
    opacity: 90%;
    /* margin-right: 10px; */
    /* margin: auto; */

    .header-white {
        background: rgb(100,149,237);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        /* background: white; */
        padding-top: 3px;
        /* font-size: 19px; */
        font-weight: bold;
        /* letter-spacing: 1.0px; */
        border-bottom: 3px solid gray;
    }
    .header-line {
        display: flex;
        justify-content: center;
        align-items : center;
        font-weight: bold;
        /* font-size: 17px; */
    }
    .header-btk {
        transform: translateX(-5px);
    }
    /* .thick {
        font-weight: bold;
    } */

    @media(max-width: 550px) {
        font-size: 13px;
    }
`

/* Footer */

export const Foot = styled.div`
    display: flex;
    align-items: center;
    height: 120px;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;

    img {
        width: 100%;
        height:  100%;
    }
    /* fContainer1 */
    .fContainer {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        color: black;
        text-shadow: -2px -1px 6px white, 1rem 1rem 2em pink;
        font-weight: 800;
        font-size: 17px;
        line-height: 16px;
        align-items: flex-start;
        justify-content: space-between;
    } 
    .fContainer a {
        text-decoration: none;
        color: white; 
    }
    .fContainer a:link{
        text-decoration: none;
        color: white;
    }
    .fContainer a:visited{
        text-decoration: none;
        color: white;
    }
    .fContainer_left{
        display: flex;
        /* background: red; */
    }

    /* LEFT */
    .fContainer_left_content {
        margin-right: 30px;
        line-height: 40px;
    }
    /* RIGHT */
    .imgSection {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
    }
    .snsText{
        text-align: right;
    }
    .img_box {
        margin-top: 20px;
        padding-left: 20px;
    }
    .sns_logo{
        width: 36px;
        height: 36px;
    }

    /* 반응형 */
    @media (max-width: 768px) {
        .fContainer {
            line-height: 10px;
        }
        .fContainer_left_content {
            line-height: 30px;
        }
        .sns_logo {
            width: 24px;
            height: 24px;
        }
    }

    @media (max-width: 550px) {
        .fContainer{
            font-size: 14px;
        }
        .fContainer_left_content {
            line-height: 24px;
        }
        .sns_logo{
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 424px) {
        .fContainer{
            font-size: 11px;
        }
        .fContainer_left_content {
            line-height: 22px;
        }
    }
`