import { motion } from 'motion/react';
import { ArrowRight, Globe } from 'lucide-react';
import BackgroundEqualizer from '../components/BackgroundEqualizer.tsx';
import Guardina from '../assets/Guardina_Contribution02.jpeg'
import Rent_and_Ride from '../assets/Rent-and-Ride_dev.png'
import BearBag from '../assets/BearBag.png'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: {duration: 0.5, staggerChildren: 0.2} },
    exit: { opacity: 0, y: -20, transition: {duration: 0.3} }
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

export default function Projects() {
    return (
        <motion.div variants = {pageVariants} initial="initial" animate="animate" exit="exit" className="w-full flex flex-col items-center">
            <BackgroundEqualizer />

            {/* Hero Section */}
            <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center pt-20">
                
                <div className="w-full max-w-[1440px] px-6 md:px-20 mx-auto relative z-10">
                    
                    {/* 1. NEW: Isolate the text into a strict max-width container */}
                    <div className="relative max-w-[850px]">
                        
                        {/* 2. THE BLUR CLOUD: An absolute layer that expands slightly beyond the text */}
                        <div 
                            className="absolute -inset-y-16 -inset-x-12 pointer-events-none z-0 backdrop-blur-[12px] bg-background/30"
                            style={{
                                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
                            }}
                        ></div>

                        {/* 3. THE TEXT CONTENT: Wrapped in relative z-10 to sit above the blur */}
                        <div className="relative z-10 flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-2">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-primary-container to-transparent"></div>
                                <span className="font-label text-s text-secondary-container tracking-[0.2em] uppercase font-bold">System Ready // v34.5</span>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold uppercase max-w-[800px] leading-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                                The Future <br /> Of A Man.
                            </motion.h1>

                            <motion.p variants={itemVariants} className="font-body text-lg text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-[500px]">
                                Multidisciplinary Designer & Creative Technologist bridging the gap between digital aesthetics and precision engineering.
                            </motion.p>

                            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-6">
                                <button 
                                    onClick={() => document.getElementById('projects-archive')?.scrollIntoView({ behavior: 'smooth'})}
                                    className="relative group px-8 py-4 bg-transparent border border-surface-tint text-gold font-label text-xs uppercase flex items-center gap-2 overflow-hidden transition-all hover:shadow-[inset_0_0_20px_rgba(0, 230, 57, 0.2)]">
                                    <div className="absolute -inset-1 bg-surface-tint/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative z-10 font-bold">View Projects</span>
                                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-surface-tint rounded-full animate-pulse shadow-[0_0_10px_rgba(0,230,57,0.8)]"></div>
                                    <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Available for contract</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                    
                <motion.div variants={itemVariants} className="absolute bottom-12 left-6 md:left-20 flex flex-col items-center gap-4">
                    <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-surface-tint/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects-archive" className="w-full max-w-[1440px] px-6 md:px-20 mx-auto py-24 flex flex-col gap-16 md:gap-32">
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-8 bg-surface-tint"></div>
                        <span className="font-label text-sx font-bold text-surface-tint uppercase tracking-[0.2em]">02. Archive</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl uppercase leading-none font-bold">
                        Projects <br /> <span className="text-secondary-fixed italic font-normal">Contributed</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                    {/* Featured Project */}
                    <motion.div variants={itemVariants} className="md:col-span-12 group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-surface-container/40 backdrop-blur-xl hover:border-surface-tint/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0, 230, 57,0.15)]">
                        <div className="flex flex-col md:flex-row min-h-[500px]">
                            <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between order-2 md:order-1 border-t md:border-t-0 md:border-r border-white/5">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="font-label text-[10px] font-bold text-secondary-fixed bg-secondary-fixed/10 px-3 py-1 rounded-sm border border-secondary-fixed/20">FEATURED</span>
                                        <span className="font-label text-[10px] font-bold text-surface-tint bg-surface-tint/10 px-3 py-1 rounded-sm border border-surface-tint/20">SYS.001</span>
                                        <span className="font-label text-[10px] font-bold text-on-surface-variant">May 2026</span>
                                    </div>

                                    <h3 className="font-headline text-4xl text-on-surface uppercase tracking-tight font-bold">Guardina</h3>
                                    <p className="font-body text-on-surface-variant">
                                        A SOS app aim to help women in a life-threatening emergency.
                                        <p className="font-body text-on-surface-variant text-xs">
                                            <em>Contributed in developing the dark theme for the app. And the floating icons.</em>
                                        </p>
                                    </p>
                                </div>
                                <div className="mt-12 flex items-center gap-4">
                                    {/* <button className="font-label text-xs font-bold text-on-primary bg-surface-tint px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-primary-fixed transition-colors">
                                        <Plus className="w-5 h-5" />
                                    </button> */}
                                </div>
                            </div>

                            <div className="w-full md:w-7/12 relative order-1 md:order-2 overflow-hidden bg-surface-container-low min-h-[300px]">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${Guardina})`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-surface-container/80 via-transparent to-transparent hidden md:block"></div>
                                <div className="absolute bottom-6 right-6 flex items-end gap-2 mix-blend-screen">
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="w-16 h-[2px] bg-surface-tint/50"></div>
                                        <div className="w-8 h-[2px] bg-surface-tint/50"></div>
                                        <div className="w-12 h-[2px] bg-surface-tint/50"></div>
                                    </div>
                                    <span className="font-label text-[10px] font-bold text-secondary-container">[SYNC: STABLE]</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div variants={itemVariants} className="md:col-span-6 group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-surface-container-low/60 backdrop-blur-lg hover:border-surface-tint/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,230,57, 0.1)] flex flex-col h-[600px]">
                        <div className="h-[300px] w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${Rent_and_Ride})`}}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/90 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-1 justify-between bg-surface-container-low/40 relative z-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between w-full">
                                    <span className="font-label text-[10px] font-bold text-on-surface-variant bg-white/5 px-2 py-1 rounded border border-white/10">TRANSPORTATION</span>
                                    <span className="font-label text-[10px] font-bold text-surface-tint flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-surface-tint animate-pulse"></div> IN PROGRESS...
                                    </span>
                                </div>

                                <h3 className="font-headline text-3xl text-on-surface uppercase tracking-tight font-bold group-hover:text-surface-tint transition-colors">Rent and Ride</h3>
                                <p className="font-body text-on-surface-variant line-clamp-3">
                                    A personal, fullstack project with modern design build for renting a motorbike any day. Incorporated responsive UI for better user experience. The platform is currently undergoing the final phase of bridging the frontend and backend.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                        <Globe className="w-4 h-4 text-on-surface-variant" />
                                    </div>
                                </div>
                                <span className="font-label text-[12px] font-bold text-surface-tint flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">EXPLORE<ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div variants={itemVariants} className="md:col-span-6 group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-surface-container-low/60 backdrop-blur-lg hover:bg-surface-container-low/80 hover:border-surface-tint/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,230,57,0.1)] flex flex-col h-[600px]">
                        <div className="h-[300px] w-full relative overflow-hiddent">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${BearBag})`}}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/90 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-1 justify-between bg-surface-container-low/40 relative z-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between w-full">
                                    <span className="font-label text-[10px] font-bold text-on-surface-variant bg-white/5 px-2 py-1 rounded border border-white/10">E-COMMERCE</span>
                                    <span className="font-label text-[10px] font-bold text-surface-tint flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-surface-tint animate-pulse"></div>IN PROGRESS...
                                    </span>
                                </div>
                                <h3 className="font-headline text-3xl text-on-surface uppercase tracking-tight font-bold group-hover:text-surface-tint transition-colors">BEAR BAG</h3>
                                <p className="font-body text-on-surface-variant line-clamp-3">
                                    Fullstack project design to help business owners reach more customers. The product focus is mainly on delivery bags.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {/* <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10"><Link className="w-4 h-4 text-on-surface-variant" /></div> */}
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10"><Globe className="w-4 h-4 text-on-surface-variant" /></div>
                                </div>
                                <span className="font-label text-[12px] font-bold text-surface-tint flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">EXPLORE <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </motion.div>
    );
}