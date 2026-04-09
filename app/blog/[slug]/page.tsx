import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { ComponentPropsWithoutRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostsMetadata } from '@/lib/posts'
import { profile } from '@/lib/data/profile'
import { BlogSignature } from '@/components/blog/BlogSignature'
import type { Metadata } from 'next'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

type CodeRendererProps = ComponentPropsWithoutRef<'code'> & {
  inline?: boolean
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} — ${profile.name}`,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: post.coverImage ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPostsMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-svh bg-film-bg">
      {/* Film grain */}
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm w-fit mb-4"
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

        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-4">
            <time className="text-film-meta font-mono text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <h1 className="text-white text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs font-mono text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {post.coverImage ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : null}

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ ...props }) => <h1 className="text-white text-3xl font-bold mt-10 mb-6" {...props} />,
                h2: ({ ...props }) => <h2 className="text-white text-2xl font-semibold mt-10 mb-4 border-b border-white/10 pb-2" {...props} />,
                h3: ({ ...props }) => <h3 className="text-white text-xl font-semibold mt-8 mb-3" {...props} />,
                p: ({ ...props }) => <p className="text-white/80 leading-relaxed mb-6" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc list-outside ml-6 mb-6 text-white/80 space-y-2" {...props} />,
                ol: ({ ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 text-white/80 space-y-2" {...props} />,
                li: ({ ...props }) => <li className="pl-1" {...props} />,
                blockquote: ({ ...props }) => (
                  <blockquote className="border-l-4 border-white/20 pl-6 italic my-8 text-white/70" {...props} />
                ),
                code: ({ className, children, ...props }: CodeRendererProps) => {
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto my-6 font-mono text-sm leading-relaxed text-white/90">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-white" {...props}>
                      {children}
                    </code>
                  )
                },
                a: ({ ...props }) => (
                  <a className="text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all" {...props} />
                ),
                hr: () => <hr className="border-white/10 my-10" />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <BlogSignature />
        </article>
      </main>
    </div>
  )
}
