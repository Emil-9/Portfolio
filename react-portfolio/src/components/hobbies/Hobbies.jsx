import "./hobbies.css";
import C1 from "../../assets/imgs/coffee/C (1).PNG";
import C2 from "../../assets/imgs/coffee/C (2).PNG";
import C3 from "../../assets/imgs/coffee/C (3).PNG";
import C4 from "../../assets/imgs/coffee/C (4).PNG";

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h3 className="Capitalize text-center">interests and hobbies</h3>
      <div className="row-md-2">
        <div className="col-med-6">
            <img src={C1} alt="" className=""/>
        </div>
        <div className="col-med-6 float-left">
          <h5 className=" color-white">Coffee</h5>
          <p className=" color-white">
            Former Barista with 5 years of experience <br /> I love every thing
            about coffee
          </p>
        </div>
        <div className="col-med-6">
            <img src="" alt="" className=""/>
        </div>
        <div className="col-med-6">
          <h5 className=" color-white">Coffee</h5>
          <p className=" color-white">
            Former Barista with 5 years of experience <br /> I love every thing
            about coffee
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hobbies;
