import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'

export default function Contact() {
  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 40 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 md:py-24 px-4 max-w-3xl mx-auto text-center"
    >
      <div className="section-accent mb-4 inline-block">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Let's Build Something
        </h2>
      </div>
      <p className="text-text-secondary text-sm sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto mt-6 sm:mt-8">
        Available for full-time roles — remote or Nigeria-based. If you have a project, an
        idea, or an opportunity, let's talk.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 px-4 sm:px-0">
        <a
          href="mailto:abdulrasheedabdulrazak4@gmail.com"
          className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-accent text-surface font-display font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,180,255,0.4)] transition-shadow duration-300 text-sm sm:text-base"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/abdulrasheeda"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border border-border text-text-primary font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 text-sm sm:text-base"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bigphysiology-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border border-border text-text-primary font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 text-sm sm:text-base"
        >
          GitHub
        </a>
      </div>

      <div className="border-t border-border pt-8">
        <a
          href="https://drive.google.com/file/d/1N1z_IzB-Ps535bQZgCn0Ww7p-q0d2OvD/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 text-sm sm:text-base"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  )
}
