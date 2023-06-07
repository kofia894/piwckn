import React from "react"
import Image from 'next/image'
import Pastor from '../../assets/AboutUs/psyirebi_trans.png'

export default function Jumbotron(){
    return(
        <>
            <div>
                <div className="lg:min-h-screen flex flex-row justify-around lg:content-center text-white bg-gradient-to-b from-gray-900 to-primary pt-32">
                    
                <div className="text grid flex-col place-content-center w-[72%] lg:space-y-10 space-y-5 pl-6 lg:pl-1">

                    <div className="lg:space-y-4 space-y-2">
                        <h1 className=" text-sm font-semibold text-secondary" data-aos="fade-right" data-aos-duration="1000" >
                            Resident Minister
                        </h1>
                        <div className="yellowline bg-secondary lg:w-72 w-20 h-0.5 rounded-full lg:ml-28 ml-16" data-aos="fade-right" data-aos-duration="1000"></div>
                    </div>

                    

                    <div className="  ">
                        <h1 className="hide text-2xl lg:text-7xl font-bold italic" data-aos="fade-right" data-aos-duration="1000">
                            Pastor Emmanuel Yirebi
                        </h1>
                    </div>

                </div>

                <div className="flex lg:place-content-end place-content-center items-center lg:items-end relative" >
                    <Image
                        src={Pastor}
                        alt=""
                        className="object-fill "
                    />
                </div>

                  
                </div> 
            </div>
            
        </>
    )
}