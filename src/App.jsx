import './App.css';

function App() {
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
            {/* Replace the src below with your actual profile image path */}
            <img src="https://i.ibb.co/6bQ6Q8k/profile-placeholder.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
