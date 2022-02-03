import Nav from "./Nav";
function Header() {
  const setActive = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link";

  return (
    <header className="header">
      <div className="header__logo"></div>
      <Nav setActive={setActive}></Nav>
    </header>
  );
}

export default Header;
