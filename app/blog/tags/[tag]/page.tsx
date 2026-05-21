import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { profile } from '@/lib/data/profile'
import { findTagBySlug, getAllTags, getPostsByTag } from '@/lib/tags'
import type { Metadata } from 'next'

interface TagPageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const found = findTagBySlug(tag)

  if (!found) {
    return { title: 'Tag Not Found' }
  }

  return {
    title: `#${found.tag} — ${profile.name}`,
    description: `Posts tagged "${found.tag}".`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const found = findTagBySlug(tag)

  if (!found) {
    notFound()
  }

  const posts = getPostsByTag(tag)

  return (
    <div className="min-h-svh bg-film-bg">
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10">
        <PortfolioHeader profile={profile} title={`#${found.tag}`} />

        <Link
          href="/blog/tags"
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
          All tags
        </Link>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-white text-lg font-medium">{post.title}</h2>
                <time className="text-film-meta font-mono text-xs shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
