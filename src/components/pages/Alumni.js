import React, { Component } from 'react';
import { AlumniBanner, LWC, YLWC } from './../subcomponents/Alumni';

class Alumni extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='alumni'>
        <AlumniBanner />
        <section className='white-bg black-text'>
          <LWC />
        </section>
        <section className='yellow-bg black-text'>
          <YLWC />
        </section>
      </div>
    );
  }
};

export default Alumni;