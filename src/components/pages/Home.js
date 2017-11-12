import React from 'react';
import { About, Carousel, Mission, Staff, Stories, TwitterFeed, Values } from './../subcomponents/Home';

import { GetInvolvedForm } from "./../subcomponents/Forms";

const Home = props => (
  <div className='main'>
    <div className='carousel-section'>
      <Carousel/>
    </div>
    <div className='section custom-container'>
      <div className='row'>
        <About/>
      </div>
    </div>

    <div className='section custom-container'>
      <div className='row'>
        <Mission/>
      </div>
    </div>

    <div className='custom-container'>
      <Staff/>
    </div>

    <div>
      <button className='btn'>Get Involed</button>
    </div>

  </div>
);

export default Home;