import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code, Database, Globe, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Newell-Whitehead-Segel Solver",
        type: "Scientific Machine Learning",
        description: "Solved nonlinear reaction-diffusion equations using PyTorch. Designed a 1-64-64-64-1 architecture achieving MAE < 10^-5. Validated O(N) training scalability.",
        stack: ["PyTorch", "PINNs", "Python", "NumPy", "SciPy"],
        icon: <Box size={24} />,
        highlight: true,
        keywords: "Differential Equations, Deep Learning, Scalability"
    },
    {
        title: "AlgoViz Studio",
        type: "Educational Tool",
        description: "An advanced algorithm visualizer. Not just sorting; complex graph theory and pathfinding visualizations rendered in real-time.",
        stack: ["TypeScript", "React", "D3.js", "Recoil", "Vite"],
        icon: <Code size={24} />,
        highlight: false,
        keywords: "Data Structures, Graph Theory, SVG Rendering"
    },
    {
        title: "ITNMS (Intelligent Transport)",
        type: "Full Stack System",
        description: "Comprehensive transport management system featuring RBAC, real-time analytics, and fleet management.",
        stack: ["Supabase", "React Query", "Tailwind", "Graph Algos"],
        icon: <Database size={24} />,
        highlight: false,
        keywords: "RBAC, Real-time Analytics, Geolocation"
    },
    {
        title: "Faisal Engineering",
        type: "Commercial Web App",
        description: "Production pharmaceutical vessel website. High-performance 3D asset rendering and cGMP compliance focus.",
        stack: ["R3F", "WebGL", "Framer Motion", "Shadcn UI"],
        icon: <Globe size={24} />,
        highlight: false,
        keywords: "3D Optimization, Production, SEO"
    }
];

const ProjectCard = ({ project }) => (
    <div className={`project-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 hover:to-secondary/50 transition-all duration-500 ${project.highlight ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className="absolute inset-0 bg-surfce rounded-2xl" />
        <div className="relative h-full bg-surface/90 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">

            {/* Hover Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary/20 transition-colors">
                        {project.icon}
                    </div>
                    <ArrowUpRight className="text-muted group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{project.type}</p>
                <h3 className={`font-bold mb-4 text-white group-hover:text-primary transition-colors ${project.highlight ? 'text-3xl' : 'text-2xl'}`}>
                    {project.title}
                </h3>
                <p className="text-muted group-hover:text-gray-200 transition-colors leading-relaxed mb-6">
                    {project.description}
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Hidden/SEO keywords made visible but subtle */}
                <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] text-gray-600 font-mono uppercase tracking-tight">
                        Keywords: {project.keywords}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-20 bg-background text-text">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 space-y-4">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest">02. Selected Works</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Research & Engineering</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
