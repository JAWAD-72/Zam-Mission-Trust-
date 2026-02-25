'use client';

import { useState, useEffect, useRef } from 'react';

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Try autoplay silently (works on desktop)
        audio.volume = 0.5;
        audio.play()
            .then(() => {
                setIsPlaying(true);
                hasStarted.current = true;
            })
            .catch(() => {
                // Autoplay blocked (mobile) — wait for user tap on button
                setIsPlaying(false);
            });
    }, []);

    const handleButtonClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!hasStarted.current) {
            // First tap on mobile — start playing
            audio.play()
                .then(() => {
                    hasStarted.current = true;
                    setIsPlaying(true);
                    setIsMuted(false);
                })
                .catch(err => console.log('Play failed:', err));
        } else if (audio.paused) {
            audio.play();
            setIsPlaying(true);
            setIsMuted(false);
        } else {
            // Already playing — toggle mute
            const newMuted = !isMuted;
            audio.muted = newMuted;
            setIsMuted(newMuted);
        }
    };

    // Determine what icon to show
    const showMusicOff = !isPlaying || isMuted;

    return (
        <>
            <audio ref={audioRef} loop preload="auto">
                <source src="/audio/background-music.mp3.mp3" type="audio/mpeg" />
            </audio>

            <div className="music-control">
                {!isPlaying && (
                    <span className="tap-hint">Tap to play ♪</span>
                )}
                <button
                    onClick={handleButtonClick}
                    className="music-btn"
                    title={!isPlaying ? 'Tap to play music' : isMuted ? 'Unmute Music' : 'Mute Music'}
                >
                    {showMusicOff ? (
                        // Muted / not playing icon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                    ) : (
                        // Playing icon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                    )}
                </button>
            </div>

            <style jsx>{`
                .music-control {
                    position: fixed;
                    bottom: 1.5rem;
                    right: 1.5rem;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                }
                .tap-hint {
                    background: rgba(0,0,0,0.7);
                    color: #d4af37;
                    font-size: 0.72rem;
                    font-family: 'Inter', sans-serif;
                    padding: 0.3rem 0.7rem;
                    border-radius: 20px;
                    border: 1px solid rgba(212,175,55,0.3);
                    white-space: nowrap;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .music-btn {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary) 0%, #B89850 100%);
                    border: 2px solid rgba(255,255,255,0.2);
                    color: #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(201,169,97,0.4);
                    -webkit-tap-highlight-color: transparent;
                }
                .music-btn:hover { transform: scale(1.1); }
                .music-btn:active { transform: scale(0.92); }
            `}</style>
        </>
    );
}
