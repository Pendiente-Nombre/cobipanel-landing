import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '../types'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [imgError, setImgError] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setGalleryIndex(0)
    setImgError({})
  }, [project?.id])

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextGallery()
      if (e.key === 'ArrowLeft') prevGallery()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, galleryIndex])

  if (!project) return null

  const allImages = [project.principalImage, ...project.galleryImages].filter(Boolean)
  const hasGallery = project.galleryImages.length > 0

  const nextGallery = () => {
    setGalleryIndex((i) => (i + 1) % allImages.length)
  }
  const prevGallery = () => {
    setGalleryIndex((i) => (i - 1 + allImages.length) % allImages.length)
  }

  const currentImg = allImages[galleryIndex]

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy-900/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed z-50 inset-4 md:inset-8 lg:inset-12 xl:inset-16 bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-sm"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-navy-800 hover:bg-navy-700 text-white transition-colors duration-200 rounded"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Left: Image viewer */}
            <div className="relative md:w-[55%] lg:w-[60%] bg-navy-900 flex-shrink-0 min-h-[40vh] md:min-h-0">
              {/* Main display image */}
              {imgError[currentImg] || project.isPending ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-navy-800 min-h-[280px]">
                  <img
                    src="/assets/logos/logo-white-icon.png"
                    alt="COBIPANEL"
                    className="w-20 h-20 opacity-20 mb-4"
                  />
                  <p className="text-white/30 text-sm font-archivo">Imágenes próximamente</p>
                </div>
              ) : (
                <img
                  key={currentImg}
                  src={currentImg}
                  alt={`${project.name} — imagen ${galleryIndex + 1}`}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '280px' }}
                  onError={() => setImgError(prev => ({ ...prev, [currentImg]: true }))}
                />
              )}

              {/* Gallery nav arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevGallery}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-navy-900/70 hover:bg-navy-900 text-white flex items-center justify-center rounded transition-colors duration-200"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextGallery}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-navy-900/70 hover:bg-navy-900 text-white flex items-center justify-center rounded transition-colors duration-200"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          idx === galleryIndex ? 'bg-amber-500 w-5' : 'bg-white/40'
                        }`}
                        aria-label={`Imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Thumbnails row */}
              {hasGallery && allImages.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-10 pt-2 flex gap-2 overflow-x-auto">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`flex-shrink-0 w-14 h-10 overflow-hidden rounded border-2 transition-all duration-200 ${
                        idx === galleryIndex ? 'border-amber-500' : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      {imgError[img] ? (
                        <div className="w-full h-full bg-navy-700" />
                      ) : (
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                          onError={() => setImgError(prev => ({ ...prev, [img]: true }))}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="flex-1 overflow-y-auto modal-scroll p-8 md:p-10">
              {/* Category tag */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 text-xs font-semibold px-3 py-1.5 rounded font-archivo tracking-wide mb-6">
                <Tag size={12} />
                {project.category}
              </div>

              {/* Title */}
              <h2 className="font-krona text-navy-800 text-xl md:text-2xl leading-snug mb-3 pr-10">
                {project.name}
              </h2>

              {/* Location */}
              <div className="flex items-center gap-2 text-navy-800/60 font-archivo text-sm mb-8">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span>{project.location}, {project.state}</span>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-amber-500 mb-8" />

              {/* Description */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-navy-800/40 font-archivo mb-3">
                  Descripción del proyecto
                </p>
                <p className="text-navy-800/75 font-archivo text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Scope */}
              <div className="bg-navy-800 rounded p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40 font-archivo mb-3">
                  Alcance / Servicios
                </p>
                <p className="text-white/80 font-archivo text-sm leading-relaxed">
                  {project.scope}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  onClose()
                  setTimeout(() => {
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                  }, 350)
                }}
                className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold py-3.5 px-6 rounded transition-colors duration-200 font-archivo text-sm"
              >
                Cotizar un proyecto similar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
