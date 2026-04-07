import Link from 'next/link'
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { profile } from '@/lib/data/profile'
import { getAllPostsMetadata } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Tech Blog — ${profile.name}`,
  description: 'Sharing thoughts on software engineering, product and technology.',
}

export default function BlogPage() {
  const posts = getAllPostsMetadata()

  return (
    <div className="min-h-svh bg-film-bg">
      {/* Film grain */}
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10">
        <PortfolioHeader 
          profile={profile} 
          title="Tech Blog" 
        />
        
        <div className="flex flex-col gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-white text-lg font-medium group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-film-meta font-mono text-xs shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex gap-2 mt-1">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))
          ) : (
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
          )}
        </div>
      </main>
    </div>
  )
}
