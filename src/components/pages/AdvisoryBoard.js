import React from 'react';
import { ColLayout } from './../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const AdvisoryBoard = props => (
    <ColLayout title='STUDENT-ATHLETE ADVISORY BOARD'>
        <p style={styles.text}>The Student-Athlete Advisory Board is comprised of student-athlete representatives from each team to act as the leaders and spokesperson for their team. SAAB provides an effective platform for student-athletes to evaluate programs, provide feedback, get teammates involved in athletic and campus events, and be the voice of their peers. SAAB reps also examine NCAA legislation for feedback, and communicate on a conference and national level. </p>
    </ColLayout>
);

export default AdvisoryBoard;