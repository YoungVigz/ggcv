import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from '../../images/about.svg';

import './About.scss';

function About() {
  return (
    <>
      <div className="section-wrapper">
        <div className="svg-wrapper">
          <SVG className="svg"></SVG>
        </div>

        <div className="about">
          <div className="about__headline">
            Hello, my name is 
            <span className="about__headline--primary"> Gabriel!</span>
          </div>
          <div className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer tempor ligula sit amet elit facilisis, quis pulvinar dolor convallis. 
            Praesent ut sagittis mi. Quisque sit amet euismod nulla.
            Suspendisse in vestibulum lacus, eu condimentum leo. Pellentesque efficitur 
            varius massa, nec maximus ante eleifend sit amet.
          </div>

          <Link to="/projects" className="btn-wrapper">
            <button className="btn btn--primary">Check out my works!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
