import React, { Component } from 'react';
import { GeneralInfo, StaffContact, BusinessCardRequest } from './../subcomponents/Career';

class Career extends Component {
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
          <GeneralInfo />
        </section>
        <section className='black-bg lightgray-text'>
          <StaffContact />
        </section>
        <section className='lightgray-bg black-text'>
          <BusinessCardRequest />
        </section>
      </div>
    );
  }
};

export default Career;