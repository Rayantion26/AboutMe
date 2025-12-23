import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import FloatingLines from '../FloatingLines';
import robotImage from '../assets/RobotLineTracker.jpg';
import RFIDParking from '../assets/RFIDParking.jpg';
import waterDispenserVideo from '../assets/AutomaticWaterDispenser.mp4';
import waterDispenserImage from '../assets/AutomaticWaterDispenserImage.jpg';
import trafficLightVideo from '../assets/TrafficLight.mp4';
import lineTrackerVideo from '../assets/LineTrackerVideo.mp4';
import hhmVideo1 from '../assets/HHMVideo1.mp4';
import hhmVideo2 from '../assets/HHMVideo2.mp4';
import rfidVideo from '../assets/RFIDVideo.mp4';
import LoadingScreen from './LoadingScreen';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const projectsList = [
    {
        id: 1,
        title: "Automatic Line Tracker Robot",
        description: "I built this robot to understand how sensors interact with real-world environments. Using PID control logic, I programmed it to autonomously follow a visual path while avoiding obstacles.",
        image: robotImage,
        video: lineTrackerVideo
    },
    {
        id: 2,
        title: "RFID Parking System",
        description: "Curious about automation systems, I created this miniature parking lot. It uses RFID tags to authenticate entries and servo motors to control the barriers, mimicking real-world logic.",
        image: RFIDParking,
        video: rfidVideo
    },
    {
        id: 3,
        title: "Automatic Water Dispenser",
        description: "I wanted to build something practical for hygiene. This project uses infrared sensors to detect a glass and dispense a precise amount of water without any physical contact.",
        image: waterDispenserImage,
        video: waterDispenserVideo
    },
    {
        id: 4,
        title: "Traffic Lights Intersection",
        description: "Simulating a 4-way intersection taught me about state machine logic. I implemented realistic timing sequences, pedestrian crossings, and emergency override modes to handle complex flow control.",
        image: null,
        video: trafficLightVideo
    },
    {
        id: 5,
        title: "Height Counter",
        description: "I developed this ultrasonic measurement tool to see how accurate cheap sensors could be. It measures height up to 220cm with surprising precision and displays it on an LCD.",
        image: null,
        videos: [hhmVideo1, hhmVideo2]
    }
];

