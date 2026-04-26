"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 bg-[#050914] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            The <span className="text-gold">Journey</span>
          </motion.h2>
          <p className="text-slate-400">From the first day to the final bell</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`glass p-8 rounded-2xl relative ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-gold font-bold text-lg mb-2 block tracking-widest">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light">{item.description}</p>
                    
                    {/* Glow Dot for mobile */}
                    <div className="absolute left-[-42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_#D4AF37] md:hidden" />
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border border-gold/50 text-xl items-center justify-center z-20 bg-luxury-black">
                  {item.icon}
                </div>

                {/* Empty spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
