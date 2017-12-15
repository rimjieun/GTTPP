import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const JWOB = props => (
    <ColLayout title='JACKETS WITHOUT BORDERS'>
        <p className="header center">In the summer of 2017, Georgia Tech student-athletes and staff embarked upon the first Jackets Without Borders trip to Cartago, Costa Rica. In a partnership with the non-profit organization, Courts for Kids, Georgia Tech helped to build a sports court in a community in need. The impact and on this rural town in Costa Rica was significant, by providing young athletes a safe place to play and increase access to recreation and sport opportunities.</p>
        <p>This program allows student-athletes to experience a new culture, give back to others in need, and ultimately return to campus a changed person. The benefit on each individual is profound, and allows student-athletes to gain experience in areas outside of sport and school.</p>
        <p>Our trips seek to build upon the knowledge and skills of our student-athlete population. Each service project focuses on either sports/recreation, building/engineering, or sustainability/green energy.</p>
        <div>(insert video)</div> 
        <div>(insert pictures)</div>
        <div>(links to stories and articles)</div> 
        <div>http://courtsforkids.org/georgia-tech-student-athletes-work-guadalupe-de-cartago-costa-rica/
        </div>
    </ColLayout>
);

export default JWOB;