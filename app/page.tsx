import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PartnersSection from '@/components/PartnersSection'
import CapturaSection from '@/components/CapturaSection'
import ECMSection from '@/components/ECMSection'
import AutomacionSection from '@/components/AutomacionSection'
import CalidadSection from '@/components/CalidadSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapturaSection />
        <ECMSection />
        <AutomacionSection />
        <CalidadSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
