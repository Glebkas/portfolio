import Nav from "./Nav";
import data from "../utils/data";
function Footer() {
  const setFooterNavActive = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link nav__link_type_footer";

  const handleIconClick = (e) => {
    window.open(e.target.id, "_blank");
    console.log(e.target.id);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo"></div>
        <div className="footer__menu-icons-container">
          <Nav classType={`nav nav_type_footer`} setActive={setFooterNavActive}></Nav>
          <div className="footer__icons">
            <i
              id={data.iconLinks.github}
              onClick={handleIconClick}
              className="footer__icons_type_github"
            />
            <i
              id={data.iconLinks.linkedin}
              onClick={handleIconClick}
              className="footer__icons_type_linkedin"
            />
            <i
              id={data.iconLinks.facebook}
              onClick={handleIconClick}
              className="footer__icons_type_facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
