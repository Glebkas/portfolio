import Nav from "./Nav";
function Header() {
  const setHeaderNavActive = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link";

  return (
    <header className="header">
      <div className="header__logo"></div>
      <Nav setActive={setHeaderNavActive}></Nav>
    </header>
  );
}

export default Header;
