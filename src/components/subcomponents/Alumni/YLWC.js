import React from 'react';
import { SquareButton } from './../../common';
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
  }
}

const YLWC = props => (
  <div className='container-80 flex-col'>
    <h1>Young Letterwinners Club</h1>
    <div className='flex-row content-spread'>
      <p style={styles.text}>This group focuses on the unique needs of young alumni to help you grow and develop as a professional, and connect back with Georgia Tech. Special events for young alumni are hosted regularly that focus on career advancement, networking events, and social settings.</p>
      <div style={styles.form}>
        <h5 style={styles.formTitle}>Did you graduate between 2007-2017?</h5>
        <h5 style={styles.formTitle}>Join our Young Letterwinners Club!</h5>
        <form className='flex-row' style={{marginTop: '30px'}}>
          <input style={styles.input} type='text' />
          <SquareButton backgroundColor='#e5e5e5' textColor='#262626' url='#'>Submit</SquareButton>
        </form>
      </div>

    </div>
  </div>
);

export default YLWC;