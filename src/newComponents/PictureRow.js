import React, { Component } from 'react';
import { Col } from 'react-materialize';

/*
PROPS TO RECEIVE:
- imgPath
- memberName
- memberPosition
*/

class PictureRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgPath: this.props.imgPath,
      memberName: this.props.memberName,
      memberPosition: this.props.memberPosition,
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {

    const styles = {
      itemStyle: {
        flex: '0 1 25%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      },
      imageStyle: {
        width: '100%',
        height: 'auto',
        filter: 'grayscale(85%)'
      },
      captionStyle: {},
      tableStyle: {
        display: 'table',
        position: 'absolute',
        width: '100%',
        height: '100%'
      },
      tableCellStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        contentAlign: 'center'
      },
      nameStyle: {
        fontFamily: '"Roboto Slab", serif',
        fontSize: '30px',
        marginBottom: '20px'
      },
      positionStyle: {
        fontSize: '20px'
      }
    };

    if (this.state.hover) {
      styles.captionStyle = {
        display: 'block',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        background: 'rgba(0,0,0,.5)',
        color: 'white'
      }
    } else {
      styles.captionStyle = {
        display: 'none'
      }
    }

    return (
      <div className='pictureRowItem' style={styles.itemStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <img src={this.state.imgPath} style={styles.imageStyle} />
        <div style={styles.captionStyle}>
          <div style={styles.tableStyle}>
            <div style={styles.tableCellStyle}>
              <p style={styles.nameStyle}>{this.state.memberName}</p>
              <p style={styles.positionStyle}>{this.state.memberPosition}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PictureRow;