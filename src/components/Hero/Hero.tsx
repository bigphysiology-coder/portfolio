import HeroText from './HeroText'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="grid-overlay absolute inset-0" />

      <div className="hero-glow hidden sm:block" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="hero-glow hidden sm:block" style={{ bottom: '10%', right: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,100,255,0.06) 0%, transparent 70%)' }} />

      <HeroText />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-secondary"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
