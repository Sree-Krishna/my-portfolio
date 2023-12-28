import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>Your introduction and personal details go here.</p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p>Details and descriptions of your projects go here.</p>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <p>Your technical skills and expertise go here.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Contact information and a form can go here.</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>My Portfolio</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2023 Your Name</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
