import { Code, Smartphone, Cpu } from "lucide-react"

const expertiseAreas = [
  {
    title: "iOS App Development",
    description: "Swift, SwiftUI, UIKit",
    icon: Smartphone,
  },
  {
    title: "AI Integration",
    description: "Machine Learning, NLP, Computer Vision",
    icon: Cpu,
  },
  {
    title: "Software Architecture",
    description: "Scalable Systems, Cloud Infrastructure",
    icon: Code,
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-50 px-8 lg:px-10 2xl:px-20">
      <div className="container max-w-[100rem] mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
          Areas of Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-x-10 lg:gap-y-12 xl:gap-x-10 xl:gap-y-16">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col items-center rounded-lg text-center transition-all duration-200 
                hover:translate-y-[-4px] hover:bg-white hover:shadow-md 
                min-h-[300px] aspect-[4/3] justify-center px-10"
            >
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <area.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{area.title}</h3>
              <p className="text-gray-600 max-w-prose">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
