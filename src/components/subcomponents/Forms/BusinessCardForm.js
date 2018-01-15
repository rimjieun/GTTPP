import React from 'react';

const styles = {
    iframe: {
        height: '190vh'
    }
};

const BusinessCardForm = props => (
    <div>
        <iframe style={styles.iframe}src="https://docs.google.com/forms/d/e/1FAIpQLScCnrVwn1kcnNu7QaocoyXZ_Y76mKYwTQB4DV1gdStFs1C8Mg/viewform?embedded=true" width="100%" scrolling="no" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
    </div>
);

export default BusinessCardForm;