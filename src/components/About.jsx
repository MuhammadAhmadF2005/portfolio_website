import React from 'react';

const About = () => {
    return (
        <section className="relative py-32 px-6 md:px-20 bg-background text-text overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Title / Section Header */}
                <div className="space-y-6">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest">01. About Me</h2>
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Physics</span> and <span className="text-white">Deep Learning</span>.
                    </h3>
                </div>

                {/* Content Card - Glassmorphism */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-8 bg-surface/50 backdrop-blur-xl border border-white/10 rounded-xl space-y-6 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-300">
                            I am an Undergraduate Computer Science Student focused on <strong className="text-white">Physics-Informed Neural Networks (PINNs)</strong> and High-Performance Computing. My work focuses on constructing AI models that respect physical laws, bringing interpretability and robustness to scientific machine learning.
                        </p>

                        <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <p className="text-sm text-muted">Education</p>
                                    <h4 className="text-lg font-semibold text-white">Ghulam Ishaq Khan Institute (GIKI)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
