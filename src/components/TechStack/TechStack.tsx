import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'
import { skillGroups } from '../../data/skills'
import TechBadge from './TechBadge'

export default function TechStack() {
  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 60 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="py-16 md:py-24 px-4 max-w-5xl mx-auto"
    >
      <div className="section-accent mb-8 sm:mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Tech Stack
        </h2>
      </div>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-sm uppercase tracking-widest text-accent mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