const neonHoverEffect = (element, color = '#00ffff') => {
    // Initial Float & Shape
    gsap.to(element, {
        y: -5,
        borderColor: color,
        duration: 0.4,
        ease: 'power2.out'
    });
    // Pulsing Shadow
    gsap.fromTo(element,
        { boxShadow: `0 0 10px ${color}` },
        {
            boxShadow: `0 0 30px ${color}`,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );
};

const removeNeonEffect = (element) => {
    gsap.killTweensOf(element);
    gsap.to(element, {
        y: 0,
        borderColor: 'transparent',
        boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
        duration: 0.4,
        ease: 'power2.out'
    });
};

const ProjectScrollSection = ({ project, priority = false }) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const centerTextRef = useRef(null);
    const contentRightRef = useRef(null);
    const borderRef = useRef(null);
    const projectImgRef = useRef(null);
    const videoRef = useRef(null);
    const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);

    const videoSrc = project.video || (project.videos && project.videos[activeVideoIndex]);
    const isMultiVideo = project.videos && project.videos.length > 1;

    // Touch Refs
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    const switchVideo = (nextIndex) => {
        // Fade Out
        gsap.to(videoRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                setActiveVideoIndex(nextIndex);
            }
        });
    };

    // Watch for index change to Fade In
    useEffect(() => {
        if (isMultiVideo && videoRef.current) {
            gsap.to(videoRef.current, { opacity: 1, duration: 0.5 });
            videoRef.current.play().catch(e => { if (e.name !== 'AbortError') console.error(e); });
        }
    }, [activeVideoIndex, isMultiVideo]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(e => { if (e.name !== 'AbortError') console.error(e); });
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0 } // Play when ANY part is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleVideoEnd = () => {
        if (isMultiVideo) {
            const nextIndex = (activeVideoIndex + 1) % project.videos.length;
            switchVideo(nextIndex);
        }
    };

    const handleNextVideo = (e) => {
        e.stopPropagation();
        if (isMultiVideo) {
            const nextIndex = (activeVideoIndex + 1) % project.videos.length;
            switchVideo(nextIndex);
        }
    };

    // Swipe Logic
    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current || !isMultiVideo) return;
        const distance = touchStart.current - touchEnd.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            // Swipe Left -> Next
            const nextIndex = (activeVideoIndex + 1) % project.videos.length;
            switchVideo(nextIndex);
        } else if (distance < -minSwipeDistance) {
            // Swipe Right -> Prev
            const prevIndex = (activeVideoIndex - 1 + project.videos.length) % project.videos.length;
            switchVideo(prevIndex);
        }
    };

    useEffect(() => {
        let mm = gsap.matchMedia();

        // Define clean shared trigger config if possible, but simpler to define TLs inside matchMedia
        mm.add({
            isDesktop: "(min-width: 800px)",
            isMobile: "(max-width: 799px)"
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=250%",
                    scrub: 0.5, // Reduced from 2 to make animation follow finger tighter
                    pin: true,
                    anticipatePin: 1
                }
            });

            // Initial State (Shared mostly, but good to be explicit)
            gsap.set(wrapperRef.current, {
                width: '100vw',
                height: '100vh',
                borderRadius: '0px',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
                willChange: 'width, height, top, left, borderRadius, transform' // Optimize layout thrashing
            });

            // --- ANIMATION PHASES ---

            // 1. Squircle Shape & Position
            tl.to(wrapperRef.current, {
                width: isDesktop ? '35vw' : '90vw',
                height: isDesktop ? '35vw' : '45vh', // Square-ish on desktop, rectangular video aspect on mobile
                borderRadius: '50px',
                left: isDesktop ? '25%' : '50%', // Left side vs Center
                top: isDesktop ? '50%' : '30%',  // Center v Center-Top
                ease: "power2.inOut",
                duration: 2
            }, "phase1");

            // 2. Hide Hero Title
            tl.to(centerTextRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "power2.in",
            }, "phase1");

            // 3. Show Border
            tl.to(borderRef.current, {
                opacity: 1,
                scale: 1,
                width: isDesktop ? '37vw' : '92vw', // Responsive border size
                height: isDesktop ? '37vw' : '46vh',
                left: isDesktop ? '25%' : '50%',
                top: isDesktop ? '50%' : '30%',
                duration: 1,
                ease: "power2.out"
            }, "phase1+=1");

            // 4. Show Details Text
            // We need to set initial position for Details Text based on layout
            if (isMobile) {
                gsap.set(contentRightRef.current, {
                    top: '55%', // Move closer to squircle (ends at ~53%)
                    bottom: 'auto',
                    left: '50%',
                    right: 'auto',
                    xPercent: -50,
                    yPercent: 0,
                    width: '85%', // Prevent edge touching
                    textAlign: 'center',
                    padding: '0 10px'
                });

                tl.fromTo(contentRightRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
            } else {
                // Desktop
                gsap.set(contentRightRef.current, {
                    top: '50%',
                    right: '5%',
                    left: 'auto',
                    xPercent: 0, // Reset any mobile percent
                    yPercent: -50,
                    width: '45%',
                    textAlign: 'left'
                });

                tl.fromTo(contentRightRef.current,
                    { opacity: 0, x: 50, y: 0 }, // Ensure y is 0
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );
            }

            // 5. Image Fade (if video exists)
            if ((project.video || project.videos) && project.image) {
                tl.to(projectImgRef.current, {
                    opacity: 0,
                    ease: "power2.inOut",
                    duration: 2
                }, "phase1-=0.5");
            }

            return () => {
                // Optional cleanup if needed inside context
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            id={`project-${project.id}`}
            ref={containerRef}
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                backgroundColor: '#000',
                overflow: 'hidden'
            }}
        >
            <div
                ref={centerTextRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    mixBlendMode: 'difference'
                }}
            >
                <h1 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '900',
                    fontSize: 'clamp(1.8rem, 5vw, 5rem)',
                    color: 'white',
                    letterSpacing: '0.05em',
                    margin: 0,
                    padding: '0 20px',
                    textWrap: 'balance'
                }}>
                    {project.title.toUpperCase()}
                </h1>
            </div>

            <div
                ref={borderRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '25%',
                    transform: 'translate(-50%, -50%)',
                    width: '37vw',
                    height: '37vw',
                    borderRadius: '60px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                    zIndex: 5,
                    opacity: 0,
                    pointerEvents: 'none'
                }}
            ></div>

            <div
                ref={wrapperRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    backgroundColor: '#1a1a1a'
                }}
            >
                {(project.video || project.videos) ? (
                    <>
                        <video
                            ref={videoRef}
                            key={isMultiVideo ? 'multi' : videoSrc} // Keep same element for multi to animate opacity
                            src={videoSrc}
                            autoPlay
                            loop={!isMultiVideo}
                            muted
                            playsInline
                            preload="auto" // Fix startup lag/stutter
                            onCanPlay={() => videoRef.current?.play().catch(e => { if (e.name !== 'AbortError') console.error(e); })}
                            onLoadedMetadata={(e) => {
                                // If it's a no-image project (Traffic Light), skip black frame
                                if (!project.image) e.target.currentTime = 0.5;
                            }}
                            onEnded={handleVideoEnd}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: 1
                            }}
                        />

                        {isMultiVideo && (
                            <div
                                onClick={handleNextVideo}
                                style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    zIndex: 20,
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(5px)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(255,255,255,0.3)'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'; }}
                            >
                                <span style={{ color: 'white', fontSize: '24px', lineHeight: '1' }}>→</span>
                            </div>
                        )}
                        {project.image && (
                            <img
                                ref={projectImgRef}
                                src={project.image}
                                alt={project.title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 2
                                }}
                                fetchPriority={priority ? "high" : "auto"}
                                loading={priority ? "eager" : "lazy"}
                            />
                        )}
                    </>
                ) : (
                    <img
                        ref={projectImgRef}
                        src={project.image}
                        alt={project.title}
                        fetchPriority={priority ? "high" : "auto"}
                        loading={priority ? "eager" : "lazy"}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                )}
            </div>

            <div
                ref={contentRightRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    transform: 'translate(0, -50%)',
                    width: '45%',
                    zIndex: 5,
                    opacity: 0,
                    color: 'white'
                }}
            >
                <h2 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '900',
                    fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                    color: '#fff',
                    textWrap: 'balance'
                }}>
                    {project.title}
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#fff', marginBottom: '30px' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.7',
                    fontWeight: '300',
                    color: '#ccc'
                }}>
                    {project.description}
                </p>
            </div>
        </section>
    );
};

