import '../App.css';
import '../Css/about.css';
import Typewriter from "../Components/Typewriter";

function About() {
  return (
    <div id="about" className="portfolio-bg">
      <div className="about-title">
        <h2>About Me</h2>
      </div>
      <div className="portfolio-about">
        <div className="about-main">
          <div className="portfolio-left">            
            <p className="about-text">
              I AM A PASSIONATE AI AND MACHINE LEARNING DEVELOPER INTERESTED IN THE DATA SCIENCE FIELD.
              I CAN DELIVER EFFICIENT PROJECTS, ML MODELS, AND DATA ANALYSIS IN A PROFESSIONAL MANNER.
            </p>
            <p className='about-text-hero'>
              <Typewriter
              text="Because where there is data, there is a way."
              />
            </p>
          </div>

          <div className="portfolio-right about-right">
            <div className="about-svg">
              <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="220" height="220" fill="#000000"/>
              <rect x="50" y="50" width="120" height="120"
              fill="none" stroke="#B0B0B0" stroke-width="6"
              stroke-linejoin="round"/>
              <line x1="90" y1="40" x2="90" y2="50" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="90" cy="36" r="4" fill="#B0B0B0"/>
              <line x1="130" y1="40" x2="130" y2="50" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="130" cy="36" r="4" fill="#B0B0B0"/>

              <line x1="90" y1="170" x2="90" y2="180" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="90" cy="184" r="4" fill="#B0B0B0"/>
              <line x1="130" y1="170" x2="130" y2="180" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="130" cy="184" r="4" fill="#B0B0B0"/>

              <line x1="40" y1="90" x2="50" y2="90" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="36" cy="90" r="4" fill="#B0B0B0"/>
              <line x1="40" y1="130" x2="50" y2="130" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="36" cy="130" r="4" fill="#B0B0B0"/>

              <line x1="170" y1="90" x2="180" y2="90" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="184" cy="90" r="4" fill="#B0B0B0"/>
              <line x1="170" y1="130" x2="180" y2="130" stroke="#B0B0B0" stroke-width="6" stroke-linecap="round"/>
              <circle cx="184" cy="130" r="4" fill="#B0B0B0"/>

              <g transform="translate(60,60)" stroke="#B0B0B0" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M50 20
                        C40 10, 25 10, 20 22
                        C10 25, 10 40, 18 46
                        C10 55, 15 70, 27 72
                        C30 80, 42 82, 50 76" />
                <path d="M50 20
                        C60 10, 75 10, 80 22
                        C90 25, 90 40, 82 46
                        C90 55, 85 70, 73 72
                        C70 80, 58 82, 50 76" />
                <line x1="50" y1="18" x2="50" y2="78"/>

                <path d="M30 32
                        C24 34, 24 40, 30 42" />
                <path d="M34 50
                        C28 52, 28 58, 34 60" />

                <path d="M66 32
                        C72 34, 72 40, 66 42" />
                <path d="M62 50
                        C68 52, 68 58, 62 60" />
              </g>
            </svg>

            </div>
          </div>
        </div>
        <div className="skillset">
          <ul className="skills" id="skillsList">
            <li className="skill">Python</li>
            <li className="skill">Scikit-learn</li>
            <li className="skill">TensorFlow</li>
            <li className="skill">Keras</li>
            <li className="skill">MCP Tools</li>
            <li className="skill">SQL</li>
            <li className="skill">FastAPI</li>
            <li className="skill">Flask</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
