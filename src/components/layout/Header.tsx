import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from '../../lib/gsap'

function focusTrap(element: HTMLElement, active: boolean) {
  if (!active) return
  const focusable = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  const handler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }
  document.addEventListener('keydown', handler)
  return () => document.removeEventListener('keydown', handler)
}

const navItems = [
  { label: 'Projects', target: 'projects' },
  { label: 'Tech Stack', target: 'tech-stack' },
  { label: 'About', target: 'about' },
  { label: 'Education', target: 'education' },
  { label: 'Contact', target: 'contact' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null!)
  const drawerRef = useRef<HTMLDivElement>(null!)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(headerRef.current, { opacity: 1, y: 0 })
      return
    }

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.5,
    })

    const onResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!drawerRef.current) return
    const cleanup = focusTrap(drawerRef.current, menuOpen)
    return () => cleanup?.()
  }, [menuOpen])

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pb-4 bg-surface/80 backdrop-blur-sm"
      >
        <nav className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display text-lg font-bold text-white hover:text-accent transition-colors duration-300 cursor-pointer"
          >
            AA
          </button>

          <ul className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => scrollTo(item.target)}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className={`sm:hidden flex flex-col gap-1.5 p-2 cursor-pointer ${menuOpen ? 'hamburger-open' : ''}`}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-30 sm:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        ref={drawerRef}
        className={`fixed top-20 right-4 w-64 bg-surface border border-border rounded-xl z-40 sm:hidden flex flex-col px-6 py-6 transition-all duration-300 ease-in-out shadow-2xl ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-lg sm:text-xl text-white hover:text-accent transition-colors duration-300 font-display font-medium cursor-pointer text-left py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
