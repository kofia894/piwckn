import React from 'react'
import IntroText from "@/components/GivingComponents/IntroText";
import GiveText from '@/components/GivingComponents/GiveText';
import HTG from '@/components/GivingComponents/HTG';
import Giveinfo from '@/components/GivingComponents/Giveinfo';

export default function Giving() {
  return (
    <div>
      <IntroText/>
      <GiveText />
      <HTG />
      <Giveinfo />
    </div>
  )
}
