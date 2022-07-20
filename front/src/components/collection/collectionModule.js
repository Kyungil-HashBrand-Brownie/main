import styled from 'styled-components'

/* CollectionMain */

export const CollectionCardImg = styled.div`
    width: 100%;
    height: 200.003px;
    background-image: url(
        ${(props) => props.image && props.image});
    background-size: cover;
`

export const CollectionMainOuter = styled.div`
    /* margin-left: 99.998px; */
    /* margin-left: 8%; */
    /* margin-left: 100px; */
    width: 1299.997px;
    min-height: 159.998px;
    background: rgba(255, 255, 255, 0.56);
    border: 3px solid white;
    border-radius: 20.002px;
    position: relative;
    top: 8%;
    left: 28%;
    /* margin-bottom: 20.002px; */
    /* transform: translate(10%, 0); */
    /* transform: translate(30%, -5.7%); */

    @media screen and (max-width: 1500px) {
        margin-left: -200px;
    }
`
export const CollectionHeader = styled.div`
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-top: 20px;
`
export const CollectionBody = styled.div`

    display: flex;
    transform: translate(3.5%, 0);
    min-height: 249.997px;
    margin-top: 30px;
    border-radius: 15px;
    flex-wrap: wrap;
`
export const CollectionRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 9.998px 0 15px 0;
    // background: lightgray;
    height: 300px;
    border-radius: 5.003px;
    align-items: center;
    /* @media screen and (max-width: 699.997px) {
        display: none;
        margin-left:99.998px;
    } */
`
export const CollectionCardOuter = styled.div`
    width: 219.997px;
    height: 270px;
    background: white;
    margin: 9.998px 9.998px;
    cursor: pointer;
    border: 0.998px solid gray;
    border-radius: 9.998px;
    box-shadow: pink 6px 5.003px;
    margin-bottom: 20.002px;

    &:hover {
        transform: scale(1.05);
    }

    ::before {
        content: '';
        /* position: absolute; */
        background: red;
        opacity: 0.9;
    }
`
export const CollectionCard = styled.div`
    width: 200.003px;
    height: 249.997px;
    margin: auto;
    margin-top: 9.998px;
`
export const CollectionCardDetail = styled.div`
    width: 100%;
    height: 39.998px;
    margin-top: 5.003px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CollectionNoItem = styled.div`
    display: flex;
    background: white;
    margin: auto;
    font-size: 30px;
    width: 90%;
    margin-left: 18px;
    border-radius: 40px;
    height: 200px;
    align-items: center;
    justify-content: center;
`

/* Filter */

export const FilterOuter = styled.div`
    margin-top: 15.002px;
    margin-bottom: 20.002px;
`
export const FilterInner = styled.div`
    width: 300px;
    /* height: 90%; */
`
export const FilterHeader = styled.div`
    margin-left: 9.998px;
    font-size: 30px;
    font-weight: bold;
`
export const FilterMain = styled.div `
    width: 80%;
    margin: auto;
    margin-top: 9.998px;
    background: white;
    display: flex;
    border-radius: 20.002px;
    justify-content: center;
    align-items: center;
`
export const FilterText = styled.div`
    background: pink;
    border-radius: 9.998px;
    width: 90px;
    padding: 0 9.998px;
`
export const FilterSubHeader = styled.div`
    margin-bottom: 9.998px;
    margin-top: 9.998px;
`
export const FilterOption = styled.div`
    width: 90%;
    height: 39.998px;
    font-size: 16px;
    margin: 0 10px 0.998px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        font-size: 18.002px;
    }
`
export const FilterContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
export const FilterContent = styled.div`
    display: flex;
    align-items: center;
    /* background:red; */
    height: 35px;

    .arrow-icon {
        position: relative;
        right: 10%;
        cursor: pointer;
    }

    &:hover {
        .arrow-icon {
            transform: scale(1.2);
        }
    }
`

/* FilterDetail */

export const FilterDetailOuter = styled.div`
    width: 100%;
    margin: 8.002px 0;
    border-top: 2.002px solid black;
    border-bottom: 2.002px solid black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 4px;
    /* background: red; */
`
export const FilterDetailBox = styled.div`
    margin: auto;
    background: white;
    /* min-width:  */
        /* ${props => props.info.includes('Background') ? '150px' : '120px'}; */
    margin-top: 6px; 
    /* margin-bottom: 3.998px;  */
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    background: rgb(151, 223, 220);  
    border-radius: 9.998px; 
    padding: 0 5px;

    &:hover {
        transform: scale(1.03)
    }

    img {
        position: absolute;
        width: 20.002px;
        height: 20.002px;
        transform: translate(0, -12px);
    }
`

/* Sort */

export const SortOuter = styled.div `
    position: absolute;
    left: 2%;
    top: 60px;
    /* margin-left: 30px; */
    margin-top: 50.002px;
    width: 20%;

    /* min-height: 699.997px; */
    border: 3px solid white;
    border-radius: 9.998px;
    background: rgb(241, 149, 165);
    box-shadow: white 6.997px 9.998px 6.997px;

    @media screen and (max-width: 1500px) {
        /* max-width: 5%; */
        /* width: 180px; */
        display: none ;


    }

`
export const SortHeader = styled.div`
    margin-left: 9.998px;
    margin-top: 3px;
    font-size: 30px;
    font-weight: bold;
`

/* SortTop */

export const SortTopHeader = styled.div`
    margin-bottom: 15px;
`
export const SortTopText = styled.div`
    background: pink;
    border-radius: 9.998px;
    width: 90px;
    padding: 0 9.998px;
`
export const SortTopOuter = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 9.998px;
    height: 189.998px;
    background: white;
    display: flex;
    border-radius: 20.002px;
    justify-content: center;
    align-items: center;
`
export const SortTopInner = styled.div`
    width: 300px;
    /* height: 170.002px; */
`
export const SortOption = styled.div`
    height: 39.998px;
    font-size: 16px;
    margin: 0 15px 0.998px;
    cursor: pointer;

    &:hover {
        font-size: 18.002px;
    }
`