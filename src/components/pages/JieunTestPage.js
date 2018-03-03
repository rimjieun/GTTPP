import React, { Component } from 'react'
import { Row } from 'react-materialize'
import PictureRow from '../../newComponents/PictureRow'
import RoundButtonWithText from '../../newComponents/RoundButtonWithText'
import TextAlignLeft from '../../newComponents/TextAlignLeft'
import TextAlignCenter from '../../newComponents/TextAlignCenter'
import TextAlignRight from '../../newComponents/TextAlignRight'

const styles = {
  picParent: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

class JieunTestPage extends Component {
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
        }
      ],
      buttonText: {
        text: 'Testing Button Text',
        url: 'https://google.com',
        backgroundColor: '#cccccc'
      },
      alignedText: {
        header: 'This is the header',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }


  render () {
    return (
      <div>
        <h1>Hi Jieun!</h1>

        {/*Testing PictureRow component*/}
        <div style={styles.picParent} className='pictureRow'>
          {
            this.state.staff.map(member => <PictureRow key={member.uKey} imgPath={member.imgPath} memberName={member.name} memberPosition={member.position}/>)
          }
        </div>

        {/*Testing RoundButtonWithText component*/}
        <RoundButtonWithText buttonText={this.state.buttonText.text} url={this.state.buttonText.url} backgroundColor={this.state.buttonText.backgroundColor} />

        {/*Testing TextAlignLeft component with parent div width 800px*/}
        <div style={{width: '800px'}}>
          <TextAlignLeft header={this.state.alignedText.header} text={this.state.alignedText.text} />
        </div>

        {/*Testing TextAlignCenter component with parent div width 800px and centered*/}
        <div style={{ width: '800px', margin: '0 auto' }}>
          <TextAlignCenter header={this.state.alignedText.header} text={this.state.alignedText.text} />
        </div>

        {/*Testing TextAlignRight component with parent div width 800px*/}
        <div style={{ width: '800px'}}>
          <TextAlignRight header={this.state.alignedText.header} text={this.state.alignedText.text} />
        </div>

      </div>
    )}
  };

export default JieunTestPage;