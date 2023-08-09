'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import live from '../../assets/homePage/joinlive.jpg'

// Import Swiper styles
import "swiper/css";

export default function Messages(){
    
    return(
        <>
        <div className=" bg-slate-900 md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white " >
            <div className="marquee w-screen relative flex text-white items-center overflow-x-hidden overflow-y-clip bg-slate-900">
                <div className=" animate-marquee whitespace-nowrap p-0 text-7xl font-extrabold">
                    <span className="mx-4"> Marathon Prayer Start at 7:30AM </span>
                    <span className="mx-4 font-black text-secondary">-</span>
                    <span className="mx-4">Church Service Starts at 8:00 AM</span>
                    <span className="mx-4 font-black text-secondary">-</span>
                    <span className="mx-4">Church Service Starts at 8:00 AM</span>
                    <span className="mx-4 font-black text-secondary">-</span>
                    
                </div>
                <div className="absolute p-0 animate-marquee2 whitespace-nowrap text-7xl font-extrabold">
                <span className="mx-4"> Marathon Prayer Start at 7:30AM </span>
                    <span className="mx-4 font-black text-secondary">-</span>
                    <span className="mx-4">Church Service Starts at 8:00 AM</span>
                    <span className="mx-4 font-black text-secondary">-</span>
                    <span className="mx-4">Church Service Starts at 8:00 AM</span>
                    <span className="mx-4 font-black text-secondary">-</span>
                </div>
            </div>
        </div>  
        </>
    )
}