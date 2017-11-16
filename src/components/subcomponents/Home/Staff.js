import React from 'react';
import { RowLayout } from './../../common';

const styles = {
  image: {
    width: '170px'
  }
};

const Staff = props => (
  <RowLayout title='OUR STAFF'>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
  </RowLayout>
);

export default Staff;