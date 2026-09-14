import { useEffect, useRef } from 'react';

// Module variables
let audioCtx: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array | null = null;
let isAudioWired = false;

export default function BackgroundEqualizer () {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const gl = canvas.getContext('webgl');
        if(!gl) return;

        // audio engine
        const wiredAudio = () => {
            if (isAudioWired) return;

            // reach and grab audio tag
            const audioEl = document.querySelector('audio');
            if (audioEl) {
                try {
                    //initialize
                    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
                    analyser = audioCtx.createAnalyser();
                    analyser.fftSize = 64;
                    dataArray = new Uint8Array(analyser.frequencyBinCount);

                    // connect the wiring
                    const source = audioCtx.createMediaElementSource(audioEl);
                    source.connect(analyser);
                    analyser.connect(audioCtx.destination);
                    isAudioWired = true;
                } catch (e) {
                    console.log("Audio context already wired or blocked by browser.");
                }
            }
        };

        wiredAudio();

        const vsSource = `
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }`;

        const fsSource = `
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform float u_audio;
            
            float hash(float n) { return fract(sin(n) * 1e4); }
            float noise(float x) {
                float i = floor(x);
                float f = fract(x);
                float u = f * f * (3.0 - 2.0 * f);
                return mix(hash(i), hash(i + 1.0), u);
            }
                
            vec3 getPalette(float angle) {
                float t = mod(angle, 1.0);
                vec3 neonGreen = vec3(0.0, 1.0, 0.255);
                vec3 metallicGold = vec3(0.831, 0.686, 0.216);
                if (t < 0.5) return mix(neonGreen, metallicGold, t * 2.0);
                return mix(metallicGold, neonGreen, (t-0.5) * 2.0);
            }
                
            void main () {
                vec2 st = gl_FragCoord.xy / u_resolution.xy;
                st = st * 2.0 - 1.0;
                st.x *= u_resolution.x / u_resolution.y;
                
                vec2 mouse = u_mouse / u_resolution;
                mouse = mouse * 2.0 - 1.0;
                mouse.x *= u_resolution.x / u_resolution.y;
                
                float bgRad = length(st);
                vec3 bgColor = mix(vec3(0.05, 0.05, 0.05), vec3(0.0, 0.0, 0.0), smoothstep(0.0, 1.5, bgRad));
                
                vec2 pos = st;
                float distToMouse = length(pos - mouse);
                pos -= (mouse - pos) * 0.05 / (distToMouse + 0.5);
                
                float r = length(pos);
                float a = atan(pos.y, pos.x);
                
                float normalizedAngle = (a + 3.14159265) / (2.0 * 3.14159265);
                vec3 colorTheme = getPalette(normalizedAngle);
                
                float innerRadius = 0.5;
                float numBars = 120.0;
                float barId = floor(a / (6.2831853 / numBars));

                // audio boost
                float audioBoost = u_audio * 0.3 * (0.4 + 0.6 * noise(barId * 10.0));

                // on/off switch
                float isPlaying = smoothstep(0.01, 0.05, u_audio);

                // ambient noise: multiplied with 'isPlaying'
                float ambientNoise = (noise(barId * 8.0 + u_time * 3.0) * 0.08) * isPlaying;
                
                float baseHeight = noise(barId * 8.0 + u_time * 3.0) * 0.2 + noise(barId * 5.0 - u_time * 2.0) * 0.15;
                
                float mouseBoost = smoothstep(0.6, 0.0, distToMouse) * 0.05;

                float totalHeight = max(0.0, audioBoost + ambientNoise + mouseBoost);
                
                float outerRadius = innerRadius + totalHeight;
                float barWidth = 6.2831853 / numBars * 0.65;
                float distToBarCenter = abs(mod(a, 6.2831853 / numBars) - (6.2831853 / numBars * 0.5));
                
                float isInsideBar = step(distToBarCenter, barWidth * 0.5) * step(innerRadius, r) * step(r, outerRadius);
                float ringGlow = 0.015 / max(abs(r - innerRadius), 0.001);
                vec3 glowColor = colorTheme * ringGlow;
                float innerCircleMask = step(r, innerRadius - 0.01);
                
                vec3 finalColor = bgColor;
                
                if (isInsideBar > 0.0) {
                    finalColor = colorTheme;
                } else if (innerCircleMask > 0.0) {
                 finalColor = mix(vec3(0.0), vec3(0.05, 0.05, 0.05), smoothstep(0.0, innerRadius, r)) * 0.2;
                 float innerEdge = smoothstep(innerRadius - 0.03, innerRadius - 0.01, r);
                 finalColor += colorTheme * innerEdge * 0.5;
                } else {
                    finalColor += glowColor * 0.4;
                }
                    
                gl_FragColor = vec4(finalColor, 1.0);
            }`;

        function compileShader(type: number, source: string) {
            const shader = gl!.createShader(type)!;
            gl!.shaderSource(shader, source);
            gl!.compileShader(shader);
            return shader;
        }

        const shaderProgram = gl.createProgram()!;
        gl.attachShader(shaderProgram, compileShader(gl.VERTEX_SHADER, vsSource));
        gl.attachShader(shaderProgram, compileShader(gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(shaderProgram);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

        const aVertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
        const uResolution = gl.getUniformLocation(shaderProgram, 'u_resolution');
        const uTime = gl.getUniformLocation(shaderProgram, 'u_time');
        const uMouse = gl.getUniformLocation(shaderProgram, 'u_mouse');

        const uAudio = gl.getUniformLocation(shaderProgram, 'u_audio');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = window.innerHeight - e.clientY;
        };
        window.addEventListener('mousemove', onMouseMove);

        let animationFrameId: number;

        const render = (now: number) => {
            const displayWidth = window.innerWidth;
            const displayHeight = window.innerHeight;

            if(canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl!.viewport(0, 0, displayWidth, displayHeight);
            }

            // calculate the live audio volume on every single frame
            let currentAudioValue = 0.0;
            if (isAudioWired && analyser && dataArray) {
                analyser.getByteFrequencyData(dataArray as any);

                let sum=0;
                for (let i = 0; i < 8; i++){
                    sum += dataArray[i];
                }

                currentAudioValue = (sum / 8.0 / 255.0);
            }

            gl!.useProgram(shaderProgram);
            gl!.bindBuffer(gl!.ARRAY_BUFFER, positionBuffer);
            gl!.enableVertexAttribArray(aVertexPosition);
            gl!.vertexAttribPointer(aVertexPosition, 2, gl!.FLOAT, false, 0, 0);

            gl!.uniform2f(uResolution, canvas.width, canvas.height);
            gl!.uniform1f(uTime, now * 0.001);
            gl!.uniform2f(uMouse, mouseX, mouseY);

            gl!.uniform1f(uAudio, currentAudioValue);

            gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />;
}