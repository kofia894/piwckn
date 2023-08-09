import React from 'react'
import ResidentMinister from '@/components/aboutusComponents/ResidentMinister'
import Executives from '@/components/aboutusComponents/Executives'
import { Whoweare } from '@/components/aboutusComponents/Whoweare'
import { MissionVission } from '@/components/aboutusComponents/MissionVission'
import Jumbotron from '@/components/homepage/Jumbotron'
import main_img from '../../assets/AboutUs/aboutusmain.jpg'
export default function AboutUs() {
  return (
    <div>
      <div className="bg-slate-900">
        <Jumbotron title="ABOUT US" Image={main_img}></Jumbotron>
      </div>
      <ResidentMinister />
      <Whoweare />
      <Executives />
      <MissionVission />
    </div>
  )
}
