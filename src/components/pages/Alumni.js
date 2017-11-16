import React from 'react';
import { AlumniBanner, LWC, YLWC } from './../subcomponents/Alumni';

const Alumni = props => (
  <div className='alumni'>
    <AlumniBanner />
    <section className='white-bg black-text'>
      <LWC />
    </section>
    <section className='lightgray-bg black-text'>
      <YLWC />
    </section>
  </div>
);

export default Alumni;