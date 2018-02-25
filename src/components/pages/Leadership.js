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
        <section className='gold-bg black-text'>
          <FreshmanLeadership />
        </section>
        <section className='white-bg'>
          <LeadershipSeries />
        </section>
      </div>
    );
  }
};

export default Leadership;