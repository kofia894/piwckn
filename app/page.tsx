import Image from 'next/image'
import Jumbotron from '@/components/homepage/Jumbotron'
import HeroModal from '@/components/homepage/HeroModal'
import Messages from '@/components/homepage/Messages'
import EventsCarousel from '@/components/homepage/EventsCarousel'

export default function Home() {
  return (
    <main className='w-[100%] mx-auto max-w-[1600px]'>
      <Jumbotron></Jumbotron>
      <HeroModal/>
      <Messages/>
      <EventsCarousel/>
    </main>
  )
}
