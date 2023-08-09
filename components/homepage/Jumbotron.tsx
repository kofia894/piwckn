"use client"
import React from 'react'
import Image from "next/image";


export default function Jumbotron(props: { title: string , Image: any}) {
  return (
    <div className="">
        <div className="z-20 md:section md:h-fit h-[93vh] md:w-full w-screen  flex flex-col justify-center content-center text-white mx-auto ">
            <div className="z-0 h-[93vh] rounded-b-[85px] bg-slate-900 bg-gradient-to-bl from-black to-transparent ">
                
                <Image
                src={props.Image}
                alt=""
                fill={true}
                className="object-cover w-full h-full rounded-b-[50px] z-0 "
                />
                <div className="bottom-10 z-20 relative h-[93vh] md:h-[106vh] rounded-b-[60px] bg-gradient-to-b from-transparent to-slate-900">
                </div>
            </div>
            
            <div className="z-20 absolute bottom-16 lg:bottom-10 md:bottom-18 content-center w-full text-center space-y-5">
                <h1 className=" font-Barlow hide text-7xl md:text-9xl lg:text-[250px] font-black "  data-aos="fade-up" data-aos-duration="1000"  >
                {props.title}
                </h1>
            </div>
        </div> 
    </div>
  )
}
