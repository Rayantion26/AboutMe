import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutMeImg from '../assets/AboutMe.jpg'; // Import image

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 800px)",
            isMobile: "(max-width: 799px)"
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions;
            const section = sectionRef.current;

            if (isMobile) {
                // Mobile Animations (Simple Fade Up)
                gsap.fromTo(imageRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: section, start: "top 80%" } }
                );
                gsap.fromTo(textRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.3, scrollTrigger: { trigger: section, start: "top 80%" } }
                );
            } else {
                // Desktop Animations (Slide In)
                gsap.fromTo(imageRef.current,
                    { x: -100, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                        scrollTrigger: { trigger: section, start: "top 70%" }
                    }
                );
                gsap.fromTo(textRef.current,
                    { x: 100, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2,
                        scrollTrigger: { trigger: section, start: "top 70%" }
                    }
                );
            }
        });

        return () => mm.revert();
    }, []);

    // Inline Media Query style helper (simulated)
    const isMobileView = window.innerWidth < 800; // Initial server/client check (useEffect handles GSAP)
    // Note: For pure rendering, we might need state if we want to change DOM structure, 
    // but here we can just use CSS classes or style objects that respond to max-width.
    // CSS modules/styled-components are better, but inline styles with window.matchMedia is cleaner for single-file focus.

    // We will use a CSS block injected via style tag for simplicity given the constraints

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                backgroundColor: 'transparent',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px', // Reduced padding
                overflow: 'hidden'
            }}
        >
            {/* Dynamic Style for Mobile Layout */}
            <style>{`
                .about-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 80px;
                    max-width: 1200px;
                    width: 100%;
                }
                .about-image-wrapper {
                    flex: 1 1 400px;
                    max-width: 500px;
                    height: 600px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(255,255,255,0.05);
                }
                .about-text-wrapper {
                    flex: 1 1 400px;
                    max-width: 600px;
                }
                .about-title {
                    font-size: 4rem;
                    font-family: 'Playfair Display', serif;
                    margin-bottom: 30px;
                    line-height: 1.1;
                }

                @media (max-width: 799px) {
                    .about-container {
                        display: block; /* Block layout for float */
                        gap: 0;
                    }
                    .about-image-wrapper {
                        float: left;
                        width: 40vw; /* Small */
                        height: 40vw; /* Square/Squircle */
                        max-width: none; /* Override desktop */
                        margin-right: 20px;
                        margin-bottom: 10px;
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Squircle-ish */
                        shape-outside: circle(50%);
                        flex: none;
                    }
                    .about-text-wrapper {
                        /* Text flows around */
                        flex: none;
                        max-width: none;
                    }
                    .about-title {
                        font-size: 2.5rem; /* Smaller title */
                        margin-bottom: 10px;
                    }
                }
            `}</style>

            <div className="about-container">
                {/* Image Side */}
                <div ref={imageRef} className="about-image-wrapper">
                    <img
                        src={aboutMeImg}
                        alt="Aaron Preston"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Text Side */}
                <div ref={textRef} className="about-text-wrapper">
                    <h2 className="about-title">
                        About Me
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: '1.6',
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: '20px'
                    }}>
                        I thrive on exploring the unknown in technology. That curiosity is what drove me to build this interactive website—a playground to test new ideas and push boundaries.
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: '1.6',
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        Whether it's tinkering with Arduino or automating workflows with n8n, I dive into these tools simply because I love them. Ultimately, technology isn't just what I do; it has grown on me to become a fundamental part of who I am.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
