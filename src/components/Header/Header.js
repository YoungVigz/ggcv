import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">GGCV</div>
        <nav className="header__nav">
          <div className="header__nav__link"><Link to="/">Home</Link></div>
          <div className="header__nav__link"><Link to="/about">About</Link></div>
          <div className="header__nav__link"><Link to="/projects">Projects</Link></div>
          <div className="header__nav__link"><Link to="/contact">Contact</Link></div>
        </nav>  

        <nav className="header__menu">
          <div className=""></div>

          <div className="header__menu__link">Home</div>
          <div className="header__menu__link">About</div>
          <div className="header__menu__link">Projects</div>
          <div className="header__menu__link">Contact</div>
        </nav>
      </header>
    </>
  );
}

export default Header;
