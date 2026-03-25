import type { Experience, Project, SkillGroup } from '../types'

export const about = {
  title: 'Software Engineer',
  summary:
    'Full-stack Engineer with extensive experience in frontend and backend software development. As a full-stack developer, my commitment is to build full-stack applications with Django, FastAPI, and JavaScript that impact thousands of userss.'
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'NaN Systems',
    role: 'Software Engineer',
    period: '2025 — Present',
    description:
      'At NaN Systems I work in the development and direct maintenance of a SaaS to help lawyers in Brazil manage their offices.',
    location: 'Rio de Janeiro, Brazil',
    type: 'full-time',
  },
  {
    id: 'exp-2',
    company: 'PinnSystem',
    role: 'Software Engineer',
    period: '2024 — 2026',
    description:
      'PinnSystem is my personal project where I test every single piece of code and build the future of Asset Management',
    location: 'Fortaleza, Brazil',
    type: 'part-time',
  },
  {
    id: 'exp-3',
    company: 'Delfos Energy',
    role: 'Backend Developer',
    period: '2023 — 2024',
    description:
      'At Delfos Energy I had direct contact with Python web development where I worked on developing tools to help the infrastructure team collect data from wind turbines.',
    location: 'Barcelona, Spain',
    type: 'full-time',
  },
  {
    id: 'exp-4',
    company: 'Accord Contabilidade',
    role: 'Intern',
    period: '2023 — 2023',
    description:
      'I worked as an intern on the automation and IT support team, using Python to create automations for the accounting and legal departments.',
    location: 'Fortaleza, Brazil',
    type: 'part-time',
  },
  {
    id: 'exp-5',
    company: 'Multitone BR',
    role: 'IT Assistant',
    period: '2022 — 2023',
    description:
      'I worked as an intern on the automation and IT support team, using Python to create automations for the accounting and legal departments.',
    location: 'Rio de Janeiro, Brazil',
    type: 'full-time',
  },
  {
    id: 'exp-6',
    company: 'Mundo pet',
    role: 'Intern',
    period: '2022 — 2022',
    description:
      'Where i started my carreer as software developer 🥹',
    location: 'Fortaleza, Brazil',
    type: 'part-time',
  },
]

export const projects: Project[] = [
  {
    id: 'venvalid',
    name: 'Venvalid',
    description:
      'Minimalist environment variable validation for Python, inspired by envalid from the Node.js ecosystem. Define schemas with validation before application startup.',
    technologies: ['Python'],
    href: 'https://github.com/PinnLabs/Venvalid',
    type: 'opensource',
    status: 'active',
    featured: true,
  },
  {
    id: 'fastapi-env-banner',
    name: 'fastapi-env-banner',
    description:
      'Lightweight library to add visual environment banners to FastAPI applications, with Swagger UI support. Inspired by django-env-notice.',
    technologies: ['Python', 'FastAPI'],
    href: 'https://github.com/PinnLabs/fastapi-env-banner',
    type: 'opensource',
    status: 'active',
    featured: true,
  },
  {
    id: 'zentube',
    name: 'ZenTube',
    description:
      'A platform focused on personal ownership of digital memories. Your deepest memories should be under your control — not dependent on external platforms.',
    technologies: ['TypeScript', 'CSS', 'JavaScript'],
    href: 'https://github.com/PinnLabs/ZenTube',
    type: 'personal',
    status: 'active',
    featured: true,
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Code Languages & Frameworks',
    items: ['TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Linux'],
  },
  {
    category: 'AI Usage',
    items: ['Claude code', 'Codex', 'Gemini', 'v0'],
  },
  {
    category: 'My faith 🙏🏻',
    items: ['Clean Code', 'TDD', 'CI/CD', 'Code Review', 'System Design'],
  },
]
