import { useGSAPScrollTrigger } from '../../hooks/useGSAPScrollTrigger'
import profileImg from '../../assets/profile.jpeg'

export default function About() {
  const sectionRef = useGSAPScrollTrigger<HTMLElement>(
    { from: { opacity: 0, y: 40 } },
    [],
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 px-4 max-w-3xl mx-auto"
    >
      <div className="section-accent mb-6 sm:mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <img
          src={profileImg}
          alt="Abdulrasheed Abdulrazak"
          className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shrink-0 border border-border"
        />

        <div className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg flex-1">
        <p>
          I'm a Full Stack Software Engineer specializing in the PERN stack — PostgreSQL, Express,
          React, and Node.js. I build production-grade web applications from the ground up, handling
          everything from system architecture and database design to frontend UX and cloud deployment.
        </p>
        <p>
          I've independently designed, built, and shipped two full-stack products serving real users:
          <span className="text-accent"> Drivefort</span>, a car marketplace with Cloudinary media
          pipelines and JWT admin auth, and{' '}
          <span className="text-accent"> Skolerr</span>, an intelligent scholarship discovery
          platform with a Playwright web scraping engine and a 100-point recommendation algorithm.
        </p>
        <p>
          Before software engineering, my background in Anatomy (B.Tech, LAUTECH) trained me to
          think in systems — a perspective I bring directly to how I architect data models,
          design APIs, and debug production issues.
        </p>
      </div>
      </div>
    </section>
  )
}
