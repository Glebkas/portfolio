function About(props) {
  return (
    <section id="about" className="about">
      <div className="about__image" />
      <div className="about__description-container">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">{props.data.info.aboutMe}</p>
        <button
          onClick={props.handleAboutbuttonClick}
          className="about__button"
        >
          Go to Portfolio
        </button>
      </div>
    </section>
  );
}

export default About;
