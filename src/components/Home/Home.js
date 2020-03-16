import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from '../../images/home.svg';

import './Home.scss';

function Home() {
  return (
    <>
      <div className="section-wrapper">
        <div className="home">
          <div className="home__text">
            Young full-stack <br/> developer looking for <br/> new
            <span className="home__text--primary"> experiences.</span>
          </div>
          <br/>
          <Link to="/about" className="btn-wrapper">
            <button className="btn btn--primary">Want to know more?</button>
          </Link>
        </div>
        <div className="svg-wrapper">
          <SVG className="svg"></SVG>
        </div>
      </div>
    </>
  );
}

export default Home;
