import React from 'react';
import {Row, Col} from 'react-materialize';

const styles = {
  image: {
    width: '100%',
    height: 'auto'
  }
};

const PictureRow = props => (
  <Col s={3}>
    <img src={props.imgPath} style={styles.image} />
  </Col>
);

export default PictureRow;