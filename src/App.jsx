import { useState, useEffect } from 'react';
import FloatingLines from './FloatingLines';
import TextPressure from './TextPressure';
import ScrollReveal from './ScrollReveal';
import './App.css';

function App() {
  const [linesOpacity, setLinesOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out completely by the time we scroll 80% of the viewport height
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;

      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      setLinesOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <header className="top-bar">
          <div className="logo">TzuChi</div> {/* Placeholder logo like the photo */}
          <div className="center-top"></div>
          <div className="date-location">Made — 2025/11/21</div>
        </header>

        <main className="center-content">
          <h1>
            Aaron Preston
          </h1>
          <h2>
            李宜倖
          </h2>
          <div className="role">Year 2</div>
        </main>

        {/* Footer or bottom elements could go here */}
        <div></div>
      </div>

      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%)',
        marginTop: '-20vh', /* Pull it up to overlap */
        paddingTop: '20vh'  /* Compensate for the pull */
      }}>
        <div style={{ position: 'relative', height: '800px', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', flex: 1, width: '100%' }}>
            <TextPressure
              text="MY DREAM"
              flex={true}
              alpha={false}
              stroke={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div style={{ position: 'relative', flex: 1, width: '100%' }}>
            <TextPressure
              text="IN FIVE YEARS??"
              flex={true}
              alpha={false}
              stroke={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#c8ff81ff"
              strokeColor="#ffffffff"
              minFontSize={36}
            />
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backgroundColor: 'black', padding: '40px' }}>
        <div style={{ maxWidth: '800px', color: 'white' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
            No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
      </div>

      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0, opacity: linesOpacity, pointerEvents: linesOpacity > 0 ? 'auto' : 'none', transition: 'opacity 0.1s ease-out' }}>
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[7, 5, 4]}
          lineDistance={[20, 22, 18]}
          bendRadius={10.0}
          bendStrength={-1}
          interactive={true}
          parallax={true}
        />
      </div>
    </>
  );
}

export default App;
