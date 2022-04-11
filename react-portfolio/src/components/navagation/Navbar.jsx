import "./navbar.css";
import logo from "./logo.jpg";
const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-items-list">
        <li className="navbar-item">
          <a href="#aboutSection" className="nav-link">
            About Me
          </a>
        </li>
        <li className="navbar-item">
          <a href="#experienceSection" className="nav-link">
            Experience
          </a>
        </li>
        <li className="navbar-item">
          <a href="#skillsSection" className="nav-link">
            Skills
          </a>
        </li>
        <li className="navbar-item">
          <a href="#hobbiesSection" className="nav-link">
            Hobbies
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contactSection" className="nav-link">
            Get In Touch
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
