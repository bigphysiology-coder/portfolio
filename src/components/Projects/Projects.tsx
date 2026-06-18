import { useState } from 'react'
import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import CaseStudyModal from './CaseStudyModal'
import type { Project } from '../../data/projects'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)

  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 60 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 md:py-24 px-4 max-w-5xl mx-auto"
    >
      <div className="section-accent mb-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Featured Projects
        </h2>
      </div>
      <p className="text-text-secondary text-sm sm:text-lg mb-8 sm:mb-12 max-w-xl">
        Real products shipped to production — from concept to deployment.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onExpand={() => setExpandedProject(project)}
          />
        ))}
      </div>

      {expandedProject && (
        <CaseStudyModal
          project={expandedProject}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </section>
  )
}
