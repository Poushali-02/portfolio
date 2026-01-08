import '../App.css';
import '../Css/intro.css';
import Typewriter from "../Components/Typewriter";
import meImg from '../assets/me.jpeg';
import { useState } from 'react';

function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div id="home" className="portfolio-bg">
      <nav className="portfolio-navbar">
      <button
          className={`hamburger ${isOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <ul className={`nav-links ${isOpen ? "nav-open" : ""}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skillset</a></li>
          <li><a href="#experiences" onClick={closeMenu}>Experiences</a></li>
          <li><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
            <a href="https://medium.com/@poushali02" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
            <a href="mailto:poushalibhattacharyya02@gmail.com">
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
