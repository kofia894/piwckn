import React from 'react'
import ResidentMinister from '@/components/aboutusComponents/ResidentMinister'
import Executives from '@/components/aboutusComponents/Executives'
import { Whoweare } from '@/components/aboutusComponents/Whoweare'
import { MissionVission } from '@/components/aboutusComponents/MissionVission'
import PageJumbotron from '@/components/shared/PageJumbotron'
import main_img from '../../assets/AboutUs/aboutusmain.jpg'
export default function AboutUs() {
  return (
    <div>
      <div className="bg-slate-900">
        <PageJumbotron title="ABOUT US" Image={main_img} />
      </div>
      <ResidentMinister />
      <Whoweare />
      <Executives />
      <MissionVission />
    </div>
  )
}
