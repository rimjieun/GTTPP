import React from 'react';

const styles = {
  iframe: {
    height: '170vh'
  }
};

const GetInvolvedForm = props => (
  <div className='form center'>
    <iframe style={styles.iframe} src="https://docs.google.com/forms/d/e/1FAIpQLSclSs_u-x75duSthsqniz-9VeS2do8Dm6CtwElz52V6u00Kqg/viewform?embedded=true" width="100%" scrolling="no" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
  </div>
);

export default GetInvolvedForm;