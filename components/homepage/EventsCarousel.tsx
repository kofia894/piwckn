"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination,Navigation } from "swiper";

import Image from "next/image";
import Img1 from "../../assets/homePage/event1.jpeg";
import Img2 from "../../assets/homePage/event2.jpg";

export default function UpcomingEvents() {
  return (
    <>
    <div className="mt-20">
      <div className="p-4 flex flex-col items-center space-y-2">  
        <h1 className="font-medium lg:text-3xl text-xl italic text-primary " data-aos="fade-up" data-aos-duration="1000"  >Upcoming Events
        </h1>
        <div data-aos="fade-up" data-aos-duration="1000" 
        className="yellowline bg-secondary w-40 h-0.5 rounded-full ml-20">
        </div>       
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
            <div className="w-full flex justify-center items-center py-10">
              <Image
                src={Img2}
                alt="upcoming event"
                width={500}
                height={500}
                className="object-cover " />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div> 
    </>
  );
}
