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
            I am 17 years old. I am from Poland.
            I treat programming as my hobby, but it is also my work.
            My other interests are music, terraristics, rollerblades/ice skates, culture of Japan.
            My programming stack: JavaScript/Node.js, React, GraphQL, Go-lang, and many more!
            When I have some free time I usually try to learn rust-lang.    
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
