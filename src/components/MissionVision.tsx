import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Telescope } from 'lucide-react'

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

export default function MissionVision() {
  const { ref, visible } = useInView()

  return (
    <section id="mision" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-12 font-archivo"
        >
          Propósito y dirección
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-navy-800 p-10 md:p-14 relative"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded">
                <Target size={22} className="text-amber-500" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-archivo tracking-widest uppercase">Nuestra</p>
                <h3 className="font-krona text-white text-xl">Misión</h3>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-krona text-amber-500 text-lg md:text-xl leading-snug mb-6">
                Inspirar confianza y progreso.
              </p>
              <p className="text-white/65 font-archivo text-base leading-relaxed">
                Diseñamos, construimos y entregamos proyectos de infraestructura y edificaciones
                que superan las expectativas de nuestros clientes, garantizando la más alta
                calidad, seguridad y sostenibilidad en cada etapa del proceso.
              </p>
            </div>
            <p className="text-white/50 font-archivo text-sm leading-relaxed">
              Nos comprometemos a mejorar las comunidades donde operamos, impulsando el
              desarrollo económico y social a través de nuestras obras.
            </p>

            {/* Decorative line */}
            <div className="absolute bottom-10 left-10 md:left-14 w-16 h-px bg-amber-500" />
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-navy-700 p-10 md:p-14 relative"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded">
                <Telescope size={22} className="text-amber-500" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-archivo tracking-widest uppercase">Nuestra</p>
                <h3 className="font-krona text-white text-xl">Visión</h3>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-krona text-amber-500 text-lg md:text-xl leading-snug mb-6">
                Liderando el futuro de la construcción.
              </p>
              <p className="text-white/65 font-archivo text-base leading-relaxed">
                Aspiramos a ser reconocidos como líderes en la industria de la construcción
                a nivel nacional e internacional, innovando continuamente en técnicas y
                tecnologías constructivas.
              </p>
            </div>
            <p className="text-white/50 font-archivo text-sm leading-relaxed">
              Nos enfocamos en ser la primera opción para nuestros clientes, contribuyendo
              significativamente al progreso urbano y rural, estableciendo nuevos estándares
              de excelencia en el sector.
            </p>

            {/* Decorative line */}
            <div className="absolute bottom-10 left-10 md:left-14 w-16 h-px bg-amber-500" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
