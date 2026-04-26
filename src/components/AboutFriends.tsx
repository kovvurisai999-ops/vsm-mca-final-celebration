"use client";

import { motion } from "framer-motion";
import { friends } from "@/lib/data";
import { Star, Heart, Coffee, Code2 } from "lucide-react";
import Image from "next/image";

const icons = [Code2, Star, Coffee];

export default function AboutFriends() {
  return (
    <section id="about" className="py-24 px-4 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            The <span className="text-gold">Core Group</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-1 rounded-3xl group relative overflow-hidden"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={friend.image}
                  alt={friend.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ transform: friend.rotate ? `rotate(${friend.rotate}deg)` : 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 glass-gold px-3 py-1 rounded-full text-[10px] text-gold font-bold uppercase tracking-widest flex items-center gap-1">
                  <Star size={10} fill="currentColor" /> {friend.nickname}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1 flex items-center justify-between">
                  {friend.name}
                </h3>
                <p className="text-gold text-sm mb-4 font-medium tracking-wide uppercase">{friend.role}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold/10 text-gold shrink-0">
                      <Coffee size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Funny Habit</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{friend.habit}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Heart size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Core Memory</p>
                      <p className="text-slate-300 text-sm leading-relaxed">"{friend.memory}"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-3xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
