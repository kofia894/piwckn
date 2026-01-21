"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react";
import mission from '../../assets/AboutUs/mission.jpg'
import vision from '../../assets/AboutUs/vision.jpg'

export const MissionVission = () => {
  return (
    <div className='lg:section'>
      <div className="  lg:section md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center lg:m-24">
        <div className="lg:max-w-[50vw] lg:relative lg:flex flex-col items-center justify-center absolute grid content-center">
          <motion.h1
            className='z-40 mb-4 lg:text-9xl text-5xl font-Inter font-extrabold text-center lg:text-primary text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h1>
          <motion.h2
            className="z-40 mb-4 lg:text-3xl text-xl font-light text-center text-white lg:text-primary italic px-3 lg:w-[80%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            "We exist to establish a responsible and self-sustaining church filled with committed,
            Spirit-filled Christians of sound character, who will impact their communities
            "
          </motion.h2>
        </div>
        <div className=" w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-none relative" >
          <Image
            src={mission}
            alt=""
            layout="fill"
            objectFit="cover"
            className="object-cover lg:rounded-[50px] "
          />
        </div>
      </div>
      <div className="lg:section md:justify-around h-screen w-screen flex flex-col md:flex-row-reverse md:content-center items-center justify-center lg:my-24">
        <div className="lg:max-w-[50vw] lg:relative lg:flex flex-col items-center justify-center absolute grid content-center">
          <motion.h1
            className='z-40 mb-4 lg:text-7xl text-5xl  font-Inter font-extrabold text-center lg:text-primary text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h1>
          <motion.h2
            className="z-40 mb-4 lg:text-3xl text-xl font-light text-center text-white lg:text-primary italic px-3 lg:w-[80%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            "To become a global Pentecostal church that is culturally relevant in vibrant evangelism, church planting and holistic ministry"
          </motion.h2>
        </div>
        <div className=" w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center relative blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-none" >
          <Image
            src={vision}
            alt=""
            layout="fill"
            objectFit="cover"
            className="object-cover lg:rounded-[50px]"
          />
        </div>
      </div>
    </div>
  )
}
