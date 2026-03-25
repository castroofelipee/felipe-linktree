import { SectionTitle } from './AboutSection'
import { ProjectCard } from './ProjectCard'
import type { Project } from '@/lib/types'

interface ProjectsSectionProps {
  projects: Project[]
}

function ProjectGroup({ title, items }: { title: string; items: Project[] }) {
  if (items.length === 0) return null
  return (
    <div className="flex flex-col gap-3">
      <span className="text-white/40 text-xs">{title}</span>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            href={project.href}
            status={project.status}
            featured={project.featured}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featured = projects.filter((p) => p.featured)
  const international = projects.filter((p) => p.type === 'international' && !p.featured)
  const opensource = projects.filter((p) => p.type === 'opensource' && !p.featured)
  const personal = projects.filter((p) => p.type === 'personal' && !p.featured)

  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col gap-6">
        <ProjectGroup title="Featured" items={featured} />
        <ProjectGroup title="International" items={international} />
        <ProjectGroup title="Open Source" items={opensource} />
        <ProjectGroup title="Personal" items={personal} />
      </div>
    </section>
  )
}
