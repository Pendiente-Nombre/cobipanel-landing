import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4
        parallaxRef.current.style.transform = `translateY(${y}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollDown = () => {
    document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy-800">
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src="/assets/projects/tezontepec/principal.png"
            alt="COBIPANEL — Proyecto industrial de alto estándar"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/75 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase font-archivo">
              Acabados Arquitectónicos de Alto Estándar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-krona text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Construimos con
            <br />
            <span className="text-amber-500">precisión</span> lo que
            <br />
            los líderes exigen.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-archivo"
          >
            Proyectos industriales, corporativos y de alto nivel con los más altos
            estándares de calidad, seguridad y entrega en tiempo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold px-8 py-4 rounded transition-colors duration-300 font-archivo"
            >
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded transition-all duration-300 font-archivo"
            >
              Contactar
            </button>
          </motion.div>
        </div>
      </div>

      {/* Client logos strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-navy-900/80 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-white/40 text-xs font-archivo tracking-widest uppercase whitespace-nowrap">
            Clientes
          </span>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-8 overflow-hidden">
            {['Mercado Libre', 'Truper', 'Intermex', 'Universidad de Monterrey', 'Seven Days'].map((c) => (
              <span key={c} className="text-white/50 text-sm font-archivo whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={scrollDown}
        className="absolute bottom-16 right-8 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs tracking-widest uppercase font-archivo rotate-90 origin-center">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
