"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import { collegeInfo } from "@/lib/data";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Slow Zoom and GSAP Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 scale-125"
        style={{
          backgroundImage: "url('/images/hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-transparent via-luxury-black/50 to-luxury-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mb-6 flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Image 
                src="/images/logo.jpg" 
                alt="Logo" 
                fill 
                className="object-contain bg-white"
              />
            </div>
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 block animate-pulse">
              {collegeInfo.name}
            </span>
            <span className="text-white/60 font-medium tracking-[0.1em] text-xs uppercase block">
              MCA Batch {collegeInfo.batch}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight text-glow-gold">
            Friendship <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">
              Journey
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light italic">
            "Classmates by chance, brothers by choice. Memories that will last a lifetime."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-black font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enter Memories
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-white font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] border-2 border-white/20 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              onClick={() => document.getElementById('signature-day')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Signature Invitation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full backdrop-blur-sm transition-all hover:bg-white/10"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Particle Overlay (CSS Sparkles) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gold rounded-full blur-[1px]"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s infinite linear`
            }}
          />
        ))}
      </div>
    </section>
  );
}
