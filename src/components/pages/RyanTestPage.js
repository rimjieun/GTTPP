import React, { Component } from 'react';
import RoundButtonWithText from '../../newComponents/RoundButtonWithText';
import SquareButton from '../../newComponents/SquareButton';
import PictureRow from '../../newComponents/PictureRow';
import TextAlignRight from '../../newComponents/TextAlignRight';
import TextAlignLeft from '../../newComponents/TextAlignLeft';
import TextAlignCenter from '../../newComponents/TextAlignCenter';
import SectionHeader from '../../newComponents/SectionHeader';
import AthleteStories from '../../newComponents/AthleteStories';
import StaffContactHoriz from '../../newComponents/StaffContactHoriz';
import StaffContactVert from '../../newComponents/StaffContactVert';
import IconWithText from '../../newComponents/IconWithText';
import ImageGallery from '../../newComponents/ImageGallery';

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
          name: 'Joeleen Akin',
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
      },
      athletes: [
        {
          uKey: 0,
          title: 'Akin Joeleen',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imgPath: 'http://grfx.cstv.com/photos/schools/geot/sports/total-person/auto_original/10019102.jpeg'
        },
        {
          uKey: 1,
          title: 'Leah Thomas',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imgPath: 'http://grfx.cstv.com/photos/schools/geot/sports/total-person/auto_original/10065889.jpeg?1512612369'
        },
        {
          uKey: 2,
          title: 'Sanford Lucius',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imgPath: 'http://grfx.cstv.com/photos/schools/geot/sports/m-basebl/auto_original/9998953.jpeg?1508353306'
        }
      ],
      staffContact: {
        name: 'Joeleen Akin',
        position: 'Project Cordinator',
        email: 'joeleen.akin@athletics.gatech.edu',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgPath: './assets/images/staff/Akin_Joeleen.jpg',
        header: "Staff Contact",
        headerColor: "black",
        hrColor: "#545454"
      },
      icons: [
        {
          uKey: 0,
          icon: 'settings',
          iconColor: 'pink',
          iconUrl: '',
          caption: 'Test 0',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          uKey: 1,
          icon: 'flash_on',
          iconColor: 'black',
          iconUrl: '',
          caption: 'Test 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          uKey: 2,
          icon: 'group',
          iconColor: 'blue',
          iconUrl: '',
          caption: 'Test 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          uKey: 3,
          icon: 'settings',
          iconColor: 'green',
          iconUrl: '',
          caption: 'Test 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          uKey: 4,
          icon: 'settings',
          iconColor: 'green',
          iconUrl: '',
          caption: 'Test 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ],
      imageGalleryPhotos: [
          { src: './assets/images/freshman-academy/freshman-academy-4.JPG', width: 3, height: 3 },
          { src: './assets/images/freshman-academy/freshman-academy-3.JPG', width: 2, height: 1 },
          { src: './assets/images/freshman-academy/freshman-academy-2.JPG', width: 3, height: 4 },
          { src: './assets/images/freshman-academy/freshman-academy-1.JPG', width: 4, height: 3 }
      ],
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

        <SectionHeader headerText = {this.state.secHeader.header} subHeaderText={this.state.secHeader.subHeader} headerColor={this.state.secHeader.headerColor} subHeaderColor={this.state.secHeader.subHeaderColor} hrColor={this.state.secHeader.hrColor}/>

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

        <div>
          {
            this.state.athletes.map(story => <AthleteStories key={story.uKey} imgSrc={story.imgPath} storyTitle={story.title} storySummary={story.summary}/>)
          }
        </div>

        <SectionHeader headerText = {this.state.staffContact.header} headerColor={this.state.staffContact.headerColor} hrColor={this.state.staffContact.hrColor}/>

        <StaffContactHoriz name={this.state.staffContact.name} position={this.state.staffContact.position} email={this.state.staffContact.email} about={this.state.staffContact.about} imgSrc={this.state.staffContact.imgPath}/>

        <Row>
          <Col s={9}>
            <h1>Testing</h1>
          </Col>
          <StaffContactVert name={this.state.staffContact.name} position={this.state.staffContact.position} email={this.state.staffContact.email} about={this.state.staffContact.about} imgSrc={this.state.staffContact.imgPath}/>
        </Row>

        <div>
          <Row>
            {
              this.state.icons.map(icon => <IconWithText key={icon.uKey} icon={icon.icon} iconColor={icon.iconColor} text={icon.text} caption={icon.caption}/>)
            }
          </Row>
        </div>

        <ImageGallery photos={this.state.imageGalleryPhotos}/>
      </section>
    )}
  };

export default RyanTestPage;
