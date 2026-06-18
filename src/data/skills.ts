export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'GSAP', 'Three.js', 'TanStack Query', 'Zustand', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Vite', 'Vercel', 'Render', 'Cloudinary', 'Playwright'],
  },
]
