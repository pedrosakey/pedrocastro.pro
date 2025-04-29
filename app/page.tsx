import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-4 right-4 z-10 rounded-full border border-gray-200 bg-white/50 p-1 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
