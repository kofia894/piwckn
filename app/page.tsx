import Image from 'next/image'
import Jumbotron from '@/components/homepage/Jumbotron'
import HeroModal from '@/components/homepage/HeroModal'
import Messages from '@/components/homepage/Messages'
import EventsCarousel from '@/components/homepage/EventsCarousel'
import welcome from '../assets/homePage/Welcome.webp'

export default function Home() {
  return (
    <main className=''>
      <div className="z-20">
        <Jumbotron title="WELCOME" Image={welcome}></Jumbotron>
      </div>
      <div className="bg-slate-900 z-10">
        <HeroModal/>
        <Messages/>
        <EventsCarousel/>
      </div>
      
      
      
    </main>
  )
}
