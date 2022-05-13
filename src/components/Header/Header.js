import team_coffee_logo from "../img/team_coffee_logo.png";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
        <img className="header-logo" src={team_coffee_logo} alt="team coffe logo" />
        <ul className="header-link-list">
            <li className="header-link-list-element">
                <a className="header-link" href="#about">about</a>
            </li>
            <li className="header-link-list-element">
                <a className="header-link" href="#session">session</a>
            </li>
        </ul>
        </div>
    );
}

export default Header;