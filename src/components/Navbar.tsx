import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Nosotros',        href: '#nosotros' },
  { label: 'Servicios',       href: '#servicios' },
  { label: 'Proyectos',       href: '#proyectos' },
  { label: 'Misión y Visión', href: '#mision' },
  { label: 'Contacto',        href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-800 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLink('#inicio')}
            className="focus:outline-none"
            aria-label="Ir al inicio"
          >
            <img
              src="/assets/logos/logo-white-horizontal.png"
              alt="COBIPANEL"
              className="h-8 md:h-9 w-auto"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 font-archivo"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#contacto')}
              className="ml-2 bg-amber-500 hover:bg-amber-600 text-navy-900 text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 font-archivo"
            >
              Cotizar proyecto
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-800 flex flex-col pt-24 px-8 pb-12 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleLink(l.href)}
                  className="text-white text-2xl font-krona text-left border-b border-white/10 pb-4"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleLink('#contacto')}
                className="mt-4 bg-amber-500 text-navy-900 font-semibold text-lg py-4 rounded font-archivo"
              >
                Cotizar proyecto
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
