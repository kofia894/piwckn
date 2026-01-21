import Jumbotron from '@/components/homepage/Jumbotron'
import HeroModal from '@/components/homepage/HeroModal'
import SundayService from '@/components/homepage/SundayService'
import Messages from '@/components/homepage/Messages'
import EventsCarousel from '@/components/homepage/EventsCarousel'
import Footer from '@/components/Footer'

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
