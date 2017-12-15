import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const CommunityService = props => (
    <ColLayout title='COMMUNITY SERVICE REQUEST FORM'>
        <p className="header center">If an organization would like to request the attendance of the Georgia Tech Athletic Association at an outreach program, please fill out the following questionnaire. In order to process the promotional activity waiver request in a timely manner and not jeopardize a student-athlete's eligibility status, Georgia Tech reserves the right to deny any and all requests not submitted a month prior to the activity date. All requests will not be accepted until it clears all NCAA regulation, including NCAA Bylaws 12.5.51 and 12.5.1.2. </p>
        <iframe></iframe>
    </ColLayout>
);

export default CommunityService;