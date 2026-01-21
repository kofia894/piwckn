"use client"
import React from "react"
import Image from 'next/image'
import { motion } from "motion/react";

import Pastor from '../../assets/AboutUs/ApsBuertey.webp'
import PsAvornyo from '../../assets/AboutUs/PsAvornyo.webp'
import PE from "../../assets/AboutUs/PE.webp";
import Ex1 from "../../assets/AboutUs/EldYirebi.webp";
import Ex2 from "../../assets/AboutUs/EldMantey.webp";
import Ex3 from "../../assets/AboutUs/EldAmfo.webp";
import Ex4 from "../../assets/AboutUs/eldnoble.webp";
import Ex5 from "../../assets/AboutUs/MrsAsare.webp";
import Ex6 from "../../assets/AboutUs/dcnssambi.webp";
import Ex0 from "../../assets/AboutUs/placeholderimg.png";

const executives = [
  {
    id: 1,
    name: "Pastor Samuel Avornyo",
    role: "Associate Minister",
    img: PsAvornyo,
  },
  {
    id: 2,
    name: "Eld Kweku Asare",
    role: "Presiding Elder",
    img: PE,
  },
  {
    id: 3,
    name: "Eld Daniel Mantey",
    role: "Secretary",
    img: Ex2,
  },
  {
    id: 4,
    name: "Eld Noble Aduamah",
    role: "Executive Member",
    img: Ex4,
  },
  {
    id: 5,
    name: "Eld Paul Amfo",
    role: "Executive Member",
    img: Ex3,
  },
  {
    id: 6,
    name: "Eld Geoffrey Arthur",
    role: "Executive Member",
    img: Ex0,
  },
  {
    id: 7,
    name: "Eld Kofi Obeng Yirebi",
    role: "Executive Member",
    img: Ex1,
  },
  {
    id: 8,
    name: "Dcns Evelyn Asare",
    role: "Women's Ministry Leader",
    img: Ex5,
  },
  {
    id: 9,
    name: "Dcns Janet Sambi",
    role: "Women's Ministry",
    img: Ex6,
  },
];

export default function Leadership() {
  return (
    <div className="bg-gray-100 py-10 md:py-12">
      <div className="section">
        {/* Section Header */}
        <motion.div
          className="mb-5 md:mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-[-0.02em]">
            Our Leadership
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          {/* Left Column - Resident Minister */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Mobile: Horizontal layout with image left, text right */}
            <div className="flex md:hidden bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden h-32">
              {/* Image on left */}
              <div className="relative w-1/3 h-full">
                <Image
                  src={Pastor}
                  alt="Aps. Prof. J.I.T Buertey"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Text on right */}
              <div className="flex-1 flex flex-col justify-center p-4">
                <span className="text-secondary text-[10px] font-medium uppercase tracking-wider mb-1">
                  Resident Minister
                </span>
                <h3 className="text-base font-bold text-white leading-tight">
                  Aps. Prof. J.I.T Buertey
                </h3>
              </div>
            </div>

            {/* Desktop: Original vertical layout */}
            <div className="hidden md:block relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden h-full min-h-[240px]">
              {/* Pastor Image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src={Pastor}
                  alt="Aps. Prof. J.I.T Buertey"
                  className="object-contain h-[90%] w-auto"
                />
              </div>

              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-secondary text-[10px] font-medium uppercase tracking-wider mb-0.5 block">
                  Resident Minister
                </span>
                <h3 className="text-xl font-bold text-white">
                  Aps. Prof. J.I.T Buertey
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Executives Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
              {executives.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden group cursor-pointer will-change-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Text Content - animates up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider mb-0.5 block group-hover:text-secondary transition-colors duration-300">
                      {item.role}
                    </span>
                    <h4 className="text-white text-xs md:text-sm font-semibold leading-tight">
                      {item.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
