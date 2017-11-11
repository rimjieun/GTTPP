import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <header>
    <div className="navbar-fixed">
      <nav>
        <div className="custom-container nav-wrapper">
          <Link to="/" className="brand-logo">
            <img className="brand-logo" alt="Brand" src="./assets/images/logos/gt-white-goldoutline.png" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/alumni-get-involved">ALUMNI/GET INVOLVED</Link></li>
            <li><Link to="#!" className="dropdown-button" data-activates="development">DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/our-stories">OUR STORIES</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
          </ul>
        </div>
      </nav>
      <ul id="development" className="dropdown-content">
        <li><Link to="/career-development">CAREER DEVELOPMENT</Link></li>
        <li><Link to="/leadership-development">LEADERSHIP DEVELOPMENT</Link></li>
        <li><Link to="/personal-development">PERSONAL DEVELOPMENT</Link></li>
        <li className="divider"></li>
        <li><Link to="/community-outreach">COMMUNITY OUTREACH</Link></li>
        <li><Link to="/sports-nutrition">SPORTS NUTRITION</Link></li>
      </ul>
    </div>
  </header>
);

export default Navbar;