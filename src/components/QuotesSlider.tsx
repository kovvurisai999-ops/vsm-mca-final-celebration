"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { quotes } from "@/lib/data";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function QuotesSlider() {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 glass rounded-full text-gold z-10">
        <Quote size={24} fill="currentColor" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index}>
              <div className="text-center pb-12">
                <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-200 leading-relaxed mb-8">
                  "{quote}"
                </blockquote>
                <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-bold text-white uppercase whitespace-nowrap">Brotherhood</span>
      </div>
    </section>
  );
}
