import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      gsap.set(el.querySelectorAll('[data-animate]'), { opacity: 1, y: 0, rotationY: 0, z: 0 })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      '.hero-eyebrow',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
    )
      .fromTo(
        '.hero-letter',
        { opacity: 0, y: -30, z: -60, rotationY: 90 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          rotationY: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'back.out(1.7)',
        },
        '-=0.3',
      )
      .fromTo(
        '.hero-subhead',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4',
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
        '-=0.3',
      )

    return () => {
      tl.kill()
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const splitLetters = (text: string) => {
    const words = text.split(' ')
    return words.map((word, wi) => (
      <span key={wi} className="inline-block whitespace-nowrap">
        {word.split('').map((char, ci) => (
          <span
            key={ci}
            className="hero-letter inline-block"
            style={{ perspective: '800px' }}
            data-animate
          >
            {char}
          </span>
        ))}
        {wi < words.length - 1 && '\u00A0'}
      </span>
    ))
  }

  return (
    <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto -mt-16 md:-mt-20">
      <span className="hero-eyebrow text-accent font-display text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase mb-4 sm:mb-5" data-animate>
        Abdulrasheed Abdulrazak
      </span>

      <h1 className="hero-headline font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 sm:mb-8 text-white tracking-tight" style={{ perspective: '1000px' }}>
        <span className="block">{splitLetters('Full Stack Developer')}</span>
        <span className="block">{splitLetters('Building Scalable Web Apps')}</span>
      </h1>

      <p className="hero-subhead text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" data-animate>
        I turn ideas into products people can actually use.
      </p>

      <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0" data-animate>
        <button
          onClick={() => scrollTo('projects')}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-accent text-surface font-display font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,180,255,0.4)] transition-shadow duration-300 cursor-pointer text-sm sm:text-base"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-border text-text-primary font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer text-sm sm:text-base"
        >
          Get in Touch
        </button>
      </div>
    </div>
  )
}
