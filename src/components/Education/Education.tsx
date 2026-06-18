import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'
import { education } from '../../data/education'

export default function Education() {
  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 40 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 md:py-24 px-4 max-w-3xl mx-auto"
    >
      <div className="section-accent mb-8 sm:mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Education
        </h2>
      </div>

      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.degree + item.school} className="border-l-2 border-accent/30 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="font-display text-lg font-semibold text-white">
                {item.degree} — {item.field}
              </h3>
              <span className="text-text-secondary text-sm font-mono mt-1 sm:mt-0">
                {item.period}
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              {item.school}
              <span className="text-text-secondary/60"> · {item.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
