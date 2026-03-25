import { SocialIcon } from './SocialIcon'
import type { SocialItem } from '@/lib/types'

interface SocialLinksProps {
  socials: SocialItem[]
}

export function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex items-center gap-7">
        {socials.map((social) => (
          <li key={social.id}>
            <SocialIcon platform={social.platform} href={social.href} icon={social.icon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
