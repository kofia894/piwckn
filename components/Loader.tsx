import React from 'react'
import Image from 'next/image'
import loader from '../assets/logoFolder/RectangleLogo.png'

export const Loader = () => {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center justify-center">
        <div className="animate-bounce">
         <Image
              src={loader}
              alt=""
              className="object-cover w-full h-full z-10"
          />
        </div>
        <h1 className="text-white font-Barlow">Loading ...</h1>
    </div>
  )
}
