import { motion } from 'motion/react';
import {Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        role: "Freelancer",
        company: "Beruang Emas Excel Services",
        period: "March 2026 - Current",
        description: "Evaluate, design, and build software to tackle real-world problems.",
        tech: ["HTML", "CSS", "Javascript", "React", "PostgreSQL", "Node.js", "Kotlin", "Jetpack Compose"]
    },

    {
        id: 2,
        role: "AI Data Analyst",
        company: "Thoth AI",
        period: "Oct 2025 - March 2026",
        description: "Processed and evaluated complex audio datasets, systematically extracting and categorizing key data points based on strict technical parameters.",
        tech: ["Appen Data Platform", "Microsoft 365"]
    },

    {
        id: 3,
        role: "Content Moderator",
        company: "Concentrix Malaysia Sdn Bhd",
        period: "July 2025 - Oct 2025",
        description: "Analyzed complex audio datasets, applying strict project taxonomy to identify and classify relevant data points for AI pipeline integration.",
        tech: ["Appen Data Platform", "Microsoft 365"]
    },

    {
        id: 4,
        role: "Customer Service Support",
        company: "Concentrix Malaysia Sdn Bhd",
        period: "Oct 2023 - July 2025",
        description: "Facilitated comprehensive omnichannel technical and account support, utilizing Zendesk, Jira, and Confluence for eﬃcient issue tracking and knowledge management.",
        tech: ["Zendesk", "Jira", "Confluence", "Slack"]
    }
];

export default function Experience () {
    return (
        <motion.div 
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y: 0 }}
            exit = {{ opacity: 0, y: -20 }}
            transition = {{ duration: 0.5, ease: "easeOut" }}
            className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto"
        >
            <div className="mb-16">
                <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                    <span className="text-[var(--color-primary)]">SYS.</span>EXPERIENCE
                </h1>
                <p className="text-gray-400 font-mono text-sm max-w-2xl uppercase tracking-wider">
                    Career progression /// Accessing professional archives...
                </p>
            </div>

            <div className="relative border-l border-[var(--color-surface-tint)] ml-4 md:ml-6 space-y-16">
                {experienceData.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition = {{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Node */}
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-[var(--color-background)] border-2 border-[var(--color-primary)] rounded-full glow-[var(--color-primary)]" />

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                            <h3 className="font-space-grotesk text-2xl font-bold text-white tracking-wide">
                                {exp.role}
                            </h3>
                            <div className="flex items-center text-[var(--color-primary)] font-mono text-sm mt-1 md:mt-0">
                                <Calendar className="w-4 h-4 mr-2" />
                                {exp.period}
                            </div>
                        </div>

                        <div className="flex items-center text-[var(--color-secondary-fixed)] font-mono text-sm mb-4 uppercase tracking-widest">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {exp.tech.map((tech) => (
                                <span 
                                    key={tech}
                                    className="px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-surface-tint)] text-[var(--color-secondary)] font-mono text-xs rounded-sm uppercase tracking-wider"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}