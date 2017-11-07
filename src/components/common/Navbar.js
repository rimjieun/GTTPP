import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img className="nav-img" alt="Brand" src="./assets/images/logos/GT-Primary-light-background.png" />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav nav-tabs nav-justified">
            <li><Link to='/' className='nav-btn'>Home</Link></li>
            <li><Link to='/alumni' className='nav-btn'>Alumni/Get Involved</Link></li>
            <li><Link to='/career' className='nav-btn'>Career Development</Link></li>
            <li><Link to='/community' className='nav-btn'>Community Outreach</Link></li>
            <li><Link to='/leadership' className='nav-btn'>Leadership Development</Link></li>
            <li><Link to='/personal' className='nav-btn'>Personal Development</Link></li>
            <li><Link to='/nutrition' className='nav-btn'>Sports Nutrition</Link></li>
            <li><Link to='/stories' className='nav-btn'>Our Stories</Link></li>
            <li><Link to='/events' className='nav-btn'>Upcoming Events</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;