import { Metadata } from 'next'
import Jumbotron from '@/components/homepage/Jumbotron'
import HeroModal from '@/components/homepage/HeroModal'
import SundayService from '@/components/homepage/SundayService'
import Messages from '@/components/homepage/Messages'
import EventsCarousel from '@/components/homepage/EventsCarousel'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PIWC Kaneshie | Church of Pentecost - Welcome Home',
  description: 'Welcome to PIWC Kaneshie, a vibrant Church of Pentecost assembly in Accra, Ghana. Join us for Spirit-filled worship services, powerful messages, and upcoming events.',
  openGraph: {
    title: 'PIWC Kaneshie | Church of Pentecost - Welcome Home',
    description: 'Welcome to PIWC Kaneshie, a vibrant Church of Pentecost assembly in Accra, Ghana. Join us for Spirit-filled worship services.',
    url: 'https://piwckaneshie.org',
  },
  alternates: {
    canonical: 'https://piwckaneshie.org',
  },
}

export default function Home() {
  return (
    <main className=''>
      <div className="z-20 ">
        <Jumbotron />
      </div>
      <div className=" z-10">
        <HeroModal/>
        <Messages/>
        <SundayService/>
        <EventsCarousel/>
      </div>
      <Footer />
    </main>
  )
}
