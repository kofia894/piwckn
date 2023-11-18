"use client"
import React from 'react'
import Image from "next/image";


export default function Jumbotron(props: { title: string , Image: any}) {
  return (
    <div className="">
        <div className="first z-20 md:section  h-screen md:h-[950px] lg:h-[900px] md:w-full w-screen  flex flex-col justify-center content-center text-white mx-auto ">
                <div className=" md:rounded-b-[85px] h-screen md:h-[950px] lg:h-[900px] z-20">
                  {/* <div className="overlay top-10 lg:top-0 bottom-0 lg z-30 relative h-screen md:h-[950px] lg:h-[900px] md:rounded-b-[85px] bg-gradient-to-b from-transparent to-slate-900">
                  </div> */}
                  <Image
                  src={props.Image}
                  alt=""
                  fill={true}
                  className="object-cover w-full h-full md:rounded-b-[85px] z-10 bg-[linear-gradient(0deg,rgba(15,23,42,0.9)_6.82%,rgba(15,23,42,0.00)_81.44%)]"
                  />
                  <div className="md:rounded-b-[85px] z-30 absolute w-full h-full bg-[linear-gradient(0deg,rgba(15,23,42,0.9)_10%,rgba(15,23,42,0.00)_81.44%)]">
                  </div>
                </div>
                
            
            
            <div className="title z-20 absolute bottom-16 lg:bottom-10 md:bottom-18 content-center w-full text-center space-y-5">
                <h1 className=" font-Barlow hide text-8xl md:text-9xl lg:text-[250px] font-black "  data-aos="fade-up" data-aos-duration="1000"  >
                {props.title}
                </h1>
            </div>
        </div> 
    </div>
  )
}
