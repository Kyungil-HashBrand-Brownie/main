import styled from 'styled-components'

/* VoteDetail */
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
    .proposal-btn {
        margin-left: 1%;
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
`
export const VoteButton = styled.button`
    width: 160px;
    font-size: 18px;
    border-radius: 3px;
    margin-top: 30px;
`
export const ControlButton = styled.div`
    width: 25%;
    margin: auto;
    text-align: center;
`
export const PageButton = styled.button`
    width: 160px;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 3px;
`

/* VoteDescription */

export const DescriptionOuter = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
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
    width: 530px;
    margin: auto;
    margin-top: 10px;
`
export const VoteTCHeader = styled.div`
    height: 100px;
    display: flex;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
`
export const VoteTCContent = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
    width: 80%;
    height: 100%;
`
export const VoteTCUser = styled.div`
    font-size: 35px;
    text-shadow: 0 0 1em blue, 0 0 0.2em pink;
`
export const VoteTCState = styled.div`
    position: absolute;
    font-weight: bold;
    transform: translate(348px, -35px);
`
export const VoteTCBodyOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    margin-top: 20px;
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
    width: 70%;
    height: 92%;
    text-align: justify;
    border: 2px solid green;
    border-bottom: none;
    border-right: none;
    border-top-left-radius: 8px;
`

/* CommunityTopic */

export const TopicOuter = styled.div`
    width: 60%;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: white;
`
export const TopicHeader = styled.div`
    text-align: center;
    border-bottom: 2px solid black;
    font-size: 20px;
    font-weight: bold;
    background: pink;
`
export const Topic = styled.div`
    width: 50%;
    font-size: 18px;
    border-radius: 10px;
    padding: 0px 15px;
    margin: auto;
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