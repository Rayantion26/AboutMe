import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const barRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Fade out container then call onComplete
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: onComplete
                });
            }
        });

        // Animate Progress Bar
        tl.to(barRef.current, {
            width: '100%',
            duration: 2.5, // Initial fake load time
            ease: "power1.inOut"
        });

        // Text Fade In/Out
        tl.to(textRef.current, {
            opacity: 1,
            duration: 0.5
        }, 0);

        // Optional: Check if window is loaded to speed up or wait
        const handleLoad = () => {
            // If window loads faster than animation, we can potentially speed it up
            // But for smoothness, we often let the minimum animation play out
            // tl.timeScale(2); // Speed up remaining animation
        };

        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000',
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff'
            }}
        >
            <div
                ref={textRef}
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.2rem',
                    letterSpacing: '0.2em',
                    marginBottom: '20px',
                    opacity: 0
                }}
            >
                LOADING
            </div>

            <div style={{
                width: '200px',
                height: '2px',
                backgroundColor: '#333',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div
                    ref={barRef}
                    style={{
                        width: '0%',
                        height: '100%',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
