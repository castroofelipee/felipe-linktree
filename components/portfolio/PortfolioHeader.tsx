import Link from 'next/link'
import { ProfilePhoto } from '@/components/profile/ProfilePhoto'
import type { ProfileData } from '@/lib/types'

interface PortfolioHeaderProps {
  profile: ProfileData
  title: string
}

export function PortfolioHeader({ profile, title }: PortfolioHeaderProps) {
  return (
    <header className="flex flex-col gap-6">
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

      <div className="flex items-center gap-4">
        <ProfilePhoto
          src={profile.photoSrc}
          alt={profile.photoAlt}
          initials={profile.initials}
          size={64}
        />
        <div>
          <h1 className="text-white text-xl font-semibold">{profile.name}</h1>
          <p className="text-film-meta text-sm font-mono">{title}</p>
        </div>
      </div>
    </header>
  )
}
