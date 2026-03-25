import type { Project } from '@/lib/types'

const statusColor: Record<Project['status'], string> = {
  active: 'bg-emerald-500/20 text-emerald-400',
  completed: 'bg-white/10 text-white/50',
  archived: 'bg-white/5 text-white/30',
}

const statusLabel: Record<Project['status'], string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

type ProjectCardProps = Omit<Project, 'id' | 'type'>

export function ProjectCard({ name, description, technologies, href, status, featured }: ProjectCardProps) {
  const baseClass =
    'group flex flex-col gap-3 p-4 rounded-xl border transition-all duration-200'
  const featuredClass =
    'bg-film-meta/5 border-film-meta/30 hover:border-film-meta/60 hover:bg-film-meta/8'
  const defaultClass =
    'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'

  const content = (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {featured && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 text-film-meta shrink-0"
              aria-hidden="true"
            >
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
            </svg>
          )}
          <span className={`font-medium text-sm ${featured ? 'text-white' : 'text-white/90'}`}>
            {name}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColor[status]}`}>
            {statusLabel[status]}
          </span>
          {href && (
            <GitHubIcon className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
          )}
        </div>
      </div>

      <p className="text-white/60 text-xs leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              featured
                ? 'text-film-meta/80 border-film-meta/20 bg-film-meta/5'
                : 'text-white/40 border-white/10'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${featured ? featuredClass : defaultClass}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={`${baseClass} ${featured ? featuredClass : defaultClass}`}>
      {content}
    </div>
  )
}
