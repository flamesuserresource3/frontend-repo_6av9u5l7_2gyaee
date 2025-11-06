import { useEffect, useRef } from 'react'
import { FlaskConical, Terminal, Database, Shield, Workflow } from 'lucide-react'

function Circle({ label, value, Icon }) {
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
      <div className="relative">
        <svg width="110" height="110" viewBox="0 0 110 110" className="overflow-visible">
          <circle cx="55" cy="55" r="46" className="fill-none stroke-slate-700/50" strokeWidth="10" />
          <circle ref={circleRef} cx="55" cy="55" r="42" className="fill-none stroke-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" strokeWidth="10" strokeLinecap="round" transform="rotate(-90 55 55)" />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-sky-300">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </div>
      <span className="mt-2 text-slate-200 text-sm text-center px-1">{label}</span>
    </div>
  )
}

export default function Skills() {
  const technical = [
    { label: 'Functional Testing', value: 92, Icon: FlaskConical },
    { label: 'SQL & Data Validation', value: 85, Icon: Database },
    { label: 'Selenium & UI Flows', value: 78, Icon: Terminal },
    { label: 'JIRA & Workflow', value: 88, Icon: Workflow },
  ]

  const professional = [
    { label: 'Troubleshooting', value: 90, Icon: Shield },
    { label: 'Root Cause Analysis', value: 86, Icon: Shield },
    { label: 'Communication', value: 82, Icon: Shield },
  ]

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        <p className="text-slate-300 mt-2">Key testing strengths with measurable proficiency.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technical.map((s) => (
            <Circle key={s.label} label={s.label} value={s.value} Icon={s.Icon} />
          ))}
        </div>
        <h3 className="mt-10 text-xl font-semibold text-white">Professional</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {professional.map((s) => (
            <Circle key={s.label} label={s.label} value={s.value} Icon={s.Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
