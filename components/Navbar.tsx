'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-10 flex items-center justify-between h-[60px] transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(6,6,16,0.92)] backdrop-blur-xl border-b border-[#1a1a30]'
          : ''
      }`}
    >
      {/* Logo */}
      <div className="font-mono text-[15px] font-bold tracking-tight">
        <span className="grad-text">moyen</span>
        <span className="grad-text">H</span>
        <span style={{ color: 'var(--muted)' }}>.dev</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex gap-8">
        {['about','skills','certs','education','contact'].map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--cyan)] transition-colors relative group"
          >
            {link}
            <span className="absolute bottom-[-4px] left-0 right-0 h-px bg-[var(--cyan)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250" />
          </a>
        ))}
      </div>

      {/* CV button */}
      <a
        href="Moyen_Curriculum_Vitae.pdf"
        download
        className="font-mono text-[11px] text-[var(--cyan)] border border-[var(--cyan)] px-4 py-[6px] rounded relative overflow-hidden group transition-colors hover:text-black"
      >
        <span className="absolute inset-0 bg-[var(--cyan)] opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10">↓ CV</span>
      </a>
    </nav>
  )
}
