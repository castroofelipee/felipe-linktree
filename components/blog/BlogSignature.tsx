import Link from 'next/link'
import { profile } from '@/lib/data/profile'

export function BlogSignature() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4 text-sm text-white/40 leading-relaxed font-mono">
      <p>
        © Copyright {currentYear} by {profile.name}.
      </p>
      <p>
        Content licensed under the{' '}
        <a 
          href="https://creativecommons.org/licenses/by-nc/4.0/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-all"
        >
          Creative Commons Attribution-NonCommercial 4.0 International License
        </a>.
      </p>
      <p>
        Contact me via{' '}
        <Link href="https://www.linkedin.com/in/felipecastrodev/" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-all">linkedin</Link> or{' '}
        <Link href="https://github.com/castroofelipee" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-all">github</Link>.
      </p>
      <p>
        You can sponsor me on{' '}
        <Link href="https://github.com/sponsors/castroofelipee" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-all">github</Link>.
      </p>
      <p>
        Color scheme: auto, light, dark.
      </p>
    </footer>
  )
}
