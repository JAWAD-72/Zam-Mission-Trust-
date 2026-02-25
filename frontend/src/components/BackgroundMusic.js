'use client';

import { useState, useEffect, useRef } from 'react';

export default function BackgroundMusic() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Attempt 1: Try to play immediately
        const attemptPlay = () => {
            audio.play()
                .then(() => {
                    console.log('Music started playing automatically');
                })
                .catch((error) => {
                    console.log('Autoplay blocked, will try on user interaction:', error);

                    // Attempt 2: Play on any user interaction
                    const playOnInteraction = () => {
                        audio.play()
                            .then(() => {
                                console.log('Music started after user interaction');
                            })
                            .catch(err => console.log('Failed to play:', err));

                        // Remove listeners after first successful play
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                        document.removeEventListener('keydown', playOnInteraction);
                    };

                    // Listen for multiple types of user interactions
                    document.addEventListener('click', playOnInteraction);
                    document.addEventListener('touchstart', playOnInteraction);
                    document.addEventListener('keydown', playOnInteraction);
                });
        };

        // Try to play after a short delay
        const timer = setTimeout(attemptPlay, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            {/* Audio element */}
            <audio
                ref={audioRef}
                loop
                muted={isMuted}
                preload="auto"
            >
                <source src="/audio/background-music.mp3.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Music Control Button */}
            <div className="music-control">
                <button onClick={toggleMute} className="music-btn" title={isMuted ? 'Unmute Music' : 'Mute Music'}>
                    {isMuted ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                    )}
                </button>
            </div>

            <style jsx>{`
                .music-control {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 1000;
                }
                .music-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary) 0%, #B89850 100%);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    color: #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(201, 169, 97, 0.3);
                }
                .music-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(201, 169, 97, 0.5);
                }
                .music-btn:active {
                    transform: scale(0.95);
                }
                .music-btn svg {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </>
    );
}
