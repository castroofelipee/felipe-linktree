import Link from 'next/link'
import Image from 'next/image'
import { UsesSectionBlock } from '@/components/uses/UsesSectionBlock'
import { usesSections, usesIntro, setupImage } from '@/lib/data/uses'
import { profile } from '@/lib/data/profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Uses — ${profile.name}`,
  description: usesIntro,
}

export default function UsesPage() {
  return (
    <div className="min-h-svh bg-film-bg">
      <div className="film-grain pointer-events-none fixed" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-10 flex flex-col gap-10">
        {/* Back */}
        <Link
          href="/"
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
          Go back
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl font-semibold">/uses</h1>
          <p className="text-white/60 text-sm leading-relaxed">{usesIntro}</p>
        </div>

        {/* Setup photo */}
        {setupImage && (
          <figure className="flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src={setupImage.src}
                alt={setupImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 672px) 100vw, 672px"
              />
            </div>
            <figcaption className="text-white/30 text-xs text-center">{setupImage.alt}</figcaption>
          </figure>
        )}

        {/* Sections */}
        {usesSections.map((section) => (
          <UsesSectionBlock key={section.id} {...section} />
        ))}
      </main>
    </div>
  )
}
