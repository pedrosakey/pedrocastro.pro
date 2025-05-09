import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
// Theme toggle removed

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
