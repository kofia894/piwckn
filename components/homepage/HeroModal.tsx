"use client"
import React, { useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import welcome2 from '../../assets/homePage/welcome2.webp'


const HeroModal = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="z-10 bg-white mt-10 md:mt-44 lg:mt-72 lg:pb-72 rounded-b-[85px] md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white " >
      <div className="z-20 lg:min-w-[50vw] lg:relative  flex flex-col items-center justify-center  absolute  md:content-center space-y-10 ">
        <h1 className="font-Barlow text-bold text-6xl lg:text-8xl text-white lg:text-black " data-aos="fade-up" data-aos-duration="1000" ></h1>
        <h1 className="font-Barlow text-bold text-6xl lg:text-8xl text-white lg:text-primary" data-aos="fade-up" data-aos-duration="1000" >PIWC Kaneshie</h1>
        <p className="italic leading-loose text-lg font-base text-center w-1/2 md:w-full  text-white lg:text-primary" data-aos="fade-up" data-aos-duration="1000" >A missionary wing of the Church Of Pentecost</p>
      </div>
      <div className="z-10 w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center lg:p-2 blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-[0.5px]" >
          <Image
              src={welcome2}
              alt=""
              className="object-cover w-full h-full rounded-b-[50px] lg:rounded-[50px] z-10"
          />
      </div>
    </div>  
    
  );
};

export default HeroModal;
