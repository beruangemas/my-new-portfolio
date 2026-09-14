import { bearFace } from '@lucide/lab';
import { Icon, User } from 'lucide-react';
import {motion} from 'motion/react';
import type {Page} from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

export default function Navbar({currentPage, setCurrentPage} : HeaderProps) {
    const NavItems: {id: Page; label: string}[] = [
        {id: 'home', label: 'Home'},
        {id: 'about', label: 'About'},
        {id: 'projects', label: 'Projects'},
        {id: 'experience', label: 'Experience'},
        // {id: 'skills', label: 'Skills'},
        {id: 'contact', label: 'Contact'},
    ];

    return (
        <header className = "fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/10">
            <div className="h-20 w-full px-6 md:px-20 flex items-center justify-between mx-auto max-w-[1440px]">
                <div className="flex items-center gap-3 cursor-pointer"
                    onClick = {() => setCurrentPage('home')}>
                    <div className="w-8 h-8 flex items-center justify-center">
                        <Icon iconNode={bearFace} className="text-primary-container w-8 h-8" />
                    </div>
                    <span className="font-display text-2xl tracking-widest text-on-surface uppercase font-bold">
                    BERUANG EMAS
                    </span>
                </div>
                
                <nav className="hidden md:flex items-center gap-8 ml-auto mr-12">
                {NavItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className="relative font-label text-xs uppercase tracking-widest transition-colors hover:text-surface-tint py-2"
                    >
                        <span className={currentPage === item.id ? 'text-surface-tint font-bold' : 'text-on-surface-variant'}>
                            {item.label}
                        </span>
                        {currentPage === item.id && (
                            <motion.div
                                layoutId="nav-indicator"
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-surface-tint"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </nav>

            <button className="w-8 h-8 rounded-full bg-surface-tint flex items-center justify-center hover:scale-105 transition-transform">
                <User className ="text-on-primary w-6 h-6" />
            </button>
            </div>

        </header>
    );
}