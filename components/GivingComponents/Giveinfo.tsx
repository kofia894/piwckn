import React from 'react'
import Image from "next/image";
import momo from '../../assets/giving/piwcmomo.png'
import bank from '../../assets/giving/piwcbank.png'

export default function Giveinfo() {
  return (
    <div>
        <div className="  md:justify-around w-screen h-[50vh] flex flex-col md:flex-row md:content-center items-center justify-center text-white">
            <div className=" lg:relative z-40 flex flex-col items-center justify-center content-center space-y-10 border">
                <Image
                    src={momo}
                    alt=""
                    className="object-cover w-full h-full "
                />
            </div>
            <div className=" lg:relative z-40 flex flex-col items-center justify-center content-center space-y-10 border ">
                <Image
                    src={bank}
                    alt=""
                    className="object-cover w-full h-full "
                />
            </div>
        </div>  
    </div>
  )
}
