import React, { Component } from 'react';
import { Col } from 'react-materialize';

const styles = {
  colStyle: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: 'auto',
    filter: 'grayscale(85%)'
  }
};


const PictureRow = props => (
  <div style={styles.colStyle}>
    <img src={props.imgPath} style={styles.image} />
    <div>{props.memberName}</div>
  </div>
);

export default PictureRow;