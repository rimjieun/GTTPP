import React from 'react';

/*
PROPS TO RECEIVE:
- header
- text
*/

const styles = {
  textStyle: {
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '20px'
  }
}

const TextAlignLeft = props => (

  <div>
    <h4>{props.header}</h4>
    <p style={styles.textStyle}>{props.text}</p>
  </div>

);

export default TextAlignLeft;