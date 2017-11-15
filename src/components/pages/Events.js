import React from 'react';
import { Calendar } from './../subcomponents/Events';

const Events = props => (
  <div>
    <section className='upcoming-section custom-container lightgray-bg center'>
        <div className='row'>
          <Calendar />
        </div>
    </section>
  </div>
);

export default Events;