import React, { Component } from 'react';
import { Row } from 'react-materialize';
import PictureRow from '../../newComponents/PictureRow';

class JieunTestPage extends Component {
  constructor() {
    super();
    this.state = {
      staff: [
        {
          name: 'Akin Joeleen',
          imgPath: './assets/images/staff/Akin_Joeleen.jpg'
        },
        {
          name: 'Leah Thomas',
          imgPath: './assets/images/staff/Leah_Thomas.jpg'
        },
        {
          name: 'Sanford Lucius',
          imgPath: './assets/images/staff/sanford_lucius.jpg'
        },
        {
          name: 'Tremblay Maureen',
          imgPath: './assets/images/staff/Tremblay_Maureen.jpg'
        },
        {
          name: 'Sanford Lucius',
          imgPath: './assets/images/staff/sanford_lucius.jpg'
        }
      ]
    }
  }


  render () {
    return (
      <div>
        <h1>Hi Jieun!</h1>
        <div style={{display: 'flex'}}>
          {
            this.state.staff.map(member => <PictureRow imgPath={member.imgPath} memberName={member.name} />)
          }
        </div>
      </div>
    )}
  };

export default JieunTestPage;