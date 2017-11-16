import React from 'react';
import { Carousel } from 'react-materialize';
import { Banner, SquareButton } from './../../common';

const styles = {
  button: {
    margin: '10px'
  }
};

const HomeCarousel = props => (
  <Carousel options={{ 
    fullWidth: true,
    duration: 100, 
    indicators: true 
    }}>
    <div>
      <Banner img='./assets/images/career/career-1.jpg' textColor='white'>
        <div className='container-80 carousel-content'>
          <h2>Georgia Tech Total Person Program</h2>
          <div className='page-contaier'>
            <h2 className="header">Our Mission</h2>
            <p className="mission-text">Georgia Tech Athletics inspires and empowers student-athletes to be champions in academics, competition, and life.</p>
          </div>
          <SquareButton backgroundColor='#eeb211' textColor='#262626' url='#about'>Learn More</SquareButton>
          <SquareButton backgroundColor='#eeb211' textColor='#262626' url='/get-involved'>Get Involved</SquareButton>
        </div>
      </Banner>
    </div>
    <div>
      <Banner img='./assets/images/community-service/community-service-1.JPG' textColor='white'>
        <h1>Second panel</h1>
      </Banner>
    </div>
    <div>
      <Banner img='./assets/images/jwob/JWOB3.JPG' textColor='white'>
        <h1>Third panel</h1>
      </Banner>
    </div>
    <div>
      <Banner img='./assets/images/career/career-3.jpg' textColor='white'>
        <h1>Fourth panel</h1>
      </Banner>
    </div>
  </Carousel>
);

export default HomeCarousel;