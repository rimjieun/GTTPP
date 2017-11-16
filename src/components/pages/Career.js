import React, { Component } from 'react';
import { BusinessCardForm } from './../subcomponents/Forms';
import { GeneralInfo, StaffContact, FifthStreetBridgeProgram, FirstRoundDraftPick } from './../subcomponents/Career';

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
          <FifthStreetBridgeProgram />
        </section>
        <section className='yellow-bg black-text'>
          <FirstRoundDraftPick />
        </section>
        <BusinessCardForm/>
      </div>
    );
  }
};

export default Career;