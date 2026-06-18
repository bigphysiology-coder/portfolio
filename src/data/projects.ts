export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  role: string
  challenge: string
  stack: string[]
  liveUrl: string
  githubUrl: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'drivefort',
    title: 'Drivefort',
    tagline: 'Production car marketplace platform',
    problem:
      'Buying and selling cars online lacks a streamlined experience: fragmented listings, poor image handling, and no role-based access for dealership management.',
    role: 'Full-stack engineer, designed the PERN stack architecture, built the React frontend with advanced UX, developed RESTful APIs, and managed the full deployment pipeline.',
    challenge:
      'Handling efficient multi-image uploads (up to 20 per listing) without degrading UX. Solved by engineering a media pipeline using Multer for server-side processing paired with Cloudinary for CDN-optimized storage and delivery, with parallel upload queues and progressive loading on the frontend.',
    stack: ['PostgreSQL', 'Express', 'JavaScript', 'React', 'Node.js', 'Cloudinary', 'JWT'],
    liveUrl: 'https://drivefort.vercel.app',
    githubUrl: 'https://github.com/bigphysiology-coder/drivefort',
    image: '',
  },
  {
    id: 'skolerr',
    title: 'Skolerr',
    tagline: 'Intelligent Scholarship discovery & matching engine',
    problem:
      'Students waste hours manually searching scattered scholarship sources with no way to filter by their specific profile: GPA, degree level, country preference, or funding type.',
    role: 'Founder & Full-stack Engineer, designed the recommendation algorithm, built the web scraping pipeline, implemented auth, and deployed the full system.',
    challenge:
      'Aggregating scholarship data from 8+ inconsistent sources with different formats, duplicate entries, and varying update frequencies. Built a Playwright + Cheerio scraping pipeline with concurrency control, deduplication logic, and cron-scheduled weekly updates that normalizes all data into a unified schema.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Playwright'],
    liveUrl: 'https://skolerr.vercel.app',
    githubUrl: 'https://github.com/bigphysiology-coder/skolerr',
    image: '',
  },
]
