/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#060610',
        bg2:     '#0b0b18',
        card:    '#0e0e1c',
        border1: '#1a1a30',
        border2: '#252545',
        cyan:    '#00e5ff',
        cyan2:   '#00b8d4',
        purple:  '#b388ff',
        green:   '#00e676',
        amber:   '#ffd740',
        pink:    '#ff4081',
        muted:   '#7070a0',
        muted2:  '#5a5a88',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'drift1':      'drift1 12s ease-in-out infinite',
        'drift2':      'drift2 15s ease-in-out infinite',
        'scan':        'scan 8s linear infinite',
        'blink':       'blink .75s step-end infinite',
        'fadeUp':      'fadeUp .6s forwards',
        'fadeLeft':    'fadeLeft .8s .3s forwards',
        'floatBadge':  'floatBadge 3s ease-in-out infinite',
        'floatBadge2': 'floatBadge 4s ease-in-out infinite .5s',
        'spin-slow':   'spin 20s linear infinite',
        'spin-slow-r': 'spin 30s linear infinite reverse',
      },
      keyframes: {
        drift1:     { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(-30px,20px)' } },
        drift2:     { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(20px,-25px)' } },
        scan:       { '0%': { top: '-2px' }, '100%': { top: '100%' } },
        blink:      { '50%': { opacity: 0 } },
        fadeUp:     { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeLeft:   { from: { opacity: 0, transform: 'translateX(30px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        floatBadge: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
    },
  },
  plugins: [],
}
