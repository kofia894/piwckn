import React from 'react'
import IntroText from "@/components/GivingComponents/IntroText";
import GiveText from '@/components/GivingComponents/GiveText';
import HTG from '@/components/GivingComponents/HTG';
import Giveinfo from '@/components/GivingComponents/Giveinfo';
import Jumbotron from '@/components/homepage/Jumbotron';
import give from '../../assets/giving/Giving.webp';

export default function Giving() {
  return (
    <div>
      <div className="bg-primary ">
        <Jumbotron title="GIVING" Image={give}></Jumbotron>
      </div>
      <GiveText />
      <Giveinfo />
    </div>
  )
}
