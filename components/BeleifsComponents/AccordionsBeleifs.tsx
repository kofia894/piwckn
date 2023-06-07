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
    <Fragment>
      <div className="flex justify-center p-5 mt-10 mb-20 w-full">
        <h1 className="text-primary font-bold text-4xl">Core Values</h1>      
      </div>
     { Beleifs.map((beleif)=>
      <Accordion open={open === beleif.id} className=" px-10 md:px-40 lg:px-96  mb-5" icon={<Icon id={beleif.id} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(beleif.id)} className="text-primary font-bold text-left">
          {beleif.title} 
        </AccordionHeader>
        <AccordionBody className="font-base">
         {beleif.desc}
        </AccordionBody>
        <div className="border-b border-gray-800 rounded"></div>
      </Accordion>
      )}
    </Fragment>
  );
}