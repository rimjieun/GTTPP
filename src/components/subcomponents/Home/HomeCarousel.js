import React from 'react';
import { Carousel } from 'react-materialize';
import { Banner, SquareButton } from './../../common';

const HomeCarousel = props => (
  <Carousel options={{ 
    fullWidth: true,
    duration: 400, 
    indicators: true 
    }}>
    <div>
      <Banner img='./assets/images/teams/gtfb.jpg' textColor='white'>
        <div style={{marginTop: '50px'}} className='flex-col'>
          <h1 style={{color: '#eeb211', fontSize: '80px'}}>Georgia Tech<br />Total Person Program</h1>
          <h4>Our Mission</h4>
          <h6 style={{width: '500px', fontWeight: 'normal', fontStyle: 'italic', fontSize: '20px', lineHeight: '30px'}}>Georgia Tech Athletics inspires and empowers student-athletes to be champions in academics, competition, and life.</h6>
          <div style={{marginTop: '20px'}} className='flex-row content-center'>
            <SquareButton backgroundColor='#eeb211' textColor='#262626' url='#about'>Learn More</SquareButton>
            <SquareButton backgroundColor='#eeb211' textColor='#262626' url='/get-involved'>Get Involved</SquareButton>
          </div>
        </div>
      </Banner>
    </div>
    <div>
      <Banner img='./assets/images/teams/gtswim.jpg' textColor='white'>
        <h1>Teamwork</h1>
        <h1 className='value right'>Character</h1>
      </Banner>
    </div>
    <div>
      <Banner img='./assets/images/teams/gtbb.jpg' textColor='white'>
        <h1>Excellence</h1>
        <h1 className='value right'>Innovation</h1>
      </Banner>
    </div>
  </Carousel>
);

export default HomeCarousel;