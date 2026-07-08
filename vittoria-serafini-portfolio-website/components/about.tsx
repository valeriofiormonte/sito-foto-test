'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'

const stats = [
  { value: '12+', label: 'Years shooting' },
  { value: '400+', label: 'Stories told' },
  { value: '4', label: 'Disciplines' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
        <Reveal>
          <div className="relative">
            <motion.img
              src="/images/about-portrait.png"
              alt="Portrait of photographer Vittoria Serafini"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground sm:block">
              <p className="font-serif text-2xl leading-none">Vittoria</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-90">Behind the lens</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              About Me
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Always chasing the next frame
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Vittoria — a restless, curious photographer who believes the best
                images are made by showing up, moving fast, and staying present. I don&apos;t
                wait for the moment; I chase it.
              </p>
              <p>
                Whether I&apos;m composing a still life in soft window light or weaving through
                a crowded street, my approach is proactive and instinctive. Every shoot is a
                conversation, and I love turning fleeting energy into something you can hold
                onto forever.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-3xl text-foreground sm:text-4xl">{stat.value}</dt>
                  <dd className="mt-1 text-sm leading-snug text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
