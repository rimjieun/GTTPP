import React, { Component } from 'react';

class Personal extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        This is the Personal Development page.
      </div>
    );
  }
}

export default Personal;