"use client"
import React from "react"
import Image from 'next/image'
import { motion } from "motion/react";
import Pastor from '../../assets/AboutUs/psyirebi_trans.png'

export default function ResidentMinister(){
    return(
        <>
            <div className="lg:rounded-b-[85px] w-full h-full">
                <div className="lg:rounded-b-[85px] min-h-[80vh] md:min-h-screen flex flex-row justify-around lg:content-center text-white  pt-32">

                    <div className="text grid flex-col place-content-center w-[72%] lg:space-y-10 space-y-5 pl-6 lg:pl-1">

                        <div className="lg:space-y-4 space-y-2">
                            <motion.h1
                              className="font-Inter text-[3vw] font-semibold text-secondary"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                            >
                                Resident Minister
                            </motion.h1>
                            <motion.div
                              className="yellowline bg-secondary lg:w-72 w-20 h-0.5 rounded-full lg:ml-28 ml-16"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                            />
                        </div>



                        <div className="  ">
                            <motion.h1
                              className="font-Inter hide text-[6vw] font-extrabold "
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            >
                                Pastor Emmanuel Yirebi
                            </motion.h1>
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
