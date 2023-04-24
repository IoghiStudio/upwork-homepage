import React from 'react';
import './Nav.scss';
import { SearchBar } from '../SearchBar';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Find Talent
          </a>
          <div className="nav__arrow"></div>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            Find Work
          </a>
          <div className="nav__arrow"></div>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            Why Upwork
          </a>
          <div className="nav__arrow"></div>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            Enterprise
          </a>
          <div className="nav__arrow"></div>
        </li>
      </ul>

      <div className="nav__search">
        <SearchBar />
        {/* <LoginPage /> */}
      </div>
    </nav>
  );
}