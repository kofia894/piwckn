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
  return (
    <section className="relative h-[90vh] flex items-end overflow-hidden">
      {/* Background image with blur and brightness animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ filter: "blur(10px) brightness(0.4)" }}
        animate={{ filter: "blur(0px) brightness(1)" }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay - visible from start */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-[1]" />

      {/* Content - bottom left */}
      <div className="section relative z-10 pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-[-0.04em]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              {title}
            </motion.h1>
          </div>

          {subtitle && (
            <div className="overflow-hidden mt-4">
              <motion.p
                className="text-xl md:text-2xl lg:text-[26px] text-white/90 max-w-lg leading-[1.25]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {subtitle}
              </motion.p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
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
