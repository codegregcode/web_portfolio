import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/App.css';

function App() {
  return (
    <>
      <h1>Greg Cain</h1>
      <p>I love creating things, solving problems and learning.</p>
      <p>
        And I&apos;m currently searching for a Junior Software/Web Developer
        role.
      </p>
      <h2>Skills</h2>
      <div className="skills">
        <Skills />
      </div>
      <h2>Projects</h2>
      <div className="projects">
        <Projects />
      </div>
      <h3>Contact</h3>
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
