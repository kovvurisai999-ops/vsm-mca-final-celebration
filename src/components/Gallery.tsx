"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gallery } from "@/lib/data";
import Image from "next/image";
import lightGallery from "lightgallery";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you need more plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        backgroundColor: "rgba(3, 7, 18, 0.98)",
      });
    }
  }, []);

  return (
    <section id="gallery" className="py-24 px-4 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            The <span className="text-gold">Archives</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">Every pixel tells a story we'll never forget.</p>
        </div>

        <div 
          ref={galleryRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-src={image.src}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/5"
            >
              <Image
                src={image.src}
                alt={image.caption}
                width={800}
                height={1200}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-gold font-bold text-lg mb-1">{image.caption}</p>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <span>View Fullsize</span>
                  <div className="w-4 h-[1px] bg-white/40" />
                </div>
              </div>

              {/* Heart floating animation on hover */}
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 duration-300">
                <span className="text-2xl animate-bounce inline-block">💙</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
