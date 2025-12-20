import '../App.css';
import '../Css/intro.css';
import meImg from '../assets/me.jpeg';

function Intro() {
  return (
    <div className="portfolio-bg">
      <nav className="portfolio-navbar">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Skillset</li>
          <li>Experiences</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="portfolio-main">
        <div className="portfolio-left">
          <div className="intro-name-box">
            <h1 className="intro-name">Poushali</h1>
            <h1 className="intro-name">Bhattacharyya</h1>
          </div>
          <div className="intro-subtitle">A PASSIONATE AI DEVELOPER</div>
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
