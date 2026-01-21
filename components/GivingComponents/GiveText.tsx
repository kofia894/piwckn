"use client"
import React from 'react'
import { motion } from "motion/react";

export default function GiveText() {
  return (
    <div className="rounded-b-[45px] md:rounded-b-[85px] bg-primary pt-40 w-screen min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-Inter text-white text-center lg:text-7xl md:text-5xl text-4xl w-full ">Thank you for Investing </h1>
      <h1 className="font-Inter text-white text-center lg:text-7xl md:text-5xl text-4xl w-full mb-20" >into the Kingdom of God</h1>
      <motion.h1
        className="text-center text-white font-base leading-loose md:text-2xl text-xl italic lg:mx-60 mx-10 md:leading-loose"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        "Faithfulness in giving offerings and paying tithes to enhance the ministry of the Church is emphasised. The Church and members depend solely on God as the source of financial supply"
      </motion.h1>
    </div>
  )
}
