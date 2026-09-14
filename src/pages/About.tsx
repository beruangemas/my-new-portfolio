import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Worm, Code2, Layout, Database, Cpu, Globe, Braces, Layers, Coffee, Hammer, Wifi } from 'lucide-react';
import Background from '../assets/myself02.jpg';

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

const pageVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 0.5, staggerChildren: 0.1}},
    exit: {opacity: 0, transition: {duration: 0.3}}
};

const itemVariants = {
    initial: {opacity: 0, y:20},
    animate: {opacity: 1, y:0}
};

const gridVariants: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.1 }}
};

const cardVariants: Variants = {
    hidden: {opacity: 0, y:20 },
    show: { opacity: 1, y:20, transition: {duration: 0.5, ease: "easeOut" }}
};

export default function About(){
    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-[1440px] px-6 md:px-20 mx-auto flex flex-col gap-16 pb-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] w-full gap-8 items-center pt-24">

                {/* Left Image */}
                <motion.div variants={itemVariants} className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] group">
                    <div className="absolute inset-0 overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 group-hover:border-surface-tint/50 transition-colors duration-500 shadow-[0_0_40px_rgba(0,230,57, 0.05)]">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            style = {{ backgroundImage: `url(${Background})`}} ></div>
                        <div className="absolute inset-0 bg-surface-tint/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-surface-container-high/90 backdrop-blur-xl p-6 rounded-lg border border-surface-tint/20 shadow-2xl z-40">
                        <div className="font-label text-[10px] font-bold text-surface-tint mb-2 tracking-widest">[ STATUS ACTIVE ]</div>
                        <div className="font-display text-3xl font-bold text-on-surface uppercase">FREELANCE_DEV</div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center gap-8 lg:pl-12">
                    <div className="flex flex-col gap-4 relative">
                        <div className="hidden lg:block absolute right-0 top-1/8 font-label text-[10px] font-bold text-on-surface-variant/30 tracking-[0.2em] uppercase mix-blend-screen"
                            style={{ writingMode: 'vertical-rl'}}>
                                SYS.INITIALIZE_CORE
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-[1px] bg-secondary-fixed"></div>
                            <span className="font-label text-xs font-bold text-secondary-fixed tracking-widest uppercase">The Mission</span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl font-bold text-on-surface uppercase leading-tight">
                            BEYOND THE <br /> <span className="text-surface-tint relative inline-flex items-center">INTERFACE_<span className="absolute -right-4 bottom-2 w-3 h-3 bg-surface-tint animate-ping"></span></span>
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-xl mt-4">
                            Beyond software, I enjoy hands-on physical projects—whether it's extending hardware network infrastructure or renovating physical spaces. I bring that same structural, problem-solving mindset to digital engineering.
                        </p>
                        <p className="font-body text-on-surface-variant max-w-xl opacity-80">
                            I specialize in architecting custom applications using the PERN and MERN stacks. From designing robust PostgreSQL databases to crafting interactive frontends, every line of code serves a purpose.
                        </p>
                    </div>
                    {/* <div className="pt-4 flex">
                        <button className="relative group px-8 py-4 bg-transparent border border-surface-tint overflow-hidden rounded-sm transition-all hover:shadow-[0_0_20px_rgba(0,230,57, 0.2)] font-label text-xs font-bold text-surface-tint uppercase flex items-center gap-2">
                            <div className="absolute inset-0 bg-surface-tint/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                            <span className="relative z-10 group-hover:text-primary-fixed transition-colors">Initialize Sequence</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div> */}
                </motion.div>

            </section>

            {/*System Capabilities */}
            <section className="w-full pt-10">
                <div className="mb-12">
                    <h2 className="font-display text-3xl font-bold text-on-surface mb-2 uppercase">SYS.SKILLS</h2>
                    <p className="font-label text-sx font-bold text-on-surface-variant uppercase">Loading module capabilities...</p>
                </div>

                <motion.div 
                    variants = {gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, margin: "-100px"}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((skill) => (
                        <motion.div 
                            key={skill.name}
                            variants={cardVariants}
                            className="group relative bg-[var(--color-surface)] border border-[var(--color-surface-tint)] p-6 rounded-sm"
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
            </section>

            {/* Infrastructure */}
            <section className="w-full bg-surface-container-low py-16 px-10 rounded-xl relative overflow-hidden mt-10 border-outline-variant/20">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/5 rounded-full blur-[100px]"></div>

                <div className="relative z-10">
                    <div className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-on-surface mb-2 uppercase">SYS.INFRASTRUCTURE</h2>
                        <p className="font-label text-xs font-bold text-on-surface-variant uppercase">Hardware & Environment Architecture</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Physical Architecture Card */}
                        <div className="flex gap-6 items-start">
                            <div className="p-4 bg-surface-container-high rounded border border-surface-tint/30 text-surface-tint">
                                <Hammer className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-space-grotesk font-bold text-lg text-white mb-2 tracking-wide">Structural Optimization</h3>
                                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                    Engineering goes beyond the screen. Experienced in translating blueprints into reality through structural floor plan modification, electrical rewiring, and environmental upgrades to optimize physical spaces for tenants.
                                </p>
                            </div>
                        </div>

                        {/* Network Architecture */}
                        <div className="flex gap-6 items-start">
                            <div className="p-4 bg-surface-container-high rounded border border-surface-tint/30 text-surface-tint">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <div>
                            <h3 className="font-space-grotesk font-bold text-lg text-white mb-2 tracking-wide">Network Bridging</h3>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                Proficient in deploying and configuring outdoor point-to-point wireless hardware to seamlessly bridge broadband connections and extend network infrastructure across physical property gaps.
                            </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </motion.div>
    );
}