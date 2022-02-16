import data from "../utils/data";

function ContactMe() {
  const handleIconClick = (e) => {
    window.open(e.target.id, "_blank");
    console.log(e.target.id);
  };

  return (
    <>
      <div>
        <h2>Get in Touch</h2>
        <p>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
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

      <div>
        <h2>Contact Me</h2>
        <form>
          <input type="text"></input>
          <input type="email" placeholder=""></input>
          <input type="text" placeholder=""></input>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
