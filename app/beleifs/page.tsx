import React from 'react'
import IntroText from "@/components/BeleifsComponents/IntroText";
import AccordionsTenets from '@/components/BeleifsComponents/AccordionsTenets';
import Accordionsbeleifs from '@/components/BeleifsComponents/AccordionsBeleifs';
export default function beleifs() {
  return (
    <div>
      <IntroText/>
      <AccordionsTenets />
      <Accordionsbeleifs/>
    </div>
  )
}
