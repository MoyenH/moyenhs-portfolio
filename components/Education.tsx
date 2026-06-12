const items = [
  {
    degree: 'BSc Computer Science & Engineering',
    school: 'UITS — University of Information Technology & Sciences',
    meta: 'Jan 2025 – present · Dhaka, Bangladesh 🇧🇩',
    pill: 'current enrollment',
    pillStyle: { background:'rgba(0,229,255,.08)', color:'var(--cyan)' },
    borderColor: 'rgba(0,229,255,0.25)',
    schoolColor: 'var(--cyan)',
  },
  {
    degree: 'IELTS Academic — Band 6.5',
    school: 'British Council · Bangladesh',
    meta: 'Jan 2024 – Mar 2024',
    pill: 'B2 Upper Intermediate',
    pillStyle: { background:'rgba(0,230,118,.08)', color:'var(--green)' },
    borderColor: 'rgba(0,230,118,0.2)',
    schoolColor: 'var(--green)',
  },
  {
    degree: 'Admission Test for Public University',
    school: 'Bangladesh National Admissions',
    meta: 'May 2023 – Dec 2023',
    pill: null,
    pillStyle: {},
    borderColor: 'rgba(255,215,64,0.2)',
    schoolColor: 'var(--amber)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    school: 'Mohanagar Ideal School & College · GPA 5.00 / 5.00',
    meta: 'Jan 2020 – Feb 2023 · Dhaka',
    pill: 'perfect GPA',
    pillStyle: { background:'rgba(0,230,118,.08)', color:'var(--green)' },
    borderColor: 'rgba(0,230,118,0.2)',
    schoolColor: 'var(--green)',
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    school: 'Mohanagar Ideal School & College · GPA 4.72 / 5.00',
    meta: 'Jan 2018 – Dec 2020 · Dhaka',
    pill: null,
    pillStyle: {},
    borderColor: 'rgba(136,136,136,0.2)',
    schoolColor: 'var(--muted)',
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 px-10 py-24"
      style={{ background:'radial-gradient(ellipse at bottom right,rgba(0,229,255,.03) 0%,transparent 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="section-label-line font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-2">education</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight mb-10">Academic path</h2>

        {/* Timeline */}
        <div className="relative pl-10 reveal">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background:'linear-gradient(to bottom,var(--cyan),var(--purple),transparent)' }}
          />

          {items.map((item, i) => (
            <div key={i} className="relative mb-8 group">
              {/* Dot */}
              <div
                className="absolute left-[-2.5rem] top-2 w-[10px] h-[10px] rounded-full border-2 border-[var(--cyan)] bg-[var(--bg)] -translate-x-[4.5px]"
                style={{ boxShadow:'0 0 10px rgba(0,229,255,.4)' }}
              />

              <div
                className="rounded-[12px] p-[1.4rem_1.6rem] transition-transform duration-200 group-hover:translate-x-[6px]"
                style={{ background:'var(--card)', border:`1px solid ${item.borderColor}` }}
              >
                <div className="text-[16px] font-semibold text-white mb-1">{item.degree}</div>
                <div className="text-[14px] mb-[2px]" style={{ color: item.schoolColor }}>{item.school}</div>
                <div className="font-mono text-[11px] text-[var(--muted)] mt-1">{item.meta}</div>
                {item.pill && (
                  <span
                    className="inline-block font-mono text-[10px] tracking-[.06em] px-[10px] py-[3px] rounded mt-3"
                    style={item.pillStyle}
                  >
                    {item.pill}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
