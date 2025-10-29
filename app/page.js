import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Director from '@/components/Director'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Director />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
