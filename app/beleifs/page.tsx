import React from 'react'
import IntroText from "@/components/BeleifsComponents/IntroText";
import AccordionsTenets from '@/components/BeleifsComponents/AccordionsTenets';
import Accordionsbeleifs from '@/components/BeleifsComponents/AccordionsBeleifs';
import Jumbotron from '@/components/homepage/Jumbotron';
import img from '../../assets/beleif/Ourbeliefs.webp'
export default function beleifs() {
  return (
    <div>
      <Jumbotron title="OUR BELIEFS" Image={img}></Jumbotron>
        <AccordionsTenets />
        <Accordionsbeleifs/>
    </div>
  )
}
