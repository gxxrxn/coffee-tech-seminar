import { useState } from "react";
import team_coffee_logo from "../img/team_coffee_logo.png";
import hamburger_icon from "./img/hamburger_icon.png";

import "./Header.css";
import NavList from "./NavList";

const Header = () => {
  const [isNavVisable, setIsNavVisable] = useState(true);

  const onClick = () => {
    setIsNavVisable(!isNavVisable);
  };
  return (
    <div className='header'>
      <a href='#' className='home-link'>
        <img
          className='header-logo'
          src={team_coffee_logo}
          alt='team coffe logo'
        />
      </a>
      <button className='hamburger-button' onClick={onClick}>
        <img
          className='hamburger-button-img'
          src={hamburger_icon}
          alt='hamburger'
        />
      </button>

      <NavList isNavVisable={isNavVisable} />
    </div>
  );
};

export default Header;
