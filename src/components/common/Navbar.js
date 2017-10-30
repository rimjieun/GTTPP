import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div>
    <ul>
      <Link to='/' className='nav-btn'>Home</Link><br />
      <Link to='/alumni' className='nav-btn'>Alumni/Get Involved</Link><br />
      <Link to='/career' className='nav-btn'>Career Development</Link><br />
      <Link to='/community' className='nav-btn'>Community Outreach</Link><br />
      <Link to='/leadership' className='nav-btn'>Leadership Development</Link><br />
      <Link to='/personal' className='nav-btn'>Personal Development</Link><br />
      <Link to='/nutrition' className='nav-btn'>Sports Nutrition</Link><br />
      <Link to='/stories' className='nav-btn'>Our Stories</Link><br />
      <Link to='/events' className='nav-btn'>Upcoming Events</Link>
    </ul>
  </div>
);

export default Navbar;