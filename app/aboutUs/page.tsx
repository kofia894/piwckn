import { Whoweare } from '@/components/aboutusComponents/Whoweare'
import Leadership from '@/components/aboutusComponents/Leadership'
import { MissionVission } from '@/components/aboutusComponents/MissionVission'
import PageJumbotron from '@/components/shared/PageJumbotron'
import Footer from '@/components/Footer'
import main_img from '../../assets/AboutUs/aboutusmain.jpg'

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
