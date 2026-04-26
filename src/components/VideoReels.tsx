"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Play, Film } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { videoReels } from "@/lib/data";

export default function VideoReels() {
  return (
    <section id="videos" className="py-24 bg-[#080c18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Memory <span className="text-gold">Reels</span></h2>
            <p className="text-slate-400">Cinematic clips from our best days</p>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="p-3 glass rounded-full text-gold">
              <Film size={20} />
            </div>
          </div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full py-10"
        >
          {videoReels.map((video: any, index: number) => (
            <SwiperSlide key={index} className="max-w-[400px]">
              <div className="glass rounded-2xl p-2 relative group overflow-hidden">
                <div className="aspect-video bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center">
                  {/* Thumbnail Image */}
                  {video.thumbnail && (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  
                  {/* Play Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const url = video.videoUrl || video.url;
                      if (url) window.open(url, '_blank');
                    }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.5)] relative z-10 cursor-pointer"
                  >
                    <Play fill="currentColor" size={24} />
                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="glass px-3 py-1 rounded-full text-[10px] text-white/80 font-bold uppercase">{video.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Watch Full Clip</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
