import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cpu, Search, ArrowRight } from "lucide-react"
import { HeroBackground } from "./hero-background"
import { cn } from "@/lib/utils"

const expertiseAreas = [
  {
    title: "iOS Development",
    description: "Native apps for iPhone, iPad, and Apple Watch.",
    icon: Smartphone,
    bgLight: "from-[#f1f5f9] to-[#e0f2fe]",
    bgDark: "from-[#0a0c10] to-[#111827]",
    buttonColor: "bg-[#0071e3] hover:bg-[#0077ed]",
    learnMore: "#ios",
    action: "#contact",
    cta: "Start Project",
  },
  {
    title: "Full-Stack MVPs",
    description: "Fast, scalable web apps with AI built-in.",
    icon: Code,
    bgLight: "from-[#fef3f2] to-[#fae8ff]",
    bgDark: "from-[#1a1216] to-[#241221]",
    buttonColor: "bg-[#6f42c1] hover:bg-[#804cd2]",
    learnMore: "#fullstack",
    action: "#contact",
    cta: "Get Started",
  },
  {
    title: "Product Strategy",
    description: "Idea validation, roadmapping, and launch strategy.",
    icon: Search,
    bgLight: "from-[#fefce8] to-[#fff5db]",
    bgDark: "from-[#191d0f] to-[#2a2313]",
    buttonColor: "bg-[#ff9500] hover:bg-[#ffa733]",
    learnMore: "#strategy",
    action: "#contact",
    cta: "Book Call",
  },
  {
    title: "AI Automation",
    description: "Integrate smart assistants and predictive tools.",
    icon: Cpu,
    bgLight: "from-[#f0fdf4] to-[#d1fae5]",
    bgDark: "from-[#0f2116] to-[#19332c]",
    buttonColor: "bg-[#10b981] hover:bg-[#22c55e]",
    learnMore: "#ai",
    action: "#contact",
    cta: "Explore AI",
  },
]

export function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 pb-20 md:pt-32 md:pb-20">
        <HeroBackground />

        <div className="container relative z-10 max-w-4xl text-center">
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
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I build scalable digital products by combining code, AI, and strategy. From mobile apps to process
            automation, I help turn ideas into high-impact tools.
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

      {/* Expertise Grid */}
      <section className="w-full px-4 py-16 lg:py-24 bg-white dark:bg-neutral-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className={cn(
                "flex flex-col justify-between rounded-3xl p-8 transition hover:shadow-md shadow-sm",
                "bg-gradient-to-b",
                `from-white to-gray-100 dark:${area.bgDark}`,
                "text-gray-900 dark:text-white"
              )}
            >
              <div>
                <area.icon className="mb-4 h-10 w-10" />
                <h3 className="text-2xl font-semibold">{area.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{area.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" asChild className="rounded-full border px-6">
                  <a href={area.learnMore}>Learn more</a>
                </Button>
                <Button asChild className={cn("rounded-full px-6 text-white", area.buttonColor)}>
                  <a href={area.action}>
                    {area.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
