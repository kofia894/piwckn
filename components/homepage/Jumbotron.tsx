"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { BsArrowDown } from "react-icons/bs";

import Jumbotron1 from '../../assets/homePage/Jumbotron1.webp';
import Jumbotron2 from '../../assets/homePage/Jumbotron2.webp';
import Jumbotron3 from '../../assets/homePage/Jumbotron3.webp';
import Jumbotron4 from '../../assets/homePage/Jumbotron4.webp';

const images = [Jumbotron1, Jumbotron2, Jumbotron3, Jumbotron4];

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[700px] lg:min-h-[750px] 2xl:min-h-[850px] h-screen flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
          >
            <Image
              src={images[currentIndex]}
              alt="PIWC Kaneshie"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="section relative z-10 h-full flex items-end pb-24 lg:pb-32">
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left - Main Text */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 leading-[1] overflow-hidden tracking-[-0.04em]">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                Welcome to
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                PIWC Kaneshie
              </motion.span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-[26px] text-white/90 mb-6 max-w-lg overflow-hidden leading-[1.25]">
              <motion.p
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                A ministry of the Church of Pentecost
              </motion.p>
            </div>
          </div>

          {/* Right - News/Blog Boxes */}
          <div className="flex gap-2 md:gap-3 lg:gap-4 self-stretch items-end overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { title: "Youth Conference 2025", category: "Event" },
              { title: "Sunday Service Highlights", category: "News" },
              { title: "Community Outreach", category: "Blog" },
              { title: "Prayer Week Begins", category: "Announcement" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.15,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                {/* Bottom gradient blur for title */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full p-3 md:p-4 flex flex-col justify-between">
                  <span className="text-[8px] md:text-[10px] text-secondary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="text-white text-xs md:text-sm font-medium leading-tight group-hover:text-secondary transition-colors">
                    {item.title}
                  </p>
                </div>

                {/* Border overlay */}
                <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <BsArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
