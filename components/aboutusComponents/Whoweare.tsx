"use client"
import React from "react"
import Image from 'next/image'
import { motion } from "motion/react";

import wwa1 from '../../assets/AboutUs/whoweare1.webp'
import wwa2 from '../../assets/AboutUs/whoweare2.webp'
import wwa3 from '../../assets/AboutUs/whoweare3.webp'

export const Whoweare = () => {
  return (
    <div className="bg-white min-h-[70vh] md:min-h-0 py-24 md:py-24 lg:py-44 px-4 md:px-10 flex items-center">
      <div className="section">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="lg:w-2/5 flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-[-0.02em] leading-[1.1] mb-4 md:mb-6">
              Who We Are
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              A missionary wing of the Church of Pentecost, PIWC-KN is guided by the tenets outlined by the church. We are a vibrant community united in faith and love.
            </p>
          </motion.div>

          {/* Right - Staggered Image Cards */}
          <div className="lg:w-3/5 flex gap-2 md:gap-6 items-start w-full">
            {/* First Card - Taller */}
            <motion.div
              className="w-1/3 mt-0"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="relative aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={wwa1}
                  alt="Community worship"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
                {/* Label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="text-white text-xs md:text-sm font-medium">Community</span>
                </div>
              </div>
              {/* Caption below - hidden on mobile */}
              <div className="mt-3 md:mt-4 hidden md:block">
                <h3 className="text-base md:text-lg font-semibold text-primary">PIWC Kaneshie</h3>
                <p className="text-xs md:text-sm text-gray-500">A family united in faith</p>
              </div>
            </motion.div>

            {/* Second Card - Shorter, offset down */}
            <motion.div
              className="w-1/3 mt-6 md:mt-16"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <div className="relative aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={wwa2}
                  alt="Fellowship"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
                {/* Label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="text-white text-xs md:text-sm font-medium">Fellowship</span>
                </div>
              </div>
            </motion.div>

            {/* Third Card - Offset up */}
            <motion.div
              className="w-1/3 mt-2 md:mt-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={wwa3}
                  alt="Worship"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
                {/* Label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <span className="text-white text-xs md:text-sm font-medium">Worship</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
