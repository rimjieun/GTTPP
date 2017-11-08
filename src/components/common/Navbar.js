import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div>
    <nav className="main-nav">
      <div className="nav-container flex-row content-spread">
        <div className="brand-logo">
          <Link to="/">
            <img className="brand-logo" alt="Brand" src="./assets/images/logos/GT-Primary-light-background.png" />
          </Link>
        </div>
        <ul className="nav-opt flex-row content-spread">
          <li className="nav-opt"><Link to='/'>HOME</Link></li>
          <li className="nav-opt"><Link to='/alumni'>ALUMNI/<br />GET INVOLVED</Link></li>
          <li className="nav-opt"><Link to='/career'>CAREER<br />DEVELOPMENT</Link></li>
          <li className="nav-opt"><Link to='/community'>COMMUNITY<br />OUTREACH</Link></li>
          <li className="nav-opt"><Link to='/leadership'>LEADERSHIP<br />DEVELOPMENT</Link></li>
          <li className="nav-opt"><Link to='/personal'>PERSONAL<br />DEVELOPMENT</Link></li>
          <li className="nav-opt"><Link to='/nutrition'>SPORTS<br />NUTRITION</Link></li>
          <li className="nav-opt"><Link to='/stories'>OUR<br />STORIES</Link></li>
          <li className="nav-opt"><Link to='/events'>UPCOMING<br />EVENTS</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;