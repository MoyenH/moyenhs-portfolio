'use client'
import { useEffect, useRef } from 'react'

const groups = [
  {
    title: 'AI / ML', color: '#00e5ff', cls: 'sg-ai-group', barCls: 'bar-cyan',
    gradient: 'linear-gradient(90deg,var(--cyan2),var(--cyan))',
    skills: [
      { name: 'Prompt Engineering', w: '88%' },
      { name: 'Google AI APIs', w: '80%' },
      { name: 'Machine Learning', w: '68%' },
      { name: 'Data Analysis', w: '60%' },
    ],
  },
  {
    title: 'Cybersecurity', color: '#b388ff', cls: 'sg-sec-group', barCls: 'bar-purple',
    gradient: 'linear-gradient(90deg,#7c4dff,var(--purple))',
    skills: [
      { name: 'Security Fundamentals', w: '75%' },
      { name: 'Network Security', w: '62%' },
      { name: 'Threat Analysis', w: '58%' },
      { name: 'Troubleshooting', w: '80%' },
    ],
  },
  {
    title: 'Development', color: '#00e676', cls: 'sg-dev-group', barCls: 'bar-green',
    gradient: 'linear-gradient(90deg,#00c853,var(--green))',
    skills: [
      { name: 'HTML / CSS', w: '82%' },
      { name: 'Python', w: '72%' },
      { name: 'JavaScript', w: '58%' },
      { name: 'Git / GitHub', w: '65%' },
    ],
  },
  {
    title: 'Creative Tools', color: '#ffd740', cls: 'sg-tools-group', barCls: 'bar-amber',
    gradient: 'linear-gradient(90deg,#ff8f00,var(--amber))',
    skills: [
      { name: 'Adobe Premiere Pro', w: '82%' },
      { name: 'CapCut', w: '88%' },
      { name: 'Adobe Photoshop', w: '74%' },
      { name: 'Digital Art', w: '70%' },
    ],
  },
  {
    title: 'Soft Skills', color: '#ff4081', cls: 'sg-soft-group', barCls: 'bar-pink',
    gradient: 'linear-gradient(90deg,#e91e63,var(--pink))',
    skills: [
      { name: 'Communication', w: '92%' },
      { name: 'Team Building', w: '85%' },
      { name: 'Problem Solving', w: '88%' },
      { name: 'Public Speaking', w: '78%' },
    ],
  },
]

const pills = [
  { label:'Python', cls:'pill-cyan' }, { label:'Google AI APIs', cls:'pill-cyan' },
  { label:'Prompt Engineering', cls:'pill-cyan' }, { label:'Machine Learning', cls:'pill-cyan' },
  { label:'Cybersecurity', cls:'pill-purple' }, { label:'Network Security', cls:'pill-purple' },
  { label:'OSINT', cls:'pill-purple' }, { label:'HTML/CSS', cls:'pill-green' },
  { label:'JavaScript', cls:'pill-green' }, { label:'Git', cls:'pill-green' },
  { label:'Adobe Premiere Pro', cls:'pill-amber' }, { label:'CapCut', cls:'pill-amber' },
  { label:'Photoshop', cls:'pill-amber' }, { label:'Adobe Suite', cls:'pill-amber' },
  { label:'Communication', cls:'pill-pink' }, { label:'Debate', cls:'pill-pink' },
  { label:'Team Building', cls:'pill-pink' }, { label:'Linux CLI', cls:'pill-cyan' },
  { label:'GitHub', cls:'pill-green' }, { label:'Content Creation', cls:'pill-amber' },
]

const pillStyles: Record<string, React.CSSProperties> = {
  'pill-cyan':   { background:'rgba(0,229,255,.1)',   border:'1px solid rgba(0,229,255,.3)',   color:'var(--cyan)' },
  'pill-purple': { background:'rgba(179,136,255,.1)', border:'1px solid rgba(179,136,255,.3)', color:'var(--purple)' },
  'pill-green':  { background:'rgba(0,230,118,.1)',   border:'1px solid rgba(0,230,118,.3)',   color:'var(--green)' },
  'pill-amber':  { background:'rgba(255,215,64,.1)',  border:'1px solid rgba(255,215,64,.3)',  color:'var(--amber)' },
  'pill-pink':   { background:'rgba(255,64,129,.1)',  border:'1px solid rgba(255,64,129,.3)',  color:'var(--pink)' },
}

export default function Skills() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        grid.querySelectorAll('.bar').forEach((b, i) => {
          const el = b as HTMLElement
          const w = el.dataset.w || '0%'
          setTimeout(() => { el.style.transform = 'scaleX(1)'; el.style.width = w }, i * 60)
        })
        obs.unobserve(grid)
      }
    }, { threshold: 0.15 })
    obs.observe(grid)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="relative z-10 px-10 py-24"
      style={{ background:'radial-gradient(ellipse at bottom left,rgba(179,136,255,.03) 0%,transparent 60%)' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="section-label-line font-mono text-[10px] text-[var(--cyan)] tracking-[.22em] uppercase mb-2">skills</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight mb-10">Technical toolkit</h2>

        {/* Skill groups */}
        <div
          ref={gridRef}
          className="grid gap-5 stagger reveal"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))' }}
        >
          {groups.map(g => (
            <div
              key={g.title}
              className="rounded-[12px] p-6 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ background:'var(--card)', border:'1px solid var(--border1)' }}
            >
              {/* Top gradient line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,${g.color},transparent)` }}
              />
              <div className="font-mono text-[10px] tracking-[.18em] uppercase mb-5" style={{ color: g.color }}>
                {g.title}
              </div>
              {g.skills.map(s => (
                <div key={s.name} className="flex justify-between items-center mb-3">
                  <span className="text-[13px] text-[var(--text)]">{s.name}</span>
                  <div className="w-[80px] h-[4px] rounded-[3px] overflow-hidden" style={{ background:'var(--border1)' }}>
                    <div
                      className="bar h-full rounded-[3px]"
                      style={{ background: g.gradient }}
                      data-w={s.w}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="mt-10 reveal">
          <div className="font-mono text-[13px] text-[var(--muted)] tracking-[.08em] mb-4">// all technologies &amp; tools</div>
          <div className="flex flex-wrap gap-2">
            {pills.map(p => (
              <span
                key={p.label}
                className="font-mono text-[12px] px-4 py-[5px] rounded-full cursor-default hover:-translate-y-0.5 transition-transform"
                style={pillStyles[p.cls]}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
