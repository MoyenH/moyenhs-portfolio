export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border1)] px-10 py-8 flex items-center justify-between flex-wrap gap-4">
      <div className="font-mono text-[12px] text-[var(--muted)]">
        <span className="grad-text">moyenH.dev</span>
        {' '}·{' '}
        © 2026 Md Moyen Hossain Sorker
      </div>
      <div className="flex gap-6">
        {[
          { label: 'top ↑', href: '#home' },
          { label: 'email', href: 'mailto:moyen10official.mh@gmail.com' },
          { label: 'github', href: 'https://github.com/MoyenH' },
        ].map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-mono text-[12px] text-[var(--muted)] tracking-[.06em] hover:text-[var(--cyan)] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
