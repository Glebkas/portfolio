import data from "../utils/data";

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
    </div>
  );
}

export default Homepage;
