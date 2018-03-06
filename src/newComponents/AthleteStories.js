import React from 'react';
import { Row, Col } from 'react-materialize';
/*
PROPS TO RECEIVE:
- storyTitle
- storySummary
- imgSrc
*/

const styles = {
  textStyle: {
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '20px'
  }
}

const AthleteStories = props => (

  <div style={{
    margin: '30px auto'
  }}>
    <Row>
      <Col s={4}>
        <img src={props.imgSrc} style={{
          width: '100%',
          height: '200px',
        }}/>
      </Col>
      <Col s={8}>
        <div>
          <h4>{props.storyTitle}</h4>
          <p style={styles.textStyle}>{props.storySummary}</p>
        </div>
      </Col>
    </Row>
  </div>

);

export default AthleteStories;