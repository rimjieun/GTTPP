import React, { Component } from 'react';
import { AcademicServices, CampusResources, CareTeam, Compliance, SportsMedicine, SportsPsychology, Topics } from './../subcomponents/Personal';

class Personal extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='gold-bg black-text'>
          <Topics />
        </section>
        <section className='darkgray-bg white-text'>
          <CampusResources />
        </section>
        <section className='lightgray-bg black-text'>
          <SportsPsychology />
        </section>
        <section className='white-bg black-text'>
          <CareTeam />
        </section>
        <section className='black-bg white-text'>
          <SportsMedicine />
        </section>
        <section className='white-bg black-text'>
          <AcademicServices />
        </section>
        <section className='darkgray-bg white-text'>
          <Compliance />
        </section>

      </div>
    );
  }
}

export default Personal;