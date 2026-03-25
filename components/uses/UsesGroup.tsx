import type { UsesGroup as UsesGroupType } from '@/lib/types'

export function UsesGroup({ title, items }: UsesGroupType) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white/50 text-xs font-mono uppercase tracking-widest">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.name} className="flex flex-col gap-0.5">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 text-sm hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-white/90 text-sm">{item.name}</span>
            )}
            {item.description && (
              <span className="text-white/40 text-xs">{item.description}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
