import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PartnersSection from '@/components/PartnersSection'
import CapturaSection from '@/components/CapturaSection'
import ECMSection from '@/components/ECMSection'
import AutomacionSection from '@/components/AutomacionSection'
import CRMSection from '@/components/CRMSection'
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
        <CRMSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
