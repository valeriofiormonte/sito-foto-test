'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Check, Send } from 'lucide-react'
import { Reveal } from './reveal'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24 lg:py-32">
      <Reveal>
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Let&apos;s create something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have a story, an event, or an idea in mind? Send a note and I&apos;ll get back to
            you soon.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" type="text" placeholder="Your name" />
            <Field id="email" label="Email" type="email" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 sm:w-auto"
          >
            {sent ? (
              <>
                Message sent
                <Check className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Send message
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </>
            )}
          </motion.button>
        </form>
      </Reveal>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}
