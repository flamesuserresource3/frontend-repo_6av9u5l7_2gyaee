import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Let’s talk</h2>
            <p className="mt-3 text-slate-300">Have a project or role in mind? I can help plan, test, and keep your systems running.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:varshith@example.com" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded px-1">
                <Mail className="h-5 w-5" /> Email
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded px-1">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
          <form className="bg-slate-900/60 border border-white/10 rounded-xl p-6 backdrop-blur" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! I\'ll get back to you.')}}>
            <label className="block text-slate-200 text-sm">Name</label>
            <input required className="mt-1 w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <label className="block text-slate-200 text-sm mt-4">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <label className="block text-slate-200 text-sm mt-4">Message</label>
            <textarea rows="4" required className="mt-1 w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button type="submit" className="mt-5 w-full rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold py-2 focus-visible:ring-2 focus-visible:ring-sky-300 focus:outline-none">Send</button>
          </form>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 bg-sky-500/20 blur-3xl rounded-full" />
    </section>
  )
}
