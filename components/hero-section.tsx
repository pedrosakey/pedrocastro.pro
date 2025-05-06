import { Button } from "@/components/ui/button"
import { Smartphone, Search, Cpu, ArrowRight } from "lucide-react"
import { HeroBackground } from "./hero-background"
import { cn } from "@/lib/utils"

const expertiseAreas = [
  {
    title: "iOS Development",
    subtitle: "Native apps for iPhone, iPad, and Apple Watch — built with Swift and aligned with Apple's best practices.",
    icon: Smartphone,
    action: "#ios",
    cta: "Learn More",
    label: "Swift & Apple Best Practices",
    buttonColor: "bg-[#0071e3] hover:bg-[#0077ed]",
  },
  {
    title: "Product Strategy",
    subtitle: "From idea to roadmap — validate early, reduce risk, and focus on what really matters.",
    icon: Search,
    action: "#strategy",
    cta: "Learn More",
    label: "",
    buttonColor: "bg-[#0071e3] hover:bg-[#0077ed]",
  },
  {
    title: "AI Solutions",
    subtitle: "Bring intelligence into your product. I integrate AI to automate, personalize, and enhance experiences.",
    icon: Cpu,
    action: "#ai",
    cta: "Discover AI",
    label: "Built for Apple Intelligence",
    buttonColor: "bg-[#10b981] hover:bg-[#22c55e]",
  },
]

export function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 pb-20 md:pt-32 md:pb-20">
        <HeroBackground />

        <div className="container relative z-10 max-w-4xl text-center">
          {/* Tags arriba */}
          <p
            className="mb-6 text-base font-medium inline-block text-transparent bg-clip-text md:text-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #0095ff, #4285f4, #b967ff, #e94c89, #ff3b6b, #ff5630)",
            }}
          >
            iOS Development · Product Strategy · AI Solutions
          </p>
          <h1 className="mb-3 text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
            Pedro Castro
          </h1>
          <h2 className="mb-4 text-xl font-medium text-gray-700 dark:text-gray-300 sm:text-2xl md:text-3xl">
            Building Digital Products with Code, AI, and Purpose
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I help founders and teams turn ideas into real, scalable digital products.<br />
            From native apps to smart automations, I combine iOS development, AI tools, and product strategy to move fast and build with clarity.
          </p>
          <Button
            className="rounded-full bg-[#0071e3] px-8 py-6 text-white hover:bg-[#0077ed] dark:bg-[#0A84FF] dark:hover:bg-[#0077ed]"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-8 bg-white dark:bg-white/10 w-full relative z-10" />

      {/* Expertise Grid (revertido) */}
      <section className="w-full px-4 py-16 lg:py-24 bg-gradient-to-b from-[#f5f5f7] to-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera fila: dos bloques */}
          <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg p-10 min-h-[340px]">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="h-8 w-8 text-gray-700" />
              {expertiseAreas[0].label && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 font-medium">
                  {expertiseAreas[0].label}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{expertiseAreas[0].title}</h3>
            <p className="text-base text-gray-700 mb-4">{expertiseAreas[0].subtitle}</p>
            <Button asChild className={cn("rounded-full px-6 py-3 text-white font-medium transition w-fit", expertiseAreas[0].buttonColor)}>
              <a href={expertiseAreas[0].action}>
                {expertiseAreas[0].cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg p-10 min-h-[340px]">
            <div className="flex items-center gap-3 mb-2">
              <Search className="h-8 w-8 text-gray-700" />
              {expertiseAreas[1].label && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 font-medium">
                  {expertiseAreas[1].label}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{expertiseAreas[1].title}</h3>
            <p className="text-base text-gray-700 mb-4">{expertiseAreas[1].subtitle}</p>
            <Button asChild className={cn("rounded-full px-6 py-3 text-white font-medium transition w-fit", expertiseAreas[1].buttonColor)}>
              <a href={expertiseAreas[1].action}>
                {expertiseAreas[1].cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          {/* Segunda fila: bloque AI ocupa dos columnas */}
          <div className="md:col-span-2 flex flex-col justify-between rounded-2xl bg-white shadow-lg p-10 min-h-[340px]">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="h-8 w-8 text-gray-700" />
              {expertiseAreas[2].label && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-50 text-blue-700 font-medium">
                  {expertiseAreas[2].label}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{expertiseAreas[2].title}</h3>
            <p className="text-base text-gray-700 mb-4">{expertiseAreas[2].subtitle}</p>
            <Button asChild className={cn("rounded-full px-6 py-3 text-white font-medium transition w-fit", expertiseAreas[2].buttonColor)}>
              <a href={expertiseAreas[2].action}>
                {expertiseAreas[2].cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
