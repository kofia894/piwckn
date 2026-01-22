import { Metadata } from 'next'
import GivingPage from '@/components/GivingComponents/GivingPage';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of PIWC Kaneshie through tithes and offerings. Give via bank transfer or mobile money to support the Kingdom of God.',
  keywords: ['Church giving', 'Tithes', 'Offerings', 'Support church', 'Mobile money giving', 'Bank transfer church'],
  openGraph: {
    title: 'Give | PIWC Kaneshie',
    description: 'Support the ministry of PIWC Kaneshie through tithes and offerings.',
    url: 'https://piwckaneshie.org/giving',
  },
  alternates: {
    canonical: 'https://piwckaneshie.org/giving',
  },
}

export default function Giving() {
  return (
    <>
      <GivingPage />
      <Footer />
    </>
  );
}
