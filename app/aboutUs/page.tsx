import React from 'react'
import ResidentMinister from '@/components/aboutusComponents/ResidentMinister'
import Executives from '@/components/aboutusComponents/Executives'
import { Whoweare } from '@/components/aboutusComponents/Whoweare'
import { MissionVission } from '@/components/aboutusComponents/MissionVission'

export default function AboutUs() {
  return (
    <div>
      <ResidentMinister />
      <Executives />
      <Whoweare />
      <MissionVission />
    </div>
  )
}
