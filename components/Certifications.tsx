const certs = [
  {
    icon: '🤖',
    name: 'Google AI Professional Certificate',
    issuer: 'Google · Coursera · 7 courses',
    year: '// April 2026',
    badge: '✓ completed', badgeType: 'done',
  },
  {
    icon: '🔐',
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google · Coursera · Foundations done',
    year: '// 2026',
    badge: '⟳ in progress', badgeType: 'wip',
  },
  {
    icon: '📚',
    name: 'CS50x — Intro to Computer Science',
    issuer: 'Harvard University · edX',
    year: '// 2026',
    badge: '⟳ in progress', badgeType: 'wip',
  },
  {
    icon: '🏆',
    name: 'Science Fair — Top 3 Finalist',
    issuer: 'Multiple projects · 1st–3rd place each time',
    year: '// School years',
    badge: '✓ awarded', badgeType: 'done',
  },
  {
    icon: '🎤',
    name: 'Inter-Debate Competitor',
    issuer: 'Club & inter-school debate competitions',
    year: '// Bangladesh',
    badge: '✓ participated', badgeType: 'done',
  },
  {
    icon: '🌐',
    name: 'IELTS Academic',
    issuer: 'British Council · Bangladesh',
    year: '// 2024 · Band 6.5',
    badge: '✓ B2 Upper Intermediate', badgeType: 'done',
  },
]

export default function Certifications() {
  return (
    <section
      id="certs"
      className="relative z-10 px-10 py-24"
      style={{ background:'radial-gradient(ellipse at top left,rgba(0,230,118,.025) 0%,transparent 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="section-label-line font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-2">credentials</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight mb-10">Certifications</h2>

        <div className="grid gap-5 stagger reveal" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
          {certs.map(c => (
            <div
              key={c.name}
              className="rounded-[12px] p-5 flex gap-4 items-start relative overflow-hidden group transition-all duration-200 hover:-translate-y-1"
              style={{ background:'var(--card)', border:'1px solid var(--border1)' }}
            >
              {/* Bottom gradient line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:'linear-gradient(90deg,var(--cyan),var(--purple))' }}
              />
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[22px] flex-shrink-0"
                style={{ background:'rgba(0,229,255,.08)', border:'1px solid var(--border2)' }}
              >
                {c.icon}
              </div>
              <div>
                <div className="text-[14px] font-medium text-white mb-1 leading-[1.4]">{c.name}</div>
                <div className="text-[12px] text-[var(--muted)]">{c.issuer}</div>
                <div className="font-mono text-[10px] text-[var(--cyan)] tracking-[.08em] mt-1">{c.year}</div>
                <span
                  className="inline-block font-mono text-[10px] tracking-[.06em] px-2 py-[2px] rounded mt-1"
                  style={
                    c.badgeType === 'done'
                      ? { background:'rgba(0,230,118,.1)', color:'var(--green)', border:'1px solid rgba(0,230,118,.2)' }
                      : { background:'rgba(255,215,64,.1)', color:'var(--amber)', border:'1px solid rgba(255,215,64,.2)' }
                  }
                >
                  {c.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
