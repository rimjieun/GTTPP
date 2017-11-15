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

    !function (a, b, c, d, e, f, g, h, i, j, k) { h = a[d] = a[d] || {}, h.ui = h.ui || [], i = a[e] = a[e] || {}, i[f] || (j = b.getElementsByTagName(c)[0], k = b.createElement(c), k.src = "//platform.massrelevance.com/js/massrel.js", j.parentNode.insertBefore(k, j), i[f] = function () { h.ui.push([].slice.call(arguments)) }), i[f]("load", { el: b.getElementById(g) }) }(window, document, "script", "massrel", "spredfast", "exp", "mr-space_ramblinwreck_com-georgiatechfb-media_wall");
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
                <Button className='btn carousel-btn lightgray-bg black-text' node='a' href='#about'>Learn More</Button>
                <Button className='btn carousel-btn lightgray-bg black-text' node='a' href='/get-involved'>Get Involved</Button>
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
        <section className='stories-section custom-container lightgray-bg'>
          <div className='row'>
            <Stories/>
          </div>
        </section>
        <section className='staff-section custom-container white-bg'>
          <Staff/>
        </section>
        <section className='twitter-section lightgray-bg'>
          <TwitterFeed/>
        </section>

      </div>
    )}
  };

export default Home;