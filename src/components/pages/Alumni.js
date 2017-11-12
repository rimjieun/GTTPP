import React from 'react';
import { Banner, LWC, YLWC } from './../subcomponents/Alumni';

const Alumni = props => (
  <div className='alumni'>
    <Banner />
    <section className='white-bg black-text'>
      <LWC />
    </section>
    <section className='lightgray-bg black-text'>
      <YLWC />
    </section>
  </div>
);

export default Alumni;