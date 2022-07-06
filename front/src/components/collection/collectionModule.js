import styled from 'styled-components'

/* CollectionMain */

export const CollectionMainOuter = styled.div`
    margin-left: 100px;
    width: 1300px;
    min-height: 160px;
    background: rgba(255, 255, 255, 0.56);
    border: 3px solid white;
    border-radius: 20px;
    margin-bottom: 20px;
    transform: translate(10%, 0);
`
export const CollectionHeader = styled.div`
    text-align: center;
    font-size: 45px;
    font-weight: bold;
`
export const CollectionBody = styled.div`

    display: flex;
    transform: translate(3.5%, 0);
    min-height: 250px;
    margin-top: 30px;
    border-radius: 15px;
    flex-wrap: wrap;
`
export const CollectionRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0 15px 0;
    // background: lightgray;
    height: 300px;
    border-radius: 5px;
    align-items: center;
`
export const CollectionCardOuter = styled.div`
    width: 220px;
    height: 270px;
    background: white;
    margin: 10px 10px;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: pink 6px 5px;
    margin-bottom: 20px;

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
    width: 200px;
    height: 250px;
    margin: auto;
    margin-top: 10px;
`
export const CollectionCardDetail = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

/* Filter */

export const FilterOuter = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
export const FilterInner = styled.div`
    width: 300px;
    height: 90%;
`
export const FilterHeader = styled.div`
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
`
export const FilterMain = styled.div `
    width: 80%;
    margin: auto;
    margin-top: 10px;
    background: white;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`
export const FilterText = styled.div`
    background: pink;
    border-radius: 10px;
    width: 90px;
    padding: 0 10px;
`
export const FilterSubHeader = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
`
export const FilterOption = styled.div`
    width: 90%;
    height: 40px;
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        font-size: 20px;
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

/* Sort */

export const SortOuter = styled.div `
    position: absolute;
    left: 2%;
    top: 13%;
    margin-left: 30px;
    margin-top: 50px;
    width: 350px;
    height: auto;
    min-height: 700px;
    border: 3px solid white;
    border-radius: 10px;
    background: rgb(241, 149, 165);
    box-shadow: white 7px 10px 7px;
`
export const SortHeader = styled.div`
    margin-left: 10px;
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
    border-radius: 10px;
    width: 80px;
    padding: 0 10px;
`
export const SortTopOuter = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    height: 190px;
    background: white;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`
export const SortTopInner = styled.div`
    width: 300px;
    height: 170px;
`
export const SortOption = styled.div`
    height: 40px;
    font-size: 18px;
    margin: 0 15px 1px;
    cursor: pointer;

    &:hover {
        font-size: 20px;
    }
`