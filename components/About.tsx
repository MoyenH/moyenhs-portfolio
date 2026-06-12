export default function About() {
  const stats = [
    { num: '5.00', label: 'HSC GPA' },
    { num: '6.5',  label: 'IELTS Band' },
    { num: 'B2',   label: 'English Level' },
    { num: '7+',   label: 'Certifications' },
  ]

  const tags = [
    'AI / ML','Cybersecurity','Python','Adobe Suite',
    'Video Editing','Debate','Cycling','Gardening',
    'Digital Art','Problem Solving',
  ]

  const traits = ['Analytical','Trustworthy','Ethical','Calm under pressure','Team builder']

  return (
    <section
      id="about"
      className="section relative z-10 px-10 py-24"
      style={{ background: 'radial-gradient(ellipse at top right,rgba(0,229,255,.025) 0%,transparent 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="section-label-line font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-2">about</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight mb-10">Who I am</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">

          {/* Text */}
          <div className="reveal-left">
            <p className="text-[var(--muted)] leading-[1.95] text-[15px] mb-4">
              I'm a passionate <strong className="text-[var(--text)] font-medium">Computer Science student</strong> from Dhaka, Bangladesh,
              currently enrolled at <strong className="text-[var(--text)] font-medium">UITS (University of Information Technology and Sciences)</strong>.
              I have a deep curiosity for how AI systems work — and how to keep them secure.
            </p>
            <p className="text-[var(--muted)] leading-[1.95] text-[15px] mb-4">
              I hold a <strong className="text-[var(--text)] font-medium">Google AI Professional Certificate</strong> (7 courses, completed April 2026)
              and I'm actively working through the <strong className="text-[var(--text)] font-medium">Google Cybersecurity Certificate</strong> and
              Harvard's <strong className="text-[var(--text)] font-medium">CS50x</strong>. I believe the future belongs to people who understand
              both intelligence and trust.
            </p>
            <p className="text-[var(--muted)] leading-[1.95] text-[15px] mb-4">
              Beyond code, I'm a <strong className="text-[var(--text)] font-medium">video editor</strong> proficient in Adobe Premiere Pro &amp; CapCut,
              a cycling enthusiast (active BDCyclists member), and a passionate debater who's competed in inter-debate competitions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[.08em] px-3 py-[5px] rounded-full border border-[var(--border2)] text-[var(--muted)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,229,255,.05)] transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Traits */}
            <div className="mt-6">
              <div className="font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-3">personality</div>
              <div className="flex flex-wrap gap-2">
                {traits.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[12px] tracking-[.06em] px-4 py-[5px] rounded-full"
                    style={{ background:'rgba(179,136,255,.07)', border:'1px solid rgba(179,136,255,.2)', color:'var(--purple)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 reveal-right stagger">
            {stats.map(s => (
              <div
                key={s.label}
                className="rounded-[12px] p-5 text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-[3px]"
                style={{ background:'var(--card)', border:'1px solid var(--border1)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
                  style={{ background:'radial-gradient(circle at center,rgba(0,229,255,.04) 0%,transparent 70%)' }}
                />
                <div
                  className="font-mono text-[2.2rem] font-bold leading-none grad-text mb-1"
                >
                  {s.num}
                </div>
                <div className="text-[11px] text-[var(--muted)] tracking-[.06em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
