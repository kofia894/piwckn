import React from 'react'
import Image from 'next/image'
import mission from '../../assets/AboutUs/mission.jpg'
import vision from '../../assets/AboutUs/vision.jpg'

export const MissionVission = () => {
  return (
  <div>
       <div  className=" md:justify-around h-screen w-screen flex flex-col md:flex-row md:content-center items-center justify-center lg:m-24">
        <div className="lg:max-w-[50vw] lg:relative lg:flex flex-col items-center justify-center absolute grid content-center">
          <h1 className='z-40 mb-4 lg:text-7xl text-5xl  font-extrabold text-center lg:text-primary text-white'  data-aos="fade-up" data-aos-duration="1000" > Our Mission</h1>
          <h2 className="z-40 mb-4 lg:text-3xl text-xl font-light text-center text-white lg:text-primary italic px-3" data-aos="fade-up" data-aos-duration="1000" >"We exist to establish responsible and self-sustaining churches filled with committed, 
          Spirit-filled Christians of sound character, who will impact their communities
          "</h2>
        </div>
        <div className=" w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-none relative" >
          <Image
              src={mission}
              alt=""
              layout="fill"
              objectFit="cover"
              className="object-cover   "
          />
        </div>
      </div>  
      <div  className=" md:justify-around h-screen w-screen flex flex-col md:flex-row-reverse md:content-center items-center justify-center lg:my-24">
        <div className="lg:max-w-[50vw] lg:relative lg:flex flex-col items-center justify-center absolute grid content-center">
          <h1 className='z-40 mb-4 lg:text-7xl text-5xl  font-extrabold text-center lg:text-primary text-white'  data-aos="fade-up" data-aos-duration="1000" > Our Vission</h1>
          <h2 className="z-40 mb-4 lg:text-3xl text-xl font-light text-center text-white lg:text-primary italic px-3" data-aos="fade-up" data-aos-duration="1000" >"To become a global Pentecostal church that is culturally relevant in vibrant evangelism, church planting and holistic ministry"</h2>
        </div>
        <div className=" w-screen h-screen lg:w-[50vw] md:flex md:items-center md:justify-center relative blur-[2px] brightness-[0.5] lg:brightness-100 lg:blur-none" >
          <Image
              src={vision}
              alt=""
              layout="fill"
              objectFit="cover"
              className="object-cover   "
          />
        </div>
      </div>  
  </div>
  )
}
