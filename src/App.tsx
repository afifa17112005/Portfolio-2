import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Splash from './components/Splash';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from './components/PageTransition';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Show the splash screen for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <AnimatePresence>
        {loading && <Splash />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          margin: '2rem',
          backgroundColor: 'var(--white)',
          border: 'var(--border-width) solid var(--black)',
          boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color)',
          minHeight: 'calc(100vh - 4rem)',
          overflow: 'hidden',
          position: 'relative'
        }}>
        {/* Decorative torn paper bottom edge - simplified version for now */}
        <div style={{
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          right: 0,
          height: '20px',
          backgroundColor: '#d1d1d1',
          zIndex: -1
        }} />

        <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
        <PageTransition />
        <main>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </motion.div>
      {/* Fairy removed */}
    </>
  );
}

export default App;
