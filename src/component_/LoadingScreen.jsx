import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const barRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        let isWindowLoaded = document.readyState === "complete";
        let areAssetsLoaded = false;
        let animationFinished = false;
        let isMounted = true;

        if (!barRef.current || !textRef.current || !containerRef.current) return;

        // 1. Initial Animation: Go to 90% and wait
        tl.to(barRef.current, {
            width: '90%',
            duration: 1.5, // Minimum reasonable load time
            ease: "power2.inOut",
            onComplete: () => {
                if (!isMounted) return;
                animationFinished = true;
                attemptFinish();
            }
        });

        // Text Fade In
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.5
        });

        // Function to finish the animation
        const finishAnimation = () => {
            if (!barRef.current || !textRef.current || !containerRef.current) return;
            gsap.killTweensOf(barRef.current);

            const finalTl = gsap.timeline({
                onComplete: () => {
                    if (!isMounted) return;
                    // Fade out container
                    if (containerRef.current) {
                        gsap.to(containerRef.current, {
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.inOut",
                            onComplete: onComplete
                        });
                    }
                }
            });

            // Quickly finish the bar
            finalTl.to(barRef.current, {
                width: '100%',
                duration: 0.3,
                ease: "power2.out"
            });

            // Fade out text
            finalTl.to(textRef.current, {
                opacity: 0,
                duration: 0.3
            }, "<");
        };

        const attemptFinish = () => {
            if (!isMounted) return;
            if (isWindowLoaded && areAssetsLoaded && animationFinished) {
                finishAnimation();
            } else if (isWindowLoaded && areAssetsLoaded) {
                // Assets done, just speed up the bar
                tl.timeScale(3);
            }
        };

        const checkWindowLoad = () => {
            isWindowLoaded = true;
            attemptFinish();
        };

        // --- ASSET WAITING LOGIC ---
        const waitForAssets = async () => {
            // Select all media currently in the DOM
            const images = Array.from(document.images);
            const videos = Array.from(document.querySelectorAll('video'));

            const promises = [
                ...images.map(img => {
                    if (img.complete) return Promise.resolve();
                    return new Promise(resolve => {
                        img.onload = resolve;
                        img.onerror = resolve; // Don't block on error
                    });
                }),
                ...videos.map(vid => {
                    if (vid.readyState >= 3) return Promise.resolve(); // HAVE_FUTURE_DATA
                    return new Promise(resolve => {
                        vid.oncanplay = resolve;
                        vid.onerror = resolve;
                    });
                })
            ];

            // Wait for all, with a max timeout fallback (e.g. 7s) to prevent hanging
            const timeout = new Promise(resolve => setTimeout(resolve, 7000));
            await Promise.race([Promise.all(promises), timeout]);

            if (isMounted) {
                areAssetsLoaded = true;
                attemptFinish();
            }
        };


        // Initialize Listeners
        if (!isWindowLoaded) {
            window.addEventListener('load', checkWindowLoad);
        }

        // Start waiting for assets immediately (React has already rendered the DOM elements by effect time)
        waitForAssets();

        return () => {
            isMounted = false;
            window.removeEventListener('load', checkWindowLoad);
            tl.kill();
        };

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
