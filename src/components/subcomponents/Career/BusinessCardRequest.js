import React from 'react';
import { TextLeftImgRight, RoundButton } from './../../common';

const BusinessCardRequest = props => (
    <TextLeftImgRight title='Student-Athlete Business Card Request' img='./assets/images/community-service/community-service-5.JPG'>
        <p>The Georgia Tech Letterwinners Club is committed to serving GT student-athletes after graduation. The club hosts several events throughout the year as opportunities to connect with teammates and peers, support current student-athletes, and get involved with the GT Athletic Association.
        <br /><br />
            <span className='bold'>Go to Business Card Request Form</span>
            <RoundButton backgroundColor='#b39454' url='/business-cards' />
        </p>
    </TextLeftImgRight>
);

export default BusinessCardRequest;