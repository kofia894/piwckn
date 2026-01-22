import { Metadata } from 'next'
import { Whoweare } from '@/components/aboutusComponents/Whoweare'
import Leadership from '@/components/aboutusComponents/Leadership'
import { MissionVission } from '@/components/aboutusComponents/MissionVission'
import PageJumbotron from '@/components/shared/PageJumbotron'
import Footer from '@/components/Footer'
import main_img from '../../assets/AboutUs/aboutusmain.jpg'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PIWC Kaneshie - our history, leadership, mission and vision. We are a vibrant Church of Pentecost assembly committed to transforming lives through the power of the Gospel.',
  keywords: ['PIWC Kaneshie history', 'Church leadership', 'Mission and Vision', 'Church of Pentecost Kaneshie', 'About our church'],
  openGraph: {
    title: 'About Us | PIWC Kaneshie',
    description: 'Learn about PIWC Kaneshie - our history, leadership, mission and vision.',
    url: 'https://piwckaneshie.org/aboutUs',
  },
  alternates: {
    canonical: 'https://piwckaneshie.org/aboutUs',
  },
}

export default function AboutUs() {
  return (
    <div>
      <div className="bg-slate-900">
        <PageJumbotron title="ABOUT US" Image={main_img} />
      </div>
      <Whoweare />
      <Leadership />
      <MissionVission />
      <Footer />
    </div>
  )
}
