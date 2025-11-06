import { useEffect, useRef } from 'react'

function Circle({ label, value }) {
  const circleRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    const radius = 42
    const circumference = 2 * Math.PI * radius
    circle.style.strokeDasharray = `${circumference}`
    let progress = 0
    const target = (value / 100) * circumference

    let raf
    const animate = () => {
      progress += (target - progress) * 0.08
      circle.style.strokeDashoffset = `${circumference - progress}`
      if (Math.abs(progress - target) > 0.5) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <div className="flex flex-col items-center">
      <svg width="110" height="110" viewBox="0 0 110 110" className="overflow-visible">
        <circle cx="55" cy="55" r="46" className="fill-none stroke-slate-700/50" strokeWidth="10" />
        <circle ref={circleRef} cx="55" cy="55" r="42" className="fill-none stroke-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" strokeWidth="10" strokeLinecap="round" transform="rotate(-90 55 55)" />
      </svg>
      <span className="mt-2 text-slate-200 text-sm">{label}</span>
    </div>
  )
}

export default function Skills() {
  const technical = [
    { label: 'Functional Testing', value: 90 },
    { label: 'SQL', value: 80 },
    { label: 'Selenium', value: 70 },
    { label: 'JIRA', value: 85 },
  ]

  const professional = [
    { label: 'Troubleshooting', value: 90 },
    { label: 'Root Cause Analysis', value: 85 },
    { label: 'Communication', value: 80 },
  ]

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technical.map((s) => (
            <Circle key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
        <h3 className="mt-10 text-xl font-semibold text-white">Professional</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {professional.map((s) => (
            <Circle key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
