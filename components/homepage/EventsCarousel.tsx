"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination,Navigation } from "swiper";

import Image from "next/image";
import Img1 from "../../assets/homePage/event.jpg";
import Img2 from "../../assets/homePage/event1.jpg";

export default function UpcomingEvents() {
  return (
    <>
    <div className="mt-20  bg-primary md:rounded-t-[85px]">
      <div className="p-14 flex flex-col space-y-2">  
        <h1 className="font-Barlow md:text-7xl text-5xl text-white " data-aos="fade-up" data-aos-duration="1000">Upcoming Events
        </h1>
      </div> 
      <div  data-aos="fade-up" data-aos-duration="1000"  >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="w-full flex justify-center items-center pb-24 ">
              <Image
                src={Img1}
                alt="upcoming event"
                width={500}
                height={500}
                className="object-cover  h-full w-full rounded-[50px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center pb-24 ">
              <Image
                src={Img2}
                alt="upcoming event"
                width={500}
                height={500}
                className="object-cover  rounded-[50px] h-full w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div> 
    </>
  );
}
