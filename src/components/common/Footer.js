import React from 'react';
import { Mission, Navigation, ContactUs } from './../subcomponents/Footer';

const Footer = props => (
  <footer>
    <div className='page-container flex-col content-spread'>
      <div className='top flex-row content-spread'>
        <Mission />
        <ContactUs />
        <Navigation />
      </div>
      <div className='bottom'>
        <ul className='flex-row content-center'>
          <li>&#169; 2017 Georgia Tech</li>
          <li><a href='#'>Sitemap</a></li>
          <li><a href='#'>Terms of Use</a></li>
          <li><a href='#'>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;