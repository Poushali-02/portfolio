import '../App.css';
import '../Css/intro.css';
import Typewriter from "../Components/Typewriter";
import meImg from '../assets/me.jpeg';

function Intro() {
  return (
    <div id="home" className="portfolio-bg">
      <nav className="portfolio-navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skillset</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="portfolio-main">
        <div className="portfolio-left">
          <div className="intro-name-box">
            <h1 className="intro-name">Poushali</h1>
            <h1 className="intro-name">Bhattacharyya</h1>
          </div>
          <div className="intro-subtitle"><Typewriter text="A PASSIONATE AI DEVELOPER" speed={40} /></div>
          <div className="intro-links">
            <a href="https://github.com/Poushali-02" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="www.linkedin.com/in/poushali020106" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="poushalibhattacharyya02@gmail.com">
              Email
            </a>
          </div>
        </div>
        <div className="portfolio-right">
          <div className="intro-profile-pic">
            <img src={meImg} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
