import data from "../utils/data";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Contact from "../components/Contact";

function Homepage() {
  let navigate = useNavigate();
  const handleAboutbuttonClick = () => {
    navigate("/portfolio");
  };

  return (
    <div className="homepage">
      <section className="homepage-top">
        <div className="homepage-top__image"></div>
        <div className="homepage-top__title-container">
          <h2 className="homepage-top__title">{data.info.title}</h2>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <div className="homepage-top__button">
              <div className="homepage-top__button-icon"></div>
              <p className="homepage-top__button-caption">About Me</p>;
            </div>
          </HashLink>
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
      <Contact></Contact>
    </div>
  );
}

export default Homepage;
