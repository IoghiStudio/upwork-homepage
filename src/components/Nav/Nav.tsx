import React, { useState } from 'react';
import './Nav.scss';
import { SearchBar } from '../SearchBar';
import cn from 'classnames';
import { LoginMenu } from '../LoginMenu';

const links = [
  {
    id: 1,
    text: 'Find Talent'
  },
  {
    id: 2,
    text: 'Find Work'
  },
  {
    id: 3,
    text: 'Why Upwork'
  },
]

export const Nav = () => {
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map(({id, text}) => (
          <li
            key={id}
            className="nav__item"
            onMouseEnter={() => setCurrentLink(id)}
            onMouseLeave={() => setCurrentLink(0)}
          >
            <a
              href="/"
              className={cn(
                "nav__link",
                {
                  "nav__link--active": currentLink === id,
                }
              )}
            >
              {text}
            </a>

            <div
              className={cn(
                "nav__arrow",
                {
                  "nav__arrow--active": currentLink === id,
                }
              )}
            ></div>
          </li>
        ))}

        <li
          className="nav__item"
          onMouseEnter={() => setCurrentLink(links.length + 1)}
          onMouseLeave={() => setCurrentLink(0)}
        >
          <a
            href="/" 
            className={cn(
              "nav__link",
              {
                "nav__link--active": currentLink === links.length + 1,
              }
            )}
          >
            Enterprise
          </a>
        </li>
      </ul>

      <div className="nav__search">
        <SearchBar />
        <LoginMenu />
      </div>
    </nav>
  );
}