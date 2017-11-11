import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

const Main = props => (
  <div id='main-section'>
    <Navbar />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Main;