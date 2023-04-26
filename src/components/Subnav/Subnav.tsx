import { useState } from "react";
import './Subnav.scss';


export const Subnav = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <nav className="subnav">
      <ul className="subnav__list">
        <li className="subnav__item">
          Development & IT
        </li>

        <li className="subnav__item">
          Design & Creative
        </li>

        <li className="subnav__item">
          Sales & Marketing
        </li>

        <li className="subnav__item">
          Writing & Translation
        </li>

        <li className="subnav__item">
          Admin & Customer Support
        </li>

        <li
          className="subnav__item"
          onMouseEnter={() => setIsDropdownActive(true)}
          onMouseLeave={() => setIsDropdownActive(false)}
        >
          More 

          <div className="subnav__arrow"></div>
        </li>
      </ul>

      {/* {isDropdownActive && (

      )} */}
    </nav>
  )
}