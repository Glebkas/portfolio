import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();
  const handleContactMebuttonClick = () => {
    navigate("/contactme");
  };

  return (
    <section className="contact">
      <h2 className="contact__title">
        Interested in doing a project together?
      </h2>
      <div className="contact__line"></div>
      <button className="contact__button" onClick={handleContactMebuttonClick}>
        CONTACT ME
      </button>
    </section>
  );
}

export default Contact;
