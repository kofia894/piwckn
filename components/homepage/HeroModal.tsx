"use client"
import React, { useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
const link1 = "/beleifs", link2="/ministries", link3="/giving", link4="/aboutUs"
const experienceData = [
  {
    id: 1,
    title: "NEW TO PIWC KN?",
    heading: "START HERE",
    desc: "Get to know who we are & what we believe in, here, at PIWC kaneshie ",
    cta: "START HERE",
    link:link1
  },
  {
    id: 3,
    title: "SUPPORT THE LORD’S WORK",
    heading: "GIVE",
    desc: " You can give your substance to support, your generosity makes a difference",
    cta: "GIVE",
    link:link3
  },
  {
    id: 4,
    title: "OUR LEADERS",
    heading: "LEADERSHIP",
    desc: "Get to know the leaders of PIWC kaneshie ",
    cta: "LEADERSHIP",
    link:link4
  },
];

const HeroModal = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  className="w-11/12 m-auto isolate ">
      <div className=" flex flex-col lg:flex-row z-50  lg:mx-auto justify-center bg-gradient-to-b from-primary to-gray-900  lg:w-fit -mt-10 text-white items-center 
        lg:gap-24 gap-10 py-4  lg:px-16 lg:py-8 border-[1px] rounded-lg border-[#757d1b] shadow-lg">
        <div className="flex flex-col items-center lg:text-lg">
          <AiOutlineClockCircle color="#757d1b" size={20} />
          <h1 className="font-semibold mt-2">Marathon Prayers</h1>
          <h2 className="font-thin ">7:30am</h2>
        </div>
        <h1 className="lg:text-3xl font-extrabold text-[#E6F44C]">
          Service Times
        </h1>
        <div className="flex flex-col items-center lg:text-lg">
          <AiOutlineClockCircle color="#757d1b" size={20} />
          <h1 className="font-semibold mt-2">Sunday Service</h1>
          <h2 className="font-thin ">8:00am - 10:30am</h2>
        </div>
      </div>
      <div className="text-black mt-20 " data-aos="fade-up" data-aos-duration="1000" >
        <h1 className="text-bold italic lg:text-xl">Experience PIWC Kaneshie</h1>
       
          <div className="flex flex-col lg:flex-row my-24 w-11/12 m-auto gap-12 " >
            {experienceData.map((item) => (
               <Link href={item.link}>
                <div key={item.id} className="group  hover:bg-primary/10 -skew-y-3 hover:-translate-y-6 hover:transition delay-100 duration-300 ease-in-out" >
                  <div className="skew-y-3 w-full h-full  px-10 py-16 ">
                    <h1 className="text-primary lg:text-sm font-medium isolate ">
                      {item.title}
                    </h1>
                    <h2 className="lg:text-3xl mt-4 font-medium">{item.heading}</h2>
                    <p className="font-light font-sm my-4 text-sm">{item.desc}</p>
                    <div className="text-primary flex font-medium items-center gap-3 lg:text-sm">
                      <span>{item.cta}</span>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default HeroModal;
