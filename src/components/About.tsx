import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

const stats = [
  { value: '7+', label: 'Proyectos ejecutados' },
  { value: '4', label: 'Estados del país' },
  { value: '100%', label: 'Compromiso con la calidad' },
  { value: '0', label: 'Tolerancia a defectos' },
]

export default function About() {
  const { ref, visible } = useInView()

  return (
    <section id="nosotros" className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img
                src="/assets/projects/vesta05/principal.png"
                alt="Proyecto COBIPANEL — Mercado Libre Vesta 05"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-8 -right-8 bg-navy-800 text-white p-6 shadow-2xl max-w-xs hidden md:block">
              <p className="font-krona text-3xl text-amber-500 mb-1">+7</p>
              <p className="text-sm text-white/70 font-archivo">proyectos de alto nivel ejecutados en México</p>
            </div>
            {/* Amber line accent */}
            <div className="absolute top-0 left-0 w-1 h-24 bg-amber-500" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo">
              Quiénes somos
            </p>
            <h2 className="font-krona text-navy-800 text-3xl md:text-4xl leading-tight mb-6 brand-underline">
              Especialistas en acabados para proyectos de alto nivel
            </h2>
            <div className="space-y-4 text-navy-800/70 font-archivo text-base leading-relaxed mt-8">
              <p>
                COBIPANEL es una empresa especializada en la ejecución de acabados arquitectónicos
                con altos estándares de calidad para proyectos industriales, corporativos y de
                desarrollo de alto nivel en México.
              </p>
              <p>
                Trabajamos con las empresas más exigentes del país, desarrollando proyectos que
                demandan precisión técnica, cumplimiento de plazos y coordinación eficiente en
                cada etapa del proceso constructivo.
              </p>
              <p>
                Nuestra capacidad de ejecución abarca desde naves industriales de gran escala
                hasta espacios corporativos y educativos de alta exigencia, manteniendo siempre
                los más elevados estándares de calidad y seguridad.
              </p>
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="border-l-2 border-amber-500 pl-4"
                >
                  <p className="font-krona text-2xl text-navy-800">{s.value}</p>
                  <p className="text-navy-800/60 text-sm font-archivo mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
