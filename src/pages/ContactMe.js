import data from "../utils/data";
import Icons from "../components/Icons";

function ContactMe() {
  return (
    <div className="contact-me">
      <div className="contact-me-top">
        <h2 className="contact-me-top__title">Get in Touch</h2>
        <div className="contact-me-top__description-container">
          <p className="contact-me-top__description">{data.contact}</p>
          <Icons></Icons>
        </div>
      </div>

      <div className="contact-me__form-section">
        <h2 className="contact-me__form-section-title">Contact Me</h2>
        <form className="contact-me__form">
          <label className="contact-me__form-label" for="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="contact-me__form-input"
            placeholder="Insert your name here…"
          ></input>
          <label className="contact-me__form-label" for="email">
            Email Address
          </label>
          <input
            className="contact-me__form-input"
            name="email"
            type="email"
            placeholder="email@example.com"
          ></input>
          <label className="contact-me__form-label" for="email">
            Message
          </label>
          <input
            className="contact-me__form-input"
            name="message"
            type="text"
            placeholder="How can I help?"
          ></input>
          <button className="contact-me__form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
