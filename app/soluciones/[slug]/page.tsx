'use client'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, ChevronRight, Star,
  ScanLine, Brain, Bot, Eye,
  Archive, BookOpen, Database,
  ShieldCheck, Blocks, Monitor,
  FileText, Layers, Workflow, Users, BarChart2,
  Search, RefreshCw, ClipboardList, Cpu, Globe, Lock,
  Zap, Shield, TrendingUp, Settings, Cloud,
  Server, HardDrive, Smartphone, Mail,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

type AnyIcon = React.ComponentType<any> // eslint-disable-line

interface Feature { Icon: AnyIcon; title: string; desc: string }
interface UseCase { sector: string; desc: string }

interface SolucionData {
  slug: string
  name: string
  brand: string
  category: string
  brandColor: string
  brandColorDark: string
  rgb: string
  logo?: string
  screenshot?: string
  heroImage?: string
  visualType: string
  headline: string
  description: string
  longDescription: string
  features: Feature[]
  useCases: UseCase[]
  benefits: string[]
  stats: { value: string; label: string }[]
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────────────────────
const SOLUCIONES: Record<string, SolucionData> = {
  'paperstream-capture': {
    slug: 'paperstream-capture', name: 'PaperStream Capture', brand: 'Ricoh · PFU',
    category: 'Automatización de Captura',
    brandColor: '#005BAC', brandColorDark: '#004A8F', rgb: '0,91,172',
    heroImage: '/products/software/psc-hero.png',
    screenshot: '/products/software/psc-screenshot.png',
    visualType: 'interface-preview',
    headline: 'Del papel al dato estructurado en un solo clic.',
    description: 'Software de captura profesional incluido con los escáneres fi-Series. Digitaliza, mejora y clasifica documentos con extracción automática de datos — sin configuración compleja.',
    longDescription: 'PaperStream Capture transforma el proceso de digitalización en una rutina automatizable. Con perfiles configurables, cada área de la organización puede definir su propio flujo de escaneo: qué limpiar, qué extraer, dónde enviar. Integrado nativamente con los escáneres Ricoh fi-Series y los drivers PaperStream IP (TWAIN e ISIS), elimina la fricción entre el papel y los sistemas de información. La interfaz Scan & Index permite configurar rutinas de captura sin asistencia técnica. La versión Pro amplía las capacidades a 100 campos de extracción por formulario.',
    features: [
      { Icon: ScanLine,  title: 'Escaneo por lotes automatizado',     desc: 'Procesa grandes volúmenes de documentos con un solo clic usando perfiles preconfigurados por tipo de documento.' },
      { Icon: Search,    title: 'OCR zonal y extracción de datos',     desc: 'Extrae automáticamente datos de campos predefinidos: texto, fechas, montos, códigos. Hasta 100 campos en versión Pro.' },
      { Icon: Cpu,       title: 'Reconocimiento de códigos de barras', desc: 'Detecta y decodifica códigos 1D y 2D para clasificación e indexación automática de documentos.' },
      { Icon: FileText,  title: 'Detección de páginas en blanco',      desc: 'Elimina automáticamente páginas en blanco simples o dobles, evitando archivos innecesarios.' },
      { Icon: Cloud,     title: 'Exportación multicanal',              desc: 'Envía directamente a SharePoint, SharePoint Online, FTP/FTPs, email, impresoras y aplicaciones ECM.' },
      { Icon: Settings,  title: 'Integración nativa con fi-Series',    desc: 'Funciona óptimamente con los escáneres Ricoh fi-Series usando drivers PaperStream IP TWAIN e ISIS.' },
    ],
    useCases: [
      { sector: 'Finanzas y contabilidad',   desc: 'Digitalización y extracción de datos de facturas, recibos y estados de cuenta para procesamiento automatizado.' },
      { sector: 'Recursos humanos',          desc: 'Captura de hojas de vida, contratos, certificados y documentos de incorporación con indexación por empleado.' },
      { sector: 'Sector salud',              desc: 'Digitalización de historias clínicas, formularios y registros médicos con extracción de datos estructurados.' },
      { sector: 'Entidades gubernamentales', desc: 'Procesamiento de formularios ciudadanos y expedientes con clasificación automática y envío a ECM.' },
    ],
    benefits: [
      'Reduce el tiempo de captura hasta en un 80% frente al proceso manual',
      'Elimina errores de digitación con extracción automática de campos',
      'Integra directamente con sistemas ECM y repositorios documentales',
      'Versión básica incluida sin costo adicional con escáneres fi-Series',
      'Escalable: versión Pro amplía capacidades a 100 campos por formulario',
    ],
    stats: [
      { value: '100', label: 'Campos de extracción por formulario (Pro)' },
      { value: '1 clic', label: 'Para escanear, limpiar y exportar' },
      { value: '80%', label: 'Reducción en tiempo de captura manual' },
    ],
  },

  'infoinput': {
    slug: 'infoinput', name: 'InfoInput Solution', brand: 'Kodak Alaris',
    category: 'Automatización de Captura',
    brandColor: '#CC0000', brandColorDark: '#AA0000', rgb: '204,0,0',
    heroImage: '/products/software/infoinput-hero.png',
    visualType: 'circular-flow',
    headline: 'Captura inteligente que aprende de cada documento.',
    description: 'Plataforma de procesamiento inteligente de documentos de Kodak Alaris. Clasifica, extrae y valida datos de documentos complejos desde cualquier fuente — email, escáner, móvil o nube.',
    longDescription: 'KODAK Info Input Solution es un software inteligente de procesamiento de documentos que facilita la incorporación de documentos de cualquier complejidad y procedencia. Ya sean archivos adjuntos de correo electrónico, documentos escaneados, archivos subidos desde dispositivos móviles o cualquier otra forma en que los documentos ingresen a la organización, Info Input Solution transforma automáticamente los datos en información esencial para el negocio a través de un ciclo continuo de mejora.',
    features: [
      { Icon: Brain,     title: 'Clasificación automática con IA',  desc: 'Identifica el tipo de documento sin reglas manuales, usando modelos de aprendizaje automático entrenados.' },
      { Icon: Search,    title: 'Extracción de datos inteligente',   desc: 'Extrae campos estructurados y no estructurados de facturas, contratos, formularios y más.' },
      { Icon: RefreshCw, title: 'Aprendizaje continuo',              desc: 'Cada documento procesado mejora la precisión del sistema, reduciendo la intervención humana progresivamente.' },
      { Icon: Globe,     title: 'Captura multicanal',                desc: 'Recibe documentos desde escáneres, email, móvil, MFP, portales web y fuentes en la nube.' },
      { Icon: Workflow,  title: 'Automatización de flujos',          desc: 'Enruta documentos clasificados al sistema destino correcto sin intervención manual.' },
      { Icon: Shield,    title: 'Validación y control de calidad',   desc: 'Verifica la integridad de los datos extraídos antes de entregarlos a los sistemas de negocio.' },
    ],
    useCases: [
      { sector: 'Cuentas por pagar',    desc: 'Captura automática de facturas de proveedores, extracción de datos fiscales y enrutamiento para aprobación.' },
      { sector: 'Onboarding digital',   desc: 'Procesamiento de documentos de nuevos clientes o empleados con clasificación y extracción en tiempo real.' },
      { sector: 'Sector asegurador',    desc: 'Procesamiento de pólizas, siniestros y documentos de reclamación con validación automática de campos.' },
      { sector: 'Banca y finanzas',     desc: 'Captura de cheques, estados de cuenta, contratos y documentos KYC con extracción precisa de datos.' },
    ],
    benefits: [
      'Procesa documentos de cualquier complejidad y procedencia',
      'Reduce el ingreso manual de datos hasta en un 90%',
      'Mejora la precisión con cada documento procesado',
      'Compatible con todos los escáneres Kodak Alaris y fuentes digitales',
      'Integra con ERP, ECM, CRM y sistemas de gestión documental',
    ],
    stats: [
      { value: '90%', label: 'Reducción en ingreso manual de datos' },
      { value: '7', label: 'Etapas del ciclo de procesamiento' },
      { value: 'IA', label: 'Clasificación automática sin reglas manuales' },
    ],
  },

  'ria': {
    slug: 'ria', name: 'RIA — Ricoh Intelligent Automation', brand: 'Ricoh',
    category: 'Automatización de Captura',
    brandColor: '#7B2FF7', brandColorDark: '#6A1FE0', rgb: '123,47,247',
    visualType: 'architecture',
    headline: 'Convierta documentos en decisiones con inteligencia artificial.',
    description: 'Plataforma IDP que combina captura avanzada, IA, reconocimiento y automatización para procesar documentos empresariales con precisión y velocidad operativa.',
    longDescription: 'RIA (Ricoh Intelligent Automation) es una plataforma de procesamiento inteligente de documentos (IDP) que combina captura avanzada, inteligencia artificial, reconocimiento de datos y automatización de procesos para convertir información no estructurada en datos confiables y utilizables. La solución permite extraer, clasificar, validar y distribuir información proveniente de facturas, contratos, formularios, expedientes, correos electrónicos y otros documentos empresariales. Plataforma 100% SaaS — sin infraestructura, con actualizaciones automáticas continuas.',
    features: [
      { Icon: Bot,        title: 'Captura automática multicanal',         desc: 'Ingesta documentos físicos y digitales desde escáneres, email, portales web, ERP y sistemas en la nube.' },
      { Icon: Brain,      title: 'Clasificación inteligente con IA',      desc: 'Identifica automáticamente el tipo y estructura del documento usando modelos de IA de última generación.' },
      { Icon: Search,     title: 'Extracción de datos clave',             desc: 'Localiza y extrae campos específicos de documentos complejos: fechas, montos, partes, números de referencia.' },
      { Icon: Shield,     title: 'Validación y control de calidad',       desc: 'Verifica la integridad y coherencia de los datos antes de distribuirlos a los sistemas destino.' },
      { Icon: Workflow,   title: 'Integración con sistemas corporativos', desc: 'Conecta con ERP, CRM, ECM y sistemas legados mediante APIs y conectores nativos.' },
      { Icon: TrendingUp, title: 'Analítica de operaciones documentales', desc: 'Dashboards de rendimiento que muestran volúmenes procesados, tiempos y tasas de precisión.' },
    ],
    useCases: [
      { sector: 'Industria y manufactura', desc: 'Procesamiento de órdenes de compra, facturas de proveedores y documentos de logística.' },
      { sector: 'Sector salud',            desc: 'Captura y extracción de datos de historias clínicas, órdenes médicas y registros de pacientes.' },
      { sector: 'Entidades financieras',   desc: 'Automatización del procesamiento de contratos, solicitudes de crédito y documentos KYC.' },
      { sector: 'Sector público',          desc: 'Gestión automatizada de trámites ciudadanos, expedientes y correspondencia oficial.' },
    ],
    benefits: [
      'Reduce errores y costos operativos en el procesamiento documental',
      'Acelera los tiempos de respuesta administrativa y regulatoria',
      'Mejora la precisión con aprendizaje continuo de cada documento',
      'Se adapta a cualquier tipo de documento sin programación',
      'Plataforma SaaS: sin infraestructura, actualizaciones automáticas',
    ],
    stats: [
      { value: 'IDP', label: 'Plataforma de procesamiento inteligente' },
      { value: '70%', label: 'Reducción en tiempos de procesamiento' },
      { value: 'SaaS', label: 'Sin infraestructura, 100% en la nube' },
    ],
  },

  'natif-ai': {
    slug: 'natif-ai', name: 'natif.ai', brand: 'natif.ai',
    category: 'Automatización de Captura',
    brandColor: '#4338CA', brandColorDark: '#3730A3', rgb: '67,56,202',
    logo: '/products/software/natif-logo.png',
    visualType: 'doc-flow',
    headline: 'Transformamos documentos en información que impulsa tu negocio.',
    description: 'Plataforma IDP que usa IA avanzada para capturar, clasificar y extraer datos de documentos con alta precisión, sin importar el formato o estructura.',
    longDescription: 'natif.ai es una plataforma de Procesamiento Inteligente de Documentos (IDP) que utiliza inteligencia artificial avanzada para capturar, clasificar y extraer información de documentos empresariales con alta precisión, independientemente de su formato o estructura. Transforma documentos físicos y digitales en datos estructurados listos para integrarse con los sistemas de negocio, reduciendo tiempos de procesamiento, errores manuales y costos operativos. Integra de manera nativa con SAP, Oracle, Microsoft Dynamics 365, SharePoint y más.',
    features: [
      { Icon: Eye,        title: 'Captura inteligente desde cualquier fuente', desc: 'Procesa facturas PDF, imágenes escaneadas, formularios, contratos y correos electrónicos con alta precisión.' },
      { Icon: Brain,      title: 'Comprensión contextual con IA',             desc: 'Entiende el contexto y la estructura del documento para extraer los datos correctos sin reglas manuales.' },
      { Icon: Cpu,        title: 'Extracción automática de datos',            desc: 'Obtiene datos clave con alta precisión: nombres, fechas, montos, números de referencia, códigos.' },
      { Icon: Check,      title: 'Validación y aseguramiento de calidad',     desc: 'Asegura la exactitud de la información extraída mediante validaciones automáticas configurables.' },
      { Icon: Cloud,      title: 'Integración simple con tus sistemas',       desc: 'Conecta con SAP, Oracle, Microsoft Dynamics 365, SharePoint y sistemas documentales vía API.' },
      { Icon: TrendingUp, title: 'Aprendizaje continuo',                      desc: 'Mejora la precisión automáticamente con cada documento procesado, sin intervención técnica.' },
    ],
    useCases: [
      { sector: 'Gobierno y sector público', desc: 'Procesamiento masivo de trámites, solicitudes ciudadanas y documentos oficiales con extracción automática.' },
      { sector: 'Salud',                     desc: 'Captura de registros médicos, resultados de laboratorio y formularios de pacientes con alta precisión.' },
      { sector: 'Banca y seguros',           desc: 'Automatización de la captura de solicitudes, pólizas, contratos y documentos de cumplimiento.' },
      { sector: 'Empresas B2B',              desc: 'Procesamiento de facturas de proveedores, órdenes de compra y documentos de logística a gran escala.' },
    ],
    benefits: [
      'Menos tareas manuales, menos errores, más productividad',
      'Información confiable para mejores decisiones empresariales',
      'Implementación rápida y escalable sin proyectos de largo plazo',
      'Aprendizaje continuo que mejora la precisión con el tiempo',
      'Integración directa con los principales ERP, CRM y ECM del mercado',
    ],
    stats: [
      { value: '99%+', label: 'Precisión en extracción de datos' },
      { value: '4', label: 'Sistemas ERP líderes integrados de forma nativa' },
      { value: 'Días', label: 'Para implementar e integrar' },
    ],
  },

  'docuware': {
    slug: 'docuware', name: 'DocuWare', brand: 'DocuWare',
    category: 'Gestión de Contenido Empresarial',
    brandColor: '#0066B3', brandColorDark: '#003D7A', rgb: '0,102,179',
    logo: '/products/software/docuware-logo.png',
    screenshot: '/products/software/docuware-screenshot.png',
    visualType: 'interface-preview',
    headline: 'Documentos digitales, procesos que fluyen solos.',
    description: 'Plataforma ECM en la nube y on-premise para capturar, archivar y automatizar el ciclo de vida de todos los documentos empresariales.',
    longDescription: 'DocuWare es una plataforma de gestión documental y automatización de flujos de trabajo que digitaliza y optimiza los procesos documentales de cualquier empresa. Disponible en la nube y on-premise, permite capturar, archivar, indexar y recuperar documentos en segundos, mientras automatiza los flujos de aprobación, firmas y distribución. Compatible con cualquier industria y escala desde PYME hasta enterprise con cientos de usuarios en más de 100 países.',
    features: [
      { Icon: Archive,  title: 'Archivo digital centralizado',       desc: 'Captura e indexa automáticamente documentos desde escáneres, email, ERP y aplicaciones empresariales.' },
      { Icon: Workflow, title: 'Flujos de aprobación sin código',    desc: 'Configura flujos de trabajo de aprobación, revisión y distribución con un constructor visual, sin programación.' },
      { Icon: Lock,     title: 'Firma electrónica integrada',        desc: 'Firma documentos digitalmente con validez legal desde la misma plataforma, sin herramientas externas.' },
      { Icon: Globe,    title: 'Acceso desde cualquier lugar',       desc: 'Consulta, gestiona y aprueba documentos desde PC, tablet o móvil, en cualquier momento y lugar.' },
      { Icon: Shield,   title: 'Cumplimiento normativo',             desc: 'Controla períodos de retención, accesos y auditorías para cumplir con normativas locales e internacionales.' },
      { Icon: Settings, title: 'Integración con ERP y CRM',          desc: 'Conecta con SAP, Microsoft Dynamics, Salesforce y más de 500 aplicaciones empresariales.' },
    ],
    useCases: [
      { sector: 'Cuentas por pagar',    desc: 'Captura automática de facturas, extracción de datos y flujo de aprobación con notificaciones en tiempo real.' },
      { sector: 'Recursos humanos',     desc: 'Gestión de expedientes de empleados, contratos, capacitaciones y documentos de nómina de forma digital y segura.' },
      { sector: 'Ventas y contratos',   desc: 'Gestión del ciclo de vida de contratos: creación, revisión, firma electrónica, archivo y alertas de vencimiento.' },
      { sector: 'Sector público',       desc: 'Digitalización de expedientes ciudadanos, trámites y correspondencia con trazabilidad completa.' },
    ],
    benefits: [
      'Reduce el tiempo de búsqueda de documentos de minutos a segundos',
      'Elimina el papel y los archivos físicos de los procesos clave',
      'Automatiza aprobaciones y reduce cuellos de botella operativos',
      'Garantiza cumplimiento normativo con control de acceso y auditoría',
      'Disponible en la nube o instalación local según la política de TI',
    ],
    stats: [
      { value: '18,000+', label: 'Organizaciones en 100 países' },
      { value: '500+', label: 'Integraciones con sistemas empresariales' },
      { value: '70%', label: 'Reducción en tiempo de procesos documentales' },
    ],
  },

  'laserfiche': {
    slug: 'laserfiche', name: 'Laserfiche', brand: 'Laserfiche',
    category: 'Gestión de Contenido Empresarial',
    brandColor: '#E35205', brandColorDark: '#C14604', rgb: '227,82,5',
    logo: '/products/software/laserfiche-logo.png',
    visualType: 'ecm-tree',
    headline: 'El ECM líder en gobierno, banca y salud en Latinoamérica.',
    description: 'Plataforma ECM con automatización de procesos, cumplimiento regulatorio y analítica avanzada para organizaciones de alto desempeño.',
    longDescription: 'Laserfiche es una plataforma líder de gestión de contenido empresarial que combina repositorio documental, automatización de procesos (BPA) y herramientas de cumplimiento normativo. Diseñada para sectores regulados como gobierno, banca, salud y educación, permite digitalizar operaciones completas manteniendo control total sobre la información crítica de la organización. Más de 40,000 organizaciones en 100 países confían en Laserfiche para gestionar sus activos de información.',
    features: [
      { Icon: BookOpen,  title: 'Repositorio centralizado',              desc: 'Almacena, organiza y versiona documentos y registros con metadatos, etiquetas y estructura jerárquica.' },
      { Icon: Workflow,  title: 'Automatización de procesos visuales',   desc: 'Diseña flujos de trabajo con un constructor drag-and-drop: aprobaciones, revisiones, escalaciones automáticas.' },
      { Icon: Shield,    title: 'Cumplimiento ISO, HIPAA, GDPR',         desc: 'Herramientas nativas para gestión de registros, períodos de retención y cumplimiento con normativas sectoriales.' },
      { Icon: Users,     title: 'Portales de colaboración externos',     desc: 'Crea portales para clientes, proveedores o ciudadanos que permiten envío y consulta de documentos.' },
      { Icon: BarChart2, title: 'Analítica e informes de actividad',     desc: 'Dashboards configurables con métricas de uso, tiempos de proceso y estado de documentos en tiempo real.' },
      { Icon: Globe,     title: 'Nube, híbrido u on-premise',            desc: 'Flexibilidad de despliegue según los requerimientos de gobierno de datos de cada organización.' },
    ],
    useCases: [
      { sector: 'Gobierno y entidades públicas', desc: 'Gestión de expedientes ciudadanos, trámites y correspondencia oficial con cumplimiento de normativas locales.' },
      { sector: 'Banca y servicios financieros', desc: 'Control documental de créditos, apertura de cuentas, cumplimiento AML y auditorías regulatorias.' },
      { sector: 'Sector salud',                  desc: 'Gestión de historias clínicas, consentimientos, registros de pacientes y cumplimiento HIPAA.' },
      { sector: 'Educación superior',            desc: 'Digitalización de expedientes académicos, admisiones, contratos y trámites estudiantiles.' },
    ],
    benefits: [
      'La plataforma ECM más adoptada en gobierno y sector regulado de LATAM',
      'Reduce el tiempo de respuesta a auditorías de semanas a horas',
      'Automatiza procesos que antes requerían múltiples sistemas',
      'Cumple con las principales normativas internacionales y locales',
      'Escala desde departamentos hasta operaciones con miles de usuarios',
    ],
    stats: [
      { value: '40,000+', label: 'Organizaciones en todo el mundo' },
      { value: '100+',    label: 'Países con presencia activa' },
      { value: '30 años', label: 'De innovación en gestión documental' },
    ],
  },

  'docuclass': {
    slug: 'docuclass', name: 'Docuclass', brand: 'Docuclass',
    category: 'Gestión de Contenido Empresarial',
    brandColor: '#0047AB', brandColorDark: '#003B8E', rgb: '0,71,171',
    visualType: 'doc-cabinet',
    headline: 'Gestión documental diseñada para Latinoamérica.',
    description: 'Plataforma de archivo digital y gestión de expedientes para organizaciones latinoamericanas que buscan digitalizar sus procesos con herramientas sencillas y resultados inmediatos.',
    longDescription: 'Docuclass es una solución de gestión documental y archivística diseñada específicamente para organizaciones en México, Colombia y el resto de Latinoamérica. Facilita la transición del archivo físico al digital con una interfaz sencilla, implementación ágil y cumplimiento con los marcos legales locales. Especializada en gestión de expedientes, clasificación documental y búsqueda de texto completo, Docuclass reduce el tiempo de búsqueda de semanas a segundos.',
    features: [
      { Icon: Database,  title: 'Archivo digital y expedientes',         desc: 'Organiza documentos en expedientes digitales con estructura configurable por tipo documental, área y fecha.' },
      { Icon: Search,    title: 'Búsqueda de texto completo (OCR)',      desc: 'Encuentra cualquier documento por su contenido, no solo por nombre o metadatos, con motor OCR integrado.' },
      { Icon: FileText,  title: 'Clasificación documental avanzada',     desc: 'Clasifica documentos por expediente, tipo, fecha, estado y cualquier metadato personalizado.' },
      { Icon: Lock,      title: 'Control de acceso por perfil y área',   desc: 'Define quién puede ver, editar, aprobar o eliminar documentos según rol y área organizacional.' },
      { Icon: Layers,    title: 'Digitalización de archivos históricos', desc: 'Migra documentos físicos existentes al repositorio digital con indexación masiva y control de calidad.' },
      { Icon: Settings,  title: 'Integración con ERPs y sistemas legados', desc: 'Conecta con los sistemas existentes de la organización mediante APIs y conectores estándar.' },
    ],
    useCases: [
      { sector: 'Áreas legales y jurídicas', desc: 'Gestión de expedientes judiciales, contratos y documentos legales con control de versiones y acceso restringido.' },
      { sector: 'Recursos humanos',          desc: 'Expedientes de empleados, contratos, evaluaciones y documentos de IMSS/IESS digitalizados y organizados.' },
      { sector: 'Contabilidad y finanzas',   desc: 'Archivo de comprobantes fiscales, facturas y estados financieros con retención configurable por normativa local.' },
      { sector: 'Salud y clínicas',          desc: 'Gestión de expedientes clínicos con búsqueda por paciente, fecha y tipo de documento.' },
    ],
    benefits: [
      'Implementación ágil: primera fase lista en semanas, no meses',
      'Interfaz intuitiva que no requiere capacitación extensa',
      'Cumple con normativas de archivo y retención documental en LATAM',
      'Reduce drásticamente el espacio físico dedicado a archivos',
      'Soporte y consultoría en español con conocimiento del mercado regional',
    ],
    stats: [
      { value: 'LATAM', label: 'Diseñado para el mercado latinoamericano' },
      { value: 'OCR', label: 'Búsqueda de texto completo en todos los docs' },
      { value: 'Semanas', label: 'De implementación, no meses' },
    ],
  },

  'mastercontrol': {
    slug: 'mastercontrol', name: 'MasterControl', brand: 'MasterControl',
    category: 'Gestión de Calidad',
    brandColor: '#00A98F', brandColorDark: '#008F78', rgb: '0,169,143',
    logo: '/products/software/mastercontrol-logo.svg',
    visualType: 'qms-suites',
    headline: 'El QMS más adoptado en industrias reguladas.',
    description: 'Plataforma QMS + MES que digitaliza y automatiza calidad, manufactura y cumplimiento normativo para industrias farmacéuticas, de dispositivos médicos y ciencias de la vida.',
    longDescription: 'MasterControl centraliza todos los procesos de calidad en una plataforma conectada — desde el control de documentos y SOPs hasta la gestión de auditorías, capacitaciones y registros de manufactura. Diseñado para pasar inspecciones de la FDA y certificaciones ISO con confianza, MasterControl convierte el cumplimiento en una ventaja competitiva. Con más de 1,000 clientes en industrias reguladas, es la elección de las organizaciones de Ciencias de la Vida que buscan eficiencia, trazabilidad y excelencia operacional.',
    features: [
      { Icon: FileText,      title: 'Control de documentos y SOPs',        desc: 'Versiones controladas, flujos de aprobación, distribución automática y firmas electrónicas con validez 21 CFR Part 11.' },
      { Icon: ClipboardList, title: 'CAPA y no conformidades',             desc: 'Registra, investiga y cierra acciones correctivas y preventivas con trazabilidad completa y escalaciones automáticas.' },
      { Icon: Users,         title: 'Gestión de auditorías',               desc: 'Planifica, ejecuta y da seguimiento a auditorías internas y externas con evidencias adjuntas.' },
      { Icon: RefreshCw,     title: 'Capacitación y competencias',         desc: 'Asigna entrenamientos, registra completados y controla las competencias requeridas por rol, área y normativa.' },
      { Icon: ShieldCheck,   title: 'Suite MES: registros de manufactura', desc: 'Registros electrónicos de lote (EBR), historial de dispositivo (eDHR), instrucciones de trabajo digitales.' },
      { Icon: BarChart2,     title: 'Analítica de calidad',                desc: 'Visualiza tendencias, KPIs de calidad y riesgos emergentes con dashboards configurables.' },
    ],
    useCases: [
      { sector: 'Industria farmacéutica', desc: 'Control documental, gestión de lotes, CAPA y auditorías para cumplimiento FDA, GMP y ICH Q10.' },
      { sector: 'Dispositivos médicos',   desc: 'Gestión de diseño, registros de dispositivo (eDHR) y cumplimiento EU MDR/IVDR e ISO 13485.' },
      { sector: 'Biotecnología',          desc: 'Trazabilidad completa de procesos, validaciones y ensayos clínicos con registros electrónicos auditables.' },
      { sector: 'Manufactura regulada',   desc: 'Digitalización de instrucciones de trabajo, calibración de equipos y gestión de desviaciones en planta.' },
    ],
    benefits: [
      'Cumplimiento continuo con FDA 21 CFR Part 11, GxP, ISO 9001/13485, EU MDR/IVDR',
      'Cero errores manuales con documentación y flujos automatizados',
      'Preparación para auditorías en todo momento, no solo cuando se anuncia la inspección',
      'Reduce el tiempo de validación de semanas a minutos',
      'IA especializada para manufactura regulada que simplifica flujos complejos',
    ],
    stats: [
      { value: '1,000+', label: 'Clientes en industrias reguladas' },
      { value: '21 CFR', label: 'Cumplimiento FDA Part 11 nativo' },
      { value: '100%',   label: 'Trazabilidad auditable de todos los procesos' },
    ],
  },

  'kintone': {
    slug: 'kintone', name: 'Kintone', brand: 'Kintone by Cybozu',
    category: 'Automatización No-Code',
    brandColor: '#E6402A', brandColorDark: '#CC3322', rgb: '230,64,42',
    logo: '/products/software/kintone-logo.svg',
    visualType: 'screenshot-gallery',
    headline: 'Tu equipo construye las apps que tu empresa necesita.',
    description: 'Plataforma no-code que permite a cualquier área crear aplicaciones empresariales personalizadas con drag-and-drop — sin código, sin IT, sin esperas.',
    longDescription: 'Kintone es la plataforma no-code de Cybozu que democratiza la creación de aplicaciones empresariales. Con un constructor drag-and-drop intuitivo, cualquier persona puede diseñar bases de datos relacionales, formularios, flujos de aprobación y dashboards sin escribir una línea de código. Desde un CRM propio hasta un sistema de aprobación de gastos o un portal de proveedores — construido por los propios equipos de negocio en días, no meses.',
    features: [
      { Icon: Blocks,    title: 'Constructor drag-and-drop',              desc: 'Diseña formularios, bases de datos y flujos de trabajo arrastrando y soltando elementos — sin conocimientos técnicos.' },
      { Icon: Database,  title: 'Bases de datos relacionales sin SQL',    desc: 'Crea relaciones entre registros y tablas con lógica empresarial compleja, todo visualmente.' },
      { Icon: Workflow,  title: 'Automatización de flujos y notificaciones', desc: 'Configura aprobaciones, recordatorios y notificaciones automáticas por email, Slack u otras herramientas.' },
      { Icon: BarChart2, title: 'Dashboards automáticos',                 desc: 'Genera gráficas, reportes y paneles de control directamente desde los datos de tus aplicaciones.' },
      { Icon: Lock,      title: 'Control de acceso granular',             desc: 'Define quién ve, edita o aprueba cada registro según rol, departamento o condición del dato.' },
      { Icon: Globe,     title: 'API abierta y 100% en la nube',          desc: 'Conecta Kintone con sistemas existentes vía API REST. Sin instalación, accesible desde cualquier dispositivo.' },
    ],
    useCases: [
      { sector: 'CRM personalizado',       desc: 'Gestión de clientes, pipeline de ventas y seguimiento de oportunidades sin depender de software genérico costoso.' },
      { sector: 'Control de gastos',       desc: 'Flujos de aprobación de reportes de gastos con notificaciones automáticas y dashboards en tiempo real.' },
      { sector: 'Gestión de proyectos',    desc: 'Seguimiento de tareas, recursos, avances y entregables con reportes automáticos para la gerencia.' },
      { sector: 'Portales de proveedores', desc: 'Plataforma de comunicación, solicitudes y seguimiento con proveedores externos sin acceso al sistema interno.' },
    ],
    benefits: [
      'Cero líneas de código: cualquier empleado puede crear su app en días',
      'Sin dependencia de IT: los equipos de negocio controlan su tecnología',
      'Reduce costos de software a la medida hasta en un 80%',
      'Aplicaciones móviles incluidas sin configuración adicional',
      'API abierta para conectar con todos los sistemas existentes',
    ],
    stats: [
      { value: '0',    label: 'Líneas de código necesarias' },
      { value: 'Días', label: 'Para tener tu primera app lista' },
      { value: '∞',    label: 'Apps que puedes construir' },
    ],
  },

  'epson-kds': {
    slug: 'epson-kds', name: 'Epson KDS', brand: 'Epson',
    category: 'Kitchen Display Systems',
    brandColor: '#00479B', brandColorDark: '#003A80', rgb: '0,71,155',
    visualType: 'kds-display',
    headline: 'La cocina digital que acelera cada servicio.',
    description: 'Sistema de visualización de órdenes para cocinas de restaurantes y cadenas de comida. Elimina el papel, reduce errores y acelera los tiempos de preparación.',
    longDescription: 'Los Kitchen Display Systems de Epson digitalizan el flujo de órdenes en cocinas de restaurantes, cadenas de comida y servicios de alimentación. Reemplazan los tickets de papel y el sistema de impresión tradicional con pantallas táctiles de alto brillo que muestran las órdenes en tiempo real, permiten marcar tiempos de preparación y se integran con los principales sistemas POS del mercado. El resultado: menos errores, menos tiempo de espera y mayor satisfacción del cliente.',
    features: [
      { Icon: Monitor,   title: 'Pantallas de alto brillo para cocina', desc: 'Pantallas diseñadas para alta temperatura y humedad, con brillo superior para visibilidad en cualquier condición.' },
      { Icon: Workflow,  title: 'Gestión de órdenes en tiempo real',    desc: 'Recibe, muestra y gestiona órdenes desde el POS en tiempo real, con alertas de tiempo y prioridad visual.' },
      { Icon: Settings,  title: 'Integración con sistemas POS',         desc: 'Compatible con los principales sistemas POS del mercado: integración directa sin hardware adicional.' },
      { Icon: BarChart2, title: 'Tiempos de preparación medidos',       desc: 'Registra y analiza los tiempos de preparación por ítem y turno para identificar cuellos de botella operativos.' },
      { Icon: Zap,       title: 'Alertas de orden y prioridad',         desc: 'Código de colores automático para órdenes próximas a exceder el tiempo de servicio objetivo.' },
      { Icon: Globe,     title: 'Múltiples estaciones de cocina',       desc: 'Distribuye órdenes entre estaciones de trabajo: frituras, plancha, ensaladas, bebidas — según la configuración del restaurante.' },
    ],
    useCases: [
      { sector: 'Restaurantes de servicio rápido', desc: 'Gestión de alto volumen de órdenes en horas pico con mínimos errores y máxima velocidad de salida.' },
      { sector: 'Cadenas de comida',               desc: 'Estandarización de operaciones de cocina con tiempos controlados y reportes consolidados por sucursal.' },
      { sector: 'Servicios de catering',           desc: 'Coordinación de preparaciones simultáneas para eventos de gran escala con múltiples estaciones.' },
      { sector: 'Hoteles y casinos',               desc: 'Gestión de pedidos de múltiples restaurantes y servicios a la habitación desde una infraestructura centralizada.' },
    ],
    benefits: [
      'Elimina los errores de comunicación entre sala y cocina',
      'Reduce el tiempo de preparación y los tiempos de espera del cliente',
      'Sin tickets de papel: ahorro en consumibles y mayor sostenibilidad',
      'Tiempos de preparación visibles para todo el equipo de cocina',
      'Integración sin fricción con el POS existente',
    ],
    stats: [
      { value: '0',   label: 'Tickets de papel en cocina' },
      { value: '30%', label: 'Reducción promedio en tiempos de espera' },
      { value: '100%', label: 'Integración con principales sistemas POS' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// HELPER COMPONENTS
// ─────────────────────────────────────────────────────────────

function LogoOrBadge({ logo, name, brand, color, rgb }: {
  logo?: string; name: string; brand: string; color: string; rgb: string
}) {
  const [err, setErr] = useState(false)
  if (logo && !err) {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.96)', borderRadius: 16, padding: '14px 22px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.22)', display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <img src={logo} alt={name} onError={() => setErr(true)}
          style={{ height: 44, maxWidth: 160, objectFit: 'contain', display: 'block' }} />
      </div>
    )
  }
  return (
    <div style={{
      background: `rgba(${rgb},0.14)`, borderRadius: 14, padding: '14px 22px',
      border: `1px solid rgba(${rgb},0.28)`, textAlign: 'center', display: 'inline-block',
    }}>
      <p style={{
        fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 20,
        color, letterSpacing: '-0.02em', margin: 0,
      }}>{name}</p>
      <p style={{
        fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: 10,
        color: 'rgba(255,255,255,0.50)', margin: '4px 0 0', letterSpacing: '0.10em',
        textTransform: 'uppercase',
      }}>{brand}</p>
    </div>
  )
}

// ── SCAN FLOW (PaperStream) ──
function ScanFlowVisual({ color, rgb }: { color: string; rgb: string }) {
  const steps = [
    { num: '01', title: 'Escaneado', sub: 'Perfiles configurables\npor tipo de documento', Icon: ScanLine },
    { num: '02', title: 'OCR + BCR', sub: 'Extracción de campos\nCódigos 1D / 2D', Icon: Search },
    { num: '03', title: 'Clasificación', sub: 'Separación automática\nde documentos', Icon: Layers },
    { num: '04', title: 'Exportación', sub: 'SharePoint · FTP\nEmail · ECM', Icon: Cloud },
  ]
  return (
    <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
      {steps.map((step, i) => (
        <div key={step.num} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.44, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: 1, background: i === 0 ? color : '#ffffff',
              borderRadius: 18, padding: '28px 20px', textAlign: 'center',
              border: `1px solid ${i === 0 ? 'transparent' : `rgba(${rgb},0.14)`}`,
              boxShadow: i === 0 ? `0 8px 32px rgba(${rgb},0.28)` : '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12, margin: '0 auto 14px',
              background: i === 0 ? 'rgba(255,255,255,0.15)' : `rgba(${rgb},0.08)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <step.Icon size={20} strokeWidth={1.8} style={{ color: i === 0 ? '#fff' : color }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: i === 0 ? 'rgba(255,255,255,0.65)' : `rgba(${rgb},0.7)`, marginBottom: 6,
            }}>{step.num}</p>
            <p style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 800,
              color: i === 0 ? '#ffffff' : '#0d0f14', marginBottom: 10, lineHeight: 1.2,
            }}>{step.title}</p>
            <p style={{
              fontSize: 12, color: i === 0 ? 'rgba(255,255,255,0.72)' : '#64748b',
              lineHeight: 1.55, whiteSpace: 'pre-line',
            }}>{step.sub}</p>
          </motion.div>
          {i < steps.length - 1 && (
            <div style={{ flexShrink: 0, width: 28, display: 'flex', justifyContent: 'center' }}>
              <ArrowRight size={18} strokeWidth={1.8} style={{ color: `rgba(${rgb},0.40)` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── CIRCULAR FLOW (InfoInput) ──
function CircularFlowVisual({ color, rgb }: { color: string; rgb: string }) {
  const topRow = ['Extraer', 'Mejorar', 'Suministrar', 'Entregar']
  const botRow = ['Validar', 'Clasificar', 'Convertir']
  const nodeStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, textAlign: 'center', padding: '16px 12px',
    background: active ? color : '#ffffff',
    border: `1.5px solid ${active ? 'transparent' : `rgba(${rgb},0.18)`}`,
    borderRadius: 14,
    boxShadow: active ? `0 4px 20px rgba(${rgb},0.30)` : '0 1px 4px rgba(0,0,0,0.04)',
  })
  const label = (active: boolean, text: string) => (
    <p style={{
      fontFamily: 'var(--font-montserrat)', fontSize: 12, fontWeight: 800,
      color: active ? '#ffffff' : color, margin: 0, letterSpacing: '-0.01em',
    }}>{text}</p>
  )
  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      {/* Top row: left to right */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
        {topRow.map((step, i) => (
          <div key={step} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.40 }}
              style={nodeStyle(i === 0)}
            >
              {label(i === 0, step)}
            </motion.div>
            {i < topRow.length - 1 && (
              <ArrowRight size={14} strokeWidth={2} style={{ color: `rgba(${rgb},0.45)`, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* Connectors */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 6px', marginBottom: 8 }}>
        <div style={{ width: 1, height: 24, background: `rgba(${rgb},0.20)`, marginLeft: 28 }} />
        <div style={{ width: 1, height: 24, background: `rgba(${rgb},0.20)`, marginRight: 28 }} />
      </div>

      {/* Bot row: right to left (Validar, Clasificar, Convertir) */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {botRow.map((step, i) => (
          <div key={step} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (topRow.length + i) * 0.08, duration: 0.40 }}
              style={nodeStyle(false)}
            >
              {label(false, step)}
            </motion.div>
            {i < botRow.length - 1 && (
              <ArrowRight size={14} strokeWidth={2}
                style={{ color: `rgba(${rgb},0.45)`, flexShrink: 0, transform: 'rotate(180deg)' }} />
            )}
          </div>
        ))}
        {/* Placeholder to balance columns */}
        <div style={{ flex: 1 }} />
      </div>

      {/* Legend */}
      <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: '#94a3b8', letterSpacing: '0.04em' }}>
        Ciclo continuo de procesamiento inteligente de documentos
      </p>
    </div>
  )
}

// ── ARCHITECTURE DIAGRAM (RIA) ──
function RIAArchVisual({ color, rgb }: { color: string; rgb: string }) {
  const inputs = [
    { Icon: Mail,       label: 'Email / Portal' },
    { Icon: ScanLine,   label: 'Escáner físico' },
    { Icon: Server,     label: 'ERP / CRM' },
    { Icon: Smartphone, label: 'Móvil / Web' },
  ]
  const outputs = [
    { Icon: HardDrive,  label: 'SharePoint' },
    { Icon: Server,     label: 'SAP / ERP' },
    { Icon: Archive,    label: 'ECM / Archivo' },
    { Icon: Workflow,   label: 'Notificaciones' },
  ]
  const engineSteps = ['Captura IA', 'Clasificación', 'Extracción', 'Validación', 'Distribución']
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 1fr', gap: 24, alignItems: 'center' }}>
      {/* Inputs */}
      <div>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#94a3b8', fontFamily: 'var(--font-montserrat)', marginBottom: 12,
        }}>Entrada</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {inputs.map(({ Icon, label }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: '#f8faff', border: `1px solid rgba(${rgb},0.12)`,
              borderRadius: 10, padding: '10px 14px',
            }}>
              <Icon size={15} strokeWidth={1.7} style={{ color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Engine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        style={{
          background: `linear-gradient(160deg, ${color}, ${color}CC)`,
          borderRadius: 20, padding: '24px 16px', textAlign: 'center',
          boxShadow: `0 12px 40px rgba(${rgb},0.34)`,
        }}
      >
        <p style={{
          fontFamily: 'var(--font-montserrat)', fontSize: 11, fontWeight: 800,
          color: 'rgba(255,255,255,0.70)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: 4,
        }}>RIA</p>
        <p style={{
          fontFamily: 'var(--font-montserrat)', fontSize: 13, fontWeight: 800,
          color: '#fff', marginBottom: 16,
        }}>Motor IA</p>
        {engineSteps.map(s => (
          <div key={s} style={{
            background: 'rgba(255,255,255,0.12)', borderRadius: 8,
            padding: '5px 10px', marginBottom: 6, fontSize: 11,
            color: 'rgba(255,255,255,0.90)', fontWeight: 600,
          }}>{s}</div>
        ))}
      </motion.div>

      {/* Outputs */}
      <div>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#94a3b8', fontFamily: 'var(--font-montserrat)', marginBottom: 12, textAlign: 'right',
        }}>Salida</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {outputs.map(({ Icon, label }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end',
              background: '#f8faff', border: `1px solid rgba(${rgb},0.12)`,
              borderRadius: 10, padding: '10px 14px',
            }}>
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>{label}</span>
              <Icon size={15} strokeWidth={1.7} style={{ color, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── DOCUMENT FLOW (natif.ai) ──
function NatifDocFlow({ color, rgb }: { color: string; rgb: string }) {
  const inputs  = ['PDF', 'XLS / CSV', 'Imagen', 'Email', 'DOC / TXT']
  const outputs = ['SAP', 'Oracle', 'Dynamics 365', 'SharePoint', 'API REST']
  return (
    <div style={{ maxWidth: 680, margin: '0 auto' }}>
      {/* Input docs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
        {inputs.map(t => (
          <div key={t} style={{
            background: '#ffffff', border: `1.5px solid rgba(${rgb},0.20)`,
            borderRadius: 10, padding: '8px 14px', fontSize: 12.5, fontWeight: 700,
            color: '#334155', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}>{t}</div>
        ))}
      </div>
      {/* Arrow + label */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ display: 'inline-block', width: 2, height: 20, background: `rgba(${rgb},0.30)` }} />
      </div>
      {/* Engine */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.50 }}
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}BB)`,
          borderRadius: 20, padding: '28px 40px', textAlign: 'center',
          boxShadow: `0 12px 40px rgba(${rgb},0.30)`, marginBottom: 12,
        }}
      >
        <p style={{
          fontFamily: 'var(--font-montserrat)', fontSize: 18, fontWeight: 800,
          color: '#ffffff', marginBottom: 8, letterSpacing: '-0.01em',
        }}>natif.ai IDP Engine</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', letterSpacing: '0.04em' }}>
          IA · Clasificación · Extracción · Validación · Enrutamiento
        </p>
      </motion.div>
      {/* Arrow */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ display: 'inline-block', width: 2, height: 20, background: `rgba(${rgb},0.30)` }} />
      </div>
      {/* Output systems */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
        {outputs.map(s => (
          <div key={s} style={{
            background: `rgba(${rgb},0.06)`, border: `1.5px solid rgba(${rgb},0.18)`,
            borderRadius: 10, padding: '8px 14px', fontSize: 12.5, fontWeight: 700,
            color, boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>{s}</div>
        ))}
      </div>
    </div>
  )
}

// ── INTERFACE PREVIEW (DocuWare) ──
function InterfacePreview({ screenshot, name, color, rgb }: {
  screenshot?: string; name: string; color: string; rgb: string
}) {
  const [err, setErr] = useState(false)
  if (!screenshot || err) {
    return (
      <div style={{
        background: `rgba(${rgb},0.06)`, borderRadius: 20,
        border: `1px solid rgba(${rgb},0.14)`, padding: '56px 48px', textAlign: 'center',
      }}>
        <Monitor size={48} strokeWidth={1.3} style={{ color, opacity: 0.5, marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: '#64748b' }}>Interfaz {name}</p>
      </div>
    )
  }
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 56px rgba(0,0,0,0.16)' }}>
      <div style={{
        background: '#dde3ea', padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#fc5c65','#ffd32a','#0be881'].map(c => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block' }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: '#fff', borderRadius: 6, padding: '3px 12px',
          fontSize: 11, color: '#64748b',
        }}>{name}</div>
      </div>
      <img src={screenshot} alt={`${name} interfaz`}
        onError={() => setErr(true)}
        style={{ width: '100%', display: 'block' }} />
    </div>
  )
}

// ── ECM TREE (Laserfiche) ──
function ECMTreeVisual({ color, rgb }: { color: string; rgb: string }) {
  const tree = [
    {
      label: 'Repositorio Central', Icon: HardDrive, top: true,
      children: [
        { label: 'Documentos y registros activos', Icon: Archive, children: [
          { label: 'Contratos vigentes' }, { label: 'Correspondencia oficial' }, { label: 'Reportes de auditoría' },
        ]},
        { label: 'Flujos de aprobación → [Pendiente → Revisión → Aprobado]', Icon: Workflow, children: [] },
        { label: 'Registros de cumplimiento (ISO · HIPAA · GDPR)', Icon: ShieldCheck, children: [] },
        { label: 'Portal externo de ciudadanos / clientes', Icon: Globe, children: [] },
      ],
    },
  ]
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 13 }}>
      <div style={{
        background: color, color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '10px 18px', borderRadius: 10, marginBottom: 16, fontWeight: 700, fontSize: 13,
      }}>
        <HardDrive size={15} strokeWidth={2} />
        Repositorio Central — Laserfiche
      </div>
      {tree[0].children.map((node, ni) => (
        <div key={node.label} style={{ marginLeft: 24, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: `rgba(${rgb},0.40)`, userSelect: 'none' }}>
              {ni < tree[0].children.length - 1 ? '├──' : '└──'}
            </span>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: `rgba(${rgb},0.06)`, borderRadius: 8,
              padding: '7px 14px', border: `1px solid rgba(${rgb},0.12)`,
            }}>
              <node.Icon size={14} strokeWidth={1.8} style={{ color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 600, lineHeight: 1.4 }}>{node.label}</span>
            </div>
          </div>
          {node.children && node.children.map((child, ci) => (
            <div key={child.label} style={{ marginLeft: 40, marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'rgba(0,0,0,0.20)', fontSize: 12 }}>
                {ci < node.children.length - 1 ? '├──' : '└──'}
              </span>
              <span style={{
                fontSize: 12.5, color: '#475569', padding: '4px 10px',
                background: '#f8faff', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)',
              }}>📄 {child.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// ── DOC CABINET (Docuclass) ──
function DocCabinetVisual({ color, rgb }: { color: string; rgb: string }) {
  const cats = [
    { label: 'Expedientes', Icon: Archive, items: ['Expediente Jurídico #0471', 'Expediente RRHH — Contrato 2024', 'Expediente Médico — PAC-0072'] },
    { label: 'Facturas', Icon: FileText, items: ['CFDI-2024-00847.xml', 'Nota crédito NCF-001', 'Factura Proveedor ABC'] },
    { label: 'Contratos', Icon: Layers, items: ['Contrato Arrendamiento 2024', 'Convenio Servicios Tech', 'Addendum Q1-2025'] },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      {cats.map(cat => (
        <div key={cat.label} style={{
          background: '#ffffff', borderRadius: 16,
          border: `1px solid rgba(${rgb},0.14)`,
          overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}>
          <div style={{
            background: color, padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <cat.Icon size={16} strokeWidth={1.8} style={{ color: '#fff' }} />
            <span style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 13, fontWeight: 800, color: '#fff',
            }}>{cat.label}</span>
          </div>
          <div style={{ padding: '12px' }}>
            {cat.items.map(item => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '7px 10px', borderRadius: 8, marginBottom: 4,
                background: `rgba(${rgb},0.04)`,
                border: `1px solid rgba(${rgb},0.08)`,
                fontSize: 12, color: '#475569',
              }}>
                <span style={{ color: `rgba(${rgb},0.45)`, fontSize: 11 }}>📄</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── QMS SUITES (MasterControl) ──
function QMSSuitesVisual({ color, rgb }: { color: string; rgb: string }) {
  const suites = [
    { name: 'QMS',        Icon: ShieldCheck, items: ['Control de documentos', 'CAPA', 'Auditorías internas', 'Gestión de capacitación', 'Control de cambios'] },
    { name: 'MES',        Icon: Layers,      items: ['Registros electrónicos (EBR)', 'Historial de dispositivo (eDHR)', 'Instrucciones digitales de trabajo', 'Revisión por excepción'] },
    { name: 'Assets',     Icon: HardDrive,   items: ['Gestión de equipos', 'Calibración', 'Mantenimiento preventivo', 'Programación de paradas'] },
    { name: 'Validation', Icon: CheckSquare, items: ['Validación de sistemas (CSV)', '21 CFR Part 11', 'Gestión de proveedores', 'Firma electrónica'] },
  ]
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.50 }}
          style={{
            fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 900, color, letterSpacing: '-0.02em', marginBottom: 12,
          }}
        >
          CADA DESVIACIÓN TIENE UN COSTO.
        </motion.p>
        <p style={{ fontSize: 15, color: '#64748b', maxWidth: 520, margin: '0 auto' }}>
          MasterControl lo captura, lo investiga y lo cierra — antes de que afecte la producción o la inspección.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
        {suites.map((suite, si) => (
          <motion.div
            key={suite.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.44, delay: si * 0.08 }}
            style={{
              background: si === 0 ? color : '#ffffff',
              borderRadius: 16, padding: '20px',
              border: `1px solid ${si === 0 ? 'transparent' : `rgba(${rgb},0.14)`}`,
              boxShadow: si === 0 ? `0 8px 28px rgba(${rgb},0.28)` : '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <suite.Icon size={18} strokeWidth={1.8} style={{ color: si === 0 ? '#fff' : color }} />
              <p style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 15, fontWeight: 800,
                color: si === 0 ? '#fff' : '#0d0f14',
              }}>{suite.name}</p>
            </div>
            {suite.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                <Check size={11} strokeWidth={2.8} style={{
                  color: si === 0 ? 'rgba(255,255,255,0.80)' : color, flexShrink: 0, marginTop: 3,
                }} />
                <span style={{ fontSize: 12, color: si === 0 ? 'rgba(255,255,255,0.85)' : '#475569', lineHeight: 1.45 }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── SCREENSHOT GALLERY (Kintone) ──
function ScreenshotGallery({ color, rgb }: { color: string; rgb: string }) {
  const shots = [
    { src: '/products/software/kintone-ss-1.webp', label: 'Constructor drag-and-drop de apps' },
    { src: '/products/software/kintone-ss-2.webp', label: 'Gestión de permisos y datos' },
    { src: '/products/software/kintone-ss-3.webp', label: 'Colaboración en espacio de trabajo' },
    { src: '/products/software/kintone-ss-4.webp', label: 'Extensiones e integraciones' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      {shots.map((ss, i) => (
        <motion.div
          key={ss.src}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.44 }}
          style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
        >
          <img src={ss.src} alt={ss.label}
            style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
          <div style={{
            padding: '8px 12px', background: '#f8faff',
            borderTop: `2px solid rgba(${rgb},0.12)`,
            fontSize: 11.5, color: '#64748b', fontWeight: 600,
          }}>{ss.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// ── KDS DISPLAY (Epson KDS) ──
function KDSDisplayVisual({ color, rgb }: { color: string; rgb: string }) {
  const orders = [
    { id: '#041', items: ['Hamburguesa clásica ×2', 'Papas medianas ×2', 'Refresco ×1'], status: 'completed', time: '4:12' },
    { id: '#042', items: ['Pizza pepperoni ×1', 'Ensalada César ×1', 'Agua mineral ×2'], status: 'inprogress', time: '3:47' },
    { id: '#043', items: ['Sándwich de pollo ×3', 'Papas grandes ×3'], status: 'new', time: '0:52' },
  ]
  const statusStyle: Record<string, { bg: string; label: string; textColor: string }> = {
    completed:  { bg: '#d1fae5', label: 'Completado',  textColor: '#065f46' },
    inprogress: { bg: `rgba(${rgb},0.12)`, label: 'En preparación', textColor: color },
    new:        { bg: '#fef9c3', label: 'Nueva orden', textColor: '#854d0e' },
  }
  return (
    <div>
      {/* Screen header */}
      <div style={{
        background: '#0d0f14', borderRadius: '16px 16px 0 0',
        padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Monitor size={16} strokeWidth={1.8} style={{ color }} />
          <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: 12, fontWeight: 700, color: '#fff' }}>
            Epson KDS — Cocina Principal
          </span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>TURNO: 14:30 — 22:00</span>
      </div>
      {/* Orders grid */}
      <div style={{
        background: '#1a1f2e', borderRadius: '0 0 16px 16px',
        padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
      }}>
        {orders.map(order => {
          const st = statusStyle[order.status]
          return (
            <div key={order.id} style={{
              background: '#ffffff', borderRadius: 12, overflow: 'hidden',
              border: `2px solid ${order.status === 'inprogress' ? color : 'transparent'}`,
              boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
            }}>
              <div style={{
                background: st.bg, padding: '8px 12px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 800, color: st.textColor }}>
                  {order.id}
                </span>
                <span style={{ fontSize: 11, fontWeight: 700, color: st.textColor }}>{st.label}</span>
              </div>
              <div style={{ padding: '10px 12px' }}>
                {order.items.map(item => (
                  <p key={item} style={{ fontSize: 12, color: '#475569', marginBottom: 4 }}>• {item}</p>
                ))}
                <div style={{
                  marginTop: 10, display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 11.5, color: '#94a3b8',
                }}>
                  <Zap size={11} strokeWidth={2} style={{ color }} />
                  Tiempo: {order.time} min
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── PRODUCT VISUAL ROUTER ──
function ProductVisual({ data }: { data: SolucionData }) {
  const { brandColor: color, rgb, visualType, screenshot, name } = data
  switch (visualType) {
    case 'scan-flow':       return <ScanFlowVisual color={color} rgb={rgb} />
    case 'circular-flow':   return <CircularFlowVisual color={color} rgb={rgb} />
    case 'architecture':    return <RIAArchVisual color={color} rgb={rgb} />
    case 'doc-flow':        return <NatifDocFlow color={color} rgb={rgb} />
    case 'interface-preview': return <InterfacePreview screenshot={screenshot} name={name} color={color} rgb={rgb} />
    case 'ecm-tree':        return <ECMTreeVisual color={color} rgb={rgb} />
    case 'doc-cabinet':     return <DocCabinetVisual color={color} rgb={rgb} />
    case 'qms-suites':      return <QMSSuitesVisual color={color} rgb={rgb} />
    case 'screenshot-gallery': return <ScreenshotGallery color={color} rgb={rgb} />
    case 'kds-display':     return <KDSDisplayVisual color={color} rgb={rgb} />
    default:                return <InterfacePreview screenshot={screenshot} name={name} color={color} rgb={rgb} />
  }
}

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────
const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function SolucionPage({ params }: { params: { slug: string } }) {
  const data = SOLUCIONES[params.slug]
  if (!data) notFound()

  const { brandColor: C, brandColorDark: CD, rgb: R, name, brand, category, headline, description, longDescription, stats, features, useCases, benefits, logo, heroImage } = data

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', background: '#020b1d', overflow: 'hidden', padding: '100px 0 80px' }}>
          {/* Brand color glow */}
          <div aria-hidden style={{
            position: 'absolute', top: '30%', left: '20%',
            transform: 'translate(-50%,-50%)',
            width: 700, height: 700,
            background: `radial-gradient(circle, rgba(${R},0.14) 0%, transparent 65%)`,
            pointerEvents: 'none',
          }} />
          <div style={LIGHT_GRID} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                  <Link href="/software" style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}>
                    Software y Soluciones
                  </Link>
                  <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.22)' }} />
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}>
                    {category}
                  </span>
                  <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.22)' }} />
                  <span style={{ fontSize: 12, color: C, fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
                    {name}
                  </span>
                </div>

                {/* Brand badge */}
                <span style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '4px 14px', borderRadius: 9999,
                  background: `rgba(${R},0.15)`, border: `1px solid rgba(${R},0.32)`,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.10em',
                  color: C, textTransform: 'uppercase',
                  fontFamily: 'var(--font-montserrat)', marginBottom: 20,
                }}>
                  {brand} · {category}
                </span>

                <h1 style={{
                  fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.12, marginBottom: 20,
                }}>
                  {headline}
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.60)', lineHeight: 1.76, marginBottom: 36, maxWidth: 620 }}>
                  {description}
                </p>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contacto" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: `linear-gradient(135deg, ${C}, ${CD})`,
                    color: '#ffffff', padding: '14px 28px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: `0 4px 24px rgba(${R},0.40)`,
                  }}>
                    Solicitar demo <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                  <Link href="/contacto" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)',
                    color: 'rgba(255,255,255,0.85)', padding: '14px 28px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  }}>
                    Cotizar
                  </Link>
                </div>
              </motion.div>

              {/* Logo / hero image panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ flexShrink: 0 }}
              >
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={`${name} screenshot`}
                    style={{ width: 420, maxWidth: '100%', display: 'block' }}
                  />
                ) : (
                  <LogoOrBadge logo={logo} name={name} brand={brand} color={C} rgb={R} />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{
          background: `rgba(${R},0.06)`, padding: '32px 0',
          borderBottom: `1px solid rgba(${R},0.10)`, borderTop: `1px solid rgba(${R},0.10)`,
        }}>
          <div style={{
            maxWidth: 1000, margin: '0 auto', padding: '0 40px',
            display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 1,
          }}>
            {stats.map((s, i, arr) => (
              <div key={s.label} style={{
                textAlign: 'center', padding: '12px 16px',
                borderRight: i < arr.length - 1 ? `1px solid rgba(${R},0.14)` : undefined,
              }}>
                <p style={{
                  fontFamily: 'var(--font-montserrat)', fontSize: 26, fontWeight: 800,
                  color: C, lineHeight: 1, marginBottom: 5, letterSpacing: '-0.02em',
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 11.5, color: '#64748b', fontWeight: 600, letterSpacing: '0.03em' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCT OVERVIEW ── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: C,
                  fontFamily: 'var(--font-montserrat)', marginBottom: 14,
                }}>
                  Acerca de {name}
                </p>
                <p style={{
                  fontSize: 17, color: '#334155', lineHeight: 1.80,
                  borderLeft: `3px solid ${C}`, paddingLeft: 24,
                }}>
                  {longDescription}
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link href="/contacto" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: `linear-gradient(135deg, ${C}, ${CD})`,
                    color: '#ffffff', padding: '12px 24px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: `0 4px 18px rgba(${R},0.30)`,
                  }}>
                    Hablar con un especialista <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.10, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Mini stats cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{
                      background: i === 0 ? C : `rgba(${R},0.06)`,
                      border: `1px solid ${i === 0 ? 'transparent' : `rgba(${R},0.14)`}`,
                      borderRadius: 16, padding: '20px 18px',
                      ...(i === stats.length - 1 && stats.length % 2 !== 0 ? { gridColumn: '1 / -1' } : {}),
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-montserrat)', fontSize: 22, fontWeight: 800,
                        color: i === 0 ? '#fff' : C, marginBottom: 6, lineHeight: 1,
                      }}>{s.value}</p>
                      <p style={{ fontSize: 12, color: i === 0 ? 'rgba(255,255,255,0.75)' : '#64748b', lineHeight: 1.45 }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section style={{ position: 'relative', background: '#f8faff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 48, maxWidth: 640 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Capacidades clave</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18,
              }}>
                Todo lo que {name} puede hacer por tu organización.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: '#ffffff', borderRadius: 16,
                    border: `1px solid rgba(${R},0.10)`,
                    padding: '26px', display: 'flex', alignItems: 'flex-start', gap: 16,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `rgba(${R},0.08)`, border: `1px solid rgba(${R},0.15)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <f.Icon size={20} strokeWidth={1.7} style={{ color: C }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
                      color: '#0d0f14', marginBottom: 8, lineHeight: 1.3,
                    }}>{f.title}</h3>
                    <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.68 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISUAL BREAK ── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 48, textAlign: 'center' }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>En acción</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(20px, 2.8vw, 30px)',
                fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em',
              }}>
                {data.visualType === 'scan-flow'         && 'El flujo de captura de extremo a extremo.'}
                {data.visualType === 'circular-flow'     && 'Ciclo continuo de procesamiento inteligente.'}
                {data.visualType === 'architecture'      && 'Arquitectura IDP en la nube: entrada, procesamiento, salida.'}
                {data.visualType === 'doc-flow'          && 'De documento sin estructura a dato integrado.'}
                {data.visualType === 'interface-preview' && 'La plataforma en funcionamiento.'}
                {data.visualType === 'ecm-tree'          && 'Estructura de repositorio documental.'}
                {data.visualType === 'doc-cabinet'       && 'Expedientes digitales organizados y accesibles.'}
                {data.visualType === 'qms-suites'        && 'Cuatro suites, una plataforma conectada.'}
                {data.visualType === 'screenshot-gallery' && 'Construye sin límites, en días — no meses.'}
                {data.visualType === 'kds-display'       && 'Órdenes en tiempo real, cocina sin papel.'}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.10, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductVisual data={data} />
            </motion.div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={{ position: 'relative', background: '#020b1d', padding: '80px 0', overflow: 'hidden' }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)', width: 1000, height: 400,
            background: `radial-gradient(ellipse, rgba(${R},0.10) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 48 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Casos de uso</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.18,
              }}>¿Qué industrias y procesos beneficia?</h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {useCases.map((u, i) => (
                <motion.div
                  key={u.sector}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.46, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'rgba(255,255,255,0.04)', borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.08)', padding: '24px',
                  }}
                >
                  <Star size={16} strokeWidth={1.7} style={{ color: C, marginBottom: 12 }} />
                  <h3 style={{
                    fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
                    color: '#ffffff', marginBottom: 8,
                  }}>{u.sector}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{u.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ position: 'relative', background: '#f8faff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 40 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Por qué elegirlo</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18,
              }}>Beneficios concretos para tu organización.</h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.44, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    background: '#ffffff', borderRadius: 12,
                    border: `1px solid rgba(${R},0.09)`,
                    padding: '16px 20px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                    background: `rgba(${R},0.10)`, border: `1px solid rgba(${R},0.22)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                  }}>
                    <Check size={11} strokeWidth={2.8} style={{ color: C }} />
                  </span>
                  <p style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.65 }}>{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// Avoid unused import error for CheckSquare (used inline)
function CheckSquare({ size, strokeWidth, style }: { size?: number; strokeWidth?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth ?? 2} strokeLinecap="round"
      strokeLinejoin="round" style={style}>
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}
