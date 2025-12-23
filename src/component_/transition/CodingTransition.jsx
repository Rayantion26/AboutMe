import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CodingTransition = ({ onComplete }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Characters to drop
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>/?";
        const charArray = chars.split('');

        // Font size and columns
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // An array of drops - one per column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Animation Loop
        let animationFrameId;
        const draw = () => {
            // Black BG for the trail effect
            // We use a slight opacity instead of clearing to create the trail
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text (classic Matrix) -> Changed to Cyan for this theme
            ctx.fillStyle = '#00FFFF';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Sending the drop back to the top randomly after it has crossed the screen
                // Adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Incrementing Y coordinate
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // Screen fade out to black simulation
        // The canvas already fills with trails, but we want a hard fade to black eventually
        const fadeOut = setTimeout(() => {
            gsap.to(canvas, {
                opacity: 0, // Just visual fade in this component's context? No, we want screen to go black.
                // Actually the requirement is "ends with a pitch black screen before entering".
                // The trails will eventually fill the screen with black if we stop clearing? No, they add color.
                // Let's overlay a black div instead.
            });
        }, 2000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            // clearTimeout(fadeOut); // No longer needed
        };
    }, []);

    // We start with opacity 0 and fade in the whole effect
    // screen fades to black (wrapper) with code rain
    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // 1. Fade in the Wrapper (Black Background) -> Covers the site
        tl.to(".coding-transition-wrapper", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut"
        })
            // 2. Fade in code (slightly delayed or concurrent - let's do concurrent for impact)
            .to(canvasRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.in"
            }, "<")

            // 3. Run animation
            .to({}, { duration: 2.0 })

            // 4. Fade out the code -> leaves only black background
            .to(canvasRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            });

    }, [onComplete]);

    return (
        <div
            className="coding-transition-wrapper"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: '#000', // Solid black background
                opacity: 0, // Starts invisible
                pointerEvents: 'all'
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    opacity: 0, // Controlled by timeline
                }}
            />
        </div>
    );
};

export default CodingTransition;
