import React from 'react';
import { Row, Col } from 'react-materialize';
/*
PROPS TO RECEIVE:
- icon name
- icon url
- icon color
- caption
- text
*/

const styles = {
    captionStyle: {
        lineHeight: '30px',
    },
    textStyle: {
        fontSize: '18px',
        lineHeight: '30px',
        marginTop: '20px'
    },
}

const IconWithText = props => (

    <Col s={3} className='center'
        style={{
            margin: '30px auto'
    }}>
    <div>
        <a href={props.url} style={{
            color: `${props.iconColor}`
        }}><i className="large material-icons" style={styles.iconStyle}>{props.icon}</i></a>
        <h5 style={styles.captionStyle}>{props.caption}</h5>
        <p style={styles.textStyle}>{props.text}</p>
    </div>
    </Col>
);

export default IconWithText;