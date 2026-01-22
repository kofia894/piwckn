import { Metadata } from 'next'
import AccordionsTenets from '@/components/BeleifsComponents/AccordionsTenets';
import Accordionsbeleifs from '@/components/BeleifsComponents/AccordionsBeleifs';
import PageJumbotron from '@/components/shared/PageJumbotron';
import Footer from '@/components/Footer'
import img from '../../assets/beleif/Beliefs.webp'

export const metadata: Metadata = {
  title: 'Our Beliefs',
  description: 'Discover the core beliefs and tenets of PIWC Kaneshie and the Church of Pentecost. Learn about our 11 foundational tenets and the values that guide our faith and practice.',
  keywords: ['Church of Pentecost beliefs', 'Christian tenets', 'Pentecostal doctrine', 'Church beliefs', 'Faith statement', 'Core values'],
  openGraph: {
    title: 'Our Beliefs | PIWC Kaneshie',
    description: 'Discover the core beliefs and tenets of PIWC Kaneshie and the Church of Pentecost.',
    url: 'https://piwckaneshie.org/beleifs',
  },
  alternates: {
    canonical: 'https://piwckaneshie.org/beleifs',
  },
}

export default function Beleifs() {
  return (
    <div>
      <PageJumbotron title="OUR BELIEFS" Image={img} />
        <AccordionsTenets />
        <Accordionsbeleifs/>
        <Footer />
    </div>
  )
}
