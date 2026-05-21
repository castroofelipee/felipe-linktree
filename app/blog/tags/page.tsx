import Link from 'next/link'
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { profile } from '@/lib/data/profile'
import { getAllTags } from '@/lib/tags'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Tags — ${profile.name}`,
  description: 'Browse blog posts by topic.',
}

export default function TagsIndexPage() {
  const tags = getAllTags()

  return (
    <div className="min-h-svh bg-film-bg">
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10">
        <PortfolioHeader profile={profile} title="Tags" />

        <Link
          href="/blog"
          className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to blog
        </Link>

        {tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {tags.map(({ slug, tag, count }) => (
              <li key={slug}>
                <Link
                  href={`/blog/tags/${slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/70 border border-white/10 hover:border-white/30 hover:text-white px-3 py-1.5 rounded-full transition-colors"
                >
                  <span>#{tag}</span>
                  <span className="text-white/40">{count}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-film-meta font-mono text-sm">No tags yet.</p>
        )}
      </main>
    </div>
  )
}
