import React, { Component } from 'react';
import { Calendar } from './../subcomponents/Events';

class Events extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='upcoming-section custom-container lightgray-bg center'>
            <div className='row'>
              <Calendar />
            </div>
        </section>
      </div>
    );
  }
};

export default Events;