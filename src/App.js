import React from 'react';
import CustomNavbar from './components/navbar/CustomNavbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import WorkExperience from './components/experience/WorkExperience';
import Music from './components/music/Music';
// import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />
      <About />
      <Projects />
      <WorkExperience />
      <Music />
      <footer className="bottom-text text-center mt-5">
      <hr />
        <p>Created and designed by James Senior © 2022</p>
      </footer>
    </div>
  );
}

export default App;
