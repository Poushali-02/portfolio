import '../App.css';
import '../Css/about.css';

function About() {
  return (
    <div className="portfolio-bg">
      <div className="portfolio-about">
        <div className="portfolio-main about-main">
          <div className="portfolio-left about-left">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I AM A PASSIONATE AI AND MACHINE LEARNING DEVELOPER INTERESTED IN THE DATA SCIENCE FIELD.
              I CAN DELIVER EFFICIENT PROJECTS, ML MODELS, AND DATA ANALYSIS IN A PROFESSIONAL MANNER.
              BECAUSE WHERE THERE IS DATA, THERE IS A WAY.
            </p>
          </div>

          <div className="portfolio-right about-right">
            <div className="about-svg">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer chip */}
                <rect x="30" y="24" width="68" height="80" rx="8" ry="8" strokeWidth="3" />
                {/* Left pins */}
                <line x1="22" y1="36" x2="30" y2="36" strokeWidth="3" />
                <line x1="22" y1="52" x2="30" y2="52" strokeWidth="3" />
                <line x1="22" y1="68" x2="30" y2="68" strokeWidth="3" />
                <line x1="22" y1="84" x2="30" y2="84" strokeWidth="3" />
                {/* Right pins */}
                <line x1="98" y1="36" x2="106" y2="36" strokeWidth="3" />
                <line x1="98" y1="52" x2="106" y2="52" strokeWidth="3" />
                <line x1="98" y1="68" x2="106" y2="68" strokeWidth="3" />
                <line x1="98" y1="84" x2="106" y2="84" strokeWidth="3" />
                {/* Top pins */}
                <line x1="46" y1="16" x2="46" y2="24" strokeWidth="3" />
                <line x1="62" y1="16" x2="62" y2="24" strokeWidth="3" />
                <line x1="78" y1="16" x2="78" y2="24" strokeWidth="3" />
                {/* Bottom pins */}
                <line x1="46" y1="104" x2="46" y2="112" strokeWidth="3" />
                <line x1="62" y1="104" x2="62" y2="112" strokeWidth="3" />
                <line x1="78" y1="104" x2="78" y2="112" strokeWidth="3" />
                {/* Brain outline */}
                <path
                  d="M54 44
                    c-5 0-9 4-9 9
                    c-4 2-6 6-6 10
                    c0 6 4 11 10 12
                    v7
                    c0 3 2 5 5 5
                    h4
                    m10-43
                    c5 0 9 4 9 9
                    c4 2 6 6 6 10
                    c0 6-4 11-10 12
                    v7
                    c0 3-2 5-5 5
                    h-4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner connections */}
                <circle cx="58" cy="56" r="3" strokeWidth="2" />
                <circle cx="70" cy="56" r="3" strokeWidth="2" />
                <circle cx="64" cy="70" r="3" strokeWidth="2" />
                <line x1="58" y1="59" x2="64" y2="67" strokeWidth="2" />
                <line x1="70" y1="59" x2="64" y2="67" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="skillset">
          <ul className="skills">
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
