import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Lenis from 'lenis';
import FloatingLines from './FloatingLines';
import About from './component_/About';
import AudiophileSection from './component_/AudiophileSection';
import CoffeeSection from './component_/CoffeeSection';
import ArduinoSection from './component_/ArduinoSection';
import Projects from './component_/Projects';
import Skills from './component_/Skills';
import Socials from './component_/Socials';
import ArduinoProjectsPage from './component_/ArduinoProjectsPage';
import CustomCursor from './component_/CustomCursor';
import './App.css';

const SectionTitlePage = ({ title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Floating Animation
    gsap.to(textRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      color: 'transparent',
      webkitTextStroke: '2px #fff',
      textShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
      scale: 1.05,
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      color: '#fff',
      webkitTextStroke: '0px transparent',
      textShadow: '0 0 30px rgba(255,255,255,0.1)',
      scale: 1,
      duration: 0.3
    });
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      zIndex: 1,
      position: 'relative'
    }}>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '900',
          fontSize: 'clamp(3rem, 15vw, 15rem)',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#fff',
          textShadow: '0 0 30px rgba(255,255,255,0.1)',
          cursor: 'default',
          willChange: 'transform, color, text-shadow',
          textAlign: 'center',
          padding: '0 20px',
          width: '100%',
          textWrap: 'balance'
        }}
      >
        {title}
      </h1>
    </div>
  );
};

const Home = () => {
  const [areLinesVisible, setAreLinesVisible] = useState(true);
  const floatingLinesContainerRef = useRef(null);
  const lenisRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.5, // Standardized multiplier, reduced duration for control
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle incoming navigation from other pages (like back button)
    if (location.state?.targetSection) {
      setTimeout(() => {
        const element = document.getElementById(location.state.targetSection);
        if (element) {
          lenis.scrollTo(element, { immediate: true });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }

    return () => {
      lenis.destroy();
    };
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  };

  // Scroll opacity handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;
      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      if (floatingLinesContainerRef.current) {
        floatingLinesContainerRef.current.style.opacity = newOpacity;
        floatingLinesContainerRef.current.style.pointerEvents = newOpacity > 0 ? 'auto' : 'none';
      }

      if (newOpacity <= 0 && areLinesVisible) {
        setAreLinesVisible(false);
      } else if (newOpacity > 0 && !areLinesVisible) {
        setAreLinesVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [areLinesVisible]);

  // Button Hover Effect
  const handleBtnEnter = (e) => {
    gsap.to(e.target, {
      y: -3,
      borderColor: '#fff',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
      duration: 0.3
    });
  };

  const handleBtnLeave = (e) => {
    gsap.to(e.target, {
      y: 0,
      borderColor: 'transparent',
      boxShadow: 'none',
      duration: 0.3
    });
  };

  return (
    <>
      <div className="content-wrapper">
        <header className="top-bar">
          <div
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            Home
          </div>
          <nav className="center-top" style={{ display: 'flex', gap: '20px', pointerEvents: 'auto' }}>
            {['about', 'projects', 'audiophile', 'skills', 'socials'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                onMouseEnter={handleBtnEnter}
                onMouseLeave={handleBtnLeave}
                className="nav-link"
                style={{
                  border: '1px solid transparent',
                  borderRadius: '20px',
                  padding: '8px 16px'
                }}
              >
                {section === 'audiophile' ? 'Interests' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          <div className="date-location">Created<br />2025/11/21</div>
        </header>
        <main className="center-content">
          <h1>Aaron Preston</h1>
          <h2>李宜倖</h2>
          <div className="role">Year 2</div>
        </main>
        <div></div>
      </div>

      <div
        ref={floatingLinesContainerRef}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, transition: 'opacity 0.1s ease-out' }}
      >
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[12, 5, 4]}
          lineDistance={[20, 22, 18]}
          bendRadius={10.0}
          bendStrength={-1}
          interactive={true}
          parallax={true}
          paused={!areLinesVisible}
        />
      </div>

      <div id="about">
        <About />
      </div>

      {/* COMBINED PROJECTS SECTION */}
      <div id="projects">
        <SectionTitlePage title="PROJECTS" />
        <ArduinoSection />
        <Projects />
      </div>

      <div id="audiophile">
        <SectionTitlePage title="INTERESTS" />
        <AudiophileSection />
        <CoffeeSection />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="socials">
        <Socials />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arduino-projects" element={<ArduinoProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
