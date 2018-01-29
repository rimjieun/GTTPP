import React, { Component } from 'react';
import { HomeCarousel, About, Mission, Staff, Stories, TwitterFeed, Values, Events } from './../subcomponents/Home';

class Home extends Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    !function (a, b, c, d, e, f, g, h, i, j, k) { h = a[d] = a[d] || {}, h.ui = h.ui || [], i = a[e] = a[e] || {}, i[f] || (j = b.getElementsByTagName(c)[0], k = b.createElement(c), k.src = "//platform.massrelevance.com/js/massrel.js", j.parentNode.insertBefore(k, j), i[f] = function () { h.ui.push([].slice.call(arguments)) }), i[f]("load", { el: b.getElementById(g) }) }(window, document, "script", "massrel", "spredfast", "exp", "mr-space_ramblinwreck_com-georgiatechfb-media_wall");
  }

  render () {
    return (
      <div>
        <HomeCarousel />
        <section className='white-bg black-text'>
          <About/>
        </section>
        <section className='black-bg white-text'>
          <Events/>
        </section>
        <section className='lightgray-bg black-text'>
          <Stories/>
        </section>
        <section className='white-bg black-text'>
          <Staff/>
        </section>
        <TwitterFeed />
      </div>
    )}
  };

export default Home;