import React, { Component } from 'react';

class Stories extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        This is the Our Stories page.
      </div>
    );
  }
};

export default Stories;