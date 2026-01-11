import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const totalFrames = 240;
    const imagesRef = useRef([]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imageUrls = Array.from({ length: totalFrames }, (_, i) => {
            const frameIndex = i + 1; // 1-based index based on filenames
            // Pad with zeros to match format ezgif-frame-001.jpg
            const paddedIndex = String(frameIndex).padStart(3, '0');
            return `/sliding_animation/ezgif-frame-${paddedIndex}.jpg`;
        });

        const loadImages = async () => {
            const promises = imageUrls.map((url) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.error(`Failed to load image: ${url}`);
                        // Create a placeholder or resolve null to prevent crashing
                        resolve(null);
                    }
                });
            });

            try {
                const loadedImages = await Promise.all(promises);
                imagesRef.current = loadedImages.filter(img => img !== null);
                setImagesLoaded(true);
            } catch (error) {
                console.error("Error loading images", error);
            }
        };

        loadImages();
    }, []);

    // Canvas Rendering and ScrollTrigger
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const container = containerRef.current;

        // Set high-res canvas for retina displays
        const updateCanvasSize = () => {
            // Calculate aspect ratio of the image
            const img = imagesRef.current[0];
            const imgAspect = img.width / img.height;
            const screenAspect = window.innerWidth / window.innerHeight;

            // Resize canvas to fill window
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Render the current frame immediately after resize
            // We need to keep track of current frame index, using a gsap object for this
            renderFrame(playhead.frame);
        };

        // GSAP object to scrub
        const playhead = { frame: 0 };

        const renderFrame = (index) => {
            const frameIndex = Math.round(index);
            const img = imagesRef.current[frameIndex];
            if (!img) return;

            const cw = canvas.width;
            const ch = canvas.height;
            const imgW = img.width;
            const imgH = img.height;

            // Object-fit: cover logic
            const scale = Math.max(cw / imgW, ch / imgH);
            const x = (cw - imgW * scale) / 2;
            const y = (ch - imgH * scale) / 2;

            context.clearRect(0, 0, cw, ch);
            context.drawImage(img, x, y, imgW * scale, imgH * scale);
        };

        window.addEventListener('resize', updateCanvasSize);
        updateCanvasSize(); // Initial sizing

        const st = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5, // Butter smooth scrubbing
            onUpdate: (self) => {
                // Map progress (0 to 1) to frame index (0 to totalFrames - 1)
                const frame = self.progress * (imagesRef.current.length - 1);
                playhead.frame = frame;
                renderFrame(frame);
            }
        });

        // Overlay Text Animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        // 10% - "Muhammad Ahmad"
        tl.to(".text-1", { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0.05)
            .to(".text-1", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.20);

        // 40% - "Computational Scientist"
        tl.to(".text-2", { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0.35)
            .to(".text-2", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.55);

        // 70% - "Building the Future of AI"
        tl.to(".text-3", { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0.65)
            .to(".text-3", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.85);


        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            st.kill();
            tl.kill();
        };

    }, [imagesLoaded]);

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-primary z-50 bg-background">
                        <div className="text-xl font-mono animate-pulse">Loading Neuro-Link...</div>
                    </div>
                )}

                <canvas ref={canvasRef} className="block w-full h-full object-cover" />

                {/* Social Links */}
                <div className="absolute top-8 right-8 z-50 flex gap-6">
                    <a href="https://github.com/MuhammadAhmadF2005" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                        <Github size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-ahmad-05-ebs-lyc-giki/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                        <Linkedin size={32} />
                    </a>
                </div>

                {/* Overlay Text Containers - Centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 text-center">
                    <h1 className="text-1 opacity-0 text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl absolute w-full">
                        Muhammad Ahmad
                    </h1>
                    <h2 className="text-2 opacity-0 text-4xl md:text-7xl font-bold tracking-tight text-primary drop-shadow-lg absolute w-full">
                        Computational Scientist
                    </h2>
                    <h3 className="text-3 opacity-0 text-4xl md:text-6xl font-medium tracking-tight text-white drop-shadow-lg absolute w-full">
                        Building the Future of AI
                    </h3>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <span className="text-sm font-mono">SCROLL TO EXPLORE</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
