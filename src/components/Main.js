import React from 'react';
import Navbar2 from './common/Navbar2';
import Footer from './common/Footer';

const Main = props => (
  <div id='main-section'>
    <Navbar2 />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Main;