import React, { Component } from 'react';
import { NutritionMission, Contact, NutritionCenter } from './../subcomponents/Nutrition';

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
        <div className='alumni'>
          <NutritionMission />
          <section className='gold-bg black-text'>
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