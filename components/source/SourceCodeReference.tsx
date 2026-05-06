import Link from 'next/link'
import { LinkIcon } from '@/components/icons/LinkIcon'
import type { LinkItem } from '@/lib/types'

interface SourceCodeReferenceProps {
  link: Omit<LinkItem, 'id'>
}

export function SourceCodeReference({ link }: SourceCodeReferenceProps) {
  return (
    <div className="absolute right-5 top-5 z-30 sm:right-6 sm:top-6">
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        title={link.label}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
      >
        <LinkIcon name={link.icon} className="h-5 w-5" />
        <span className="sr-only">{link.label}</span>
      </Link>
    </div>
  )
}
