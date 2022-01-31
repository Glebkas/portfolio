import data from "../utils/data";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage">
      <section className="homepage-top">
        <div className="homepage-top__image">
          <h2 className="homepage-top__title">
            {data.info.title}
            <div className="homepage-top__button">
              <div className="homepage-top__button-icon"></div>
              <p className="homepage-top__button-caption">About Me</p>
            </div>
          </h2>
        </div>
      </section>
      <section className="about">
        <div className="about__image" />
        <div className="about__description-container">
          <h2 className="about__title">About Me</h2>
          <p className="about__description">{data.info.aboutMe}</p>
          <Link className="about__button" to="/portfolio">
            Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
