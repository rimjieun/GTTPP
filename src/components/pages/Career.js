import React, { Component } from 'react';
import { BusinessCardForm } from '../subcomponents/Forms';

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
        <BusinessCardForm/>
      </div>
    );
  }
};

export default Career;