import React, { Component } from 'react';
import { GetInvolvedForm } from "./../subcomponents/Forms";

class GetInvolved extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <GetInvolvedForm/>
        <section className='lightgray-bg'>
          <h1 className="header center">STAFF CONTACT</h1>
        </section>
      </div>
    );
  }
};

export default GetInvolved;