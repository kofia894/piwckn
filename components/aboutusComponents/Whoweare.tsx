"use client"
import React, { useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../src/styles/Home.module.css'
import Image from 'next/image'
import wwa from '../../assets/AboutUs/whoweare.webp'

export const Whoweare = () => {
  return (
    <div className="z-10 bg-white lg:mt-72 lg:pb-72 rounded-b-[85px] md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white " >
      <div className="z-20 lg:w-[50vw] lg:relative  flex flex-col items-center justify-center absolute content-center space-y-10 ">
        <h1 className="font-Barlow text-bold text-6xl lg:text-8xl text-white lg:text-primary " data-aos="fade-up" data-aos-duration="1000" >Who are we ?</h1>
        <p className="italic leading-loose text-lg font-base text-center md:w-[80%] text-white lg:text-primary" data-aos="fade-up" data-aos-duration="1000" >A missionary wing of the Church of Pentecost, PIWC-KN is guided by the tenets outlined by the church. The Church of Pentecost deems our tenets or beliefs as one of the most critical aspects of our worship because it forms the basics of the Christian doctrine</p>
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

