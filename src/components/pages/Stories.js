import React, { Component } from 'react';

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
        This is the Our Stories page.
        <div className='alumni'>
          <AlumniBanner />
          <section className='white-bg black-text'>
            <LWC />
          </section>
          <section className='yellow-bg black-text'>
            <YLWC />
          </section>
        </div>
      </div>
    );
  }
};

export default Stories;