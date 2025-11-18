if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof THREE === 'undefined') {
    const statusEl = document.getElementById('status');
    if (statusEl) {
        statusEl.innerHTML = "One or more libraries (React, ReactDOM, Three.js) failed to initialize.<br>Please check your internet connection.";
        statusEl.className = 'error-msg';
    }
    throw new Error("Libraries missing");
}

// Access React functions from the global object
const { useRef, useEffect, useState } = React;

// --- HELPER: Map function ---
Math.map = function (n, start, stop, start2, stop2) {
    return ((n - start) / (stop - start)) * (stop2 - start2) + start2;
};

// --- SHADERS ---
const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uEnableWaves;
    void main() {
        vUv = uv;
        float time = uTime * 5.0;
        float waveFactor = uEnableWaves;
        vec3 transformed = position;
        // Wave movement
        transformed.x += sin(time + position.y) * 0.5 * waveFactor;
        transformed.y += cos(time + position.z) * 0.15 * waveFactor;
        transformed.z += sin(time + position.x) * waveFactor;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform float mouse;
    uniform float uTime;
    uniform sampler2D uTexture;
    void main() {
        vec2 pos = vUv;
        vec4 color = texture2D(uTexture, pos);
        gl_FragColor = color;
    }
`;

// --- CLASS: AsciiFilter ---
// Handles the conversion of the WebGL render to ASCII characters
class AsciiFilter {
    constructor(renderer, { fontSize, fontFamily, charset, invert } = {}) {
        this.renderer = renderer;
        this.domElement = document.createElement('div');
        this.domElement.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;';

        this.pre = document.createElement('pre');
        this.domElement.appendChild(this.pre);

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d', { willReadFrequently: true });
        this.domElement.appendChild(this.canvas);

        this.invert = invert ?? true;
        this.fontSize = fontSize ?? 12;
        this.fontFamily = fontFamily ?? "'Courier New', monospace";
        this.charset = charset ?? ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.renderer.setSize(width, height);
        
        this.context.font = `${this.fontSize}px ${this.fontFamily}`;
        const charWidth = this.context.measureText('A').width;
        this.cols = Math.floor(this.width / (this.fontSize * (charWidth / this.fontSize)));
        this.rows = Math.floor(this.height / this.fontSize);

        this.canvas.width = this.cols;
        this.canvas.height = this.rows;

        Object.assign(this.pre.style, {
            fontFamily: this.fontFamily,
            fontSize: `${this.fontSize}px`,
            margin: '0',
            padding: '0',
            lineHeight: '1em',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '10',
            mixBlendMode: 'difference',
            color: 'white'
        });
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.context.clearRect(0, 0, w, h);
        this.context.drawImage(this.renderer.domElement, 0, 0, w, h);
        this.asciify(this.context, w, h);
    }

    asciify(ctx, w, h) {
        if (!w || !h) return;
        const imgData = ctx.getImageData(0, 0, w, h).data;
        let str = '';
        
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const i = (x + y * w) * 4;
                const [r, g, b] = [imgData[i], imgData[i + 1], imgData[i + 2]];
                let gray = (0.3 * r + 0.59 * g + 0.11 * b) / 255;
                let idx = Math.floor((1 - gray) * (this.charset.length - 1));
                if (this.invert) idx = this.charset.length - idx - 1;
                if (idx < 0) idx = 0;
                if (idx >= this.charset.length) idx = this.charset.length - 1;
                str += this.charset[idx];
            }
            str += '\n';
        }
        this.pre.innerHTML = str;
    }

    dispose() {}
}

// --- CLASS: CanvasTxt ---
// Creates a canvas texture from the text string
class CanvasTxt {
    constructor(txt, { fontSize = 200, fontFamily = 'Arial', color = '#ffffff' } = {}) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.txt = txt;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
        this.font = `bold ${this.fontSize}px ${this.fontFamily}`;
    }

    resize() {
        this.context.font = this.font;
        const metrics = this.context.measureText(this.txt);
        const textWidth = Math.ceil(metrics.width) + 40;
        const textHeight = Math.ceil(this.fontSize * 1.5); 
        this.canvas.width = textWidth;
        this.canvas.height = textHeight;
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = this.color;
        this.context.font = this.font;
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        this.context.fillText(this.txt, this.canvas.width / 2, this.canvas.height / 2);
    }

    get texture() { return this.canvas; }
}

// --- CLASS: CanvAscii ---
// Orchestrates the 3D Scene and the ASCII Filter
class CanvAscii {
    constructor(config, container, width, height) {
        this.container = container;
        this.config = config;
        this.width = width;
        this.height = height;
        
        const T = window.THREE;
        
        this.scene = new T.Scene();
        this.camera = new T.PerspectiveCamera(45, width / height, 1, 1000);
        this.camera.position.z = 30;
        this.mouse = { x: 0, y: 0 };

        this.setup(T);
    }

    setup(T) {
        this.textCanvas = new CanvasTxt(this.config.text, {
            fontSize: 150,
            fontFamily: 'monospace',
            color: 'white'
        });
        this.textCanvas.resize();
        this.textCanvas.render();

        const texture = new T.CanvasTexture(this.textCanvas.texture);
        texture.minFilter = T.NearestFilter;

        const aspect = this.textCanvas.canvas.width / this.textCanvas.canvas.height;
        const geometry = new T.PlaneGeometry(10 * aspect, 10, 40, 40);
        const material = new T.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uTexture: { value: texture },
                uEnableWaves: { value: 1.0 }
            },
            side: T.DoubleSide,
            transparent: true
        });

        this.mesh = new T.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new T.WebGLRenderer({ 
            antialias: true, 
            alpha: true, 
            preserveDrawingBuffer: true 
        });
        this.renderer.setClearColor(0x000000, 0);

        this.filter = new AsciiFilter(this.renderer, { fontSize: 10 });
        this.container.appendChild(this.filter.domElement);
        
        this.setSize(this.width, this.height);
        this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    setSize(w, h) {
        this.width = w;
        this.height = h;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.filter.setSize(w, h);
    }

    onMouseMove(e) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = (e.clientX - rect.left) / rect.width * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }

    animate() {
        this.frameId = requestAnimationFrame(() => this.animate());
        const time = performance.now() * 0.001;
        this.mesh.material.uniforms.uTime.value = time;
        this.mesh.rotation.x += (this.mouse.y * 0.5 - this.mesh.rotation.x) * 0.05;
        this.mesh.rotation.y += (this.mouse.x * 0.5 - this.mesh.rotation.y) * 0.05;
        this.filter.render(this.scene, this.camera);
    }

    dispose() {
        cancelAnimationFrame(this.frameId);
        this.container.innerHTML = '';
    }
}

// --- REACT COMPONENT ---
function ASCIIApp() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Hide loading screen once React mounts
        const loader = document.getElementById('loading');
        if(loader) loader.style.display = 'none';
        
        if (!containerRef.current) return;

        const app = new CanvAscii(
            { text: "HELLO" },
            containerRef.current,
            window.innerWidth,
            window.innerHeight
        );
        app.animate();

        const handleResize = () => {
            app.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            app.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
            <style>{`
                pre {
                    background: linear-gradient(to right, #ff00cc, #333399);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}

// --- MOUNT ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ASCIIApp />);