import Link from 'next/link'
import { LinkIcon } from '@/components/icons/LinkIcon'
import type { LinkItem } from '@/lib/types'

interface SourceCodeReferenceProps {
  link: Omit<LinkItem, 'id'>
}

export function SourceCodeReference({ link }: SourceCodeReferenceProps) {
  return (
    <div className="w-full flex justify-center">
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <LinkIcon name={link.icon} className="h-4 w-4" />
        </span>
        <span>{link.label}</span>
      </Link>
    </div>
  )
}
