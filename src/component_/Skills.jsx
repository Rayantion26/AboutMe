import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "CSS/GSAP", level: 80 },
    { name: "Arduino", level: 75 },
    { name: "n8n", level: 85 },
    { name: "Python", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Git", level: 80 }
];

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const bars = containerRef.current.querySelectorAll('.skill-bar-fill');

        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: width + '%',
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                    }
                }
            );
        });
    }, []);

    return (
        <section id="skills" style={{ padding: '100px 20px', backgroundColor: '#000', color: 'white', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div ref={containerRef} style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '60px', fontFamily: "'Playfair Display', serif" }}>Technical Arsenal</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '120px', textAlign: 'right', fontSize: '1.1rem', fontFamily: "'LXGW WenKai Mono TC', monospace" }}>{skill.name}</div>
                            <div style={{ flex: 1, height: '10px', backgroundColor: '#222', borderRadius: '5px', overflow: 'hidden' }}>
                                <div
                                    className="skill-bar-fill"
                                    data-width={skill.level}
                                    style={{ height: '100%', backgroundColor: '#fff', borderRadius: '5px', width: '0%' }}
                                ></div>
                            </div>
                            <div style={{ width: '40px', fontSize: '0.9rem', color: '#666' }}>{skill.level}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
