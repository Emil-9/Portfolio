import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="square-peg-font capitalize">Let's get in touch</h2>
      <p className="capitalize">here's my contact links, just drop a message</p>
      <ul className="disp-flex padding-t-20">
        <li>
          <a target="-blank" href="mailto:emilioaljoudeh@gmail.com">
            <i
              className="bi-google"
              role="img"
              aria-label="Google"
              size="20px"
            ></i>
          </a>
        </li>
        <li>
          <a target="-blank" href="https://linkedin.com/in/emil-aljoudeh">
            <i className="bi-linkedin" role="img" aria-label="LinkedIn"></i>
          </a>
        </li>
        <li>
          <a target="-blank" href="https://www.instagram.com/emo_963/">
            <i className="bi-instagram" role="img" aria-label="Instagram"></i>
          </a>
        </li>
        <li>
          <a target="-blank" href="https://github.com/emil-9">
            <i className="bi-github" role="img" aria-label="GitHub"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
