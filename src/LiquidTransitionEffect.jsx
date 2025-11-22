import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LiquidTransition.css';

gsap.registerPlugin(ScrollTrigger);

// Easing function for smoother splash
const easeOutCubic = (x) => {
    return 1 - Math.pow(1 - x, 3);
};

export default function LiquidTransitionEffect({ children }) {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const blockRef = useRef(null);
    const splashContainerRef = useRef(null);
    const frontWaveRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const block = blockRef.current;
            const splashContainer = splashContainerRef.current;
            const frontWave = frontWaveRef.current;

            if (!wrapper || !block || !splashContainer) return;

            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Configuration
            const MIN_SCALE = 0.2;
            const blockWidth = 150;
            const padding = 20;

            // Start: OUTSIDE FRAME (Top Right)
            const startX = viewportWidth + 50;
            const startY = -250;

            // End: Bottom Left
            const endX = padding;
            const endY = viewportHeight - blockWidth - padding;

            // Create a timeline that scrubs with scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000", // Adjust duration of animation
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                }
            });

            // --- PHASE 1: FALLING ---
            // We'll manually animate x/y/rotation/scale in a single tween or use an onUpdate if we want the exact math from before.
            // Using a custom tween to match the parabolic math exactly is cleaner with onUpdate, 
            // but for GSAP timeline, we can approximate or use a custom plugin. 
            // Let's stick to the onUpdate approach for the physics, but driven by the timeline's progress.

            // Actually, to keep it simple and robust with the timeline:
            // We can just animate a proxy object and update the DOM in onUpdate.
            const proxy = { progress: 0 };

            tl.to(proxy, {
                progress: 1,
                ease: "none", // Linear because scrub handles the pacing
                onUpdate: () => {
                    const globalProgress = proxy.progress;
                    const SPLIT_POINT = 0.6; // Fall finishes at 60% of scroll

                    if (globalProgress < SPLIT_POINT) {
                        // FALLING
                        const phaseProgress = globalProgress / SPLIT_POINT;

                        block.style.opacity = '1';

                        // Parabolic Trajectory
                        const currentX = startX + (endX - startX) * phaseProgress;
                        const currentY = startY + (endY - startY) * (phaseProgress * phaseProgress);

                        const rotation = phaseProgress * 360;
                        const currentScale = 1 - phaseProgress * (1 - MIN_SCALE);

                        block.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg) scale(${currentScale})`;

                        // Reset Splash
                        splashContainer.style.transform = 'translateY(105%)';

                    } else {
                        // SPLASH
                        let splashProgress = (globalProgress - SPLIT_POINT) / (1 - SPLIT_POINT);

                        // Block Impact
                        const currentScale = MIN_SCALE * (1 - splashProgress);
                        block.style.transform = `translate(${endX}px, ${endY}px) rotate(${360 + splashProgress * 45}deg) scale(${currentScale})`;

                        // Wave Animation
                        const easedProgress = easeOutCubic(splashProgress);
                        const risePercent = 105 - easedProgress * 115; // Go a bit past 0 to ensure full cover

                        splashContainer.style.transform = `translateY(${risePercent}%)`;

                        if (frontWave) {
                            const waveShiftFront = -easedProgress * 20;
                            frontWave.style.transform = `translateX(${waveShiftFront}%)`;
                        }
                    }
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', zIndex: 10 }}>
            {/* The Pinned Wrapper */}
            <div ref={wrapperRef} style={{ height: '100vh', width: '100%', overflow: 'hidden', position: 'relative', backgroundColor: 'transparent' }}>

                {/* The Block */}
                <div ref={blockRef} className="falling-block" />

                {/* The Splash / Water Layer */}
                <div ref={splashContainerRef} className="splash-container">
                    {/* Front Wave */}
                    <svg
                        ref={frontWaveRef}
                        className="wave-svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,133.3C672,128,768,160,864,170.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                    {/* Solid White Body */}
                    <div className="splash-body" />
                </div>
            </div>

            {/* The Next Page Content (White Background) */}
            <div style={{ position: 'relative', zIndex: 20, backgroundColor: 'white', minHeight: '100vh' }}>
                {children}
            </div>
        </div>
    );
}
