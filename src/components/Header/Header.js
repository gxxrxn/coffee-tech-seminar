import team_coffee_logo from "../img/team_coffee_logo.png";

const Header = () => {
    return (
        <>
        <img src={team_coffee_logo} alt="team coffe logo" />
        <ul>
            <li><a href="#about">about</a></li>
            <li><a href="#session">session</a></li>
        </ul>
        </>
    );
}

export default Header;