'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = ['AI', 'building', 'learning', 'open to collaborate']
    let i = 0
    function cycle() {
      if (statusRef.current) {
        statusRef.current.innerHTML =
          `<span style="color:var(--muted)">→ </span><span style="color:var(--green)">${words[i % words.length]}</span>`
        i++
      }
      setTimeout(cycle, 2000)
    }
    const t = setTimeout(cycle, 600)
    return () => clearTimeout(t)
  }, [])

  // Mouse parallax on glows
  useEffect(() => {
    const g1 = document.getElementById('hero-glow-1')
    const g2 = document.getElementById('hero-glow-2')
    const onMove = (e: MouseEvent) => {
      const mx = e.clientX / window.innerWidth  - 0.5
      const my = e.clientY / window.innerHeight - 0.5
      if (g1) g1.style.transform = `translate(${mx * -30}px, ${my * -20}px)`
      if (g2) g2.style.transform = `translate(${mx *  20}px, ${my *  25}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 pt-24 pb-12 overflow-hidden z-10"
    >
      {/* Glow blobs */}
      <div
        id="hero-glow-1"
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none drift1"
        style={{ background: 'radial-gradient(circle,rgba(179,136,255,.10) 0%,transparent 65%)' }}
      />
      <div
        id="hero-glow-2"
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none drift2"
        style={{ background: 'radial-gradient(circle,rgba(0,229,255,.07) 0%,transparent 65%)' }}
      />
      <div className="scan-line" />

      {/* Inner grid */}
      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center relative z-20">

        {/* ── Text side ── */}
        <div>
          {/* Eyebrow */}
          <div className="anim-fade-up delay-1 font-mono text-[11px] text-[var(--cyan)] tracking-[0.22em] uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--cyan)]" />
            // profile initialized
          </div>

          {/* H1 */}
          <h1 className="anim-fade-up delay-2 text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.06] tracking-[-0.03em] mb-5">
            <span className="text-white" style={{ textShadow: '0 0 40px rgba(255,255,255,.08)' }}>
              Moyen Hossain
            </span>
            <span className="block grad-text">AI &amp; Cybersecurity</span>
          </h1>

          {/* Desc */}
          <p className="anim-fade-up delay-3 text-[16px] text-[var(--muted)] max-w-[520px] leading-[1.9] mb-8">
            CS student from{' '}
            <strong className="text-[var(--text)] font-medium">Bangladesh</strong> — building at
            the intersection of{' '}
            <strong className="text-[var(--text)] font-medium">artificial intelligence</strong> and{' '}
            <strong className="text-[var(--text)] font-medium">security systems</strong>.
            Currently at <strong className="text-[var(--text)] font-medium">UITS, Dhaka</strong>. Future-focused.
          </p>

          {/* Terminal */}
          <div
            className="anim-fade-up delay-4 font-mono text-[13px] rounded-[10px] p-[1.1rem_1.4rem] max-w-[480px] mb-10"
            style={{
              background: 'rgba(14,14,28,0.9)',
              border: '1px solid var(--border2)',
              boxShadow: '0 0 40px rgba(0,229,255,.05), inset 0 1px 0 rgba(255,255,255,.04)',
            }}
          >
            <div className="flex gap-[6px] mb-[0.85rem]">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#28ca41]" />
            </div>
            <div className="leading-[1.9]"><span style={{ color:'var(--cyan)' }}>$ </span>whoami</div>
            <div className="leading-[1.9]"><span style={{ color:'var(--muted)' }}>→ </span><span style={{ color:'var(--green)' }}>student · creator · problem-solver</span></div>
            <div className="leading-[1.9]"><span style={{ color:'var(--cyan)' }}>$ </span>location</div>
            <div className="leading-[1.9]"><span style={{ color:'var(--muted)' }}>→ </span><span style={{ color:'var(--green)' }}>Dhaka 🇧🇩 · UITS, Bangladesh</span></div>
            <div className="leading-[1.9]"><span style={{ color:'var(--cyan)' }}>$ </span>interests</div>
            <div className="leading-[1.9]"><span style={{ color:'var(--muted)' }}>→ </span><span style={{ color:'var(--green)' }}>AI · Cybersecurity · Video Editing</span></div>
            <div className="leading-[1.9]"><span style={{ color:'var(--cyan)' }}>$ </span>status<span className="cursor" /></div>
            <div ref={statusRef} className="leading-[1.9]" />
          </div>

          {/* CTAs */}
          <div className="anim-fade-up delay-5 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="font-mono text-[12px] font-bold tracking-[.06em] px-7 py-3 rounded-[6px] text-black transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,var(--cyan),var(--cyan2))',
                boxShadow: '0 4px 24px rgba(0,229,255,.25)',
              }}
            >
              // get in touch
            </a>
            <a
              href="#skills"
              className="font-mono text-[12px] tracking-[.06em] px-7 py-3 rounded-[6px] text-[var(--muted)] border border-[var(--border2)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:-translate-y-0.5 transition-all"
            >
              explore skills →
            </a>
          </div>
        </div>

        {/* ── Photo side ── */}
        <div className="hidden lg:flex items-center justify-center anim-fade-left">
          <div className="relative w-[320px] h-[380px]">
            {/* Spinning rings */}
            <div
              className="photo-ring absolute rounded-full border border-[rgba(0,229,255,0.15)]"
              style={{ inset: '-16px', position: 'absolute' }}
            >
              <span
                className="absolute top-[-3px] left-1/2 w-[6px] h-[6px] rounded-full bg-[var(--cyan)]"
                style={{ boxShadow: '0 0 10px var(--cyan)' }}
              />
            </div>
            <div
              className="photo-ring2 absolute rounded-full border border-dashed border-[rgba(179,136,255,0.10)]"
              style={{ inset: '-30px', position: 'absolute' }}
            />

            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="profile.png"
              alt="Moyen Hossain Sorker"
              className="w-full h-full rounded-[20px] object-cover object-top relative z-10"
              style={{
                border: '1px solid var(--border2)',
                boxShadow: '0 20px 60px rgba(0,0,0,.5), 0 0 40px rgba(0,229,255,.08)',
              }}
            />

            {/* Glow below */}
            <div
              className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] z-[1]"
              style={{ background: 'radial-gradient(ellipse,rgba(0,229,255,.2) 0%,transparent 70%)', filter: 'blur(10px)' }}
            />

            {/* Floating badges */}
            <div
              className="float-badge absolute right-[-20px] top-[30px] z-10 font-mono text-[11px] text-[var(--cyan)] rounded-[10px] px-3 py-2"
              style={{ background:'rgba(14,14,28,.95)', border:'1px solid var(--border2)', boxShadow:'0 4px 20px rgba(0,0,0,.4)' }}
            >
              🎓 BSc CSE @ UITS
            </div>
            <div
              className="float-badge2 absolute left-[-30px] bottom-[50px] z-10 font-mono text-[11px] text-[var(--purple)] rounded-[10px] px-3 py-2"
              style={{ background:'rgba(14,14,28,.95)', border:'1px solid rgba(179,136,255,.3)', boxShadow:'0 4px 20px rgba(0,0,0,.4)' }}
            >
              🌐 IELTS 6.5
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] text-[var(--muted)] tracking-[.15em] flex flex-col items-center gap-2">
        scroll
        <div className="w-5 h-7 border border-[var(--muted2)] rounded-[10px] flex items-start justify-center pt-1">
          <div className="w-[3px] h-[6px] bg-[var(--cyan)] rounded-sm scroll-dot" />
        </div>
      </div>
    </section>
  )
}
