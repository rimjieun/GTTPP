import React, { Component } from 'react';

class Community extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        This is the Community Outreach page.
      </div>
    );
  }
};

export default Community;