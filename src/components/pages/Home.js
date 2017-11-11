import React from 'react';
import { About, Carousel, Mission, Staff, Stories, TwitterFeed, Values } from './../subcomponents/Home';

const Home = props => (
  <div className="main">
    <div className="parallax-container">
      <div className="parallax">
        <Carousel />
      </div>
    </div>

    <div className="section white">
      <div className="row container">
        <About />
      </div>
    </div>

    <div className="section white">
      <div className="row container">
        <Mission/>
      </div>
    </div>

    <div className="parallax-container">
      <div className="parallax">
        <img src="./assets/images/jwob/JWOB5.JPG" />
      </div>
    </div>

  </div>
);

export default Home;