import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coffeeVideo1 from '../assets/CoffeeVideo1.mp4';

import coffeePhoto1 from '../assets/CoffeePhoto (1).jpg';
import coffeePhoto2 from '../assets/CoffeePhoto (2).jpg';
import coffeePhoto3 from '../assets/CoffeePhoto (3).jpg';
import coffeePhoto4 from '../assets/CoffeePhoto (4).jpg';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const mediaList = [
    { type: 'video', src: coffeeVideo1 },

    { type: 'image', src: coffeePhoto1 },
    { type: 'image', src: coffeePhoto2 },
    { type: 'image', src: coffeePhoto3 },
    { type: 'image', src: coffeePhoto4 }
];

const CoffeeSection = () => {
    // Refs
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const centerTextRef = useRef(null);
    const contentRightRef = useRef(null);
    const borderRef = useRef(null);
    const videoRef = useRef(null);
    const coverImageRef = useRef(null);
    const hintRef = useRef(null); // Ref for the hint

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [hoveringSquircle, setHoveringSquircle] = useState(false);

    // Audio State
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);

    // Media Logic
    const currentMedia = mediaList[activeIndex];
    const imageRef = useRef(null);

    // Touch Refs
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    // --- GSAP ANIMATION ---
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 800px)",
            isMobile: "(max-width: 799px)"
        }, (context) => {
            let { isDesktop } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%", // Fixed to 2 screen heights
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1
                }
            });

            gsap.set(wrapperRef.current, {
                width: '100vw', height: '100vh', borderRadius: '0px',
                top: '50%', left: '50%', xPercent: -50, yPercent: -50,
                willChange: 'transform, width, height, borderRadius, top, left'
            });

            // 1. Squircle Transform
            tl.to(wrapperRef.current, {
                width: isDesktop ? '35vw' : '90vw',
                height: isDesktop ? '35vw' : '45vh',
                borderRadius: isDesktop ? '50px' : '30px',
                left: isDesktop ? '25%' : '50%',
                top: isDesktop ? '50%' : '40%',
                ease: "power2.inOut",
                duration: 2
            }, "phase1")
                .to(centerTextRef.current, {
                    opacity: 0, scale: 0.8, duration: 1, ease: "power2.in",
                }, "phase1")
                .to(borderRef.current, {
                    opacity: 1, scale: 1,
                    width: isDesktop ? '37vw' : '92vw',
                    height: isDesktop ? '37vw' : '46vh',
                    left: isDesktop ? '25%' : '50%',
                    top: isDesktop ? '50%' : '40%',
                    duration: 1, ease: "power2.out"
                }, "phase1+=1")
                // Cover Image Fade Out (Similar to Arduino Page)
                .to(coverImageRef.current, {
                    opacity: 0,
                    duration: 2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Optional: set display none to prevent clicking hits? 
                        // Actually pointerEvents: 'none' in CSS is safer, 
                        // but opacity 0 is usually enough if z-index is lower than controls.
                        if (coverImageRef.current) coverImageRef.current.style.pointerEvents = 'none';
                    }
                }, "phase1-=0.5");

            // 2. Content Animation
            if (!isDesktop) {
                gsap.set(contentRightRef.current, {
                    top: '70%', // Moved down from 58% to prevent overlap
                    left: '50%',
                    width: '90%', // Wider for better text fit
                    xPercent: -50, yPercent: 0,
                    textAlign: 'center', padding: '0 10px'
                });
                tl.fromTo(contentRightRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
            } else {
                gsap.set(contentRightRef.current, {
                    top: '50%', right: '5%', left: 'auto',
                    width: '45%', xPercent: 0, yPercent: -50,
                    textAlign: 'left'
                });
                tl.fromTo(contentRightRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );

                // Desktop Only: Fade in Hint
                tl.to(hintRef.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=2");
            }
        });

        return () => mm.revert();
    }, []);


    // --- ADVANCE LOGIC (Auto + 15s) ---
    const nextMedia = () => {
        setDirection('next');
        setActiveIndex((prev) => (prev + 1) % mediaList.length);
    };

    const prevMedia = () => {
        setDirection('prev');
        setActiveIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
    };

    // Transition Effect for Squircle
    useEffect(() => {
        if (wrapperRef.current) {
            const el = wrapperRef.current.querySelector('.media-content');
            if (el) {
                // Pure Fade as requested ("a fade is enough")
                gsap.fromTo(el,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.8, ease: "power2.inOut" }
                );
            }
        }
    }, [activeIndex]);

    useEffect(() => {
        let timer;
        // Always set a 15s timeout for auto-advance, regardless of type
        timer = setTimeout(() => {
            nextMedia();
        }, 15000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Video specific: Ended handler
    const handleVideoEnded = () => {
        // If video ends before 15s, advance immediately
        nextMedia();
    };

    // Video Volume/Mute Sync
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.volume = volume;
        }
    }, [isMuted, volume, activeIndex]);

    // Safety play effect
    useEffect(() => {
        if (currentMedia.type === 'video' && videoRef.current) {
            videoRef.current.play().catch(e => {
                // Ignore AbortErrors caused by quick navigation/pausing
                if (e.name !== 'AbortError') console.error("Video play error:", e);
            });
        }
    }, [activeIndex]);

    // Helper: Button Click Animation
    const animateButton = (target) => {
        gsap.fromTo(target, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    };


    return (
        <section
            ref={containerRef}
            style={{
                height: '100vh', width: '100%', position: 'relative',
                backgroundColor: '#000', overflow: 'hidden'
            }}
        >
            {/* Center Title */}
            <div
                ref={centerTextRef}
                style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', zIndex: 10,
                    width: '100%', textAlign: 'center', pointerEvents: 'none',
                    mixBlendMode: 'difference'
                }}
            >
                <h1 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: '900',
                    fontSize: 'clamp(3rem, 15vw, 15rem)', color: 'white',
                    letterSpacing: '0.05em', margin: 0, textWrap: 'balance'
                }}>BREWING</h1>
            </div>

            {/* Border */}
            <div
                ref={borderRef}
                style={{
                    position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)',
                    width: '37vw', height: '37vw', borderRadius: '60px',
                    border: '2px solid rgba(196, 164, 132, 0.3)',
                    boxShadow: '0 0 30px rgba(196, 164, 132, 0.1)',
                    zIndex: 5, opacity: 0, pointerEvents: 'none'
                }}
            ></div>

            {/* Hint (Desktop Only) */}
            <div
                ref={hintRef}
                style={{
                    position: 'absolute',
                    top: 'calc(50% + 20vw)', // Below the squircle (35vw/2 = 17.5vw)
                    left: '25%',
                    transform: 'translateX(-50%)',
                    zIndex: 5,
                    opacity: 0, // Hidden until GSAP shows it
                    pointerEvents: 'none',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em'
                }}
            >
                <div>Click to expand</div>
                <div style={{ fontSize: '1.2rem', marginTop: '-5px' }}>↑</div>
            </div>

            {/* SQUIRCLE MEDIA WRAPPER */}
            <div
                ref={wrapperRef}
                onMouseEnter={() => setHoveringSquircle(true)}
                onMouseLeave={() => setHoveringSquircle(false)}
                onClick={() => {
                    if (window.lenis) window.lenis.stop(); // Immediate stop
                    const newState = { lightboxOpen: true };
                    window.history.pushState(newState, "", "");
                    setIsLightboxOpen(true);
                }}
                onTouchStart={(e) => {
                    touchEnd.current = null;
                    touchStart.current = e.targetTouches[0].clientX;
                }}
                onTouchMove={(e) => {
                    touchEnd.current = e.targetTouches[0].clientX;
                }}
                onTouchEnd={() => {
                    if (!touchStart.current || !touchEnd.current) return;
                    const distance = touchStart.current - touchEnd.current;
                    const minSwipeDistance = 50;
                    if (distance > minSwipeDistance) {
                        nextMedia(); // Swipe Left -> Next
                    } else if (distance < -minSwipeDistance) {
                        prevMedia(); // Swipe Right -> Prev
                    }
                }}
                style={{
                    position: 'absolute', zIndex: 2, overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    backgroundColor: '#1a1a1a',
                    cursor: 'pointer' // interactive
                }}
            >
                {/* --- COVER IMAGE (Initially Visible, Fades Out) --- */}
                <div
                    ref={coverImageRef}
                    style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        zIndex: 3, // Above carousel (z=2) but below controls if we had top-layer controls? 
                        // Actually controls are inside this wrapper, so zIndex 3 covers them nicely until fade.
                        backgroundColor: '#000'
                    }}
                >
                    <img
                        src={coffeePhoto2}
                        alt="Coffee Cover"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Media Render */}
                {currentMedia.type === 'video' ? (
                    <video
                        ref={videoRef}
                        key={currentMedia.src} // Remount on change
                        className="media-content"
                        src={currentMedia.src}
                        autoPlay
                        loop={false}
                        muted={isMuted}
                        playsInline
                        onEnded={handleVideoEnded}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <img
                        key={currentMedia.src}
                        className="media-content"
                        src={currentMedia.src}
                        alt="Coffee"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            // animation: 'zoomPan 20s ease-out forwards' // GSAP handles transition now, zoomPan might conflict
                        }}
                    />
                )}

                {/* --- AUDIO CONTROLS OVERLAY (Squircle) --- */}
                {hoveringSquircle && currentMedia.type === 'video' && (
                    <div
                        onClick={(e) => e.stopPropagation()} // Prevent lightbox open
                        style={{
                            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                            display: 'flex', alignItems: 'center', gap: '10px',
                            padding: '8px 16px', borderRadius: '20px',
                            backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}
                    >
                        {/* Mute logic */}
                        <div
                            onClick={() => setIsMuted(!isMuted)}
                            style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem' }}
                        >
                            {isMuted ? '🔇' : '🔊'}
                        </div>

                        {/* Volume Slider */}
                        {!isMuted && (
                            <input
                                type="range" min="0" max="1" step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                style={{ width: '60px', accentColor: '#C4A484', cursor: 'pointer' }}
                            />
                        )}
                    </div>
                )}


                {/* EDGE NAVIGATION */}
                {hoveringSquircle && (
                    <>
                        {/* Prev */}
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                animateButton(e.currentTarget);
                                prevMedia();
                            }}
                            style={{
                                position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                                width: '40px', height: '40px', borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(5px)',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)',
                                color: '#fff', fontSize: '1.2rem', zIndex: 10
                            }}
                        >‹</div>

                        {/* Next */}
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                animateButton(e.currentTarget);
                                nextMedia();
                            }}
                            style={{
                                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                                width: '40px', height: '40px', borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(5px)',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)',
                                color: '#fff', fontSize: '1.2rem', zIndex: 10
                            }}
                        >›</div>
                    </>
                )}
            </div>

            {/* Right Content */}
            <div
                ref={contentRightRef}
                style={{
                    position: 'absolute', top: '50%', right: '5%',
                    transform: 'translate(0, -50%)', width: '45%',
                    zIndex: 5, opacity: 0, color: 'white'
                }}
            >
                <h2 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: '900',
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '10px',
                    textTransform: 'uppercase', lineHeight: '0.9',
                    whiteSpace: 'nowrap', textWrap: 'balance', color: '#C4A484'
                }}>
                    Specialty Coffee
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#C4A484', marginBottom: '30px', display: 'inline-block' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.7', fontWeight: '300', color: window.innerWidth < 800 ? '#fff' : '#ccc'
                }}>
                    It's more than just caffeine; it's a daily ritual of patience and precision. From dialing in the grind size to perfecting the pour-over technique, I love the process of extracting complex flavors from a simple bean.
                </p>
            </div>

            {/* --- LIGHTBOX (FULL SCREEN) --- */}
            {isLightboxOpen && (
                <Lightbox
                    mediaList={mediaList}
                    startIndex={activeIndex}
                    onClose={(shouldGoBack = true) => {
                        setIsLightboxOpen(false);
                        if (shouldGoBack) {
                            window.history.back();
                        }
                    }}
                />
            )}
        </section>
    );
};

