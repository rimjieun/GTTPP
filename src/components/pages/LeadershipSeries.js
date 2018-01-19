import React from 'react';
import { ColLayout } from './../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const LeadershipSeries = props => (
    <ColLayout title='LEADERSHIP SERIES'>
        <p style={styles.text}>After the Freshman Academy, student-athletes are invited to participate in a progressive leadership development program to continue to build their understanding and capacity for leadership. Created and facilitated by TPP Character Coach, Derrick Moore, the program examines the Seven Natural Wonders of the World and the relation to pertinent leadership concepts. </p>
        <div>Picture & title of Derrick Moore</div>
    </ColLayout>
);

export default LeadershipSeries;