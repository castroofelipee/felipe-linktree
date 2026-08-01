import { LinkTile } from './LinkTile'
import { LinkIcon } from '@/components/icons/LinkIcon'
import { SocialIconSvg } from '@/components/icons/SocialIconSvg'
import type { LinkItem, SocialItem } from '@/lib/types'

interface LinkGridProps {
  links: LinkItem[]
  socials: SocialItem[]
}

export function LinkGrid({ links, socials }: LinkGridProps) {
  return (
    <nav aria-label="Links">
      <ul className="grid grid-cols-3 gap-3 w-full">
        {links.map((link) => (
          <li key={link.id}>
            <LinkTile href={link.href} label={link.label}>
              <LinkIcon name={link.icon} className="w-5 h-5" />
            </LinkTile>
          </li>
        ))}
        {socials.map((social) => (
          <li key={social.id}>
            <LinkTile href={social.href} label={social.platform}>
              <SocialIconSvg name={social.icon} className="w-5 h-5" />
            </LinkTile>
          </li>
        ))}
      </ul>
    </nav>
  )
}
