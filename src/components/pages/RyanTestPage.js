import React, { Component } from 'react';
import RoundButtonWithText from '../../newComponents/RoundButtonWithText';
import SquareButton from '../../newComponents/SquareButton';
import PictureRow from '../../newComponents/PictureRow';
import TextAlignRight from '../../newComponents/TextAlignRight';
import TextAlignLeft from '../../newComponents/TextAlignLeft';
import TextAlignCenter from '../../newComponents/TextAlignCenter';
import SectionHeader from '../../newComponents/SectionHeader';

import { Row, Col } from 'react-materialize';


const styles = {
  picParent: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

class RyanTestPage extends Component {
  constructor() {
    super();
    this.state = {
      staff: [
        {
          uKey: 0,
          name: 'Akin Joeleen',
          position: 'Position',
          imgPath: './assets/images/staff/Akin_Joeleen.jpg'
        },
        {
          uKey: 1,
          name: 'Leah Thomas',
          position: 'Position',
          imgPath: './assets/images/staff/Leah_Thomas.jpg'
        },
        {
          uKey: 2,
          name: 'Sanford Lucius',
          position: 'Position',
          imgPath: './assets/images/staff/sanford_lucius.jpg'
        },
        {
          uKey: 3,
          name: 'Tremblay Maureen',
          position: 'Position',
          imgPath: './assets/images/staff/Tremblay_Maureen.jpg'
        },
        {
          uKey: 4,
          name: 'Tremblay Maureen',
          position: 'Position',
          imgPath: './assets/images/staff/Tremblay_Maureen.jpg'
        },
        {
          uKey: 5,
          name: 'Tremblay Maureen',
          position: 'Position',
          imgPath: './assets/images/staff/Tremblay_Maureen.jpg'
        }
      ],
      buttonText: {
        text: 'Testing Button Text',
        url: 'https://google.com',
        backgroundColor: '#cccccc'
      },
      alignedText: {
        header: 'This is the header x 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      secHeader: {
        header: 'Business Cards',
        headerColor: 'blue',
        subHeader: 'More Business Cards',
        subHeaderColor: 'red',
        hrColor: 'green',
      }
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <section className='container-90'>
        <h1>Hi Ryan!</h1>
        <RoundButtonWithText buttonText='Testing this component' url='https://www.google.com' backgroundColor='blue'/>
        <SquareButton  backgroundColor='blue' textColor='white' url='/'>Testing</SquareButton>

        <SectionHeader headerText = {this.state.secHeader.header} subheaderText={this.state.secHeader.subHeader} headerColor={this.state.secHeader.headerColor} subHeaderColor={this.state.secHeader.subHeaderColor} hrColor={this.state.secHeader.hrColor}/>

        <Row>
          <Col s={5}>
            <img src='https://static1.squarespace.com/static/586ae5e4725e250e1db6a07a/t/586b0f95ff7c50bb14e6422e/1483411382624/Blue+Skies.png?format=1500w' width='100%' height='200px'/>
          </Col>
          <Col s={7}>
            <TextAlignLeft header={this.state.alignedText.header} text={this.state.alignedText.text}/>
          </Col>
        </Row>

        <div style={styles.picParent} className='pictureRow'>
          {
            this.state.staff.map(member => <PictureRow key={member.uKey} imgPath={member.imgPath} memberName={member.name} memberPosition={member.position}/>)
          }
        </div>

      </section>
    )}
  };

export default RyanTestPage;
