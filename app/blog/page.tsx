import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { profile } from '@/lib/data/profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Tech Blog — ${profile.name}`,
  description: 'Sharing thoughts on software engineering, product and technology.',
}

export default function BlogPage() {
  return (
    <div className="min-h-svh bg-film-bg">
      {/* Film grain */}
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10 text-white/80">
        <PortfolioHeader 
          profile={profile} 
          title="Tech Blog" 
        />
        
        <section className="flex flex-col gap-6 items-center justify-center py-20 text-center">
          <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white/40"
              aria-hidden="true"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white">Coming soon</h2>
          <p className="max-w-md text-film-meta font-mono text-sm leading-relaxed">
            I'm currently working on some interesting articles. Check back soon for updates on engineering, architecture and product.
          </p>
        </section>
      </main>
    </div>
  )
}
