'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

type Work = {
  category: string
  caption: string
  image: string
  span: string
}

const works: Work[] = [
  {
    category: 'Still Life',
    caption: 'Quiet compositions & textures',
    image: '/images/still-life-1.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    category: 'Portrait',
    caption: 'Faces, emotion & presence',
    image: '/images/portrait-1.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    category: 'Street',
    caption: 'Fleeting moments in motion',
    image: '/images/street-1.png',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    category: 'Events',
    caption: 'Celebration & connection',
    image: '/images/events-1.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    category: 'Portrait',
    caption: 'Character studies in light',
    image: '/images/portrait-2.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    category: 'Street',
    caption: 'Light, shadow & the city',
    image: '/images/street-2.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    category: 'Events',
    caption: 'Nights worth remembering',
    image: '/images/events-2.png',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    category: 'Still Life',
    caption: 'Warmth in the everyday',
    image: '/images/still-life-2.png',
    span: 'md:col-span-1 md:row-span-1',
  },
]

function GalleryCard({ work }: { work: Work }) {
  return (
    <motion.figure
      whileHover="hover"
      className="group relative h-full w-full overflow-hidden rounded-2xl bg-card"
    >
      <div className="relative h-full w-full overflow-hidden">
        <motion.img
          src={work.image}
          alt={`${work.category} photography — ${work.caption}`}
          className="size-full object-cover"
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
          variants={{ hover: { opacity: 0.7 } }}
          initial={{ opacity: 1 }}
        />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
        <div className="overflow-hidden">
          <motion.span
            variants={{ hover: { y: 0, opacity: 1 } }}
            initial={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            {work.category}
          </motion.span>
          <h3 className="font-serif text-xl text-foreground md:text-2xl">{work.caption}</h3>
        </div>
        <motion.span
          variants={{ hover: { scale: 1, opacity: 1 } }}
          initial={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </motion.span>
      </figcaption>
    </motion.figure>
  )
}

export function PortfolioGrid() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Selected Work
            </p>
            <h2 className="max-w-xl text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              A collection across four worlds
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            From still life to the unpredictable energy of the street, each frame is an
            invitation to feel something.
          </p>
        </div>
      </Reveal>

      <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 md:grid-cols-4">
        {works.map((work, i) => (
          <Reveal key={`${work.category}-${i}`} delay={(i % 4) * 0.08} className={work.span}>
            <GalleryCard work={work} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
