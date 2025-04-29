import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-28 dark:bg-gray-900">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Let's build something together.
          </h2>

          <p className="mb-10 text-gray-600 dark:text-gray-400">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as
            possible.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
