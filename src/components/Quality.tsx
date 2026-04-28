import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Microscope, Users } from 'lucide-react'

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

const differentiators = [
  {
    icon: Clock,
    title: 'Entrega en tiempo',
    body: 'Planificación rigurosa desde el inicio de cada proyecto. Coordinamos fechas, frentes de trabajo y personal para cumplir los plazos pactados sin comprometer el resultado.',
  },
  {
    icon: Microscope,
    title: 'Ejecución técnica especializada',
    body: 'Personal con dominio técnico en cada tipo de acabado: tablaroca, pisos, plafones, cancelería. Interpretamos y ejecutamos especificaciones complejas con exactitud.',
  },
  {
    icon: CheckCircle,
    title: 'Supervisión permanente en campo',
    body: 'Presencia continua en obra durante todo el proceso. Cada etapa se verifica antes de avanzar, eliminando retrabajos y asegurando el nivel de terminación requerido.',
  },
  {
    icon: Users,
    title: 'Trayectoria comprobada',
    body: 'Más de 30 años ejecutando proyectos para empresas de manufactura, logística, alimentos y sector corporativo. Sabemos lo que exige cada industria y cómo cumplirlo.',
  },
]

export default function Quality() {
  const { ref, visible } = useInView()

  return (
    <section className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo"
            >
              Por qué COBIPANEL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-krona text-navy-800 text-3xl md:text-4xl leading-tight brand-underline"
            >
              Estándares que marcan la diferencia
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-800/60 font-archivo text-base leading-relaxed self-center"
          >
            En COBIPANEL, la excelencia no es un objetivo final, es el punto de partida.
            Cada proyecto que aceptamos es un compromiso de entrega con los más altos
            estándares de la industria.
          </motion.p>
        </div>

        {/* Image + differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Feature image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded">
              <img
                src="/assets/projects/genesis/principal.png"
                alt="COBIPANEL — Calidad en obra"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Amber accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
          </motion.div>

          {/* Differentiators grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((d, i) => {
              const Icon = d.icon
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.07 }}
                  className="group flex gap-4 p-5 bg-white hover:bg-navy-800 transition-colors duration-300 rounded"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-krona text-navy-800 group-hover:text-white text-sm mb-2 transition-colors duration-300">
                      {d.title}
                    </h4>
                    <p className="text-navy-800/60 group-hover:text-white/60 text-sm font-archivo leading-relaxed transition-colors duration-300">
                      {d.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
