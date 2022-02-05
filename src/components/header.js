import Nav from "./Nav";
import { Link } from "react-router-dom";
function Header(props) {
  const setHeaderNavActive = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link";

  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <button
        onClick={props.handleHumburgerClick}
        className={
          props.open
            ? "header__menu-hamburger header__menu-hamburger_close"
            : "header__menu-hamburger"
        }
      ></button>
      <Nav
        handleNavLinkClick={props.handleNavLinkClick}
        classType={props.open ? `nav nav_type_mobile` : `nav nav_type_header`}
        setActive={setHeaderNavActive}
      ></Nav>
    </header>
  );
}

export default Header;
