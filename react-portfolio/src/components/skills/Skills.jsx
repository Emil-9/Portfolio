import "./skills.css";
import { iconsArray } from "./iconsArray.js";
const Skills = () => {
  console.log(iconsArray.length);
  return (
    <div className="skills-container">
      <div className="row">
        {iconsArray.map((item, keyId) => (
          <div className="column" key={keyId}>
            <div className="circle">
              <img
                width="30px"
                height="30px"
                alt="icon"
                src={require(`${item.path}`).default}
                key={keyId}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
