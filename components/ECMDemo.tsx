'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderOpen, Folder, FileText } from 'lucide-react'

type Status = 'Aprobado' | 'Revisión' | 'Archivado'
type FileItem = { id: string; name: string; date: string; status: Status; version: string }
type FolderData = { id: string; label: string; files: FileItem[] }

const STATUS: Record<Status, { bg: string; border: string; color: string }> = {
  Aprobado:  { bg: 'rgba(34,197,94,0.10)',   border: 'rgba(34,197,94,0.22)',   color: '#4ade80' },
  Revisión:  { bg: 'rgba(251,191,36,0.10)',  border: 'rgba(251,191,36,0.22)',  color: '#fbbf24' },
  Archivado: { bg: 'rgba(100,116,139,0.12)', border: 'rgba(100,116,139,0.20)', color: '#64748b' },
}

const FOLDERS: FolderData[] = [
  {
    id: 'contratos', label: 'Contratos',
    files: [
      { id: 'c1', name: 'Aceros_Norte.pdf',    date: '24 may', status: 'Aprobado',  version: 'v3' },
      { id: 'c2', name: 'TechPro_2026.pdf',    date: '22 may', status: 'Revisión',  version: 'v2' },
      { id: 'c3', name: 'EPM_Redes.pdf',       date: '18 may', status: 'Aprobado',  version: 'v5' },
      { id: 'c4', name: 'NDA_Bancolombia.pdf', date: '15 may', status: 'Archivado', version: 'v1' },
    ],
  },
  {
    id: 'facturas', label: 'Facturas',
    files: [
      { id: 'f1', name: 'Fact_2026_042.pdf', date: '24 may', status: 'Aprobado',  version: 'v1' },
      { id: 'f2', name: 'Fact_2026_041.xml', date: '23 may', status: 'Aprobado',  version: 'v1' },
      { id: 'f3', name: 'Fact_2026_040.pdf', date: '20 may', status: 'Revisión',  version: 'v2' },
      { id: 'f4', name: 'Nota_Cred_018.pdf', date: '19 may', status: 'Archivado', version: 'v1' },
      { id: 'f5', name: 'Fact_2026_039.pdf', date: '17 may', status: 'Aprobado',  version: 'v1' },
    ],
  },
  {
    id: 'rrhh', label: 'RRHH',
    files: [
      { id: 'r1', name: 'Cto_Martinez.pdf',   date: '23 may', status: 'Aprobado',  version: 'v2' },
      { id: 'r2', name: 'Eval_Q1_2026.xlsx',  date: '20 may', status: 'Revisión',  version: 'v1' },
      { id: 'r3', name: 'Nomina_May26.xlsx',  date: '31 may', status: 'Revisión',  version: 'v3' },
      { id: 'r4', name: 'Pol_Vacaciones.pdf', date: '10 may', status: 'Archivado', version: 'v2' },
    ],
  },
  {
    id: 'legal', label: 'Legal',
    files: [
      { id: 'l1', name: 'Poder_Not_2026.pdf', date: '21 may', status: 'Aprobado',  version: 'v1' },
      { id: 'l2', name: 'Demanda_Trib.pdf',   date: '18 may', status: 'Revisión',  version: 'v4' },
      { id: 'l3', name: 'Marca_AbbaCore.pdf', date: '15 may', status: 'Aprobado',  version: 'v2' },
      { id: 'l4', name: 'Acta_May_2026.pdf',  date: '12 may', status: 'Archivado', version: 'v1' },
    ],
  },
]

const SPRING = { type: 'spring' as const, stiffness: 300, damping: 30 }
const TIMELINE: { label: string; desc: string }[] = [
  { label: 'v1', desc: 'Borrador' },
  { label: 'v2', desc: 'Revisión' },
  { label: 'v3', desc: 'Aprobado' },
]

// Shared panel/text styles
const MUTED  = 'rgba(255,255,255,0.26)'
const MUTED2 = 'rgba(255,255,255,0.50)'

