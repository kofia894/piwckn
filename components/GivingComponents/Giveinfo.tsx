"use client"
import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowUp } from 'react-icons/io';
import Giving from './Giving';

function Icon({ id, open } : { id: any; open: any }) {
    return (
      <IoIosArrowUp       className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`} />
  
    );
}

import React from "react";
import Image from "next/image";
import momo from "../../assets/giving/piwcmomo.png";
import bank from "../../assets/giving/piwcbank.png";

export default function Giveinfo() {
const [open, setOpen] = useState(0);

const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
};
  return (
    <div>
      <div className="section md:justify-around w-screen h-screen flex flex-col md:flex-row md:content-center items-center justify-center text-white">
        <div className="w-[30%] lg:relative z-30 flex flex-col mb-10">
          <h1 className="font-Barlow lg:text-9xl md:text-7xl text-5xl font-black text-black">
            OTHER WAYS{" "}
          </h1>
          <h1 className="font-Barlow lg:text-9xl md:text-7xl text-5xl font-black text-black">
            TO GIVE{" "}
          </h1>
        </div>
        <div className="w-[50%] flex flex-col justify-items-center items-center space-y-16">
          <Fragment>
              { Giving.map((giving)=>
              <Accordion open={open === giving.id} className="font-Barlow md:text-2xl text-primary font-bold text-left" icon={<Icon id={giving.id} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(giving.id)} className="font-Barlow md:text-2xl text-primary font-bold text-left">
                  {giving.title} 
                  </AccordionHeader>
                  <AccordionBody className="font-normal space-y-2 text-lg text-black pt-5">
                  <div className="flex flex-col">
                      {giving.desc}
                  </div>
                  <div>
                      {giving.desc2}
                  </div>
                  <div> 
                      {giving.desc3}
                  </div>
                  <div> 
                      {giving.desc4}
                  </div>
                  </AccordionBody>
              </Accordion>
              )}
          </Fragment>
        </div>
      </div>
    </div>
  );
}
