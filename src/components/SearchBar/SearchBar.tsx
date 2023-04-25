import React, { useState } from 'react';
import './SearchBar.scss';
import classNames from 'classnames';

const dropdownLinks = [
  {
    id: 1,
    title: 'Talent',
    text: 'Hire professionals and agencies',
  },
  {
    id: 2,
    title: 'Projects',
    text: 'Buy ready-to-start services',
  },
  {
    id: 3,
    title: 'Jobs',
    text: 'Apply to jobs posted by clients',
  }
];

export const SearchBar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <div className="searchbar">

      <div className="searchbar__icon"></div>
      
      <label
        className='searchbar__label'
      >
        <input
          className='searchbar__input'
          placeholder='Search'
          type="text"
        />
      </label>

      <div
        onClick={() => setIsDropdownActive(!isDropdownActive)}
        className={classNames(
          "searchbar__dropdown",
          {
            "searchbar__dropdown--active": isDropdownActive
          },
        )}
      >
        Talent

        <div className="searchbar__arrow"></div>
      </div>

      {isDropdownActive && (
        <div className={classNames(
          "searchbar__dropdown-options",
          {
            "searchbar__dropdown-options--open": isDropdownActive
          }
        )}>
          {dropdownLinks.map(link => {
            const { id, title, text } = link;

            return (
              <React.Fragment key={id} >
                <div className="searchbar__link-container">
                  <div className={classNames(
                    "searchbar__link-icon",
                    `searchbar__link-icon--${title}`
                  )}></div>

                  <div className="searchbar__link">
                    <div className="searchbar__link-title">
                      {title}
                    </div>

                    <div className="searchbar__link-text">
                      {text}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      )}
    </div>
  );
}