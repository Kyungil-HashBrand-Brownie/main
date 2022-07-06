import React from 'react'
import styled from 'styled-components'

const VoteTCardOuter = styled.div`
    display: flex;
    flex-direction: column;
    width: 530px;
    /* height: 350px; */
    /* background: green; */
    margin: auto;
    margin-top: 10px;
`
const VoteTCHeader = styled.div`
    height: 100px;
    /* background: purple; */
    display: flex;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
    /* margin: auto; */
`
const VoteTCImage = styled.div`
    /* background: orange; */
    width: 20%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-image: 
        ${props => props.img && `url(${props.img})`};
`
const VoteTCContent = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
    /* flex-direction: row; */
    /* font-size: 35px; */
    /* background: red; */
    width: 80%;
    height: 100%;
`
const VoteTCUser = styled.div`
    font-size: 35px;
    text-shadow: 0 0 1em blue, 0 0 0.2em pink;
    /* background: blue; */
`
const VoteTCState = styled.div`
    position: absolute;
    font-weight: bold;
    transform: translate(348px, -35px);
    /* background: green; */
`
const VoteTCBodyOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    margin-top: 20px;
    /* background: orange; */
`
const VoteTCBody = styled.div`
    width: 98%;
    height: 98%;
    border: 5px solid orange;
    border-radius: 12px;
    /* width: 100%; */
    /* height: 100%; */
    /* padding: 10px; */
    /* background: brown; */
`
const VoteTCBodyHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    background: pink;
`
const VoteTCBodyTitle = styled.div`
    width: 70%;
    font-size: 30px;
    /* background: green; */
    margin-left: 10px;
`
const VoteTCBodyVoteCount = styled.div`
    width: 25%;
    font-size: 23px;
    /* background: lightgreen; */
    margin-left: 2%;
`
const VoteTCBodyMain = styled.div`
    display: flex;
    /* background: lightblue; */
    height: 70%;
`
const VoteTCBodyContent = styled.div`
    /* background: red; */
    margin-left: 2%;
    margin-top: 1%;
    width: 70%;
    height: 92%;
    text-align: justify;
    border: 2px solid green;
    border-bottom: none;
    border-right: none;
    border-top-left-radius: 8px;
`
const VoteTCBodyImg = styled.div`
    border: 1px solid black;
    margin-top: 1%;
    margin-left: 1.5%;
    background: gray;
    width: 25%;
    height: 92%;
    background-size: cover;
    background-image: 
        ${props => props.img && `url(${props.img})`};
`

const VoteTableCard = ({ img, img1 }) => {
    return (
        <VoteTCardOuter>
            <VoteTCHeader>
                <VoteTCImage img={img}></VoteTCImage>
                <VoteTCContent> 
                    <VoteTCUser><i>Username</i></VoteTCUser>
                    <VoteTCState>완료</VoteTCState>
                </VoteTCContent>
            </VoteTCHeader>
            <VoteTCBodyOuter>
                <VoteTCBody>
                    <VoteTCBodyHeader> 
                        <VoteTCBodyTitle>투표 주제 </VoteTCBodyTitle>
                        <VoteTCBodyVoteCount> 153 Vote</VoteTCBodyVoteCount>
                    </VoteTCBodyHeader>
                    <VoteTCBodyMain>
                        <VoteTCBodyContent>투표 내용 설명~</VoteTCBodyContent>
                        <VoteTCBodyImg img={img1}></VoteTCBodyImg>
                    </VoteTCBodyMain>
                </VoteTCBody>
            </VoteTCBodyOuter>
        </VoteTCardOuter>
    )
}

export default VoteTableCard