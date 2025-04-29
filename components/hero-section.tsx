import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cpu, Search, ArrowRight } from "lucide-react"
import { HeroBackground } from "./hero-background"

const expertiseAreas = [
  {
    title: "iOS Development",
    description: "Native apps for iPhone, iPad, and Apple Watch.",
    tagline: "Smooth, scalable experiences with Swift, SwiftUI, and UIKit.",
    usp: "Native Performance | Apple Design Guidelines",
    icon: Smartphone,
    color: "bg-gray-50 dark:bg-gray-50/5",
    gradient: "from-[#0095ff] to-[#4285f4]",
    learnMoreLink: "#ios",
    getStartedLink: "#contact",
    getStartedText: "Discuss Project",
    row: "top",
  },
  {
    title: "Lean Full-Stack Development",
    description: "Backend, frontend, and AI integrations for agile MVPs.",
    tagline: "Fast, focused, and ready-to-scale lightweight architectures.",
    usp: "Rapid Deployment | Future-Proof",
    icon: Code,
    color: "bg-white dark:bg-white/5",
    gradient: "from-[#b967ff] to-[#e94c89]",
    learnMoreLink: "#fullstack",
    getStartedLink: "#contact",
    getStartedText: "Start Building",
    row: "top",
  },
  {
    title: "Digital Product Discovery",
    description: "Shaping ideas into clear, validated product strategies.",
    tagline: "Early validation, smarter prioritization, faster launches.",
    usp: "User-Centered | Data-Driven",
    icon: Search,
    color: "bg-gray-800 dark:bg-gray-800",
    textColor: "text-white",
    gradient: "from-[#ff3b6b] to-[#ff5630]",
    learnMoreLink: "#discovery",
    getStartedLink: "#contact",
    getStartedText: "Book Session",
    row: "bottom",
  },
  {
    title: "AI-Enhanced Processes",
    description: "Optimizing workflows and products with smart AI integrations.",
    tagline: "Automation, intelligence, and adaptive growth.",
    usp: "AI-Powered | Human-Validated",
    icon: Cpu,
    color: "bg-black dark:bg-black",
    textColor: "text-white",
    gradient: "from-[#0095ff] to-[#b967ff]",
    learnMoreLink: "#ai",
    getStartedLink: "#contact",
    getStartedText: "Explore Options",
    row: "bottom",
  },
]

export function HeroSection() {
  return (
    <>
      {/* Hero Content */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 pb-20 md:pt-32 md:pb-20">
        <HeroBackground />

        <div className="container relative z-10 max-w-4xl">
          <div className="text-center">
            <p
              className="mb-6 text-base font-medium inline-block text-transparent bg-clip-text md:text-lg"
              style={{
                backgroundImage: "linear-gradient(to right, #0095ff, #4285f4, #b967ff, #e94c89, #ff3b6b, #ff5630)",
              }}
            >
              iOS Development · Product Strategy · AI Integrations
            </p>
            <h1 className="mb-6 text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              Pedro Castro
            </h1>
            <h2 className="mb-6 text-xl font-medium text-gray-700 dark:text-gray-300 sm:text-2xl md:text-3xl">
              Building Digital Products from Concept to Launch
            </h2>
          </div>

          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
            I build scalable digital products by combining code, AI, and strategy. From mobile apps to process
            automation, I help turn ideas into high-impact tools.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0071e3] px-8 py-6 text-white hover:bg-[#0077ed] dark:bg-[#0A84FF] dark:hover:bg-[#0077ed]"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* White Divider */}
      <div className="h-8 bg-white dark:bg-white/10 w-full relative z-10"></div>

      {/* Expertise Grid Section */}
      <section className="relative px-4 py-20 md:py-28">
        <HeroBackground />

        <div className="container-fluid relative z-10 mx-auto max-w-[1800px] px-4 lg:px-8">
          {/* Expertise Areas in 2x2 Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className={`group flex flex-col p-8 md:p-10 lg:p-12 ${area.color} ${area.textColor || "text-gray-900 dark:text-gray-100"} min-h-[420px] md:min-h-[480px] lg:min-h-[520px]`}
              >
                <div className="mb-6 flex items-center">
                  <div
                    className={`mr-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${area.gradient}`}
                  >
                    <area.icon className={`h-8 w-8 ${area.textColor || "text-white"}`} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{area.title}</h3>
                </div>

                <p className="mb-3 text-lg font-medium md:text-xl">{area.description}</p>
                <p className="mb-6 text-base opacity-80 md:mb-8">{area.tagline}</p>

                <div className="mt-2 mb-8">
                  <span className="text-xs font-medium uppercase tracking-wider opacity-70 md:text-sm">{area.usp}</span>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className={`rounded-full border-2 border-current px-6 py-3 font-medium transition-colors ${area.textColor || "text-gray-900 dark:text-gray-100"} hover:bg-transparent hover:opacity-80`}
                    asChild
                  >
                    <a href={area.learnMoreLink}>Learn More</a>
                  </Button>

                  <Button
                    variant="default"
                    size="lg"
                    className={`rounded-full bg-gradient-to-r ${area.gradient} px-6 py-3 font-medium text-white`}
                    asChild
                  >
                    <a href={area.getStartedLink}>
                      {area.getStartedText} <ArrowRight className="ml-1 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
