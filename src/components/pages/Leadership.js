import React, { Component } from 'react';
import { AdvisoryBoard, Committees, ExecutiveBoard, FreshmanLeadership, LeadershipMission, LeadershipSeries, Members } from './../subcomponents/Leadership';


class Leadership extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='lightgray-bg black-text'>
          <LeadershipMission />
        </section>
          <section className='white-bg black-text'>
            <FreshmanLeadership />
          </section>
          <section className='gold-bg'>
            <LeadershipSeries />
          </section>
          <section className='black-bg white-text'>
            <AdvisoryBoard />
          </section>
          <section className='white-bg'>
            <Committees />
          </section>
          <section className='darkgray-bg black-text'>
            <ExecutiveBoard />
          </section>
          <section className='lightgray-bg'>
            <Members />
          </section>
      </div>
    );
  }
};

export default Leadership;