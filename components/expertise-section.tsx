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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Areas of Expertise
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col items-center rounded-lg p-6 text-center transition-all duration-200 hover:translate-y-[-4px] hover:bg-white hover:shadow-md dark:hover:bg-gray-800"
            >
              <div className="mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <area.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-50">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
