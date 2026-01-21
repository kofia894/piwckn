"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { BsPlayCircleFill } from "react-icons/bs"

import JoinUsImage from '../../assets/homePage/JoinUs.webp'

const SundayService = () => {
  return (
    <div className="bg-white py-10 mt-6 md:mt-0 md:py-16 md:pt-44">
      <div className="section px-4 md:px-0">
        <motion.div
          className="relative rounded-xl md:rounded-3xl min-h-[180px] md:min-h-[420px] max-w-5xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image - full coverage on mobile, offset on desktop */}
          <div className="absolute inset-0 md:translate-x-[400px]">
            <Image
              src={JoinUsImage}
              alt="Join us this Sunday"
              fill
              className="object-cover object-center md:object-left"
              sizes="100vw"
            />
          </div>

          {/* Gradient overlay - desktop */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-primary via-primary via-40% to-transparent" />

          {/* Gradient overlay - mobile (stronger at bottom) */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-primary via-primary/70 via-35% to-transparent" />

          {/* Content - Mobile: flex row with title left, button right */}
          <div className="relative z-10 p-4 pb-6 md:p-14 lg:p-16 flex flex-col justify-end md:justify-center h-full min-h-[180px] md:min-h-[420px]">
            {/* Mobile layout - horizontal, vertically centered */}
            <div className="flex md:hidden items-center justify-between">
              <h2 className="font-Inter text-lg text-white tracking-[-0.02em] leading-tight">
                Join us this{" "}
                <span className="italic text-white/60">Sunday</span>
              </h2>
              <a
                href="https://web.facebook.com/PIWCKaneshie/live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/30 text-white rounded-full text-xs font-medium hover:bg-white hover:text-slate-900 transition-colors"
              >
                <BsPlayCircleFill className="w-3 h-3" />
                Watch Live
              </a>
            </div>

            {/* Desktop layout - vertical */}
            <div className="hidden md:block max-w-xl">
              <h2 className="font-Inter text-3xl lg:text-4xl text-white tracking-[-0.02em] leading-tight mb-4">
                Join us this{" "}
                <span className="italic text-white/60">Sunday</span>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
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