export default function ECMDemo() {
  const [activeFolderId, setActiveFolderId] = useState('contratos')
  const [selectedFileId, setSelectedFileId] = useState('c1')

  const activeFolder = FOLDERS.find(f => f.id === activeFolderId)!
  const selectedFile = activeFolder.files.find(f => f.id === selectedFileId) ?? activeFolder.files[0]

  function switchFolder(id: string) {
    const folder = FOLDERS.find(f => f.id === id)!
    setActiveFolderId(id)
    setSelectedFileId(folder.files[0].id)
  }

  return (
    <div style={{ display: 'flex', width: '100%', maxWidth: 480, height: 360, borderRadius: 14, overflow: 'hidden' }}>

      {/* ── PANEL 1: Sidebar ── */}
      <div style={{
        width: 96, flexShrink: 0,
        background: 'rgba(9,12,24,0.74)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', flexDirection: 'column',
        paddingTop: 14,
      }}>
        <div style={{ flex: 1 }}>
          {FOLDERS.map(folder => {
            const active = folder.id === activeFolderId
            return (
              <button
                key={folder.id}
                onClick={() => switchFolder(folder.id)}
                style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                {active && (
                  <motion.div layoutId="sidebar-bg" style={{ position: 'absolute', inset: 0, background: 'rgba(37,99,235,0.09)' }} transition={SPRING} />
                )}
                {active && (
                  <motion.div layoutId="sidebar-bar" style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 2, background: '#2563eb', borderRadius: 2 }} transition={SPRING} />
                )}
                <span style={{ position: 'relative', flexShrink: 0 }}>
                  {active
                    ? <FolderOpen size={13} style={{ color: '#60a5fa', display: 'block' }} />
                    : <Folder    size={13} style={{ color: 'rgba(255,255,255,0.28)', display: 'block' }} />
                  }
                </span>
                <span style={{ position: 'relative', fontSize: 12, fontWeight: active ? 600 : 400, color: active ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.36)', whiteSpace: 'nowrap' }}>
                  {folder.label}
                </span>
              </button>
            )
          })}
        </div>
        <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.16)', letterSpacing: '0.05em' }}>3.201 documentos</span>
        </div>
      </div>

      {/* ── PANEL 2: File list ── */}
      <div style={{
        width: 162, flexShrink: 0,
        background: 'rgba(10,14,28,0.62)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ padding: '13px 14px 9px', borderBottom: '1px solid rgba(255,255,255,0.04)', flexShrink: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {activeFolder.label}
          </span>
        </div>

        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFolderId}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ ...SPRING, mass: 0.5 }}
            >
              {activeFolder.files.map(file => {
                const sel = file.id === selectedFile.id
                const st  = STATUS[file.status]
                return (
                  <button
                    key={file.id}
                    onClick={() => setSelectedFileId(file.id)}
                    style={{ width: '100%', position: 'relative', display: 'block', padding: '9px 14px', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    {sel && (
                      <motion.div
                        layoutId={`file-sel-${activeFolderId}`}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(37,99,235,0.08)', borderLeft: '2px solid rgba(37,99,235,0.65)' }}
                        transition={SPRING}
                      />
                    )}
                    <div style={{ position: 'relative' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <FileText size={10} style={{ color: sel ? '#60a5fa' : 'rgba(255,255,255,0.22)', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, fontWeight: sel ? 600 : 400, color: sel ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.48)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 112 }}>
                          {file.name}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', flexShrink: 0 }}>{file.date}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.03em', color: st.color, background: st.bg, border: `1px solid ${st.border}`, padding: '1px 5px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>
                          {file.status}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── PANEL 3: Preview ── */}
      <div style={{ flex: 1, background: 'rgba(10,14,28,0.54)', backdropFilter: 'blur(20px)', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFile.id}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ ...SPRING, mass: 0.5 }}
            style={{ height: '100%', padding: '18px 16px', display: 'flex', flexDirection: 'column' }}
          >
            {/* Filename */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16 }}>
              <FileText size={13} style={{ color: '#60a5fa', marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.88)', lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 148 }}>
                {selectedFile.name}
              </span>
            </div>

            {/* Metadata */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
              {[
                { k: 'Fecha',   v: `${selectedFile.date} 2026` },
                { k: 'Versión', v: selectedFile.version },
              ].map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 10, color: MUTED }}>{k}</span>
                  <span style={{ fontSize: 10, color: MUTED2, fontWeight: 500 }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: MUTED }}>Estado</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: STATUS[selectedFile.status].color }}>
                  {selectedFile.status}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 16 }} />

            {/* Timeline */}
            <div style={{ marginBottom: 14 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.20)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Historial
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {TIMELINE.map((step, i) => {
                const isLast = i === TIMELINE.length - 1
                return (
                  <div key={step.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 14, flexShrink: 0, paddingTop: 2 }}>
                      <motion.div
                        animate={isLast ? { boxShadow: ['0 0 0 0px rgba(37,99,235,0)', '0 0 0 5px rgba(37,99,235,0.28)', '0 0 0 0px rgba(37,99,235,0)'] } : {}}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
                        style={{ width: 8, height: 8, borderRadius: '50%', background: isLast ? '#2563eb' : 'rgba(255,255,255,0.18)', flexShrink: 0 }}
                      />
                      {!isLast && (
                        <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.08)', marginTop: 3, marginBottom: 3 }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: isLast ? 0 : 12 }}>
                      <span style={{ fontSize: 11, fontWeight: isLast ? 600 : 400, color: isLast ? '#93c5fd' : 'rgba(255,255,255,0.34)' }}>
                        {step.label} · {step.desc}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
