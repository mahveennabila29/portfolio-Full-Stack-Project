import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="certifications" className="section">
          <Certifications />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="interests" className="section">
          <Interests />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
