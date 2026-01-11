import React from 'react';

const positions = [
    {
        role: "Software Engineer Intern",
        company: "TANZ Pakistan",
        period: "Internship",
        desc: "Optimized SQL query banks and developed real-time Power BI dashboards integrated with MySQL/Flask."
    }
];

const skills = {
    "Languages": ["C++", "Python", "JavaScript", "SQL", "LaTeX"],
    "Frameworks": ["React", "PyTorch", "Node.js", "Express", "Tailwind"],
    "Tools": ["Git", "Docker", "PostgreSQL", "Figma"],
    "Algorithmic": ["LeetCode 150+ Solved", "Graph Theory", "Dynamic Programming"]
};

const Experience = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-background text-text">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Experience */}
                <div>
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-12">03. Experience</h2>
                    <div className="space-y-8">
                        {positions.map((job, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-4 md:items-center justify-between group border-b border-white/10 pb-8 cursor-default">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.company}</h3>
                                    <p className="text-lg text-gray-400">{job.role}</p>
                                </div>
                                <div className="md:text-right space-y-2 max-w-md">
                                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono">{job.period}</span>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {job.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-12">04. Technical Arsenal</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h4 className="text-lg font-semibold text-white mb-6 border-l-2 border-primary pl-4">{category}</h4>
                                <ul className="space-y-3">
                                    {items.map((skill) => (
                                        <li key={skill} className="text-sm text-gray-400 hover:text-primary transition-colors cursor-default">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center pt-20 border-t border-white/10">
                    <p className="text-muted text-sm font-mono">
                        Designed & Built by <span className="text-white">Muhammad Ahmad</span>
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        React · Three.js (Concept) · GSAP · Tailwind
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Experience;
