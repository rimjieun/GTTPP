import React from 'react';
import { Button } from 'react-materialize';

const SquareButton = props => (
  <Button style={{
    fontFamily: '"Roboto Slab", serif',
    fontWeight: 'bold',
    margin: '0 10px',
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`
  }} node='a' href={props.url} className={props.name}>
  {props.children}
  </Button>
);

export default SquareButton;