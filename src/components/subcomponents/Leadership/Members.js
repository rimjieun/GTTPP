import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const Members = props => (
    <ColLayout title='COMMITTEE MEMBERS'>
        <p className="header center">List Members</p>
    </ColLayout>
);

export default Members;