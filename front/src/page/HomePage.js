import React from 'react'
import { Container, Col } from 'react-bootstrap';
import Home from 'components/home/Home'
import Viliage from 'components/home/Viliage'
import SlideShow from 'components/home/SlideShow'
import HomeImgCard from 'components/home/HomeImgCard'
import Team from 'components/home/Team'

const HomePage = () => {
    let mainText = document.getElementsByClassName("slidediv")

    window.addEventListener('scroll', function() {
      let value = window.scrollY;
      let loc = window.location.href;
      if (loc == 'http://localhost:3000/') {
        if ((value > 1800 && value < 1820) || (value < 930 && value > 900)) {
          mainText[0].style.animation ='disappear 1s ease-out forwards';
        } else  {
          mainText[0].style.animation='slide 1s ease-out'
        }
      }
    })

    return ( 
      <>
        <Home />
        <Viliage />
        <Container className='main-container'>
          <Col>
            <div className="slidediv">
              Love <br /> Your Browny
            </div>
          </Col>
          <Col className="main-img-col">
              <SlideShow />
          </Col>
        </Container>
        <HomeImgCard />
        <Team />
      </>
    )
}

export default HomePage