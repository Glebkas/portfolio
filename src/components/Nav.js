import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav className={props.classType}>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="/portfolio/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        onClick={props.handleNavLinkClick}
        className={props.setActive}
        to="portfolio/contactme"
      >
        contact me
      </NavLink>
    </nav>
  );
}

export default Nav;
