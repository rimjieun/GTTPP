import React from 'react';
import { Button } from 'react-materialize';


const RoundButtonWithText = props => (

    <div>
        <span className='bold'>{props.buttonText}</span>
        <Button floating waves='light' node='a' icon='keyboard_arrow_right' href={props.url}
        style={{
            margin: '10px',
            backgroundColor: `${props.backgroundColor}`
        }}
        />
    </div>

);

export default RoundButtonWithText;