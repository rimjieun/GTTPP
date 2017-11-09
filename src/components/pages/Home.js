import React from 'react';

const Home = props => (
  <div>
    <div className="parallax-container">
      <div className="parallax">
        <img src="images/parallax1.jpg"/>

        <div className="carousel carousel-slider">
          <a className="carousel-item" href="#one!">
            <img className="responsive-img" src="./assets/images/jwob/JWOB1.JPG" />
          </a>
          <a className="carousel-item" href="#two!">
        <img className="responsive-img" src="./assets/images/jwob/JWOB2.JPG"/>
          </a>
          <a className="carousel-item" href="#three!">
        <img className="responsive-img" src="./assets/images/jwob/JWOB3.JPG"/>
          </a>
          <a className="carousel-item" href="#four!">
        <img className="responsive-img" src="./assets/images/jwob/JWOB4.JPG" />
          </a>
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
          <img src="./assets/images/JWOB5.JPG" />>
        </div>
      </div>
    </div>
  </div>
);

export default Home;