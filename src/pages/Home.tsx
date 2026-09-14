import { motion } from 'motion/react';
import coinImage from '../assets/Home_Logo.jpeg';
import type { Page } from '../types';

interface  HomeProps {
    onStart: (page: Page) => void;
    onPlayMusic: () => void;
}

export default function Home({ onStart, onPlayMusic }: HomeProps){

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit = {{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut"}}
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 pt-16"
        >
            <div className="flex flex-col items-center" style={{ perspective: 1000}}>
                {/* Logo Container */}
                <div className="relative group mb-12">
                    {/* Subtle glow behind the logo */}
                    <div className="absolute inset-0 bg-[var(--color-primary)]/20 blur-3xl rounded-full group-hover:bg-[var(--color-primary)]/40 transition-colors duration-500" />

                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative z-10 animate-twirl hover:[animation-play-state:paused] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_50px_rgba(255,215,0,0.9)] transition-all duration-500 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 border-8 border-yellow-200 flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"
                            style={{ transformStyle: "preserve-3d"}}>
                        <div className="w-full h-full rounded-full border-1 border-yellow-200/40 flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] bg-[length:165%] bg-[position:47.5%_51%]"
                            style={{ backgroundImage: `url(${coinImage})`}}></div>
                    </div>
                </div>
            </div>

            {/* Brand Name */}
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold uppercase tracking-widest text-color-secondary mb-12 text-center drop-shadow-lg">
                Beruang <span className="text-[var(--color-primary)]">Emas</span>
            </h1>

            {/* Start Button */}
            <motion.button 
                onClick={() => {
                    onPlayMusic();
                    onStart('about');
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0px 0px 0px 0px rgba(0, 230, 57, 0)",
                        "0px 0px 20px 4px rgba(0, 230, 57, 0.4)",
                        "0px 0px 0px 0px rgba(0, 230, 57, 0)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="group relative overflow-hidden bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] px-12 py-4 font-space-grotesk font-bold uppercase tracking-widest hover:text-[var(--color-background)] transition-colors duration-300"
            >
                <div className="absolute inset-0 bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center justify-center text-lg">
                    START
                </span>
            </motion.button>
        </motion.div>
    )
}