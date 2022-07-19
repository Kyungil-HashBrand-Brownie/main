import styled from 'styled-components'

/* CommunityRead */
export const VoteReadState = styled.div`
    position: absolute;
    top: 43%;
    right: 23%;
`
export const VoteTCReadImg = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-size: cover;
    background-image:
        ${props => props.img && `url(${props.img})`};
`
export const VoteTCBodyImg = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-size: cover;
    background-image:
        ${props => props.img && `url(${props.img})`};
    cursor: pointer;

    &:hover {
        transform: scale(1.06);
    }
`
export const VoteDOuter = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
export const VoteDLeftOuter = styled.div`
    position: absolute;
    right: 1%;
    top: 8%;
    display: flex;
    justify-content: center;
    width: 300px;
    max-height: 120px;
    margin-left: 5%;
    margin-top: 5%;
`
export const VoteDRightOuter = styled.div`
    margin: auto;
    justify-content: center;
    background: white;
    padding-bottom: 30px;
    width: 1200px;
    min-height: 600px;
    border-radius: 20px;
`
export const VoteDHeaderOuter = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`
export const VoteDHeader = styled.div`
    width: 20%;
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
`
export const VoteDMainOuter = styled.div`
    display: flex;
    justify-content: center;
    min-height: 500px;
    margin-top: 30px;
`
export const VoteDMain = styled.div`
    width: 95%;
    background: linear-gradient(orange 0%, orange 4.89%, white 35%, white 90.9%);
    border: 4mm ridge rgba(211, 220, 50, .6);
    border-radius: 10px;
`
export const VoteDPart = styled.div`
    margin: auto;
    display: flex;
    width: 90%;
    min-height: 50px;
    align-items: center;
    margin-top: 10px;

    .vote-textarea {
        margin-left: 2%;
        width: 820px;
    }
    .vote-text {
        margin-left: 2%;
    }
    .proposal {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 3px;
    }
    .proposal-form {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        margin-top: 5px;
    }
    .proposal-btn {
        margin-left: 1%;
        width: 70px;
        height: 30px;
        border: 2px solid orange;
        border-radius: 3px;
    }
    .proposal-del-div {
        width: 70px;
        height: 30px;
        margin-left: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .proposal-del {
        width: 23px;
        height: 23px;
        cursor: pointer;
    }
    .proposal-btn:hover, .proposal-del:hover {
        transform: scale(1.05);
        background: rgb(212, 201, 201);
    }
    .proposal-input {
        margin-bottom: 30px;
    }
`
export const VoteDType = styled.div`
    margin-left: 1%;
    width: 11%;
    height: 100%;
    font-size: 20px;
    border-radius: 3px;
    text-align: center;
`
export const VoteDArea = styled.div`
    width: 80%;
    margin-left: 2%;
`
export const VoteButtonDiv = styled.div`
    width: 25%;
    margin: auto;
    text-align: center;
    /* background: red; */
    margin-top: 30px;
`
export const VoteButton = styled.button`
    width: 160px;
    font-size: 18px;
    border-radius: 3px;
    border: 2px solid orange;

    &:hover {
        transform: scale(1.05);
        background: rgb(212, 201, 201);
    }
`
export const ControlButton = styled.div`
    width: 25%;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
`
export const PageButton = styled.button`
    width: 160px;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 3px;
    border: 2px solid orange;

    &:hover {
        transform: scale(1.05);
        background: rgb(212, 201, 201);
    }
`

/* VoteDescription */

export const DescriptionOuter = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
export const Description = styled.div`
    background: lightgray;
    letter-spacing: 2.5px;
    padding: 20px;
    font-size: 19px;
    border-radius: 30px;
    width: 1000px;
`

/* VoteTableCard */

export const VoteTCardOuter = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    margin: auto;
    margin-top: 60px;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`
export const VoteTCHeader = styled.div`
    height: 100px;
    display: flex;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
`
export const VoteTCContent = styled.div`
    display: flex-end;
    align-items: center;
    width: 100%;
`
export const VoteTCUser = styled.div`
    font-size: 15px;
    text-shadow: 0 0 1em blue, 0 0 0.2em pink;
    text-align: center;
`
export const VoteTCState = styled.div`
    /* position: absolute; */
    font-weight: bold;
    float: right;
    border-radius: 10px;
    padding: 0px 5px;
    background: 
        ${props => props.state === '투표 종료' ? 'coral'
                    : props.state === '승인 대기 중' ? 'yellow' 
                    : 'green'
        };
`
export const VoteTCBodyOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
`
export const VoteTCBody = styled.div`
    width: 98%;
    height: 98%;
    border: 5px solid orange;
    border-radius: 12px;
`
export const VoteTCBodyHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    background: pink;
`
export const VoteTCBodyTitle = styled.div`
    width: 70%;
    font-size: 30px;
    margin-left: 10px;
`
export const VoteTCBodyVoteCount = styled.div`
    width: 25%;
    font-size: 23px;
    margin-left: 2%;
`
export const VoteTCBodyMain = styled.div`
    display: flex;
    height: 70%;
`
export const VoteTCBodyContent = styled.div`
    margin-left: 2%;
    margin-top: 1%;
    width: 67%;
    height: 92%;
    padding: 4px 8px;
    text-align: justify;
    border: 2px solid green;
    border-radius: 8px;
`
export const VoteTCBodyProfile = styled.div`
    width: 27%;
    /* border: 2px solid green; */
    margin: auto;
    height: 140px;
`

/* CommunityTopic */

export const TopicOuter = styled.div`
    width: 60%;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: white;
`
export const TopicHeader = styled.div`
    text-align: center;
    border-bottom: 2px solid black;
    font-size: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-weight: bold;
    background: pink;
`
export const Topic = styled.div`
    width: 50%;
    font-size: 18px;
    border-radius: 10px;
    padding: 0px 15px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1);
        border-radius: 10px;
        background: pink;
    }
`

/* CommunityVoteTable */

export const VoteCTable = styled.div`
    width: 1200px;
    height: 800px;
    background: white;
`
export const VoteCTBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const VoteCTRow = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    margin-bottom: 10px;
`