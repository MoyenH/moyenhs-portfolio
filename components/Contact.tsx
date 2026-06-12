const links = [
  { icon: '@',  label: 'moyen10official.mh@gmail.com', href: 'mailto:moyen10official.mh@gmail.com' },
  { icon: '🔗', label: 'bio.link/moyenhs',             href: 'https://bio.link/moyenhs' },
  { icon: 'in', label: 'linkedin.com/in/md-moyen-hs', href: 'https://www.linkedin.com/in/md-moyen-hs/' },
  { icon: 'f',  label: 'facebook.com/Moyen.HS',        href: 'https://www.facebook.com/Moyen.HS' },
  { icon: '{}', label: 'github.com/MoyenH',            href: 'https://github.com/MoyenH' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 px-10 py-24"
      style={{ background:'radial-gradient(ellipse at center,rgba(179,136,255,.03) 0%,transparent 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="section-label-line font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-2">contact</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight mb-10">Let's connect</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Text */}
          <div className="reveal-left">
            <p className="text-[var(--muted)] text-[15px] leading-[1.9] mb-4">
              I'm always open to collaborating on{' '}
              <strong className="text-[var(--text)] font-medium">AI or cybersecurity projects</strong>,
              or just talking tech, creative content, or ideas.
            </p>
            <p className="text-[var(--muted)] text-[15px] leading-[1.9] mb-4">
              Based in <strong className="text-[var(--text)] font-medium">Dhaka, Bangladesh</strong> — available for collaboration,
              freelance video editing, content creation, and AI/tech projects.
            </p>
            <p className="text-[var(--muted)] text-[15px] leading-[1.9]">
              Currently studying at <strong className="text-[var(--text)] font-medium">UITS</strong> and building skills every single day.
            </p>
            <div className="font-mono text-[12px] text-[var(--cyan)] mt-6">// response time: within 24 hours</div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 reveal-right stagger">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 text-[var(--muted)] text-[14px] px-5 py-4 rounded-[10px] transition-all duration-200 hover:translate-x-[6px] group"
                style={{ background:'var(--card)', border:'1px solid var(--border1)' }}
              >
                <span
                  className="font-mono text-[11px] text-[var(--cyan)] w-6 text-center flex-shrink-0"
                >
                  {l.icon}
                </span>
                <span className="group-hover:text-[var(--cyan)] transition-colors">{l.label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
