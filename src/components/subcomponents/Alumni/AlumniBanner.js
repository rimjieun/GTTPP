import React from 'react';
import { Banner } from './../../common';

const styles = {
  title: {
    marginTop: '100px',
    fontStyle: 'italic'
  },
  subtitle: {
    fontStyle: 'italic',
    position: 'relative',
    left: '70px'
  },
  intro: {
    float: 'right',
    width: '480px',
    fontSize: '20px',
    lineHeight: '40px',
    marginTop: '70px'
  }
};

const AlumniBanner = props => (
  <Banner img='./assets/images/extra/extra-1.jpg' textColor='#b39454'>
    <h3 style={styles.title}>Athletes Helping Athletes&mdash;</h3>
    <h1 style={styles.subtitle}>A Family for Life</h1>
    <h5 style={styles.intro}>We share the common bond of excelling in both our sport and classroom. We are not merely atheletes, but student-athletes. Earning a Letter from the Georgia Institute of Technology is an honor not effortlessly achieved.</h5>
  </Banner>
);

export default AlumniBanner;