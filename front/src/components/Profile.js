import React from 'react';
import styled from 'styled-components';
import PFP from '../img/profile1.png';

const ProfileContainer = styled.div`
  float: right;
  /* background-color: red; */
  width: 300px;
  height: 400px;
  border: 2px solid black;
  margin-right: 10px;
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
  return (
      <ProfileContainer>
        <div>
          <PFPContainer src={PFP}/>
          <PFPDescription >
            <div>name: 박승재</div>
            <div>age: 30</div>
          </PFPDescription>
        </div>
      </ProfileContainer>
  )
}

export default Profile