import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { ScrollTrigger } from '../../lib/gsap'

export default function FloatingContactButton() {
  const btnRef = useRef<HTMLAnchorElement>(null!)

  useEffect(() => {
    const el = btnRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(el, { opacity: 0, display: 'none' })
      return
    }

    const hero = document.getElementById('hero')

    const st = ScrollTrigger.create({
      trigger: hero,
      start: 'bottom top',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          display: 'flex',
        })
      },
      onLeaveBack: () => {
        gsap.to(el, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(el, { display: 'none' })
          },
        })
      },
    })

    return () => {
      st.kill()
    }
  }, [])

  return (
    <a
      ref={btnRef}
      href="#contact"
      className="fixed bottom-6 right-6 z-40 bg-accent text-surface w-14 h-14 rounded-full items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-shadow duration-300 opacity-0 scale-80 hidden"
      style={{ display: 'none' }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    </a>
  )
}
