import "./skills.css";
import Columns from "./Columns";
import { ReactComponent as Matlab } from "./icons/Matlab.svg";
import { ReactComponent as Bootstrap } from "./icons/Bootstrap.svg";
import { ReactComponent as ReactIcon } from "./icons/React.svg";
import { ReactComponent as HTML } from "./icons/HTML.svg";
import { ReactComponent as JS } from "./icons/JS.svg";
import { ReactComponent as CSS } from "./icons/CSS.svg";
import { ReactComponent as Trello } from "./icons/Trello.svg";
import { ReactComponent as Wordpress } from "./icons/Wordpress.svg";
import { ReactComponent as Github } from "./icons/Github.svg";
import { ReactComponent as Canva } from "./icons/Canva.svg";
import { ReactComponent as NPM } from "./icons/NPM.svg";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="row">
        <Columns name="Matlab" child={<Matlab className="skills-icons" />} />
        <Columns
          name="React.JS"
          child={<ReactIcon className="skills-icons" />}
        />
        <Columns
          name="WordPress"
          child={<Wordpress className="skills-icons" />}
        />
        <Columns name="JS/ES6" child={<JS className="skills-icons" />} />
        <Columns name="HTML" child={<HTML className="skills-icons" />} />
        <Columns name="CSS" child={<CSS className="skills-icons" />} />
        <Columns name="GitHub" child={<Github className="skills-icons" />} />
        <Columns
          name="Bootstrap"
          child={<Bootstrap className="skills-icons" />}
        />
        <Columns name="NPM" child={<NPM className="skills-icons" />} />
        <Columns name="Canva" child={<Canva className="skills-icons" />} />
        <Columns name="Trello" child={<Trello className="skills-icons" />} />
      </div>
    </div>
  );
};
export default Skills;
