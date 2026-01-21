"use client"
import React from 'react'
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { BsArrowDown } from "react-icons/bs";

interface PageJumbotronProps {
  title: string;
  Image: StaticImageData;
  subtitle?: string;
}

export default function PageJumbotron({ title, Image: bgImage, subtitle }: PageJumbotronProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[700px] lg:min-h-[750px] 2xl:min-h-[850px] h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay - matching homepage */}
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
                {title}
              </motion.span>
            </h1>

            {subtitle && (
              <div className="text-xl md:text-2xl lg:text-[26px] text-white/90 mb-6 max-w-lg overflow-hidden leading-[1.25]">
                <motion.p
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  {subtitle}
                </motion.p>
              </div>
            )}
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
