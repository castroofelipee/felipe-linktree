import { SectionTitle } from './AboutSection'
import type { Experience } from '@/lib/types'

const typeLabel: Record<Experience['type'], string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  freelance: 'Freelance',
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section>
      <SectionTitle>Experience</SectionTitle>
      <ol className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <li key={exp.id} className="relative flex gap-4">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-film-meta mt-1.5 shrink-0" />
              {index < experiences.length - 1 && (
                <div className="w-px flex-1 bg-white/10 mt-2" />
              )}
            </div>

            <div className="flex flex-col gap-1 pb-2">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-white font-medium text-sm">{exp.role}</span>
                <span className="text-white/50 text-xs">@ {exp.company}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40 font-mono">
                <span>{exp.period}</span>
                <span>·</span>
                <span>{exp.location}</span>
                <span>·</span>
                <span>{typeLabel[exp.type]}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-1">{exp.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
