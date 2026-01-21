import React from 'react'
import IntroText from "@/components/BeleifsComponents/IntroText";
import AccordionsTenets from '@/components/BeleifsComponents/AccordionsTenets';
import Accordionsbeleifs from '@/components/BeleifsComponents/AccordionsBeleifs';
import PageJumbotron from '@/components/shared/PageJumbotron';
import Footer from '@/components/Footer'
import img from '../../assets/beleif/Ourbeliefs.jpg'
export default function beleifs() {
  return (
    <div>
      <PageJumbotron title="OUR BELIEFS" Image={img} />
        <AccordionsTenets />
        <Accordionsbeleifs/>
        <Footer />
    </div>
  )
}
