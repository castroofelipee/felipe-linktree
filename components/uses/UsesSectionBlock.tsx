import { UsesGroup } from './UsesGroup'
import type { UsesSection } from '@/lib/types'

export function UsesSectionBlock({ title, groups }: UsesSection) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-white text-base font-semibold border-b border-white/10 pb-3">{title}</h2>
      <div className="flex flex-col gap-7">
        {groups.map((group) => (
          <UsesGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  )
}
