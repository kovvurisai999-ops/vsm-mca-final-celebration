"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=sad-piano-music-soft-relaxing-9218.mp3";
    
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Handle loading state
    audioRef.current.onwaiting = () => setIsLoading(true);
    audioRef.current.oncanplay = () => setIsLoading(false);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(e => {
            console.error("Audio play failed:", e);
            setIsLoading(false);
            alert("Please try clicking the music button again to start the experience!");
          });
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`w-14 h-14 rounded-full glass border transition-all duration-500 flex items-center justify-center shadow-lg ${
          isPlaying ? "border-gold text-gold" : "border-white/20 text-white/50"
        } ${isLoading ? "animate-pulse" : ""}`}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <Music size={20} className="opacity-50" />
            </motion.div>
          ) : isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <Volume2 size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <VolumeX size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing rings when playing */}
        {isPlaying && (
          <>
            <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20" />
            <div className="absolute -inset-2 rounded-full border border-gold animate-pulse opacity-10" />
          </>
        )}
      </motion.button>
      
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 glass px-4 py-2 rounded-full whitespace-nowrap text-[10px] text-gold uppercase tracking-widest font-bold border border-gold/30"
          >
            Emotional Journey - Playing
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
