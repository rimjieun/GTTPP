import React, { Component } from 'react'
import { Row } from 'react-materialize'
import PictureRow from '../../newComponents/PictureRow'
import RoundButtonWithText from '../../newComponents/RoundButtonWithText'

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
      ]
    }
  }


  render () {
    return (
      <div>
        <h1>Hi Jieun!</h1>
        <div style={styles.picParent} className='pictureRow'>
          {
            this.state.staff.map(member => <PictureRow key={member.uKey} imgPath={member.imgPath} memberName={member.name} memberPosition={member.position}/>)
          }
        </div>
        <RoundButtonWithText buttonText='Testing Button Text' url='https://google.com' backgroundColor='#cccccc' />
      </div>
    )}
  };

export default JieunTestPage;