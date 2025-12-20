import './App.css';
import './index.css'
import Intro from './Components/intro';
import Projects from './Components/projects';
import About from './Components/about';
import Skillset from './Components/skills';
import ExperiencesSection from './Components/experiences';

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Skillset />
      <ExperiencesSection />
    </>
  );
}

export default App;
