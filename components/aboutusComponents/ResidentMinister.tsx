import React from "react"
import Image from 'next/image'
import Pastor from '../../assets/AboutUs/psyirebi_trans.png'

export default function ResidentMinister(){
    return(
        <>
            <div className="rounded-b-[85px] w-full h-full">
                <div className="rounded-b-[85px] min-h-[80vh] md:min-h-screen flex flex-row justify-around lg:content-center text-white bg-slate-900 pt-32">
                    
                    <div className="text grid flex-col place-content-center w-[72%] lg:space-y-10 space-y-5 pl-6 lg:pl-1">

                        <div className="lg:space-y-4 space-y-2">
                            <h1 className="font-Barlow text-[3vw] font-semibold text-secondary" data-aos="fade-left" data-aos-duration="1000" >
                                Resident Minister
                            </h1>
                            <div className="yellowline bg-secondary lg:w-72 w-20 h-0.5 rounded-full lg:ml-28 ml-16" data-aos="fade-right" data-aos-duration="1000"></div>
                        </div>

                        

                        <div className="  ">
                            <h1 className="font-Barlow hide text-[6vw] font-extrabold " data-aos="fade-left" data-aos-duration="1000">
                                Pastor Emmanuel Yirebi
                            </h1>
                        </div>

                    </div>

                    <div className="bg-slate-900 flex lg:place-content-end place-content-center items-center lg:items-end relative rounded-[85px]" >
                        <Image
                            src={Pastor}
                            alt=""
                            className="object-fill rounded-[85px]"
                        />
                    </div>

                  
                </div> 
            </div>
            
        </>
    )
}