import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img className="brand-logo" alt="Brand" src="./assets/images/logos/GT-Primary-light-background.png" />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/alumni">ALUMNI/GET INVOLVED</Link></li>
          <li><Link to="#">DEVELOPMENT</Link></li>
          <li><Link to="/stories">OUR STORIES</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;