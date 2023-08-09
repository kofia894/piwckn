"use client"
import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowUp } from 'react-icons/io';
import Beleifs from './Beleifs'

function Icon({ id, open } : { id: any; open: any }) {
  return (
    <IoIosArrowUp       className={`${
      id === open ? "rotate-180" : ""
    } h-5 w-5 transition-transform`} />

  );
}
 
export default function Accordionsbeleifs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="section lg:mt-[600px] lg:justify-around w-screen h-screen flex flex-col lg:flex-row md:content-center items-center justify-center text-white">
      <div className=" flex justify-center p-5  lg:w-[30%] ">
          <h1 className="font-Barlow lg:text-9xl text-7xl font-black text-black">
            OUR CORE VALUES{" "}
          </h1>
      </div>
      <div className="lg:w-[50%] flex flex-col justify-items-center items-center">
          <Fragment>
          { Beleifs.map((beleif)=>
            <Accordion open={open === beleif.id} className="mb-16" icon={<Icon id={beleif.id} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(beleif.id)} className="font-Barlow md:text-2xl text-primary font-bold text-left">
                {beleif.title}
              </AccordionHeader>
              <AccordionBody className="font-normal space-y-2 text-lg text-black pt-5">
              {beleif.desc}
              </AccordionBody>
            </Accordion>
            )}
          </Fragment>
      </div>
    </div>
  );
}