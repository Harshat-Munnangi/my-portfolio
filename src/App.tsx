import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
