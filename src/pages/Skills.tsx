import { motion } from 'motion/react';
import type {Variants} from 'motion/react';
import { Worm, Code2, Layout, Database, Cpu, Globe, Braces, Layers, Coffee } from 'lucide-react';

const skillsData = [
    {name: 'HTML', icon: Globe, category: 'Frontend', level: 95 },
    {name: 'CSS', icon: Layout, category: 'Frontend', level: 80 },
    {name: 'Javascript', icon: Braces, category: 'Core', level: 80 },
    {name: 'React', icon: Code2, category: 'Framework', level: 80 },
    {name: 'Next.js', icon: Layers, category: 'Framework', level: 40 },
    {name: 'PostgreSQL', icon: Database, category: 'Database', level: 45},
    {name: 'Java', icon: Coffee, category: 'Backend', level: 50 },
    {name: 'C++', icon: Cpu, category: 'Systems', level: 60 },
    {name: 'Python', icon: Worm, category: 'Scripting', level: 40 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}
};

export default function Skills(){
    return(
        <motion.div
            initial= {{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-screen"
        >
            <div className="mb-16">
                <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                    <span className="text-[var(--color-primary)]">SYS.</span><em>SKILLS</em>
                </h1>
                <p className="text-gray-400 font-mono text-sm max-w-2xl uppercase tracking-wider">
                    Technical proficiencies /// Loading module capabilities...
                </p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {skillsData.map((skill) => (
                    <motion.div 
                        key={skill.name}
                        variants={itemVariants}
                        className="group relative bg-[var(--color-surface)] border border-[var(--color-surface-tint)] p-6 overflow-hidden"
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-opacity" />

                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-3 bg-[var(--color-background)] border border-[var(--color-surface-tint)] group-hover:border-[var(--color-primary)] transition-colors duration-300">
                                    <skill.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <span className="font-mono text-xs text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-background)] px-2 py-1 border border-[var(--color-surface-tint)]">
                                    {skill.category}
                                </span>
                            </div>

                            <div className="mt-auto">
                                <h3 className="font-space-grotesk text-xl font-bold text-white tracking-wide mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                                    {skill.name}
                                </h3>

                                <div className="w-full bg-[var(--color-background)] h-2 relative">
                                    <motion.div 
                                        variants={{
                                            hidden:{ width:  "0%"},
                                            show: { 
                                                width: `${skill.level}%`,
                                                transition:{ duration: 1, delay: 0.5, ease: "easeOut" }
                                            }
                                        }}
                                        className="absolute top-0 left-0 h-full bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary)]"
                                    />
                                </div>
                                <div className="mt-2 flex justify-between font-mono text-[10px] text-gray-500 uppercase">
                                    <span>Proficiency</span>
                                    <span className="text-[var(--color-primary)]">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}