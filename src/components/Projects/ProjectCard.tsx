import { useRef, useCallback } from 'react'
import { gsap } from '../../lib/gsap'
import type { Project } from '../../data/projects'
import drivefortImg from '../../assets/drivefort.png'
import skolerrImg from '../../assets/skolerr.png'

interface Props {
  project: Project
  onExpand: () => void
}

const projectImages: Record<string, string> = {
  drivefort: drivefortImg,
  skolerr: skolerrImg,
}

export default function ProjectCard({ project, onExpand }: Props) {
  const cardRef = useRef<HTMLDivElement>(null!)
  const tiltRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    tiltRef.current = { x: y * -12, y: x * 12 }
    gsap.to(card, {
      rotateX: y * -12,
      rotateY: x * 12,
      duration: 0.4,
      ease: 'power2.out',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    tiltRef.current = { x: 0, y: 0 }
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
    })
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onExpand()
    }
  }, [onExpand])

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      className="card-gradient-border cursor-pointer group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onExpand}
      onKeyDown={handleKeyDown}
    >
      <div className="p-6 md:p-8" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center justify-end mb-5">
          <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent">
            {project.tagline}
          </span>
        </div>

        <div className="rounded-lg h-32 mb-5 overflow-hidden">
          <img
            src={projectImages[project.id]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3 text-sm">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-3 py-1 bg-surface border border-border rounded-md text-xs font-medium text-text-secondary">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-accent text-sm font-medium">
          <span>View case study</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
