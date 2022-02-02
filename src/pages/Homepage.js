import data from "../utils/data";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Homepage() {
  let navigate = useNavigate();
  const handleAboutbuttonClick = () => {
    navigate("/portfolio");
  };
  const handleContactMebuttonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="homepage">
      <section className="homepage-top">
        <div className="homepage-top__image">
          <div className="homepage-top__title-container">
            <h2 className="homepage-top__title">{data.info.title}</h2>
            <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
              <div className="homepage-top__button">
                <div className="homepage-top__button-icon"></div>
                <p className="homepage-top__button-caption">About Me</p>;
              </div>
            </HashLink>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="about__image" />
        <div className="about__description-container">
          <h2 className="about__title">About Me</h2>
          <p className="about__description">{data.info.aboutMe}</p>
          <button onClick={handleAboutbuttonClick} className="about__button">
            Go to Portfolio
          </button>
        </div>
      </section>
      <section className="homepage-contact">
        <h2 className="homepage-contact__title">
          Interested in doing a project together?
        </h2>
        <div className="homepage-contact__line"></div>
        <button
          className="homepage-contact__button"
          onClick={handleContactMebuttonClick}
        >
          CONTACT ME
        </button>
      </section>
    </div>
  );
}

export default Homepage;
