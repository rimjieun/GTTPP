import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

const Main = props => (
  <div>
    <Navbar />
    <div className="main-section">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Main;