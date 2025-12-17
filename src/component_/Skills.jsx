import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3-shape';

const POINTS_COUNT = 14; // Optimized from 20

const layersData = [
    {
        id: 'dev',
        label: 'DEVELOPMENT',
        color: '#00ffff', // Cyan
        skills: 'React • HTML • CSS • JavaScript • Vite • Frontend'
    },
    {
        id: 'automation',
        label: 'AUTOMATION',
        color: '#ff0055', // Neon Red/Pink
        skills: 'N8N • Webhooks • Rest APIs • Integrations • workflows'
    },
    {
        id: 'hardware',
        label: 'HARDWARE',
        color: '#ffaa00', // Orange
        skills: 'Arduino • C++ • Electronics • IoT • Prototyping'
    },
    {
        id: 'creative',
        label: 'CREATIVE',
        color: '#bf00ff', // Purple
        skills: 'Photoshop • Premiere Pro • Illustrator • UI/UX • Design'
    },
    {
        id: 'productivity',
        label: 'PRODUCTIVITY',
        color: '#00ff66', // Green
        skills: 'Excel • Management • Strategy • Organization • Office'
    }
];

const Skills = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });
    const [time, setTime] = useState(0);

    // State for interaction
    const [hoveredLayer, setHoveredLayer] = useState(null);

    // Mutable refs for smooth animation values
    const hoveredLayerRef = useRef(null);
    const zoomWeights = useRef({ dev: 0, automation: 0, hardware: 0, creative: 0, productivity: 0 });

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: 600
                });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const areaGenerator = useMemo(() => d3.area()
        .x((d, i) => (i / (POINTS_COUNT - 1)) * dimensions.width)
        .y0(d => d[0])
        .y1(d => d[1])
        .curve(d3.curveBasis), [dimensions.width]);

    const isMobile = dimensions.width < 600;

    // Data Calculation (Re-runs on 'time' update = standard React Frame Loop)
    const currentPaths = useMemo(() => {
        // Prepare raw data
        const rawData = new Array(POINTS_COUNT);

        // Calculate Total Focus for overall scaling
        const totalWeight = Object.values(zoomWeights.current).reduce((a, b) => a + b, 0);
        const focusFactor = Math.min(1, totalWeight);

        for (let i = 0; i < POINTS_COUNT; i++) {
            const point = { x: i };

            layersData.forEach((layer, idx) => {
                const layerWeight = zoomWeights.current[layer.id] || 0;

                const idleHeight = isMobile ? 50 : 60;
                const activeHeight = isMobile ? 200 : 250;
                const suppressedHeight = 25;

                const targetFocusHeight = suppressedHeight + (layerWeight * (activeHeight - suppressedHeight));
                const baseHeight = idleHeight + (focusFactor * (targetFocusHeight - idleHeight));

                const t = time;
                const wave1 = Math.sin((i * 0.4) + (t * 0.1) + idx) * 30;
                const wave2 = Math.cos((i * 0.3) - (t * 0.15)) * 25;

                const minThickness = isMobile ? 45 : 20;
                point[layer.id] = Math.max(minThickness, baseHeight + wave1 + wave2);
            });
            rawData[i] = point;
        }

        const stack = d3.stack()
            .keys(layersData.map(l => l.id))
            .offset(d3.stackOffsetSilhouette);

        const stackedData = stack(rawData);

        // Map to displayable paths
        return stackedData.map((layer, index) => {
            const processedLayer = layer.map(point => [
                point[0] + dimensions.height / 2,
                point[1] + dimensions.height / 2
            ]);

            // Calculate center for text
            const midStart = Math.floor(POINTS_COUNT * 0.4);
            const midEnd = Math.floor(POINTS_COUNT * 0.6);
            let ySum = 0;
            let count = 0;
            for (let i = midStart; i < midEnd; i++) {
                const p = processedLayer[i];
                ySum += (p[0] + p[1]) / 2;
                count++;
            }
            const yCenter = count > 0 ? ySum / count : dimensions.height / 2;

            return {
                id: layersData[index].id,
                d: areaGenerator(processedLayer),
                color: layersData[index].color,
                label: layersData[index].label,
                skills: layersData[index].skills,
                yCenter: yCenter
            };
        });
    }, [time, dimensions, areaGenerator, isMobile]);


    // Animation Loop
    useEffect(() => {
        let animationFrame;
        const animate = () => {
            if (!isInView) return;

            // 1. Update Time State -> Triggers Re-render
            setTime(t => t + 0.08);

            // 2. Interpolate Zoom Weights (Ref)
            layersData.forEach(layer => {
                const isHovered = hoveredLayerRef.current === layer.id;
                const target = isHovered ? 1 : 0;
                const current = zoomWeights.current[layer.id];
                zoomWeights.current[layer.id] = current + (target - current) * 0.08;
            });

            animationFrame = requestAnimationFrame(animate);
        };

        if (isInView) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView]);

    const updateInteraction = (id) => {
        hoveredLayerRef.current = id;
        setHoveredLayer(id);
    };

    const handleLayerClick = (id) => {
        const newId = (hoveredLayer === id) ? null : id;
        updateInteraction(newId);
    };

    return (
        <section
            id="skills"
            ref={sectionRef}
            style={{
                height: '100vh',
                backgroundColor: '#000',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <div style={{
                textAlign: 'left',
                width: '90%',
                maxWidth: '1200px',
                marginBottom: '20px'
            }}>
                <h2 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#fff',
                    margin: 0
                }}>
                    Top Skills
                </h2>
            </div>

            <div
                ref={containerRef}
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    height: '600px',
                    position: 'relative',
                    borderBottom: '1px solid #333'
                }}
            >
                {dimensions.width > 0 && (
                    <svg
                        width={dimensions.width}
                        height={dimensions.height}
                        style={{ overflow: 'visible' }}
                    >
                        {currentPaths.map((layer) => {
                            const weight = zoomWeights.current[layer.id];
                            const isSelected = weight > 0.5;
                            const totalWeight = Object.values(zoomWeights.current).reduce((a, b) => a + b, 0);
                            const isFocusMode = totalWeight > 0.2;
                            const isDimmed = isFocusMode && !isSelected;

                            return (
                                <g
                                    key={layer.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLayerClick(layer.id);
                                    }}
                                    onMouseEnter={() => !isMobile && updateInteraction(layer.id)}
                                    onMouseLeave={() => !isMobile && updateInteraction(null)}
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    <path
                                        d={layer.d}
                                        fill={layer.color}
                                        fillOpacity={isDimmed ? 0.2 : 1}
                                        stroke={isSelected ? "#fff" : "none"}
                                        strokeWidth="1"
                                        style={{ transition: 'fill-opacity 0.3s, stroke 0.3s' }}
                                    />

                                    <text
                                        x={dimensions.width / 2}
                                        y={layer.yCenter}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="white"
                                        fontFamily="'Montserrat', sans-serif"
                                        fontWeight="800"
                                        style={{
                                            pointerEvents: 'none',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                                            fontSize: isMobile ? '12px' : '20px',
                                            letterSpacing: '0.05em',
                                            opacity: Math.max(0, 1 - (totalWeight * 2)),
                                            transition: 'opacity 0.1s'
                                        }}
                                    >
                                        {layer.label}
                                    </text>

                                    <text
                                        x={dimensions.width / 2}
                                        y={layer.yCenter}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="white"
                                        fontFamily="'Montserrat', sans-serif"
                                        fontWeight="800"
                                        style={{
                                            pointerEvents: 'none',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                                            fontSize: isMobile ? '10px' : '16px',
                                            letterSpacing: '0.05em',
                                            opacity: Math.max(0, (weight - 0.5) * 2),
                                            transition: 'opacity 0.1s'
                                        }}
                                    >
                                        {layer.skills}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                )}

                <div style={{ position: 'absolute', bottom: '-25px', width: '100%', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.8rem', fontFamily: "'Roboto Mono', monospace" }}>
                    <span>Foundation</span>
                    <span>Growth</span>
                    <span>Mastery</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