// --- LIGHTBOX COMPONENT ---
const Lightbox = ({ mediaList, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const media = mediaList[currentIndex];
    const contentRef = useRef(null);

    // History & Scroll Lock
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        if (window.lenis) window.lenis.stop();

        // Push state if not already handled by parent (Parent does push state, but we can reinforce or verify)
        // Actually parent does: window.history.pushState(newState, "", "");
        // So we just listen.

        const handlePopState = (event) => {
            // If we get a popstate event (Back button), we just close.
            // The state is already popped by the browser.
            /* 
               CRITICAL: When the back button is pressed on mobile or desktop, 
               the browser pops the state. We simply need to clean up the UI.
               We pass 'false' to onClose to tell it NOT to call history.back() again.
            */
            onClose(false);
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose(true); // Go back in history manually
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            if (window.lenis) window.lenis.start();
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Animation Effect
    useEffect(() => {
        if (contentRef.current) {
            const el = contentRef.current.querySelector('.lightbox-media');
            if (el) {
                gsap.fromTo(el,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
                );
            }
        }
    }, [currentIndex]);

    // Helper: Button Click Animation
    const animateButton = (target) => {
        gsap.fromTo(target, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    };

    const prev = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        if (e && e.currentTarget && e.currentTarget.style) animateButton(e.currentTarget);
        setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
    };
    const next = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        if (e && e.currentTarget && e.currentTarget.style) animateButton(e.currentTarget);
        setCurrentIndex((prev) => (prev + 1) % mediaList.length);
    };

    // Swipe Logic
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    const handleTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
    };

    const handleTouchMove = (e) => {
        touchEnd.current = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            next(new Event('swipe')); // Mock event
        } else if (isRightSwipe) {
            prev(new Event('swipe'));
        }
    };

    return ReactDOM.createPortal(
        <div
            style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 99999,
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
            onClick={() => onClose(true)} // Default behavior: go back in history if needed
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={(e) => {
                // Only track move if button is pressed (simple check)
                if (e.buttons === 1) handleTouchMove(e);
            }}
            onMouseUp={handleTouchEnd}
        >
            {/* Close */}
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    onClose(true);
                }}
                style={{
                    position: 'absolute', top: '30px', right: '30px',
                    cursor: 'pointer', color: '#fff', fontSize: '2rem', zIndex: 10000
                }}
            >✕</div>

            {/* Prev Edge Button */}
            <div
                onClick={prev}
                style={{
                    position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                    width: '60px', height: '60px', borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff', fontSize: '2rem', zIndex: 10000,
                    userSelect: 'none', transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >‹</div>

            {/* Next Edge Button */}
            <div
                onClick={next}
                style={{
                    position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                    width: '60px', height: '60px', borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff', fontSize: '2rem', zIndex: 10000,
                    userSelect: 'none', transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >›</div>

            {/* Content */}
            <div
                ref={contentRef}
                style={{ width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={(e) => e.stopPropagation()}
            >
                {media.type === 'video' ? (
                    <video
                        key={media.src} // Remount
                        className="lightbox-media"
                        src={media.src}
                        controls
                        autoPlay
                        style={{ maxWidth: '100%', maxHeight: '100%', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}
                    />
                ) : (
                    <img
                        key={media.src}
                        className="lightbox-media"
                        src={media.src}
                        style={{ maxWidth: '100%', maxHeight: '100%', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}
                    />
                )}
            </div>
        </div>,
        document.body
    );
};

export default CoffeeSection;
