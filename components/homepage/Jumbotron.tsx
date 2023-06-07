import React from 'react'

export default function Jumbotron() {
  return (
    <div>
        <div className=" md:h-fit md:w-full w-screen flex flex-col justify-center content-center text-white mx-auto ">
            <div className=" bg-slate-900  blur-[1px] brightness-[0.7] bg-gradient-to-bl from-black to-transparent">
                <video  autoPlay muted loop  className=" w-full h-screen object-cover " >         
                    <source src="./homepvid.MP4" type="video/mp4"/>       
                </video>
            </div>
            <div className="absolute content-center w-full text-center space-y-5">
                <h1 className="hide md:text-4xl text-xl font-bold italic"  data-aos="fade-up" data-aos-duration="1000"  >
                Pentecost International Worship Center Kaneshie
                </h1>
                <h1 className="hide md:text-xl text-md font-bold  " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                The Church of Pentecost  
                </h1>
            </div>
        </div> 
    </div>
  )
}
