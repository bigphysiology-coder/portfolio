import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
  onClose: () => void
}

export default function CaseStudyModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null!)
  const panelRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' },
    ).fromTo(
      panelRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' },
      '-=0.15',
    )

    const prevFocus = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      tl.kill()
      document.removeEventListener('keydown', onKeyDown)
      prevFocus?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose })
    tl.to(panelRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.in',
    }).to(
      overlayRef.current,
      { opacity: 0, duration: 0.2 },
      '-=0.15',
    )
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="bg-surface-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-4 sm:p-8 shadow-2xl outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-accent font-medium mt-1">{project.tagline}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-text-secondary hover:text-white transition-colors cursor-pointer text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="space-y-6 text-text-secondary">
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-2">
              The Problem
            </h4>
            <p className="leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-2">
              My Role
            </h4>
            <p className="leading-relaxed">{project.role}</p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-2">
              Technical Challenge
            </h4>
            <p className="leading-relaxed">{project.challenge}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface border border-border rounded-md text-xs font-medium text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-accent text-surface font-display font-semibold rounded-lg text-sm hover:shadow-[0_0_25px_rgba(0,180,255,0.35)] transition-shadow duration-300"
            >
              Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-border text-text-primary font-display font-semibold rounded-lg text-sm hover:border-accent hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
