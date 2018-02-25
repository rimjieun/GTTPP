import React from 'react';
import { RoundButton } from './../../common';

const styles = {
  text: {
    fontSize: '20px',
    lineHeight: '40px',
    width: '60%',
    marginBottom: '10px'
  },
  form: {
    width: '32%',
  },
  formTitle: {
    fontSize: '20px'
  },
  input: {
    background: 'white',
    padding: '0 10px',
    height: '38px',
    fontSize: '20px',
    display: 'inline'
  },
  iframe: {
    width: '60%',
    height: '400px'
  }
}

const Events = props => (

  <div className='container-80 flex-col'>
    <h1>Upcoming Events</h1>
    <div className='flex-row content-spread'>
      <div style={styles.form}>
        <h5 style={styles.formTitle}>Want to partner with GT Athletics?</h5>
        <span className='bold'>Get in touch with us!</span>
        <RoundButton backgroundColor='#b39454' url='/get-involved' />
      </div>
      <iframe style={styles.iframe} src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=5l4mprip9tr3k2kko3j1ul8558%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FNew_York"  frameBorder="0" scrolling="no"></iframe>


    </div>
  </div>
);

export default Events;