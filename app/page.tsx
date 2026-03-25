import { FilmFrame } from '@/components/film/FilmFrame'
import { ProfilePhoto } from '@/components/profile/ProfilePhoto'
import { ProfileInfo } from '@/components/profile/ProfileInfo'
import { LinkList } from '@/components/links/LinkList'
import { SocialLinks } from '@/components/social/SocialLinks'
import { profile } from '@/lib/data/profile'
import { links } from '@/lib/data/links'
import { socials } from '@/lib/data/socials'

export default function HomePage() {
  return (
    <FilmFrame>
      <div className="flex flex-col items-center gap-8 px-6 py-12">
        <div className="flex flex-col items-center gap-5">
          <ProfilePhoto
            src={profile.photoSrc}
            alt={profile.photoAlt}
            initials={profile.initials}
            size={96}
          />
          <ProfileInfo name={profile.name} bio={profile.bio} />
        </div>

        <LinkList links={links} />

        <SocialLinks socials={socials} />
      </div>
    </FilmFrame>
  )
}
