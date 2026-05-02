import type { ReactNode } from 'react'

interface FilmFrameProps {
  children: ReactNode
}

export function FilmFrame({ children }: FilmFrameProps) {
  return (
    <div className="min-h-svh w-full bg-film-bg md:flex md:items-center md:justify-center md:py-12">
      <div className="relative w-full bg-film-bg overflow-hidden">
        {/* Film grain overlay */}
        <div className="film-grain pointer-events-none" aria-hidden="true" />

        {children}
      </div>
    </div>
  )
}
