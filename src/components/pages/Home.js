import React, { Component } from 'react';
import { Carousel, Button } from "react-materialize";
import { About, Mission, Staff, Stories, TwitterFeed, Values, Events } from './../subcomponents/Home';


import { GetInvolvedForm } from "./../subcomponents/Forms";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $('.carousel').carousel({
      duration: 100
    });
  }
  
  autoplay() {
    $('.carousel').carousel('next');
    setTimeout(this.autoplay, 4500);
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
              <div className='banner-text carousel-text'>
                <div className='page-container carousel-content'>
                  <h2>Georgia Tech Total Person Program</h2>
                  <Mission />
                </div>
                <Button className='btn carousel-btn' node='a' href='#about'>Learn More</Button>
                <Button className='btn carousel-btn' node='a' href='/get-involved'>Get Involved</Button>
              </div>
            </div>
            <div className='banner second-panel'>
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
              <div className='banner-text'>
                <div className='page-container'>
                  <h1>Fourth panel</h1>
                </div>
              </div>
            </div>
            </Carousel>
        </div>
        <section className='about-section custom-container' id='about'>
          <div className='row'>
            <About/>
          </div>
        </section>
        <section className='upcoming-section custom-container black-bg'>
          <div className='row'>
            <Events/>
          </div>
        </section>
        <section className='stories-section custom-container white-bg'>
          <div className='row'>
            <Stories/>
          </div>
        </section>
        <section className='staff-section custom-container lightgray-bg'>
          <Staff/>
        </section>
        <section className='twitter-section custom-container lightgray-bg'>
          <div className='row'>
            <p>Twitter sections</p>
          </div>
        </section>

      </div>
    )}
  };

export default Home;