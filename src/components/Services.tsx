import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutTemplate,
  Grid3x3,
  Paintbrush,
  Layers,
  Layers2,
  Grid2x2,
} from 'lucide-react'

function useInView(threshold = 0.15) {
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

const services = [
  {
    icon: LayoutTemplate,
    title: 'Muros de Tablaroca',
    description:
      'Instalación de sistemas de tablaroca para muros interiores en proyectos industriales, corporativos y de alto nivel con acabados de precisión.',
  },
  {
    icon: Grid3x3,
    title: 'Plafones de Suspensión',
    description:
      'Suministro e instalación de plafones de suspensión y plafones de nube para espacios de trabajo, distribución y uso corporativo.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura',
    description:
      'Aplicación de sistemas de pintura en interiores y exteriores bajo especificaciones técnicas precisas, garantizando durabilidad y acabado de calidad.',
  },
  {
    icon: Layers,
    title: 'Alfombras y Zócalos Vinílicos',
    description:
      'Instalación de alfombras y zócalos vinílicos en espacios corporativos, educativos e industriales con atención al detalle en cada terminación.',
  },
  {
    icon: Grid2x2,
    title: 'Loseta Cerámica',
    description:
      'Colocación de loseta cerámica en pisos y muros con niveles y juntas perfectas para proyectos que exigen precisión técnica y estética.',
  },
  {
    icon: Layers2,
    title: 'Pisos Antiestáticos y Vinílicos',
    description:
      'Instalación de pisos antiestáticos para entornos industriales y tecnológicos, y pisos vinílicos de alto tráfico para espacios corporativos y logísticos.',
  },
]

export default function Services() {
  const { ref, visible } = useInView()

  return (
    <section id="servicios" className="section-padding bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo"
          >
            Trabajos realizados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-krona text-white text-3xl md:text-4xl leading-tight"
          >
            Especialistas en acabados arquitectónicos de alto estándar
          </motion.h2>
        </div>

        {/* Grid — 7 items: 3+3+1 centrado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                className="group bg-navy-800 hover:bg-navy-700 p-8 transition-colors duration-300 cursor-default"
              >
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 group-hover:bg-amber-500/20 rounded transition-colors duration-300">
                    <Icon size={22} className="text-amber-500" />
                  </div>
                </div>
                <h3 className="font-krona text-white text-base mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-archivo">
                  {s.description}
                </p>
                <div className="mt-6 w-8 h-px bg-amber-500 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
