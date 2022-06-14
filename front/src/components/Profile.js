import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import PFP from '../img/profile1.png';

const ProfileContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 0px;
  /* width: 250px; */
  /* height: 360px; */
  border: 2px solid black;
  display: flex;
  justify-content: center;
  background: white;
`
const PFPContainer = styled.img`
  position: fixed;
  right: 10px;
  top: 0px;
  margin-top: 10px;
  margin-left: 1px;
  width: 50px;
  height: 50px;
  border: 3px solid brown;
  border-radius: 100%;
  cursor: pointer;
  &:hover{  
    transform: scale(1.1);
  }
`
const PFPDescription = styled.div`
  margin-left: 31px;
  margin-top: 25px;
  width: 160px;
  height: 60px;
  border: 1px solid brown;
  text-align: center;
`

const Profile = () => {

  const [address, setAddress] = useState("")
  const [balance, setBalance] = useState(0)


  useEffect(() => {
  }, [])
  
  return (
      <ProfileContainer>
        {/* <PFPContainer src={PFP} />
          <PFPDescription >
            <div>name: 박승재</div>
            <div>age: 30</div>
            <div>{address}</div>
            <div>{balance}</div>
          </PFPDescription> */}
      </ProfileContainer>
  )
}

export default Profile