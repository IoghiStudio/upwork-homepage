import { useState } from "react";
import './Subnav.scss';

const subnavItems = [
  'Development & IT',
  'Design & Creative',
  'Sales & Marketing',
  'Writing & Translation',
  'Admin & Customer Support',
];

const dropdownItems = [
  'Finnance & Accounting',
  'HR & Training',
  'Legal',
  'Engineering & Architecture',
  'See all specializations',
];

export const Subnav = () => {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  return (
    <nav className="subnav">
      <ul className="subnav__list">
        {subnavItems.map(item => (
          <li key={item} className="subnav__item">
            {item}
          </li>

        ))}

        <li
          className="subnav__item"
          onMouseEnter={() => setIsDropdownHovered(true)}
          onMouseLeave={() => setIsDropdownHovered(false)}
          onClick={() => setIsDropdownClicked(!isDropdownClicked)}
        >
          More 
          <div className="subnav__arrow"></div>
        </li>
      </ul>

      {(isDropdownHovered || isDropdownClicked) && (
        <ul className="subnav__dropdown">
          {dropdownItems.map(item => (
            <li key={item} className="subnav__dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}