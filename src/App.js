import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext.js';

function App() {
  return (
    <HashRouter >
      <ThemeProvider>
        <div className="App">
        <div className="animated-bg-shape shape1"></div>
        <div className="animated-bg-shape shape2"></div>
        <div className="animated-bg-shape shape3"></div>
          <Navbar />
          <main>
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;