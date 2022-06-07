import React , {useState ,useEffect} from 'react';
import styled from 'styled-components';
import PFP from '../img/profile1.png';
import contractABI from "./VoteContract.json"


const ProfileContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 15%;
  width: 300px;
  height: 400px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
`
const PFPContainer = styled.img`
  margin-top: 10px;
  width: 280px;
  height: 280px;
  border: 3px solid brown;
  border-radius: 20%;
`
const PFPDescription = styled.div`
  margin-left: 40px;
  margin-top: 25px;
  width: 200px;
  height: 60px;
  border: 1px solid brown;
  text-align: center;
`

const Profile = () => {

  const [address, setAddress] = useState("")
  const [balance, setBalance] = useState(0)

  const test = async () => {
    console.log(window.klaytn._kaikas.isEnabled())
    console.log(await window.klaytn._kaikas.isUnlocked())
    console.log(await window.klaytn._kaikas.isApproved())

  }
  
  test()


  window.klaytn.on('accountsChanged', async function(accounts) {
    // Your code
    setAddress(accounts[0]);
    console.log(address)
    const balance = await window.caver.klay.getBalance(window.klaytn.selectedAddress)
    setBalance(balance)
  })
  


  return (
      <ProfileContainer>
        <div>
        <PFPContainer src={PFP} />
          <PFPDescription >
            <div>name: 박승재</div>
            <div>age: 30</div>
            <div>{address}</div>
            <div>{balance}</div>
          </PFPDescription>
        </div>
      </ProfileContainer>
  )
}

export default Profile