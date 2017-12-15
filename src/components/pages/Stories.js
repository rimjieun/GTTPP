import React, { Component } from 'react';
import { AthleteFeature, GoodWordArticles, PosterPhotos, SocialMedia } from './../subcomponents/Stories';

class Stories extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className=''>
          <section className='yellow-bg black-text'>
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