import "./App.css";
import Navbar from "./components/navagation/Navbar";
import SectionPage from "./UI/sectionPageLayout/SectionPage";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionPage id="aboutSection" pageColor="#f6f6f6" child={<About />} />
      <SectionPage id="skillsSection" pageColor="#1d364e" child={<Skills />} />
      <SectionPage id="contactSection" pageColor="#f6f6f6" child={<><Contact /><Footer /></>} />

    </div>
  );
}

export default App;
