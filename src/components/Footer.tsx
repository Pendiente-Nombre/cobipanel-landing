import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Nosotros',        href: '#nosotros' },
  { label: 'Servicios',       href: '#servicios' },
  { label: 'Proyectos',       href: '#proyectos' },
  { label: 'Misión y Visión', href: '#mision' },
  { label: 'Contacto',        href: '#contacto' },
]

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <img
              src="/assets/logos/logo-white-horizontal.png"
              alt="COBIPANEL"
              className="h-8 w-auto mb-5"
            />
            <p className="text-white/45 text-sm font-archivo leading-relaxed max-w-xs">
              Acabados arquitectónicos de alto estándar para proyectos industriales,
              corporativos y de desarrollo de alto nivel en México.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-amber-500 text-xs font-archivo tracking-widest uppercase">
                Inspirar confianza y progreso
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs font-archivo tracking-widest uppercase mb-5">
              Navegación
            </p>
            <nav className="space-y-3">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="block text-white/60 hover:text-white text-sm font-archivo transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white/40 text-xs font-archivo tracking-widest uppercase mb-5">
              Contacto
            </p>
            <div className="space-y-3">
              <p className="text-white/40 text-sm font-archivo italic">[Teléfono de contacto]</p>
              <p className="text-white/40 text-sm font-archivo italic">[correo@cobipanel.com]</p>
              <p className="text-white/60 text-sm font-archivo">México</p>
            </div>
            <button
              onClick={() => scrollTo('#contacto')}
              className="mt-8 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 font-archivo"
            >
              Cotizar proyecto
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-archivo">
            © {year} COBIPANEL. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs font-archivo">
            Acabados arquitectónicos de alto estándar
          </p>
        </div>

      </div>
    </footer>
  )
}
