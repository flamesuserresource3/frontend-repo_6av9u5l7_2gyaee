import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="text-sky-300 font-semibold tracking-wide">Varshith Poojary</a>
        <div className="hidden md:flex items-center gap-6 text-slate-200 text-sm">
          <a className="hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1" href="#about">About</a>
          <a className="hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1" href="#skills">Skills</a>
          <a className="hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1" href="#projects">Projects</a>
          <a className="hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Varshith Poojary. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-sky-300">Home</a>
          <a href="#projects" className="hover:text-sky-300">Work</a>
          <a href="#contact" className="hover:text-sky-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
