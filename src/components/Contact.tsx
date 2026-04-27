import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '[Número de contacto]',
    placeholder: true,
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: '[correo@cobipanel.com]',
    placeholder: true,
  },
  {
    icon: MapPin,
    label: 'Área de operación',
    value: 'México — Proyectos en múltiples estados',
    placeholder: false,
  },
]

export default function Contact() {
  const { ref, visible } = useInView()
  const [form, setForm] = useState({ nombre: '', empresa: '', correo: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: wire to backend / email service later
    setSent(true)
  }

  return (
    <section id="contacto" className="section-padding bg-navy-800">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy + contact info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo"
            >
              Contáctanos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-krona text-white text-3xl md:text-4xl leading-tight mb-6"
            >
              Iniciemos una conversación sobre su proyecto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 font-archivo text-base leading-relaxed mb-12"
            >
              ¿Tiene un proyecto industrial, corporativo o de desarrollo de alto nivel?
              Contáctenos para evaluar cómo COBIPANEL puede participar con la calidad
              que su proyecto requiere.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 rounded flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-archivo tracking-wide uppercase mb-0.5">
                        {c.label}
                      </p>
                      <p className={`font-archivo text-sm ${c.placeholder ? 'text-white/40 italic' : 'text-white/80'}`}>
                        {c.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-5">
                  <Send size={28} className="text-amber-500" />
                </div>
                <h3 className="font-krona text-navy-800 text-xl mb-3">Mensaje enviado</h3>
                <p className="text-navy-800/60 font-archivo text-sm">
                  Gracias por contactarnos. Le responderemos a la brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-krona text-navy-800 text-lg mb-6">Cotizar proyecto</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-800/50 font-archivo tracking-wide uppercase mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Su nombre"
                      className="w-full border border-navy-800/15 rounded px-4 py-3 text-sm font-archivo text-navy-800 placeholder:text-navy-800/30 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-800/50 font-archivo tracking-wide uppercase mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de su empresa"
                      className="w-full border border-navy-800/15 rounded px-4 py-3 text-sm font-archivo text-navy-800 placeholder:text-navy-800/30 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-800/50 font-archivo tracking-wide uppercase mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      required
                      placeholder="correo@empresa.com"
                      className="w-full border border-navy-800/15 rounded px-4 py-3 text-sm font-archivo text-navy-800 placeholder:text-navy-800/30 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-800/50 font-archivo tracking-wide uppercase mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 0000 0000"
                      className="w-full border border-navy-800/15 rounded px-4 py-3 text-sm font-archivo text-navy-800 placeholder:text-navy-800/30 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-800/50 font-archivo tracking-wide uppercase mb-1.5">
                    Descripción del proyecto *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntenos sobre su proyecto: tipo de obra, ubicación, alcance aproximado, plazos..."
                    className="w-full border border-navy-800/15 rounded px-4 py-3 text-sm font-archivo text-navy-800 placeholder:text-navy-800/30 focus:outline-none focus:border-amber-500 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold py-4 rounded transition-colors duration-200 font-archivo flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Enviar solicitud
                </button>

                <p className="text-navy-800/35 text-xs font-archivo text-center">
                  Sus datos son tratados con estricta confidencialidad.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
