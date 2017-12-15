import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <header>
    <div className="navbar-fixed">
      <nav>
        <div className="container-90 nav-wrapper">
          <Link to="/" className="brand-logo">
            <img className="brand-logo" alt="Brand" src="./assets/images/logos/gt-white-goldoutline.png" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/alumni">ALUMNI</Link></li>
            <li><Link to="/career-development">CAREER DEVELOPMENT</Link></li>
            <li><Link to="/leadership-development">LEADERSHIP DEVELOPMENT</Link></li>
            <li><Link to="/personal-development">PERSONAL DEVELOPMENT</Link></li>
            <li className="divider"></li>
            <li><Link to="/community-outreach">COMMUNITY OUTREACH</Link></li>
            <li><Link to="/sports-nutrition">SPORTS NUTRITION</Link></li>
            <li><Link to="/our-stories">OUR STORIES</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
            <li><Link to="/get-involved">GET INVOLVED</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;