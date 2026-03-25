import { SectionTitle } from './AboutSection'
import type { SkillGroup } from '@/lib/types'

interface SkillsSectionProps {
  skills: SkillGroup[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <SectionTitle>Stack & Habilidades</SectionTitle>
      <div className="flex flex-col gap-4">
        {skills.map((group) => (
          <div key={group.category}>
            <span className="text-white/40 text-xs mb-2 block">{group.category}</span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
