"use client"
import React from 'react'
import Image from "next/image";


export default function Jumbotron(props: { title: string , Image: any}) {
  return (
    <div className="">
        <div className="first z-20 md:section  h-screen md:h-[950px] lg:h-[900px] md:w-full w-screen  flex flex-col justify-center content-center text-white mx-auto ">
            
                <div className="bg-slate-900 md:rounded-b-[85px] h-screen md:h-[950px] lg:h-[900px] z-20">
                  <div className="overlay top-10 lg:top-0 bottom-0 lg z-30 relative h-screen md:h-[990px] lg:h-[900px] md:rounded-b-[85px] bg-gradient-to-b from-transparent to-slate-900">
                  </div>
                  <Image
                  src={props.Image}
                  alt=""
                  fill={true}
                  className="object-cover w-full h-full md:rounded-b-[85px] z-10 "
                  />
                </div>
                
            
            
            <div className="title z-20 absolute bottom-16 lg:bottom-10 md:bottom-18 content-center w-full text-center space-y-5">
                <h1 className=" font-Barlow hide text-7xl md:text-9xl lg:text-[250px] font-black "  data-aos="fade-up" data-aos-duration="1000"  >
                {props.title}
                </h1>
            </div>
        </div> 
    </div>
  )
}
