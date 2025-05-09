import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "HealthTrack Pro",
    description: "iOS app for personal health monitoring and analytics",
    status: "Live",
    link: "#",
  },
  {
    title: "AI Document Analyzer",
    description: "Extract insights from documents using advanced NLP",
    status: "Beta",
    link: "#",
  },
  {
    title: "Process Automation Suite",
    description: "Enterprise workflow automation platform",
    status: "Coming Soon",
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
          Selected Projects
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-medium">
                  {project.status}
                </Badge>
              </div>
              <p className="mb-6 flex-1 text-gray-600">{project.description}</p>
              <Button
                variant="ghost"
                className="group mt-auto flex w-full items-center justify-center gap-2 text-gray-700"
                asChild
              >
                <a href={project.link}>
                  Try it
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
