import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../types'
import ProjectModal from './ProjectModal'

function useInView(threshold = 0.1) {
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

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const { ref, visible } = useInView(0.1)
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-800 mb-4">
        {imgError || project.isPending ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-navy-800">
            <img
              src="/assets/logos/logo-white-icon.png"
              alt="COBIPANEL"
              className="w-16 h-16 opacity-15 mb-3"
            />
            <p className="text-white/25 text-xs font-archivo">Imágenes próximamente</p>
          </div>
        ) : (
          <>
            <img
              src={project.principalImage}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={() => setImgError(true)}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          </>
        )}

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-amber-500 text-navy-900 text-xs font-semibold px-3 py-1 font-archivo">
            {project.category}
          </span>
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>

      {/* Card text */}
      <div className="space-y-1.5">
        <p className="text-amber-600 text-xs font-semibold font-archivo tracking-wide">{project.client}</p>
        <h3 className="font-krona text-navy-800 text-base leading-snug group-hover:text-navy-600 transition-colors duration-200">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-navy-800/50">
          <MapPin size={12} className="text-amber-500 flex-shrink-0" />
          <span className="text-xs font-archivo">{project.location}, {project.state}</span>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-3 h-px bg-navy-800/10 group-hover:bg-amber-500 transition-colors duration-300" />
    </motion.div>
  )
}

export default function Projects() {
  const { ref, visible } = useInView(0.1)
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="proyectos" className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo"
            >
              Proyectos ejecutados
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-krona text-navy-800 text-3xl md:text-4xl leading-tight brand-underline"
            >
              Obra que habla por sí sola
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-navy-800/55 font-archivo text-sm max-w-xs leading-relaxed"
          >
            Cada proyecto representa nuestro compromiso con la calidad y la entrega oportuna.
            Haga clic en cualquier proyecto para ver detalles.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
