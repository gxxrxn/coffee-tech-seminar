import { useState } from "react";
import team_coffee_logo from "../img/team_coffee_logo.png";

import "./Header.css";
import NavList from "./NavList";

const Header = () => {
  const [isNavVisable, setIsNavVisable] = useState(true);

  const onClick = () => {
    setIsNavVisable(!isNavVisable);
  };
  return (
    <div className='header'>
      <img
        className='header-logo'
        src={team_coffee_logo}
        alt='team coffe logo'
      />
      <button className='hamburger-button' onClick={onClick}>
        hamburger
      </button>

      <NavList isNavVisable={isNavVisable} />
    </div>
  );
};

export default Header;
