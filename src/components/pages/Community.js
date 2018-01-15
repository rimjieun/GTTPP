import React, { Component } from 'react';
import { About, CommunityService, JWOB, ServiceCup } from './../subcomponents/Community';

class Community extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='white-bg black-text'>
          <About />
        </section>
        <section className='darkgray-bg white-text'>
          <JWOB />
        </section>
        <section className='gold-bg black-text'>
          <ServiceCup />
        </section>
        <section className='lightgray-bg black-text'>
          <CommunityService />
        </section>
      </div>
    );
  }
};

export default Community;