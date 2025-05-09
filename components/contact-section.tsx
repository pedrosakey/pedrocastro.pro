import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
            I’m here to help you move forward.
          </h2>
          <p className="mb-10 text-gray-600">
          App idea, AI project, or freelance support — tell me what you’re working on and let’s make it happen.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

