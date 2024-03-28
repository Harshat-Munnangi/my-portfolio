import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {

  const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return null
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
