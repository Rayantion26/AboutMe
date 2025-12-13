import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import FloatingLines from '../FloatingLines';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const projectsList = [
    {
        id: 1,
        title: "Automatic Line Tracker Robot",
        description: "A robot capable of following a visual line path autonomously using infrared sensors. It uses PID control logic for smooth line following and obstacle avoidance.",
        image: "https://placehold.co/1920x1080/1a1a1a/ffffff?text=Line+Tracker+Robot"
    },
    {
        id: 2,
        title: "RFID Parking System",
        description: "Automated parking entry/exit system using RFID tags and servo controls. Features real-time slot counting and LCD status display.",
        image: "https://placehold.co/1920x1080/1a1a1a/ffffff?text=RFID+Parking"
    },
    {
        id: 3,
        title: "Automatic Water Dispenser",
        description: "Touchless water dispensing system utilizing ultrasonic distance sensors. Designed for hygiene and efficiency, delivering precise amounts of water.",
        image: "https://placehold.co/1920x1080/1a1a1a/ffffff?text=Water+Dispenser"
    },
    {
        id: 4,
        title: "Traffic Lights Intersection",
        description: "Time-curated traffic control logic simulating a real-world 4-way intersection. Includes pedestrian crossing logic and emergency override modes.",
        image: "https://placehold.co/1920x1080/1a1a1a/ffffff?text=Traffic+System"
    },
    {
        id: 5,
        title: "Height Counter",
        description: "Ultrasonic measurement device capable of measuring height up to 220cm with high precision. Displays results on a digital 7-segment display.",
        image: "https://placehold.co/1920x1080/1a1a1a/ffffff?text=Height+Counter"
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

const ProjectScrollSection = ({ project }) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const centerTextRef = useRef(null);
    const contentRightRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=350%",
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1
                }
            });

            gsap.set(wrapperRef.current, {
                width: '100vw',
                height: '100vh',
                borderRadius: '0px',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
            });

            tl.to(wrapperRef.current, {
                width: '35vw',
                height: '35vw',
                borderRadius: '50px',
                left: '25%',
                ease: "power2.inOut",
                duration: 2
            }, "phase1")
                .to(centerTextRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "power2.in",
                }, "phase1")
                .to(borderRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "phase1+=1")
                .fromTo(contentRightRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "phase1+=1"
                );

        }, containerRef);

        return () => ctx.revert();
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
                    fontSize: 'clamp(2rem, 5vw, 6rem)',
                    color: 'white',
                    letterSpacing: '0.05em',
                    margin: 0,
                    padding: '0 20px'
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
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    backgroundColor: '#1a1a1a'
                }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
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
                    fontSize: 'clamp(2rem, 4vw, 4rem)',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                    color: '#fff'
                }}>
                    Project Details
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#fff', marginBottom: '30px' }}></div>
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
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

    const onEnter = () => {
        gsap.to(cardRef.current, {
            y: -10,
            borderColor: '#00ffff',
            borderRadius: '40px',
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto'
        });
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
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'scale(1.2)'
                }}
            ></div>
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
                zIndex: 2
            }}>
                <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.2rem',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '10px'
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

    useEffect(() => {
        // FORCE SCROLL TO TOP ON MOUNT
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 2.5, // Smooth feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.05,
            smoothTouch: false,
            touchMultiplier: 1.5,
        });
        lenisRef.current = lenis;

        lenis.scrollTo(0, { immediate: true });

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

    // Helper method for fade out -> navigate
    const handleBack = () => {
        gsap.to(pageRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                navigate('/', { state: { targetSection: 'arduino' } });
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
        <div ref={pageRef} className="arduino-page-wrapper" style={{ backgroundColor: '#000', color: 'white', position: 'relative', opacity: 0 }}>

            {/* Sticky Nav Container */}
            <div style={{ position: 'fixed', bottom: '40px', left: '40px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button
                    onClick={() => fadeScrollTo('#gallery')} // Using fade transitions
                    onMouseEnter={(e) => neonHoverEffect(e.currentTarget, '#00979C')}
                    onMouseLeave={(e) => removeNeonEffect(e.currentTarget)}
                    style={{
                        padding: '15px 30px',
                        backgroundColor: '#00979C',
                        color: '#fff',
                        border: '2px solid transparent',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
                    }}
                >
                    ↓ Gallery
                </button>

                <button
                    onClick={handleBack} // Fade out mechanism
                    onMouseEnter={(e) => neonHoverEffect(e.currentTarget, '#00979C')}
                    onMouseLeave={(e) => removeNeonEffect(e.currentTarget)}
                    style={{
                        padding: '15px 30px',
                        backgroundColor: '#00979C',
                        color: '#fff',
                        border: '2px solid transparent',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
                    }}
                >
                    ← Back to Home
                </button>
            </div>

            {projectsList.map(project => (
                <ProjectScrollSection key={project.id} project={project} />
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
    );
};

export default ArduinoProjectsPage;
