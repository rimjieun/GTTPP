import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const Topics = props => (
    <ColLayout title='THE TOTAL PERSON'>
        <p className="header center">The development of the ‘Total Person’ is exemplified by our supplemental personal development programming.
        Topics that are covered include: 
        Mental health education and services
        Personal Wellness and Health
        Nutrition Services and Counseling
        Microsoft Office Training
        Financial Literacy
        Sexual Health Education
        Investment Club
        Entrepreneurship Group
        Diversity and Inclusion Training
        QPR Services
        </p>
    </ColLayout>
);

export default Topics;