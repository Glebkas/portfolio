import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "header__nav-link header__nav-link_active" : "header__nav-link";

function Navbar() {
  return (
    <nav className="header__nav">
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className={setActive} to="/contact">
        contact me
      </NavLink>
    </nav>
  );
}

export default Navbar;
