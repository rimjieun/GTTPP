import React from 'react';
import { Row, Col } from 'react-materialize';
/*
PROPS TO RECEIVE:
- headerText
- headerColor
- subHeaderText
- subHeaderColor
- hrColor
*/


const SectionHeader = props => (
    <Row>
        <Col s={8} className='offset-s2'>
           <div style={{
                margin: '50px auto'
           }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '52px !important',
                    textTransform: 'uppercase',
                    color: `${props.headerColor}`,

                }}>{props.headerText}</h2>
                <hr style={{
                    maxWidth: '100px',
                    borderColor: `${props.hrColor}`,
                    bordeWidth: '3px'
                }}/>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '30px',
                    color: `${props.subHeaderColor}`,
                }}>{props.subHeaderText}</h2>
            </div>
        </Col>
    </Row>


);

export default SectionHeader;