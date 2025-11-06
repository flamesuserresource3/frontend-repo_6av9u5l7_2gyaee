export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m Varshith Poojary, an Application Support Engineer and Software Tester. I keep
              systems stable, document issues clearly, and collaborate with engineers to resolve
              problems quickly. My toolkit spans functional test planning, root cause analysis,
              SQL validation, and hands-on testing using JIRA, Selenium, and SOAP UI.
            </p>
            <p className="mt-3 text-slate-300">
              Mission: Deliver predictable releases and resilient production systems.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-wrap gap-2">
              {['Deloitte Certified', 'Accenture Badge', 'Infosys Certified'].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full text-sky-100 text-sm bg-sky-500/10 border border-sky-400/30 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
