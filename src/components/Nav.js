import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "nav__link nav__link_active" : "nav__link";

function Nav(props) {
  return (
    <nav className="nav">
      <NavLink className={props.setActive} to="/">
        Home
      </NavLink>
      <NavLink className={props.setActive} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className={props.setActive} to="/contact">
        contact me
      </NavLink>
    </nav>
  );
}

export default Nav;
