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
        <div className=" bg-primary md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white " >
            <div className="lg:min-w-[50vw] lg:relative z-40 flex flex-col items-center justify-center absolute content-center space-y-10">
                <h1 
                    className=" mb-4 lg:text-5xl text-5xl font-medium text-center text-priary italic" data-aos="fade-up" data-aos-duration="1000" >
                    Join us Live !
                    <div className="yellowline bg-secondary md:w-72 h-0.5 rounded-full ml-28 mt-5"></div>
                </h1> 
                <a href="https://www.facebook.com/100064863157577/posts/pfbid0tLxPoPTFrqJDs5gZQNNysZUUwZrrMgHQPGNXTQ3YktoXmp6CdEjNmiAei9JXwZWvl/?mibextid=cr9u03">
                    <button className=" w-40 h-12 py-2 px-4 rounded-full transition ease-in-out delay-150 bg-white text-primary font-bold hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300" data-aos="fade-up" data-aos-duration="1000">
                    Watch Live
                    </button> 
                </a>
            </div>
            <div className=" w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center lg:p-2 blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-[0.5px]" >
                <Image
                    src={live}
                    alt=""
                    className="object-cover w-full h-full "
                />
            </div>
        </div>  
        </>
    )
}