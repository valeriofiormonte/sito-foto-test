'use client'

import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.img
        src="/images/hero.png"
        alt="Emotive fine-art photograph by Vittoria Serafini"
        className="absolute inset-0 size-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-primary"
        >
          Photographer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          Vittoria Serafini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Capturing life, one frame at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10"
        >
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:gap-3 hover:brightness-110"
          >
            Explore the Gallery
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#gallery"
        aria-label="Scroll to gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="size-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
