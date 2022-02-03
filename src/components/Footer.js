import Nav from "./Nav";
function Footer() {
  const setActive = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link nav__link_type_footer";
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo"></div>
        <Nav setActive={setActive}></Nav>
        <div className="footer__icons">
          <i className="footer__icons_type_github" />
          <i className="footer__icons_type_linkedin" />
          <i className="footer__icons_type_facebook" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
