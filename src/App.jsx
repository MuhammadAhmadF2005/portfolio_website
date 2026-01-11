import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary selection:text-white">
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
