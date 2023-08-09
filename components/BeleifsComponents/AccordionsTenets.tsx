"use client"
import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowUp } from 'react-icons/io';
import Tenets from './Tenets'

function Icon({ id, open } : { id: any; open: any }) {
  return (
    <IoIosArrowUp       className={`${
      id === open ? "rotate-180" : ""
    } h-5 w-5 transition-transform`} />

  );
}
 
export default function AccordionsTenets() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

 
  return (
    <div className="section lg:mt-96 mt-[350px] lg:justify-around w-screen h-screen flex flex-col lg:flex-row md:content-center items-center justify-center text-white mb-96 lg:mb-1">
      <div className=" flex lg:hidden justify-center p-5  lg:w-[30%] ">
          <h1 className="font-Barlow lg:text-9xl text-7xl font-black text-black">
            OUR 11 TENETS{" "}
          </h1>
      </div>
      <div className="lg:w-[50%] flex flex-col justify-items-center items-center">
        <Fragment>
        { Tenets.map((tenet)=>
          <Accordion open={open === tenet.id} className=" mb-16" icon={<Icon id={tenet.id} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(tenet.id)} className="font-Barlow md:text-2xl text-primary font-bold text-left">
              {tenet.title} 
            </AccordionHeader>
            <AccordionBody className="font-normal space-y-2 text-lg text-black pt-5">
            {tenet.desc}
            </AccordionBody>
           
          </Accordion>
          )}
        </Fragment>
      </div>

      <div className="hidden lg:flex justify-center p-5  lg:w-[30%] ">
          <h1 className="font-Barlow lg:text-9xl font-black text-black">
            OUR 11 TENETS{" "}
          </h1>
      </div>
    </div>
  );
}