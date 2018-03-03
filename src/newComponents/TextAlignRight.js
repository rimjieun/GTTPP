import React from 'react';

/*
PROPS TO RECEIVE:
- header
- text
*/

const styles = {
  headerStyle: {
    textAlign: 'right'
  },
  textStyle: {
    textAlign: 'right',
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '20px'
  }
}

const TextAlignRight = props => (

  <div>
    <h4 style={styles.headerStyle}>{props.header}</h4>
    <p style={styles.textStyle}>{props.text}</p>
  </div>

);

export default TextAlignRight;