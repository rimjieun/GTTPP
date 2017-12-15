import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const LeadershipMission = props => (
    <ColLayout title='ABOUT'>
        <p style={styles.text}>The Total Person Program seeks to develop the next generation of leaders who will change the world. Our leadership programming is progressive and comprehensive to develop student-athletes in their individual area of leadership.</p>
    </ColLayout>
);

export default LeadershipMission;