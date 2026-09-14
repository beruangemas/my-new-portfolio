import { SkipBack, Play, Pause, SkipForward, Volume2, Music } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import bgMusic1 from '../assets/music/Sport Cyberpunk Racing by Infraction [No Copyright Music].mp3';
import bgMusic2 from '../assets/music/[No Copyright Music] _ Minimal by MGG.mp3';

interface FooterProps {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
}

const PLAYLIST = [
    {title: "Cyber-Symphony No1", src: bgMusic1 },
    {title: "Minimal", src: bgMusic2 }
];

export default function Footer({isPlaying, setIsPlaying}: FooterProps){

    // STATE & REF
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration ] = useState(0);
    const [volume, setVolume] = useState(0.5); //default volume at 50%
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentTrack = PLAYLIST[trackIndex];

    //audio Controller
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying){
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }

            setIsPlaying(!isPlaying);
        };
    };

    const skipForward = () => {
        setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    };

    const skipBack = () => {
        setTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    };

    //auto-play next track
    useEffect(() => {
        if (isPlaying && audioRef.current){
            audioRef.current.play();
        }
    }, [trackIndex, isPlaying]);

    //set initial volume
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, []);

     useEffect (() => {
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    //timers & seeking
    const formatTime = (timeInSeconds: number) => {
        if(isNaN(timeInSeconds)) return "0:00";
        const minutes = Math.floor(timeInSeconds/60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = Number(e.target.value);
        setCurrentTime(time);
        if(audioRef.current){
            audioRef.current.currentTime = time;
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVol = Number(e.target.value);
        setVolume(newVol);
        if(audioRef.current){
            audioRef.current.volume = newVol;
        }
    };

    return(
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-2xl border-t border-primary/20">
            
            {/* AUDIO ENGINE */}
            <audio 
                ref={audioRef}
                src={currentTrack.src}
                onTimeUpdate={() => {
                    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
                }}
                onLoadedMetadata={() => {
                    if(audioRef.current) setDuration(audioRef.current.duration);
                }}
                onEnded={skipForward} //auto skip when song finishes
                preload="none"
            />

            <div className="h-20 w-full px-6 md:px-20 flex items-center justify-between mx-auto max-w-[1440px] gap-8">

                {/*Track Info */}
                <div className="flex items-center gap-4 min-w-[240px]">
                    <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center relative overflow-hidden group">
                        {/* Animate pulse when music is playing */}
                        <div className={`absolute inset-0 bg-surface-tint/20 ${isPlaying ? 'animate-pulse' : ''}`}></div>
                        <Music className="text-surface-tint w-6 h-6 relative z-10" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-label text-[10px] text-secondary-fixed tracking-widest uppercase">Now Playing...</span>
                        <span className="font-body text-on-surface text-sm truncate">{currentTrack.title}</span>
                    </div>
                </div>

                {/* Player Controls */}
                <div className="flex-1 flex flex-col items-center gap-2 max-w-xl">
                    <div className="flex items-center gap-6">
                        <button onClick={skipBack} className="text-on-surface-variant hover:text-surface-tint transition-colors">
                            <SkipBack className="w-5 h-5 fill-current" />
                        </button>

                        <button onClick={togglePlay}
                                className="text-on-primary bg-surface-tint rounded-full p-2 hover:scale-110 transition-transform">
                            {isPlaying ? (
                                <Pause className="w-5 h-5 fill-current" />
                            ) : (
                                <Play className="w-5 h-5 fill-current" />
                            )}
                        </button>
                        <button onClick={skipForward} className="text-on-surface-variant hover:text-surface-tint transition-colors">
                            <SkipForward className="w-5 h-5 fill-current" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full flex items-center gap-3">
                        <span className="font-label text-[10px] text-on-surface-variant">{formatTime(currentTime)}</span>
                        
                        {/* seek slider */}
                        <input 
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-surface-tint hover:h-2 transition-all"
                        />

                        <span className="font-label text-[10px] text-on-surface-variant">{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-3 min-w-[140px] justify-end">
                    <Volume2 className="text-on-surface-variant w-5 h-5" />
                    <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-secondary-fixed hover:h-2 transition-all"
                    />
                </div>
            </div>
        </footer>
    );
}