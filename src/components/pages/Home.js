import React from 'react';

const Home = props => (
  <div className="main">
    <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"/></a>
        <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
        <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"/></a>
        <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
    </div>
    <div className="parallax-container">
      <div className="parallax">
        <img src="./assets/images/jwob/JWOB6.JPG" />
      </div>
    </div>

    <div className="section white">
      <div className="row container">
        <h2 className="header">Parallax</h2>
        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>

    <div className="parallax-container">
      <div className="parallax">
        <img src="./assets/images/jwob/JWOB5.JPG" />
      </div>
    </div>
  </div>
);

export default Home;