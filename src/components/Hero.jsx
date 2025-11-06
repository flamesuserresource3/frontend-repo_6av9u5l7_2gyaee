import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

function useReducedMotionOrLowPower() {
  const [prefersReduced, setPrefersReduced] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return prefersReduced || isMobile
}

export default function Hero() {
  const reduced = useReducedMotionOrLowPower()

  // Soft trailing glow cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow')
    if (!cursor) return
    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let x = tx
    let y = ty
    const speed = 0.15

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      x += (tx - x) * speed
      y += (ty - y) * speed
      cursor.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const headline = useMemo(
    () => (
      <>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
          <span role="img" aria-label="flame" className="mr-2">🔥</span>
          Keeping Systems Alive — One Bug at a Time.
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-sky-200/90 max-w-2xl">
          Varshith Poojary — Application Support Engineer | Software Tester
        </p>
        <p className="mt-2 text-slate-300/90 max-w-2xl">
          I plan, test, and keep systems running — one ticket at a time. Focused on functional test planning,
          troubleshooting, SQL validation, and quality at scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-500/90 hover:bg-sky-400 text-white px-6 py-3 font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900 transition-colors">
            Explore My Work
          </a>
          <button
            onClick={() => {
              const content = `Varshith Poojary\nApplication Support Engineer & Software Tester\nSkills: Functional Test Planning, Troubleshooting, SQL, JIRA, Selenium, SOAP UI\n`;
              const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = 'Varshith-Poojary-Resume.txt'
              document.body.appendChild(a)
              a.click()
              URL.revokeObjectURL(url)
              a.remove()
            }}
            className="inline-flex items-center justify-center rounded-full bg-transparent border border-sky-400/70 hover:bg-sky-400/10 text-sky-200 px-6 py-3 font-semibold backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900 transition-colors"
            aria-label="Download resume"
          >
            Download Resume
          </button>
        </div>
        <div className="mt-6 flex gap-2 text-xs text-sky-300/80">
          <span className="px-2 py-1 rounded-full bg-sky-400/10 border border-sky-400/30">Deloitte</span>
          <span className="px-2 py-1 rounded-full bg-sky-400/10 border border-sky-400/30">Accenture</span>
          <span className="px-2 py-1 rounded-full bg-sky-400/10 border border-sky-400/30">Infosys</span>
        </div>
      </>
    ),
    []
  )

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Gradients and particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-20 h-72 w-72 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute top-40 -left-10 h-64 w-64 bg-indigo-500/10 blur-3xl rounded-full" />
      </div>

      {/* Cursor glow */}
      <div id="cursor-glow" aria-hidden className="pointer-events-none fixed top-0 left-0 h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-3xl opacity-60 mix-blend-screen" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          {headline}
        </div>
        <div className="relative h-[320px] sm:h-[420px] md:h-[520px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
          {!reduced ? (
            <Spline
              scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="size-48 sm:size-64 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 blur-2xl opacity-60 animate-pulse" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.2),transparent_60%)]" />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
