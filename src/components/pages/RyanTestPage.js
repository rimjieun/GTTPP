import React, { Component } from 'react';
import RoundButtonWithText from '../../newComponents/RoundButtonWithText';
import SquareButton from '../../newComponents/SquareButton';

class RyanTestPage extends Component {
  constructor() {
    super();

  }

  componentDidMount() {

  }

  render () {
    return (
      <section>
        <h1>Hi Ryan!</h1>
        <RoundButtonWithText buttonText="Testing this component" url="https://www.google.com" backgroundColor="blue"/>
        <SquareButton  backgroundColor="blue" textColor="white" url="/">Testing</SquareButton>
      </section>
    )}
  };

export default RyanTestPage;
