interface AboutSectionProps {
  summary: string
}

export function AboutSection({ summary }: AboutSectionProps) {
  return (
    <section>
      <SectionTitle>About me</SectionTitle>
      <p className="text-white/70 text-sm leading-relaxed">{summary}</p>
    </section>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
      {children}
    </h2>
  )
}
