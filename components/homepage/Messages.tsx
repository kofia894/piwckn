'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import MenMinistry from '../../assets/homePage/MenMinistry.webp';
import WomenMinistry from '../../assets/homePage/WomenMinistry.webp';
import YouthMinistry from '../../assets/homePage/YouthMinistry.webp';
import ChildrenMinistry from '../../assets/homePage/ChildrenMinistry.webp';
import EvangelismMinistry from '../../assets/homePage/EvangelismMinistry.webp';

export default function Messages() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const ministries = [
    { title: "Men's Ministry", image: MenMinistry },
    { title: "Women's Ministry", image: WomenMinistry },
    { title: "Youth Ministry", image: YouthMinistry },
    { title: "Children's Ministry", image: ChildrenMinistry },
    { title: "Evangelism Ministry", image: EvangelismMinistry },
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
      // Scroll by the width of one card + gap
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 150;
      const scrollAmount = cardWidth + 16; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="bg-primary py-16 md:py-24">
      <div className="section">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left - Title */}
          <motion.div
            className="lg:w-1/5 mr-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
              Ministries
            </h2>
          </motion.div>

          {/* Right - Slidable Cards */}
          <div className="lg:flex-1 w-full flex flex-col gap-4">
            {/* Slider container */}
            <div className="relative overflow-hidden">
              {/* Cards container */}
              <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {ministries.map((ministry, index) => (
                  <motion.div
                    key={index}
                    className="w-[calc((100%-48px)/5)] min-w-[120px] flex-shrink-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                  >
                    {/* Card with image and text inside */}
                    <div className="relative w-full aspect-[1/2] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                      {/* Image with zoom and blur on hover */}
                      <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]">
                        <Image
                          src={ministry.image}
                          alt={ministry.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 20vw"
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Title text - positioned lower by default, moves up on hover */}
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end h-full">
                        <span className="text-white/70 text-xs md:text-sm font-medium leading-tight transition-all duration-500 ease-out transform translate-y-0 group-hover:-translate-y-2 group-hover:text-white group-hover:font-semibold">
                          {ministry.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full border border-white/30 transition-all ${
                  canScrollLeft
                    ? 'text-white hover:bg-white/10'
                    : 'text-white/30 cursor-not-allowed'
                }`}
              >
                <BsChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-full border border-white/30 transition-all ${
                  canScrollRight
                    ? 'text-white hover:bg-white/10'
                    : 'text-white/30 cursor-not-allowed'
                }`}
              >
                <BsChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