const GalleryCard = ({ project, onClick }) => {
    const cardRef = useRef(null);
    const bgRef = useRef(null);
    const imageLayerRef = useRef(null);

    const onEnter = () => {
        gsap.to(cardRef.current, {
            y: -10,
            borderColor: '#00ffff',
            borderRadius: '40px',
        });

        const video = bgRef.current.querySelector('video');
        if (video) video.play();

        // If explicitly overlaying an image over video, fade it out
        if ((project.video || project.videos) && project.image && imageLayerRef.current) {
            gsap.to(imageLayerRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out' });
        }

        gsap.fromTo(cardRef.current,
            { boxShadow: '0 0 10px rgba(0, 255, 255, 0.4)' },
            {
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)',
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );
        gsap.to(bgRef.current, {
            scale: 1.0,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    const onLeave = () => {
        gsap.killTweensOf(cardRef.current);

        const video = bgRef.current.querySelector('video');
        if (video) {
            video.pause();
            // video.currentTime = 0; // Don't reset, so we keep a nice freeze-frame
        }

        // Restore image opacity
        if ((project.video || project.videos) && project.image && imageLayerRef.current) {
            gsap.to(imageLayerRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' });
        }

        gsap.to(cardRef.current, {
            y: 0,
            borderColor: 'transparent',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            borderRadius: '15px',
            duration: 0.4,
            ease: 'power2.out'
        });
        gsap.to(bgRef.current, {
            scale: 1.2,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
                width: '400px',
                height: '250px',
                backgroundColor: '#111',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid transparent',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
        >
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1.2)'
                }}
            >
                {/* Render Video at zIndex 1 if it exists */}
                {(project.video || (project.videos && project.videos[0])) && (
                    <video
                        src={project.video || project.videos[0]}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onLoadedMetadata={(e) => { e.target.currentTime = 0.5; }} // Skip potential black start frame
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1
                        }}
                    />
                )}

                {/* Render Image at zIndex 2 if it exists (covers video) */}
                {project.image && (
                    <div
                        ref={imageLayerRef}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 2,
                            backgroundColor: '#1a1a1a' // Prevent see-through on load
                        }}
                    ></div>
                )}
            </div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3, // Above image/video
                pointerEvents: 'none' // Allow hover to pass through to card
            }}>
                <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.2rem',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '10px',
                    textWrap: 'balance'
                }}>
                    {project.title}
                </h3>
            </div>
        </div>
    );
};

