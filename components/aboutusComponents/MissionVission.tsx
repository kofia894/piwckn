"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react";

import mission from '../../assets/AboutUs/Mission.webp'
import vision from '../../assets/AboutUs/Vision.webp'

export const MissionVission = () => {
  return (
    <div className="bg-white py-28 md:py-40 lg:py-52 my-8 md:my-12 lg:my-16 overflow-hidden">
      <div className="section px-4 md:px-10">
        <div className="flex items-center justify-between gap-6 md:gap-12 lg:gap-16">
          {/* Left Image - pushed towards top */}
          <motion.div
            className="hidden md:block w-1/4 flex-shrink-0 self-start -mt-8 lg:-mt-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={mission}
                alt="Our Mission"
                fill
                loading="lazy"
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="flex-1 text-center py-8 md:py-16 lg:py-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Decorative diamond */}
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="w-3 h-3 bg-primary rotate-45" />
            </div>

            {/* Mission Section */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold mb-4 block">
                Our Mission
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed">
                We exist to <span className="italic">establish</span> a responsible and self-sustaining church filled with committed, Spirit-filled Christians of sound character, who will <span className="italic">impact</span> their communities.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-12 md:mb-16 lg:mb-20">
              <div className="w-16 md:w-24 h-px bg-gray-200" />
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
              <div className="w-16 md:w-24 h-px bg-gray-200" />
            </div>

            {/* Vision Section */}
            <div>
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold mb-4 block">
                Our Vision
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed">
                To become a <span className="italic">global</span> Pentecostal church that is culturally relevant in vibrant evangelism, church planting and <span className="italic">holistic</span> ministry.
              </p>
            </div>
          </motion.div>

          {/* Right Image - pushed towards bottom */}
          <motion.div
            className="hidden md:block w-1/4 flex-shrink-0 self-end -mb-8 lg:-mb-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={vision}
                alt="Our Vision"
                fill
                loading="lazy"
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
