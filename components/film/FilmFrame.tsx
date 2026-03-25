import type { ReactNode } from 'react'

interface FilmFrameProps {
  children: ReactNode
}

function FilmMetaBar() {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 text-[10px] font-mono tracking-widest text-film-meta select-none">
      <span>KODAK PORTRA 400</span>
      <span className="flex gap-3">
        <span>250 F 8.0</span>
        <span>M</span>
        <span>P80/2 120</span>
      </span>
      <span>50</span>
    </div>
  )
}

function FilmBottomBar() {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 text-film-meta select-none">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
        <polygon points="0,7 14,0 14,14" opacity="0.6" />
      </svg>
      <span className="font-mono text-[10px] tracking-widest">8</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
        <polygon points="14,7 0,0 0,14" opacity="0.6" />
      </svg>
    </div>
  )
}

export function FilmFrame({ children }: FilmFrameProps) {
  return (
    <div className="min-h-svh w-full bg-film-bg md:bg-neutral-950 md:flex md:items-center md:justify-center md:py-12">
      <div className="relative w-full md:max-w-sm md:rounded-[2rem] overflow-hidden md:shadow-[0_0_80px_rgba(0,0,0,0.9)]">
        {/* Film grain overlay */}
        <div className="film-grain pointer-events-none" aria-hidden="true" />

        {/* Top film strip */}
        <div className="bg-film-strip">
          <FilmMetaBar />
        </div>

        {/* Main content */}
        <div className="bg-film-bg">
          {children}
        </div>

        {/* Bottom film strip */}
        <div className="bg-film-strip">
          <FilmBottomBar />
        </div>
      </div>
    </div>
  )
}
