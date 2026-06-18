import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 40 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-16 md:py-24 px-4 max-w-3xl mx-auto"
    >
      <div className="section-accent mb-8 sm:mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Certifications
        </h2>
      </div>

      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex items-center gap-4 bg-surface-card border border-border rounded-lg p-5">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4FF" strokeWidth="2">
                <path d="M12 15l-2 5 2-1 2 1-2-5z" />
                <path d="M9 11l-3 3 3-1-1-3 1 3z" />
                <circle cx="12" cy="8" r="4" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                {cert.name}
              </h3>
              <p className="text-text-secondary text-sm">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
