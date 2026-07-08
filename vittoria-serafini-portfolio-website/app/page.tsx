import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
