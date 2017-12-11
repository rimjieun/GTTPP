import React, { Component } from 'react';
import { Mission, Contact, NutritionCenter } from './../subcomponents/Nutrition';

class Nutrition extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        This is the Sports Nutrition page.
        <div className='alumni'>
          <Mission />
          <section className='yellow-bg black-text'>
            <NutritionCenter />
          </section>
          <section className='lightgray-bg'>
            <h1 className="header center">STAFF CONTACT</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default Nutrition;