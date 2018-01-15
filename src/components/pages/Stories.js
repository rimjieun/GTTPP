import React, { Component } from 'react';
import { AthleteFeature, GoodWordArticles, PosterPhotos, SocialMedia } from './../subcomponents/Stories';

class Stories extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    !function (a, b, c, d, e, f, g, h, i, j, k) { h = a[d] = a[d] || {}, h.ui = h.ui || [], i = a[e] = a[e] || {}, i[f] || (j = b.getElementsByTagName(c)[0], k = b.createElement(c), k.src = "//platform.massrelevance.com/js/massrel.js", j.parentNode.insertBefore(k, j), i[f] = function () { h.ui.push([].slice.call(arguments)) }), i[f]("load", { el: b.getElementById(g) }) }(window, document, "script", "massrel", "spredfast", "exp", "mr-space_ramblinwreck_com-georgiatechfb-media_wall");
  }

  render() {
    return (
      <div>
        <div className=''>
          <section className='gold-bg black-text'>
            <PosterPhotos />
          </section>
          <section className='lightgray-bg black-text'>
            <AthleteFeature />
          </section>
          <section className='black-bg white-text'>
            <GoodWordArticles />
          </section>
          <section className='white-bg black-text'>
            <SocialMedia />
          </section>
        </div>
      </div>
    );
  }
};

export default Stories;