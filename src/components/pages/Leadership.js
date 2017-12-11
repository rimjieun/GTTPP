import React, { Component } from 'react';
import { Mission, Contact, NutritionCenter } from './../subcomponents/Leadership';


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
          <AlumniBanner />
          <section className='white-bg black-text'>
            <LWC />
          </section>
          <section className='lightgray-bg'>
            <h1 className="header center">STAFF CONTACT</h1>
          </section>
        </div>
      </div>
    );
  }
};

export default Leadership;