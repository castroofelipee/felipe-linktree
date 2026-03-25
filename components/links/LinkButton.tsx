import Link from 'next/link'
import { LinkIcon } from '@/components/icons/LinkIcon'
import type { LinkItem } from '@/lib/types'

type LinkButtonProps = Omit<LinkItem, 'id'>

const buttonClass =
  'flex items-center gap-4 w-full bg-white rounded-full px-5 py-3.5 text-sm font-medium text-neutral-800 shadow-sm transition-transform active:scale-[0.98] hover:bg-white/90'

function ButtonContent({ label, icon }: Pick<LinkButtonProps, 'label' | 'icon'>) {
  return (
    <>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 shrink-0">
        <LinkIcon name={icon} className="w-4 h-4 text-neutral-700" />
      </span>
      <span className="flex-1 text-center pr-8">{label}</span>
    </>
  )
}

export function LinkButton({ label, href, icon }: LinkButtonProps) {
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer">
        <ButtonContent label={label} icon={icon} />
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClass}>
      <ButtonContent label={label} icon={icon} />
    </Link>
  )
}
