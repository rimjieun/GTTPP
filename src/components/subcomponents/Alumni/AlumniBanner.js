import React from 'react';
import { Banner } from './../../common';

const styles = {
  h1: {
    fontSize: '40px',
    marginTop: '100px',
    fontStyle: 'italic'
  },
  h3: {
    fontSize: '70px',
    fontStyle: 'italic',
    position: 'relative',
    left: '70px'
  },
  h6: {
    float: 'right',
    width: '480px',
    fontSize: '20px',
    lineHeight: '40px',
    marginTop: '70px'
  }
};

const AlumniBanner = props => (
  <Banner img='./assets/images/extra/extra-1.jpg' textColor='#eeb211'>
    <h1 style={styles.h1}>Athletes Helping Athletes&mdash;</h1>
    <h3 style={styles.h3}>A Family for Life</h3>
    <h6 style={styles.h6}>We share the common bond of excelling in both our sport and classroom. We are not merely atheletes, but student-athletes. Earning a Letter from the Georgia Institute of Technology is an honor not effortlessly achieved.</h6>
  </Banner>
);

export default AlumniBanner;