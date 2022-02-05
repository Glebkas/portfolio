import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav className={props.classType}>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="/contactme"
      >
        contact me
      </NavLink>
    </nav>
  );
}

export default Nav;
