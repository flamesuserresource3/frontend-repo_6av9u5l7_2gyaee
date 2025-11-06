import { useState } from 'react'
import { GitBranch, MonitorSmartphone } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Payment Gateway Stabilization',
    role: 'Application Support / Tester',
    tech: ['SQL', 'Postman', 'JIRA'],
    contributions: [
      'Functional test planning for refund flows',
      'Root cause analysis for intermittent failures',
      'SQL validation on transaction tables',
    ],
    img: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Release Readiness Dashboard',
    role: 'QA / Tester',
    tech: ['Selenium', 'JIRA', 'CI'],
    contributions: [
      'Regression suite design and execution',
      'Bug triage and reporting in JIRA',
      'Smoke tests integrated to CI',
    ],
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
]

function Modal({ open, onClose, project }) {
  if (!open || !project) return null
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative aspect-video">
          <img src={project.img} alt={`${project.title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>
        <div className="p-6">
          <h4 className="text-white text-xl font-semibold flex items-center gap-2"><MonitorSmartphone className="h-5 w-5 text-sky-300" /> {project.title}</h4>
          <p className="text-sky-300 text-sm mt-1">{project.role}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded-full text-xs bg-sky-500/10 text-sky-200 border border-sky-400/30">{t}</span>
            ))}
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-200">
            {project.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm"><GitBranch className="h-4 w-4" /> Stable releases achieved</div>
            <button onClick={onClose} className="px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-300 focus:outline-none">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
        <p className="text-slate-300 mt-2">Selected engagements demonstrating rigorous testing and support excellence.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="group text-left overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.img} alt={`${p.title} thumbnail`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-sky-300 text-sm mt-1">{p.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)} project={selected} />
    </section>
  )
}
