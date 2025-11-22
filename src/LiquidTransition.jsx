import React, { useEffect, useRef } from 'react';
import './LiquidTransition.css';

// Easing function for smoother splash (Ease Out Cubic)
const easeOutCubic = (x) => {
    return 1 - Math.pow(1 - x, 3);
};

export default function LiquidTransition({ onReset }) {
    // We use Refs for direct DOM manipulation to ensure high-performance 60fps scrolling
    // (State updates would be too slow/jittery for this specific animation)
    const blockRef = useRef(null);
    const splashContainerRef = useRef(null);
    const frontWaveRef = useRef(null);
    const finalTextRef = useRef(null);

    useEffect(() => {
        // Reset scroll to top on mount
        window.scrollTo(0, 0);

        const handleScroll = () => {
            // Safety check in case refs aren't mounted yet
            if (!blockRef.current || !splashContainerRef.current) return;

            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const docHeight = document.body.scrollHeight;
            const maxScroll = docHeight - viewportHeight;

            // Configuration
            const SPLIT_POINT = 0.85;
            const MIN_SCALE = 0.2;
            const blockWidth = 150;
            const padding = 20;

            // Start: OUTSIDE FRAME (Top Right)
            const startX = viewportWidth + 50;
            const startY = -250;

            // End: Bottom Left
            const endX = padding;
            const endY = viewportHeight - blockWidth - padding;

            // Calculate global progress (0.0 to 1.0)
            let globalProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
            globalProgress = Math.min(Math.max(globalProgress, 0), 1);

            // --- LOGIC SPLIT ---

            if (globalProgress < SPLIT_POINT) {
                // === PHASE 1: FALLING ===
                const phaseProgress = globalProgress / SPLIT_POINT;

                // Force visible
                blockRef.current.style.opacity = '1';

                // Parabolic Trajectory
                const currentX = startX + (endX - startX) * phaseProgress;
                const currentY =
                    startY + (endY - startY) * (phaseProgress * phaseProgress);

                // Rotation & Scale
                const rotation = phaseProgress * 360;
                const currentScale = 1 - phaseProgress * (1 - MIN_SCALE);

                blockRef.current.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg) scale(${currentScale})`;

                // Reset Splash (Hide it below screen)
                splashContainerRef.current.style.transform = 'translateY(105%)';

                // Hide Text
                if (finalTextRef.current) {
                    finalTextRef.current.style.opacity = '0';
                    finalTextRef.current.style.pointerEvents = 'none';
                }

            } else {
                // === PHASE 2: SPLASH / CONSUME ===
                let splashProgress = (globalProgress - SPLIT_POINT) / (1 - SPLIT_POINT);

                // 1. Block Animation (Impact)
                // Shrink block slightly further as it enters water
                const currentScale = MIN_SCALE * (1 - splashProgress);

                // Keep at impact site
                blockRef.current.style.transform = `translate(${endX}px, ${endY}px) rotate(${360 + splashProgress * 45}deg) scale(${currentScale})`;

                // 2. WATER WAVE ANIMATION
                // Apply Easing for natural liquid feel
                const easedProgress = easeOutCubic(splashProgress);

                // A. Vertical Rise (The Fill)
                const risePercent = 105 - easedProgress * 115;
                splashContainerRef.current.style.transform = `translateY(${risePercent}%)`;

                // B. Horizontal Flow
                const waveShiftFront = -easedProgress * 20;
                if (frontWaveRef.current) {
                    frontWaveRef.current.style.transform = `translateX(${waveShiftFront}%)`;
                }

                // 3. Text Reveal
                if (finalTextRef.current) {
                    if (splashProgress > 0.8) {
                        finalTextRef.current.style.opacity = '1';
                        finalTextRef.current.style.pointerEvents = 'auto';
                    } else {
                        finalTextRef.current.style.opacity = '0';
                        finalTextRef.current.style.pointerEvents = 'none';
                    }
                }
            }
        };

        // Attach listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial calculation
        // Small timeout to ensure layout is ready
        setTimeout(handleScroll, 100);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (onReset) onReset();
    };

    return (
        <div className="liquid-page">
            <div className="liquid-container">

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

                {/* Scrollable Container */}
                <div className="scroll-container">

                    {/* Section 1 */}
                    <section className="liquid-section section-1">
                        <h1 className="liquid-title">
                            Liquid Impact
                        </h1>
                        <p className="liquid-subtitle">
                            The object now triggers a tidal wave upon impact.
                        </p>
                        <div className="animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                            </svg>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="liquid-section section-2">
                        <div className="opacity-50">
                            <h2 className="liquid-h2">Fluid Dynamics</h2>
                            <p className="liquid-p">
                                Wait for the splash. A solid wave system will consume the screen
                                from the impact point.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="liquid-section section-3">
                        <div
                            ref={finalTextRef}
                            className="final-text-container"
                        >
                            <h2 className="final-title">SPLASH</h2>
                            <p className="final-subtitle">System submerged.</p>
                            <button
                                onClick={scrollToTop}
                                className="reset-button"
                            >
                                Reset System
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
