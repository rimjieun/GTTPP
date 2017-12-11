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
        This is the Leadership Development page.
        <div className='alumni'>
          <LeadershipMission />
          <section className='white-bg black-text'>
            <FreshmanLeadership />
          </section>
          <section className='lightgray-bg'>
            <LeadershipSeries />
          </section>
          <section className='white-bg black-text'>
            <AdvisoryBoard />
          </section>
          <section className='lightgray-bg'>
            <Committees />
          </section>
          <section className='white-bg black-text'>
            <ExecutiveBoard />
          </section>
          <section className='lightgray-bg'>
            <Members />
          </section>
        </div>
      </div>
    );
  }
};

export default Leadership;