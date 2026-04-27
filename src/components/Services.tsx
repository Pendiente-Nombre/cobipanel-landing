import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Layers,
  HardHat,
  Ruler,
  ShieldCheck,
  Workflow,
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
    icon: Layers,
    title: 'Acabados Arquitectónicos',
    description:
      'Aplicación de sistemas de acabado de alto desempeño en fachadas, muros interiores, plafones y pisos para proyectos de exigencia industrial y corporativa.',
  },
  {
    icon: Building2,
    title: 'Proyectos Industriales',
    description:
      'Ejecución de acabados en naves industriales, centros de distribución y complejos logísticos de gran escala con cumplimiento riguroso de especificaciones técnicas.',
  },
  {
    icon: HardHat,
    title: 'Ejecución de Obra',
    description:
      'Gestión integral del proceso constructivo desde la planeación hasta la entrega, garantizando calidad, seguridad y cumplimiento de tiempos en cada etapa.',
  },
  {
    icon: Ruler,
    title: 'Proyectos Corporativos',
    description:
      'Espacios corporativos y educativos con acabados de primer nivel que proyectan solidez institucional y calidad visual en cada detalle.',
  },
  {
    icon: ShieldCheck,
    title: 'Control de Calidad',
    description:
      'Supervisión técnica permanente en cada etapa del proceso para asegurar los más altos estándares de calidad, terminación y seguridad en obra.',
  },
  {
    icon: Workflow,
    title: 'Coordinación y Entrega',
    description:
      'Planeación precisa, coordinación eficiente con el equipo de obra y cumplimiento de plazos de entrega con reportes de avance constantes al cliente.',
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
            Nuestros servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-krona text-white text-3xl md:text-4xl leading-tight"
          >
            Capacidad técnica para proyectos de alto estándar
          </motion.h2>
        </div>

        {/* Grid */}
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
