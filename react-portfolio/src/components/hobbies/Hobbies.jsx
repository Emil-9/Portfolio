import "./hobbies.css";
import Coffee from "../../assets/imgs/hobbies/Coffee.PNG";
import Art from "../../assets/imgs/hobbies/Art.jpg";
import Music from "../../assets/imgs/hobbies/Music.jpg";
import TV from "../../assets/imgs/hobbies/TV.jpg";

const Hobbies = () => {
  const imgArray = [
    {
      item: Coffee,
      title: "Coffee	☕",
      text: "Former Barista with 4 years of experience.",
    },
    {
      item: Art,
      title: "Art ✏️",
      text: "I love to draw with pencils and charcoal.",
    },
    { item: Music, title: "Music 📻", text: "To Set up the mood any time." },
    {
      item: TV,
      title: "Movies/Anime 🎬",
      text: "My top ratings: GOT, Friends and Fullmetal Alchemist.",
    },
  ];
  return (
    <div className="hobbies-container">
      <h4 className="square-peg-font capitalize text-center">
        interests and hobbies
      </h4>
      <div className="row text-center">
        {imgArray.map((e, key) => (
          <div key={key} className="pic-frame">
            <img src={e.item} alt="" className="filtered-img" />
            <div className="hobbies-description text-center ">
              <h5>{e.title}</h5>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hobbies;
