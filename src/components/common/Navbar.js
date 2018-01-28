import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = props => (

    <div className="navbar">
    <ul id="leadership" className="dropdown-content">
      <li><Link to="/freshman-leadership-academy">Freshman Leadership Academy</Link></li>
      <li><Link to="/leadership-series">Leadership Series</Link></li>
      <li><Link to="/student-athlete-advisory-board">Student-Athlete Advisory Board</Link></li>
    </ul>
    <ul id="career" className="dropdown-content">
      <li><Link to="/fifth-street-bridge-program">5th Street Bridge Program</Link></li>
      <li><Link to="/first-round-draft-pick">1st Round Draft Pick</Link></li>
      <li><Link to="/business-cards">Business Card Request</Link></li>
    </ul>
    <ul id="community" className="dropdown-content">
      <li><Link to="/jackets-without-borders">JWOB</Link></li>
      <li><Link to="/community-service-cup">Community Service Cup</Link></li>
    </ul>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img className="brand-logo" alt="Brand" src="./assets/images/logos/gttpp4.png" />
          </Link>
          <Link to="#" data-activates="mobile-demo" className="button-collapse">
          <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/alumni">ALUMNI</Link></li>
            <li><Link to="/career-development" className="dropdown-button" data-activates="career">CAREER DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/leadership-development" className="dropdown-button" data-activates="leadership">LEADERSHIP DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/personal-development">PERSONAL DEVELOPMENT</Link></li>
          <li><Link to="/community-outreach" className="dropdown-button" data-activates="community">COMMUNITY OUTREACH<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/sports-nutrition">SPORTS NUTRITION</Link></li>
            <li><Link to="/our-stories">OUR STORIES</Link></li>
            <li><Link to="/get-involved">GET INVOLVED</Link></li>
          </ul>

          <ul className="side-nav" id="mobile-demo">
            <li class="center-align"><img class="side-nav-img"
            src="./assets/images/logos/gt-gold-navyoutline.png" /></li>
            <hr/>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/alumni">ALUMNI</Link></li>
            <li><Link to="/career-development" className="dropdown-button" data-activates="career">CAREER DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/leadership-development" className="dropdown-button" data-activates="leadership">LEADERSHIP DEVELOPMENT<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/personal-development">PERSONAL DEVELOPMENT</Link></li>
            <li><Link to="/community-outreach" className="dropdown-button" data-activates="community">COMMUNITY OUTREACH<i className="material-icons right">arrow_drop_down</i></Link></li>
            <li><Link to="/sports-nutrition">SPORTS NUTRITION</Link></li>
            <li><Link to="/our-stories">OUR STORIES</Link></li>
            <li><Link to="/get-involved">GET INVOLVED</Link></li>
          </ul>
        </div>
      </nav>
    </div>
);

export default Navbar;