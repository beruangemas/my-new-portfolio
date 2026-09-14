import { motion } from 'motion/react';
import { Send, MapPin, Mail, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Contact(){
    
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error' >('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            const response = await fetch (`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('success');
                //clear form after successful send
                setFormData({ name: '', email: '', message: '' });

                //reset button back to normal after 5 seconds
                setTimeout(() => setFormStatus('idle'), 5000 );
            } else {
                setFormStatus ('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch {
            console.error("Transmission failed:", Error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y:20}}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity:0, y: -20}}
            transition={{ duration: 0.5, ease: "easeOut"}}
            className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen flex flex-col md:flex-row gap-16"
        >
            {/*Left Column: Info */}
            <div className="w-full md:w-1/2">
                <div className="mb-12">
                    <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                        <span className="text-[var(--color-primary)]">INIT.</span>CONTACT
                    </h1>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                        Establish secure connection /// Awaiting input...
                    </p>
                </div>

                <div className="space-y-8 font-monot text-sm text-gray-300">
                    <div className="flex items-start">
                        <Terminal className="w-5 h-5 text-[var(--color-primary)] mr-4 mt-0.5" />
                        <div>
                            <div className="text-[var(--color-secondary)] mb-1 uppercase tracking-widest text-xs">Status</div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-2 animate-pulse glow-[var(--color-primary)]" />
                                Available for freelance opportunities!
                            </div>
                        </div>
                    </div>

                <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[var(--color-primary)] mr-4 mt-0.5" />
                        <div>
                            <div className="text-[var(--color-secondary)] mb-1 uppercase tracking widest text-xs">Direct Link</div>
                            <a href="mailto:support@beruangemas.com" className="hover:text-[var(--color-primary)] transition-colors duration-300">
                            support@beruangemas.com
                            </a>
                        </div>
                </div>

                <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] mr-4 mt-0.5" />
                        <div>
                            <div className="text[var(--color-secondary)] mb-1 uppercase tracking-widest text-xs">Coordinates</div>
                            <div> SUNGAI BULOH /// MY (Remote)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Right Column */}
            <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                    {/*Decorative corner brackets */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-surface-tint)]" />
                    <div className="absolute -top-8 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-surface-tint)]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-surface-tint)]" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-surface-tint)]" />

                    <div className="bg-[var(--color-surface)] p-8 border border-[var(--color-surface-tint)] ">
                        <div className="mb-6">
                            <label htmlFor="name" className="block font-mono text-[var(--color-primary)] text-s uppercase tracking-widest mb-2">
                                IDENTIFIER [Name]
                            </label>
                            <input 
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[var(--color-background)] border border-[var(--color-surface-tint)] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-300"
                                placeholder="Enter name, e.g. John Doe"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block font-mono text-[var(--color-primary)] text-s uppercase tracking-widest mb-2">
                                RETURN PATH [Email]
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[var(--color-background)] border border-[var(--color-surface-tint)] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-300"
                                placeholder="Enter email, e.g. youremail@example.com"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block font-mono text-[var(--color-primary)] text-s uppercase tracking-widest mb-2">
                                PAYLOAD [Message]
                            </label>
                            <textarea
                                id="message"
                                value= {formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-[var(--color-background)] border border-[var(--color-surface-tint)] text-white px-4 py-3 font-mono text-s focus:outline-none focus:border-[var(--color-primary)] transition-all duration-300 resize-none"
                                placeholder="Transmit data..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus !== 'idle'}
                            className="group relative w-full overflow-hidden bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-4 font-space-grotesk font-bold uppercase tracking-widest hover:text-[var(--color-background)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                <div className="absolute inset-0 bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
                                <span className="relative z-10 flex items-center justify-center">
                                    {formStatus === 'idle' && (
                                        <>
                                        TRANSMIT <Send className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                    {formStatus === 'submitting' && 'ENCRYPTING...'}
                                    {formStatus === 'success' && 'TRANSMISSION SENT'}

                                </span>
                            </button>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}