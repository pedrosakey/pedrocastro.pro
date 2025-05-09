import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Smartphone, Search, Cpu, ArrowRight } from "lucide-react"
import { HeroBackground } from "./hero-background"
import { cn } from "@/lib/utils"

const expertiseAreas = [
  {
    title: "iOS Development",
    subtitle: "Native apps for iPhone, iPad, and Apple Watch — built with Swift and aligned with Apple's best practices.",
    icon: Smartphone,
    action: "#contact",
    cta: "Learn More",
    label: "Swift & Apple Best Practices",
    buttonColor: "bg-[#0071e3] hover:bg-[#0077ed]",
  },
  {
    title: "Product Strategy",
    subtitle: "From idea to roadmap — validate early, reduce risk, and focus on what really matters.",
    icon: Search,
    action: "#contact",
    cta: "Learn More",
    label: "",
    buttonColor: "bg-[#0071e3] hover:bg-[#0077ed]",
  },
  {
    title: "AI Solutions",
    subtitle: "Bring intelligence into your product. I integrate AI to automate, personalize, and enhance experiences.",
    icon: Cpu,
    action: "#contact",
    cta: "Discover AI",
    label: "Built for Apple Intelligence",
    buttonColor: "bg-[#10b981] hover:bg-[#22c55e]",
  },
]

export function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 my-8">
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
          <h1 className="mb-3 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Pedro Castro
          </h1>
          <h2 className="mb-4 text-xl font-medium text-gray-700 sm:text-2xl md:text-3xl">
            Building Digital Products with Code, AI, and Purpose
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            I help founders and teams turn ideas into real, scalable digital products.<br />
            From native apps to smart automations, I combine iOS development, AI tools, and product strategy to move fast and build with clarity.
          </p>
          <Button
            className="rounded-full bg-[#0071e3] px-8 py-6 text-white hover:bg-[#0077ed]"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-4 md:h-8 bg-white dark:bg-white/10 w-full relative z-10" />

      {/* Expertise Grid estilo Apple mejorado */}
      <section className="my-4 md:my-8 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[100rem] mx-auto px-0 md:px-8 h-full">
          {/* iOS Development */}
          <div className="flex flex-col items-start text-left px-10 py-14 bg-gradient-to-b from-gray-100 to-white rounded-none transition md:h-full min-h-[22rem] md:min-h-[28rem]">
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-gray-900 tracking-tight mb-2">
              {expertiseAreas[0].title}
            </h3>
            <p className="text-[17px] leading-snug text-[#1d1d1f]/80 mb-6">
              {expertiseAreas[0].subtitle}
            </p>
            <a
              href={expertiseAreas[0].action}
              className="text-[#0071e3] text-sm font-medium hover:underline transition"
            >
              {expertiseAreas[0].cta}
            </a>
          </div>

          {/* Product Strategy */}
          <div className="flex flex-col items-start text-left px-10 py-14 bg-gradient-to-b from-white to-gray-100 rounded-none transition md:h-full min-h-[22rem] md:min-h-[28rem]">
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-gray-900 tracking-tight mb-2">
              {expertiseAreas[1].title}
            </h3>
            <p className="text-[17px] leading-snug text-[#1d1d1f]/80 mb-6">
              {expertiseAreas[1].subtitle}
            </p>
            <a
              href={expertiseAreas[1].action}
              className="text-[#0071e3] text-sm font-medium hover:underline transition"
            >
              {expertiseAreas[1].cta}
            </a>
          </div>

          {/* AI Solutions - Full Width */}
          <div className="md:col-span-2 flex flex-col items-start text-left px-10 py-14 bg-gradient-to-b from-gray-50 to-white rounded-none transition md:h-full min-h-[22rem] md:min-h-[28rem]">
            <h3 className="text-[28px] sm:text-[32px] font-semibold text-gray-900 tracking-tight mb-2">
              {expertiseAreas[2].title}
            </h3>
            <p className="text-[17px] leading-snug text-[#1d1d1f]/80 mb-6">
              {expertiseAreas[2].subtitle}
            </p>
            <a
              href={expertiseAreas[2].action}
              className="text-[#10b981] text-sm font-medium hover:underline transition"
            >
              {expertiseAreas[2].cta}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
