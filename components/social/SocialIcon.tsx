import { SocialIconSvg } from '@/components/icons/SocialIconSvg'
import type { SocialItem } from '@/lib/types'

type SocialIconProps = Omit<SocialItem, 'id'>

export function SocialIcon({ platform, href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={platform}
      className="text-white/80 hover:text-white transition-colors active:scale-90"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIconSvg name={icon} className="w-6 h-6" />
    </a>
  )
}
