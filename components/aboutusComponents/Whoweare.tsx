"use client"
import React from "react"
import Image from 'next/image'
import { motion } from "motion/react";
import wwa from '../../assets/AboutUs/whoweare.webp'

export const Whoweare = () => {
  return (
    <div className="z-10 bg-white lg:mt-72 lg:pb-72 rounded-b-[85px] md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white " >
      <div className="z-20 lg:w-[50vw] lg:relative  flex flex-col items-center justify-center absolute content-center space-y-10 ">
        <motion.h1
          className="font-Inter text-bold text-6xl lg:text-8xl text-white lg:text-primary "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Who are we ?
        </motion.h1>
        <motion.p
          className="italic leading-loose text-lg font-base text-center md:w-[80%] text-white lg:text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A missionary wing of the Church of Pentecost, PIWC-KN is guided by the tenets outlined by the church. The Church of Pentecost deems our tenets or beliefs as one of the most critical aspects of our worship because it forms the basics of the Christian doctrine
        </motion.p>
      </div>
      <div className="z-10 w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center lg:p-2 blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-[0.5px]" >
          <Image
              src={wwa}
              alt=""
              className="object-cover w-full h-full rounded-b-[50px] lg:rounded-[50px] z-10"
          />
      </div>
    </div>
  )
}
