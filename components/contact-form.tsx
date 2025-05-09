"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Optionally, you could add an error state here to show an error message
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-[#0071e3] focus:ring-[#0071e3]"
          />
        </div>

        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-[#0071e3] focus:ring-[#0071e3]"
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Your message"
            value={formState.message}
            onChange={handleChange}
            required
            className="min-h-[150px] rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-[#0071e3] focus:ring-[#0071e3] dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#0071e3] px-8 py-6 text-white hover:bg-[#0077ed]"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Let’s talk
            <Send className="h-4 w-4" />
          </span>
        )}
      </Button>

      {isSubmitted && (
        <div className="mt-4 rounded-md bg-green-50 p-4 text-center text-green-800 ">
          Thank you! Your message has been sent.
        </div>
      )}
    </form>
  )
}
