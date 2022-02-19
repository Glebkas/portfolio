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
          <input className="contact-me__form-input" type="text"></input>
          <input type="email" placeholder=""></input>
          <input type="text" placeholder=""></input>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
