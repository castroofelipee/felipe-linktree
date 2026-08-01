import Link from 'next/link'
import type { ReactNode } from 'react'

interface LinkTileProps {
  href: string
  label: string
  children: ReactNode
}

const tileClass =
  'flex flex-col items-center justify-center gap-2 aspect-square w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-center transition-colors hover:bg-white/10 active:scale-[0.98]'

function TileContent({ label, children }: Pick<LinkTileProps, 'label' | 'children'>) {
  return (
    <>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 shrink-0">
        {children}
      </span>
      <span className="text-[11px] font-medium text-white/70 leading-tight line-clamp-2 px-1">
        {label}
      </span>
    </>
  )
}

export function LinkTile({ href, label, children }: LinkTileProps) {
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a href={href} className={tileClass} target="_blank" rel="noopener noreferrer">
        <TileContent label={label}>{children}</TileContent>
      </a>
    )
  }

  return (
    <Link href={href} className={tileClass}>
      <TileContent label={label}>{children}</TileContent>
    </Link>
  )
}