const ArduinoProjectsPage = () => {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const lenisRef = useRef(null);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        // FORCE SCROLL TO TOP ON MOUNT
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 0.8,
            infinite: false,
        });
        lenisRef.current = lenis;

        lenis.scrollTo(0, { immediate: true });

        // Initially stop if loading
        if (isLoading) lenis.stop();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        gsap.to(pageRef.current, { opacity: 1, duration: 1 });

        return () => {
            lenis.destroy();
        };
    }, []);

    // Unlock Scroll when Loading finishes
    useEffect(() => {
        if (!isLoading && lenisRef.current) {
            lenisRef.current.start();
        }
    }, [isLoading]);

    // Helper method for fade out -> navigate
    const handleBack = () => {
        gsap.to(pageRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                navigate('/', { state: { targetSection: 'arduino-section' } });
            }
        });
    };

    // Helper method for Fade Out -> Scroll -> Fade In
    const fadeScrollTo = (target) => {
        if (!lenisRef.current) return;

        // 1. Fade out
        gsap.to(pageRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                // 2. Teleport scroll
                lenisRef.current.scrollTo(target, { immediate: true });
                // 3. Fade in
                gsap.to(pageRef.current, {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.1 // Short wait for render
                });
            }
        });
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            <div ref={pageRef} className="arduino-page-wrapper" style={{ backgroundColor: '#000', color: 'white', position: 'relative', opacity: 0 }}>
                <style>{`
                    .floating-nav-btn {
                        padding: 10px 20px !important;
                        font-size: 0.9rem !important;
                    }
                `}</style>

                {/* Sticky Nav Container - Moved to CSS classes */}
                <div className="floating-nav-container">
                    <button
                        onClick={() => fadeScrollTo('#gallery')}
                        onMouseEnter={(e) => neonHoverEffect(e.currentTarget, '#00979C')}
                        onMouseLeave={(e) => removeNeonEffect(e.currentTarget)}
                        className="floating-nav-btn"
                    >
                        ↓ Gallery
                    </button>

                    <button
                        onClick={handleBack}
                        onMouseEnter={(e) => neonHoverEffect(e.currentTarget, '#00979C')}
                        onMouseLeave={(e) => removeNeonEffect(e.currentTarget)}
                        className="floating-nav-btn"
                    >
                        ← Back to Home
                    </button>
                </div>

                {projectsList.map((project, index) => (
                    <ProjectScrollSection key={project.id} project={project} priority={index < 2} />
                ))}

                <section id="gallery" style={{ padding: '150px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '4rem', marginBottom: '80px', color: '#00979C', textAlign: 'center' }}>
                        Gallery
                    </h1>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '40px',
                        maxWidth: '1400px',
                        width: '100%'
                    }}>
                        <div style={{ display: 'flex', gap: '40px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {projectsList.slice(0, 3).map(project => (
                                <GalleryCard
                                    key={`grid-${project.id}`}
                                    project={project}
                                    onClick={() => fadeScrollTo(`#project-${project.id}`)} // Using fade transitions
                                />
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '40px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {projectsList.slice(3, 5).map(project => (
                                <GalleryCard
                                    key={`grid-${project.id}`}
                                    project={project}
                                    onClick={() => fadeScrollTo(`#project-${project.id}`)} // Using fade transitions
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ArduinoProjectsPage;
