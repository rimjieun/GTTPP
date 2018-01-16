import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = props => (
  <header>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img className="brand-logo" alt="Brand" src="./assets/images/logos/gttpp4.png" />
          </Link>
            <ul id="nav-mobile" className="hide-on-med-and-down">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/alumni">ALUMNI</Link></li>
              <li><Link to="/career-development" className="dropdown-button" data-activates="career">CAREER DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
              <li><Link to="/leadership-development">LEADERSHIP DEVELOPMENT</Link></li>
              <li><Link to="/personal-development">PERSONAL DEVELOPMENT</Link></li>
              <li><Link to="/community-outreach">COMMUNITY OUTREACH</Link></li>
              <li><Link to="/sports-nutrition">SPORTS NUTRITION</Link></li>
              <li><Link to="/our-stories">OUR STORIES</Link></li>
              <li><Link to="/get-involved">GET INVOLVED</Link></li>
            </ul>
            <ul id="career" className="dropdown-content">
              <li><Link to="/fifth-street-bridge-program">5th Street Bridge Program</Link></li>
              <li><Link to="/first-round-draft-pick">1st Round Draft Pick</Link></li>
              <li><Link to="/business-cards">Business Card Request</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;