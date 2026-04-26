"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import { endingMessage } from "@/lib/data";

export default function Ending() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#ffffff", "#00f3ff"],
    });
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl"
      >
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          <Image
            src="/images/vsm_clg.jpg"
            alt="VSM College"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          No matter where life takes us...
        </h2>
        <p className="text-gold text-xl md:text-3xl font-serif italic mb-10 px-4">
          "{endingMessage}"
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerConfetti}
          className="group flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
        >
          <div className="w-20 h-20 rounded-full glass border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Heart size={32} fill="currentColor" strokeWidth={0} className="animate-pulse" />
          </div>
          <span className="text-slate-500 text-xs uppercase tracking-[0.4em]">Forever in our hearts</span>
        </motion.button>
      </motion.div>

      {/* Footer minimal info */}
      <div className="mt-24 text-slate-600 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center leading-loose">
        © 2026 Sai Venkata Krishna Reddy | MCA 2k24-2k26 | VSM College Ramachandrapuram
        <div className="mt-2 opacity-50">Handcrafted with Heart for our MCA Squad</div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-blue/10 blur-[100px] rounded-full" />
    </section>
  );
}
