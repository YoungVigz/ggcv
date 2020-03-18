import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const update = () => {
  const menu = document.querySelector(".header__menu");
  menu.classList.toggle('header__menu--active');
}

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

        <div className="header__hamburger" onClick={update.bind()}>
          <div className="header__hamburger__element"></div>
          <div className="header__hamburger__element"></div>
          <div className="header__hamburger__element"></div>
        </div>

        <nav className="header__menu">
          <div className="header__menu__link"><Link to="/" onClick={update.bind()}>Home</Link></div>
          <div className="header__menu__link"><Link to="/about" onClick={update.bind()}>About</Link></div>
          <div className="header__menu__link"><Link to="/projects" onClick={update.bind()}>Projects</Link></div>
          <div className="header__menu__link"><Link to="/contact" onClick={update.bind()}>Contact</Link></div>
        </nav>
      </header>
    </>
  );
}

export default Header;
