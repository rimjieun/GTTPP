import React, { Component } from 'react';
import { Carousel } from "react-materialize";
import { About, Mission, Staff, Stories, TwitterFeed, Values } from './../subcomponents/Home';


import { GetInvolvedForm } from "./../subcomponents/Forms";

class Home extends Component {
  constructor() {
    super();
  }
  
  render () {
    return (
      <div className='main'>
        <div className='carousel-section'>
          <Carousel options={{ 
            fullWidth: true, 
            duration: 100, 
            indicators: true 
            }} 
            images={[
              './assets/images/career/career-1.jpg',
              './assets/images/community-service/community-service-1.jpg',
              './assets/images/jwob/JWOB3.JPG',
              '/assets/images/career/career-3.jpg'
            ]} />
        </div>
        <section className='page-container'>
          <div className='row'>
            <About/>
          </div>
        </section>

        <section className='page-container'>
          <div className='row'>
            <Mission/>
          </div>
        </section>

        <section className='page-container'>
          <Staff/>
        </section>

        <div>
          <button className='btn'>Get Involed</button>
        </div>

      </div>
    )}
  };

export default Home;