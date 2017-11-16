import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Nutrition;