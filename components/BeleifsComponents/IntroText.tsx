import React from 'react'
import Image from "next/image";
import intro from '../../assets/beleif/intro.jpg'

export default function IntroText(){
  return (
    <div className='flex flex-col md:justify-center md:content-center items-center justify-center bg-gradient-to-b from-gray-900 to-primary h-[50vh] w-screen relative'>
        <Image
            src={intro}
            alt=""
            className="object-cover w-full h-full  blur-[2px] brightness-[0.2] "
        />
        <h1 className="absolute mb-4 lg:text-7xl text-5xl mt-20
          font-extrabold text-center text-white" >What we believe</h1>
    </div>
  )
}

