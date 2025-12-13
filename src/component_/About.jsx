import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        // Image animation (slide in from left)
        gsap.fromTo(imageRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                }
            }
        );

        // Text animation (slide in from right)
        gsap.fromTo(textRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                }
            }
        );

    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                backgroundColor: '#000',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '150px 40px',
                overflow: 'hidden' // Prevent scrollbar during animation
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '80px',
                maxWidth: '1200px',
                width: '100%',
                flexWrap: 'wrap' // Responsive wrapping
            }}>

                {/* Image Side (Left) */}
                <div
                    ref={imageRef}
                    style={{
                        flex: '1 1 400px',
                        maxWidth: '500px',
                        height: '600px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(255,255,255,0.05)'
                    }}
                >
                    <img
                        src="https://placehold.co/500x600/222/fff?text=My+Face"
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Text Side (Right) */}
                <div
                    ref={textRef}
                    style={{
                        flex: '1 1 400px',
                        maxWidth: '600px'
                    }}
                >
                    <h2 style={{
                        fontSize: '4rem',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '30px',
                        lineHeight: '1.1'
                    }}>
                        About Me
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: '20px'
                    }}>
                        Hello! I'm Aaron, a passionate developer with a knack for creating interactive and visually stunning digital experiences.
                        I love blending code with creativity to build things that live on the web.
                    </p>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#ccc',
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        When I'm not coding, you can find me tinkering with Arduino projects, automating my life with n8n, or exploring new technologies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
