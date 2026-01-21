"use client"
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Img1 from "../../assets/homePage/event.jpg";
import Img2 from "../../assets/homePage/event1.jpg";

export default function UpcomingEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const events = [
    {
      title: "Youth Conference 2025",
      date: "March 15-17",
      location: "Main Auditorium",
      image: Img1,
      category: "Conference"
    },
    {
      title: "Easter Celebration",
      date: "April 20",
      location: "Church Grounds",
      image: Img2,
      category: "Service"
    },
    {
      title: "Women's Fellowship",
      date: "April 5",
      location: "Fellowship Hall",
      image: Img1,
      category: "Fellowship"
    },
    {
      title: "Prayer & Worship Night",
      date: "Every Friday",
      location: "Main Auditorium",
      image: Img2,
      category: "Worship"
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="section">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.span
              className="text-xs font-medium text-primary/60 uppercase tracking-widest mb-3 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What's Happening
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-[-0.03em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Upcoming Events
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <BsChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <BsChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="relative -mx-4 md:-mx-8 lg:-mx-12">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Date on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/80 text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-primary/70 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      {event.location}
                    </p>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View <BsArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Link */}
      </div>
    </div>
  );
}
