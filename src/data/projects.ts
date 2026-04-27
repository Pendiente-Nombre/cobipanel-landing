import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'tezontepec',
    name: 'Centro de Distribución Mercado Libre',
    client: 'Mercado Libre',
    location: 'Villas de Tezontepec',
    state: 'Hidalgo',
    category: 'Industrial / Logístico',
    description:
      'Ejecución de acabados arquitectónicos de alto estándar en uno de los complejos logísticos de mayor escala de Mercado Libre en México. El proyecto demandó cumplimiento riguroso de especificaciones técnicas, plazos de entrega precisos y coordinación permanente con el equipo de obra en sitio.',
    scope:
      'Acabados arquitectónicos, sistemas de fachada panel sándwich, pisos industriales, instalaciones complementarias.',
    principalImage: '/assets/projects/tezontepec/principal.png',
    galleryImages: [
      '/assets/projects/tezontepec/gallery-01.png',
      '/assets/projects/tezontepec/gallery-02.png',
      '/assets/projects/tezontepec/gallery-03.png',
      '/assets/projects/tezontepec/gallery-04.png',
      '/assets/projects/tezontepec/gallery-05.png',
      '/assets/projects/tezontepec/gallery-06.png',
      '/assets/projects/tezontepec/gallery-07.png',
      '/assets/projects/tezontepec/gallery-08.png',
    ],
  },
  {
    id: 'vesta05',
    name: 'Centro de Distribución Mercado Libre Vesta 05',
    client: 'Mercado Libre',
    location: 'Apodaca',
    state: 'Nuevo León',
    category: 'Industrial / Logístico',
    description:
      'Proyecto de acabados arquitectónicos para la nave de distribución Vesta 05 de Mercado Libre en Apodaca, Nuevo León. Trabajo ejecutado bajo estándares internacionales de calidad con supervisión continua y entrega en tiempo.',
    scope:
      'Fachada panel sándwich, acabados interiores, sistemas de impermeabilización, accesos y andenes de carga.',
    principalImage: '/assets/projects/vesta05/principal.png',
    galleryImages: [
      '/assets/projects/vesta05/gallery-01.jpeg',
      '/assets/projects/vesta05/gallery-02.jpeg',
      '/assets/projects/vesta05/gallery-03.jpeg',
      '/assets/projects/vesta05/gallery-04.jpeg',
    ],
  },
  {
    id: 'genesis',
    name: 'Centro de Distribución Mercado Libre Genesis',
    client: 'Mercado Libre',
    location: 'Escobedo',
    state: 'Nuevo León',
    category: 'Industrial / Logístico',
    description:
      'Ejecución de acabados de alto rendimiento en el complejo Genesis de Mercado Libre en Escobedo, Nuevo León. Proyecto de gran envergadura con requerimientos técnicos específicos para instalaciones logísticas de última generación.',
    scope:
      'Acabados arquitectónicos exteriores e interiores, fachadas, sistemas de panel, andenes y áreas administrativas.',
    principalImage: '/assets/projects/genesis/principal.png',
    galleryImages: [],
  },
  {
    id: 'seven-days',
    name: 'Seven Days Gold',
    client: 'Seven Days Gold',
    location: 'Querétaro',
    state: 'Querétaro',
    category: 'Comercial / Desarrollo',
    description:
      'Participación en el desarrollo Seven Days Gold en Querétaro, proyecto de uso mixto y alto nivel que exigió acabados de primer orden para sus espacios comerciales y corporativos. Alta exigencia en calidad de terminaciones y tiempos de entrega.',
    scope:
      'Acabados arquitectónicos, muros, pisos, plafones, fachadas y áreas comunes de alto tráfico.',
    principalImage: '/assets/projects/seven-days/principal.png',
    galleryImages: [],
  },
  {
    id: 'intermex',
    name: 'Intermex — Puerto Interior',
    client: 'Intermex',
    location: 'Puerto Interior, Silao',
    state: 'Guanajuato',
    category: 'Industrial / Logístico',
    description:
      'Ejecución de acabados en las instalaciones de Intermex dentro del complejo logístico Puerto Interior en Silao, Guanajuato, uno de los parques industriales más importantes del centro de México. Proyecto ejecutado con rigor técnico y cumplimiento de normas de seguridad industrial.',
    scope:
      'Fachada, paneles estructurales, acabados interiores, sellados y sistemas de impermeabilización.',
    principalImage: '/assets/projects/intermex/principal.png',
    galleryImages: [],
  },
  {
    id: 'udm',
    name: 'Universidad de Monterrey',
    client: 'Universidad de Monterrey',
    location: 'San Pedro Garza García',
    state: 'Nuevo León',
    category: 'Educativo / Corporativo',
    description:
      'Intervención en instalaciones de la Universidad de Monterrey, una de las instituciones de educación superior más reconocidas del país. El proyecto requirió acabados de alta calidad estética y funcional en un entorno académico exigente y de alto perfil.',
    scope:
      'Acabados arquitectónicos en espacios académicos, fachadas, pasillos, áreas administrativas y zonas de acceso.',
    principalImage: '/assets/projects/udm/principal.png',
    galleryImages: [],
  },
  {
    id: 'truper',
    name: 'Truper — Centro de Distribución',
    client: 'Truper',
    location: 'Jilotepec',
    state: 'Estado de México',
    category: 'Industrial / Distribución',
    description:
      'Participación en el centro de distribución de Truper en Jilotepec, Estado de México. Proyecto industrial de gran formato con requerimientos técnicos específicos para una empresa líder en el sector de herramientas y productos industriales.',
    scope:
      'Acabados de fachada, paneles, sistemas de impermeabilización y terminaciones interiores en bodega de distribución.',
    principalImage: '/assets/projects/truper/pendiente.png',
    galleryImages: [],
    isPending: true,
  },
]
