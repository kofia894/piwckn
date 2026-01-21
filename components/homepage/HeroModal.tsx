"use client"
import React from "react"
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

import gridImage from '../../assets/homePage/section2.webp'
import gridImageMobile from '../../assets/homePage/section2-mobile.webp'

const HeroModal = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-100 to-white pt-52  md:pt-64 md:pb-20 lg:pt-80  min-h-screen overflow-hidden">
      {/* Background Photo Grid Image - Mobile */}
      <motion.div
        className="absolute inset-0 -top-8 pointer-events-none md:hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        <Image
          src={gridImageMobile}
          alt="Community photos"
          fill
          className="object-contain object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Background Photo Grid Image - Desktop */}
      <motion.div
        className="absolute inset-0 md:-top-36 lg:-top-48 pointer-events-none hidden md:block"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        <Image
          src={gridImage}
          alt="Community photos"
          fill
          className="object-contain object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 -mt-28 md:mt-0">
        {/* Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-200">
            Our Community
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-Inter text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-900 mb-2 tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A family united
        </motion.h1>

        <motion.h2
          className="font-Inter text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-400 mb-3 md:mb-10 tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          in faith and love
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-center text-sm md:text-base max-w-xs md:max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join our vibrant community where lives are transformed through the power of the Gospel.
        </motion.p>

        {/* CTA Button - Desktop only */}
        <motion.div
          className="hidden md:block mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* <Link
            href="/aboutUs"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Learn More About Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroModal;
