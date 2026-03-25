import { LinkButton } from './LinkButton'
import type { LinkItem } from '@/lib/types'

interface LinkListProps {
  links: LinkItem[]
}

export function LinkList({ links }: LinkListProps) {
  return (
    <nav aria-label="Links principais">
      <ul className="flex flex-col gap-3 w-full">
        {links.map((link) => (
          <li key={link.id}>
            <LinkButton label={link.label} href={link.href} icon={link.icon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
