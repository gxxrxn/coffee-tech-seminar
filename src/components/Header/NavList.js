const NavList = ({ isNavVisable }) => {
  return (
    <ul
      className={`${
        isNavVisable ? "header-link-list-on" : "header-link-list-off"
      } header-link-list`}
    >
      <li className='header-link-list-element'>
        <a className='header-link' href='#about'>
          about
        </a>
      </li>
      <li className='header-link-list-element'>
        <a className='header-link' href='#session'>
          session
        </a>
      </li>
    </ul>
  );
};

export default NavList;
