import React, { Component } from 'react';
import { Carousel, Button } from "react-materialize";
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
            }}>
            <div className='banner first-panel center'>
              <div className='layer'></div>
              <div className='banner-text'>
                <div className='page-container'>
                  <Mission />
                  <Button className='btn'>Learn More</Button>
                </div>
              </div>
            </div>
            <div className='banner second-panel'>
              <div className='layer'></div>
              <div className='banner-text'>
                <div className='page-container'>
                  <h1>Second panel</h1>
                </div>
              </div>
            </div>
            <div className='banner third-panel'>
              <div className='layer'></div>
              <div className='banner-text'>
                <div className='page-container'>
                  <h1>Third panel</h1>
                </div>
              </div>
            </div>
            <div className='banner fourth-panel'>
              <div className='layer'></div>
              <div className='banner-text'>
                <div className='page-container'>
                  <h1>Fourth panel</h1>
                </div>
              </div>
            </div>
            </Carousel>
        </div>
        <section className='about-section custom-container'>
          <div className='row'>
            <About/>
          </div>
        </section>
        <section className='staff-section custom-container'>
          <Staff/>
        </section>

        <section>
          <Button className='btn'>Get Involved</Button>
        </section>

      </div>
    )}
  };

export default Home;