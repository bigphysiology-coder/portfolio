export interface Education {
  degree: string
  field: string
  period: string
  school: string
  location: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Anatomy',
    period: '2019 – 2024',
    school: 'Ladoke Akintola University of Technology (LAUTECH)',
    location: 'Nigeria',
  },
  {
    degree: 'Specialization Certificate',
    field: 'Software Engineering',
    period: '2025 – 2026',
    school: 'The Hong Kong University of Science and Technology',
    location: 'Online',
  },
]
