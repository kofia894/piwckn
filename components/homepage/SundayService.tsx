"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { BsPlayCircleFill } from "react-icons/bs"

import JoinUsImage from '../../assets/homePage/JoinUs.webp'

const SundayService = () => {
  return (
    <div className="bg-white py-16 md:pt-44">
      <div className="section">
        <motion.div
          className="relative rounded-2xl md:rounded-3xl min-h-[350px] md:min-h-[420px] max-w-5xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image - positioned on the right side */}
          <div className="absolute inset-0 translate-x-[400px]">
            <Image
              src={JoinUsImage}
              alt="Join us this Sunday"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Gradient overlay - solid primary on left, fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary via-40% to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-14 lg:p-16 flex flex-col justify-center h-full min-h-[350px] md:min-h-[420px]">
            <div className="max-w-xl">
              <h2 className="font-Inter text-2xl md:text-3xl lg:text-4xl text-white tracking-[-0.02em] leading-tight mb-4">
                Join us this{" "}
                <span className="italic text-white/60">Sunday</span>
              </h2>

              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Experience powerful worship and life-changing messages every Sunday at 8:00 AM. Can't make it in person? Join us live on Facebook.
              </p>

              <a
                href="https://web.facebook.com/PIWCKaneshie/live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors"
              >
                <BsPlayCircleFill className="w-4 h-4" />
                Watch Live
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SundayService
