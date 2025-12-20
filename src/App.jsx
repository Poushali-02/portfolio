import './App.css';
import './index.css'
import Intro from './Components/intro';
import Projects from './Components/projects';
import About from './Components/about';
import Skillset from './Components/skills';
import ExperiencesSection from './Components/experiences';
import Contact from './Components/contact';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const fillEl = document.getElementById("scroll-progress-fill");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (fillEl) {
        fillEl.style.height = `${progress}%`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-fill" id="scroll-progress-fill" />
      </div>
      <Intro />
      <Projects />
      <About />
      <Skillset />
      <ExperiencesSection />
      <Contact />
    </>
  );
}

export default App;
