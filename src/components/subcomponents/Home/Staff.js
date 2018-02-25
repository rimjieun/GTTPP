import React from 'react';
import { RowLayout } from './../../common';

const styles = {
  image: {
    width: '170px',
    height: '250px'
  }
};

const Staff = props => (
  <RowLayout title='Our Staff'>
    <figure>
      <img style={styles.image} src='./assets/images/staff/Akin_Joeleen.jpg' />
      <figcaption>Joleen Akin</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff/Leah_Thomas.jpg' />
      <figcaption>Leah Thomas</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff/sanford_lucius.jpg' />
      <figcaption>Lucious Sanford</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff/Tremblay_Maureen.jpg' />
      <figcaption>Maureen Thremblay</figcaption>
    </figure>
    <figure>
      <img style={styles.image} src='./assets/images/staff-placeholder.png' />
      <figcaption>Derrick Moore</figcaption>
    </figure>
  </RowLayout>
);

export default Staff;