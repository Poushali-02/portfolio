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
          <li>Experiences</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="portfolio-main">
        <div className="portfolio-left">
          <div className="portfolio-name-box">
            <h1 className="portfolio-name">Poushali</h1>
            <h1 className="portfolio-name">Bhattacharyya</h1>
          </div>
          <div className="portfolio-subtitle">A PASSIONATE AI DEVELOPER</div>
        </div>
        <div className="portfolio-right">
          <div className="portfolio-profile-pic">
            <img src={meImg} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
