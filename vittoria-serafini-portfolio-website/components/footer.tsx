import { Camera, Aperture, AtSign, Mail } from 'lucide-react'

const socials = [
  { label: 'Instagram', href: '#', Icon: Aperture },
  { label: 'Threads', href: '#', Icon: AtSign },
  { label: 'Email', href: 'mailto:hello@vittoriaserafini.com', Icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-10">
        <a href="#top" className="flex items-center gap-2 text-foreground">
          <Camera className="size-5 text-primary" aria-hidden="true" />
          <span className="font-serif text-lg tracking-wide">Vittoria Serafini</span>
        </a>

        <ul className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vittoria Serafini
        </p>
      </div>
    </footer>
  )
}
