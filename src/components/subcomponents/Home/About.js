import React from 'react';
import { ColLayout } from './../../common';

const styles = {
  text: {
    fontSize: '20px',
    lineHeight: '50px'
  }
};

const About = props => (
  <ColLayout title='ABOUT'>
    <p style={styles.text}>Dr. Homer Rice, former Georgia Tech Athletics Director, originally conceived the Total Person concept on his belief that excellence is a result of a balanced life that encompasses academic excellence, athletic achievement, and personal well-being. Georgia Tech was involved in the development of the NCAA CHAMPS/Life Skills program due to the existence of the Total Person concept. Our program provides many opportunities for student-athletes to achieve their potential in all areas of their lives. The Total Person Program areas of focus are Career Development, Leadership Development, Personal Health and Wellbeing, Community Outreach, Sports Nutrition, and the Student-Athlete Advisory Board.</p>
  </ColLayout>
);

export default About;