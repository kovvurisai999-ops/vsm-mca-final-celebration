"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Send, Users, Heart, Star, Sparkles } from "lucide-react";

export default function SignatureInvitation() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [messages, setMessages] = useState<{ name: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const targetDate = new Date("April 29, 2026 11:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && newName.trim()) {
      setMessages([...messages, { name: newName, text: newMessage }]);
      setNewMessage("");
      setNewName("");
    }
  };

  return (
    <section id="signature-day" className="py-24 px-4 bg-[#030712] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles size={14} /> Signature Day 2026
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            One Last Page, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">
              Infinite Memories
            </span>
          </motion.h2>
          <p className="text-slate-400 text-lg md:text-xl font-light italic max-w-2xl mx-auto mb-10">
            V.S.M College, autonomous Ramachandrapuram | PG Department of MCA
          </p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-3xl mx-auto"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="glass p-6 rounded-3xl border border-white/5 text-center group hover:border-gold/30 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono group-hover:text-gold transition-colors">{value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Respectful Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-16 rounded-[40px] border border-gold/20 mb-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <Heart className="text-gold mx-auto mb-8 animate-pulse" size={48} />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Cordially Invitation</h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 font-serif">
            "With great respect and warm regards, we cordially invite our respected Principal Sir, HOD Madam, beloved faculty members, dear juniors, and our MCA family to join us for our memorable Signature Day Celebration."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gold/10 text-gold"><Calendar size={20} /></div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Date</p>
                <p className="text-white font-medium">29th April 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gold/10 text-gold"><MapPin size={20} /></div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Venue</p>
                <p className="text-white font-medium">UG Seminar Hall, Degree Block, VSM College</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gold/10 text-gold"><Clock size={20} /></div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Time</p>
                <p className="text-white font-medium">11:30 AM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Invitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {/* Juniors Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-3xl border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400"><Users size={24} /></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">For Our Beloved Juniors</h4>
            </div>
            <p className="text-slate-400 italic mb-6 leading-relaxed text-sm md:text-base">
              "Dear Juniors, You all are warmly invited to join our MCA Signature Day celebration. Let’s celebrate together with fun, memories, photos, and blessings for the future."
            </p>
            <div className="w-12 h-1 bg-blue-500/50 rounded-full" />
          </motion.div>

          {/* Emotional Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-3xl border border-gold/20 group hover:border-gold/40 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gold/10 text-gold"><Star size={24} /></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">Sign of Friendship</h4>
            </div>
            <p className="text-slate-400 italic mb-6 leading-relaxed text-sm md:text-base">
              "A day to sign shirts, A day to sign hearts, A day to cherish memories forever. Your presence will make this occasion even more special."
            </p>
            <div className="w-12 h-1 bg-gold/50 rounded-full" />
          </motion.div>
        </div>

        {/* Message Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold text-white mb-4">💌 Message <span className="text-gold">Wall</span></h3>
            <p className="text-slate-400 mb-8">Leave a short note for the batch of 2026 before we sign off.</p>
            
            <form onSubmit={handleAddMessage} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
              <textarea
                placeholder="Write a short message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors h-24 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/80 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Post Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] overflow-y-auto pr-4 scrollbar-hide"
          >
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass p-6 rounded-2xl border border-white/5 h-fit"
                >
                  <p className="text-gold font-bold text-xs mb-2">@ {m.name}</p>
                  <p className="text-slate-300 text-sm italic">"{m.text}"</p>
                </motion.div>
              )).reverse()}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Final Buttons */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold text-black font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Join Celebration
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border border-white/20 text-white font-bold rounded-full"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Memory Gallery
          </motion.button>
        </div>
      </div>
    </section>
  );
}
