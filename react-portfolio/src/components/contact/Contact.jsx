import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="capitalize">Let's get in touch</h2>
      <p className="capitalize">here's my contact links, just drop a message</p>
      <ul className="disp-flex padding-t-20">
        <li>
          <a href="mailto:emilioaljoudeh@gmail.com">
            <i class="bi-google" role="img" aria-label="Google" size="20px"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/emil-aljoudeh">
            <i class="bi-linkedin" role="img" aria-label="LinkedIn"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/emo_963/">
            <i class="bi-instagram" role="img" aria-label="Instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/emil-9">
            <i class="bi-github" role="img" aria-label="GitHub"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
