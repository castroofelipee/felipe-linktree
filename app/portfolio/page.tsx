import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { AboutSection } from '@/components/portfolio/AboutSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { profile } from '@/lib/data/profile'
import { about, experiences, projects, skills } from '@/lib/data/portfolio'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Portfolio — ${profile.name}`,
  description: about.summary,
}

export default function PortfolioPage() {
  return (
    <div className="min-h-svh bg-film-bg">
      {/* Film grain */}
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10">
        <PortfolioHeader profile={profile} title={about.title} />
        <AboutSection summary={about.summary} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
      </main>
    </div>
  )
}
