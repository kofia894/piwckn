import React from 'react'
import styles from '../../src/styles/Home.module.css'
import Image from 'next/image'
import Abtblding from "../../assets/AboutUs/PIWCblding.jpg"
import ab1 from "../../assets/AboutUs/aboutus5.jpg";
import ab3 from "../../assets/AboutUs/aboutus3.jpg";
import ab4 from "../../assets/AboutUs/aboutus4.jpg";
import ab2 from "../../assets/AboutUs/aboutus2.jpg";

export const Whoweare = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-around lg:m-32 my-44 px-10 lg:space-x-40 lg:min-h-screen lg:items-center">
        <div className="text lg:w-[50%]">
            <h1 className="text-center font-extrabold lg:text-5xl text-3xl text-primary mb-10" data-aos="fade-up" data-aos-duration="1000" >Who are we ? </h1>
            <h2 className=" italic leading-loose text-lg font-base text-center" data-aos="fade-up" data-aos-duration="1000" > 
            A missionary wing of the Church of Pentecost, PIWC-KN is guided by the tenets outlined by the church. The Church of Pentecost deems our tenets or beliefs as one of the most critical aspects of our worship because it forms the basics of the Christian doctrine. 
            </h2>

        </div>

        <div className="grid lg:grid-cols-2 lg:gap-10">
           <div className="lg:w-60 lg:h-60  relative">
                <Image
                        src={Abtblding}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl" 
                />  
           </div>
           <div className="lg:w-60 lg:h-60  relative">
                <Image
                        src={ab1}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl" 
                />  
           </div>
          
             <div className="lg:w-60 lg:h-60 relative">
                <Image
                        src={ab3}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl" 
                />  
           </div>
           <div className="lg:w-60 lg:h-60 relative">
                <Image
                        src={ab4}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl" 
                />  
           </div>

        </div>

    </div>
  )
}
