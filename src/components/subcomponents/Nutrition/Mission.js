import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const Mission = props => (
    <ColLayout title='MISSION'>
        <p style={styles.text}>To promote the importance of food as fuel for peak performance, and to educate student-athletes on the role of proper nutrient selection to impact sports performance, health promotion, and disease prevention.</p>
    </ColLayout>
);

export default Mission;