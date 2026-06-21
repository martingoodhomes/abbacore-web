'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ClusterDef = {
  label: string
  color: string
  phi: number
  theta: number
  docs: number
  types: string[]
  updated: string
}

const CLUSTERS: ClusterDef[] = [
  { label: 'Contratos',   color: '#60a5fa', phi: 0.50, theta: 0.80, docs: 284,  types: ['PDF', 'DOCX'],  updated: 'Hoy'     },
  { label: 'Facturas',    color: '#34d399', phi: 1.30, theta: 1.80, docs: 1847, types: ['PDF', 'XML'],   updated: 'Hoy'     },
  { label: 'RRHH',        color: '#f472b6', phi: 2.00, theta: 0.60, docs: 391,  types: ['PDF', 'XLSX'],  updated: 'Ayer'    },
  { label: 'Legal',       color: '#fbbf24', phi: 0.70, theta: 3.80, docs: 156,  types: ['PDF', 'DOCX'],  updated: 'hace 3d' },
  { label: 'Proyectos',   color: '#a78bfa', phi: 2.50, theta: 4.50, docs: 523,  types: ['XLSX', 'PPTX'], updated: 'Hoy'     },
  { label: 'Proveedores', color: '#fb923c', phi: 1.70, theta: 5.60, docs: 312,  types: ['PDF', 'XML'],   updated: 'Hoy'     },
  { label: 'Auditoría',   color: '#e879f9', phi: 0.30, theta: 2.50, docs: 89,   types: ['PDF', 'XLSX'],  updated: 'Ayer'    },
  { label: 'Dirección',   color: '#38bdf8', phi: 2.80, theta: 2.20, docs: 47,   types: ['PDF', 'PPTX'],  updated: 'hace 2d' },
]

const AUDIT_TRAIL = [
  { text: '14:32 · Modificado', color: '#93c5fd' },
  { text: '14:33 · Aprobado',   color: '#86efac' },
  { text: '14:34 · Archivado',  color: '#c4b5fd' },
]

interface HoveredCluster extends ClusterDef {
  x: number
  y: number
  containerW: number
  containerH: number
}

function fmt(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'k' : String(n)
}

export default function ECMSphere() {
  const mountRef       = useRef<HTMLDivElement>(null)
  const frameRef       = useRef<number>(0)
  const cleanupRef     = useRef<(() => void) | null>(null)
  const labelEls       = useRef<(HTMLDivElement | null)[]>(new Array(CLUSTERS.length).fill(null))
  const contratsCardRef = useRef<HTMLDivElement | null>(null)
  const auditLabelRefs  = useRef<(HTMLDivElement | null)[]>([null, null, null])

  const isDragging  = useRef(false)
  const lastMouse   = useRef({ x: 0, y: 0 })
  const velocity    = useRef({ x: 0, y: 0 })
  const rotation    = useRef({ x: 0.3, y: 0 })
  const mouseCanvas = useRef({ x: -9999, y: -9999 })

  const [hovered, setHovered]   = useState<HoveredCluster | null>(null)
  const hoveredRef               = useRef<HoveredCluster | null>(null)

  const setHoveredSync = useCallback((v: HoveredCluster | null) => {
    hoveredRef.current = v
    setHovered(v)
  }, [])

  useEffect(() => {
    if (!mountRef.current) return
    let alive = true

    async function init() {
      const THREE = await import('three')
      if (!alive || !mountRef.current) return

      const W = mountRef.current.clientWidth  || 480
      const H = mountRef.current.clientHeight || 480

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0x000000, 0)
      mountRef.current.appendChild(renderer.domElement)

      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
      camera.position.z = 2.8

      // ── Particles ──
      const N = 240
      const positions  = new Float32Array(N * 3)
      const colors     = new Float32Array(N * 3)
      const baseSizes  = new Float32Array(N)
      const clusterIds = new Int32Array(N)
      const goldenPhi  = Math.PI * (3 - Math.sqrt(5))

      const poles = CLUSTERS.map(c => {
        const s = Math.sin(c.phi)
        return { nx: s * Math.cos(c.theta), ny: Math.cos(c.phi), nz: s * Math.sin(c.theta), color: new THREE.Color(c.color) }
      })

      for (let i = 0; i < N; i++) {
        const y  = 1 - (i / (N - 1)) * 2
        const r  = Math.sqrt(Math.max(0, 1 - y * y))
        const a  = goldenPhi * i
        const x  = Math.cos(a) * r
        const z  = Math.sin(a) * r
        positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z

        let bestDot = -2, best = 0
        for (let ci = 0; ci < poles.length; ci++) {
          const dot = x * poles[ci].nx + y * poles[ci].ny + z * poles[ci].nz
          if (dot > bestDot) { bestDot = dot; best = ci }
        }
        clusterIds[i] = best
        const inCore = bestDot > 0.48
        const col = inCore ? poles[best].color : new THREE.Color('#1d4ed8')
        colors[i*3] = col.r; colors[i*3+1] = col.g; colors[i*3+2] = col.b
        baseSizes[i] = inCore ? 0.020 + Math.random() * 0.014 : 0.010 + Math.random() * 0.006
      }

      // ── Cluster centroids ──
      const centroids: { x: number; y: number; z: number }[] = CLUSTERS.map(() => ({ x: 0, y: 0, z: 0 }))
      const counts = new Array(CLUSTERS.length).fill(0)
      for (let i = 0; i < N; i++) {
        const ci = clusterIds[i]
        centroids[ci].x += positions[i*3]; centroids[ci].y += positions[i*3+1]; centroids[ci].z += positions[i*3+2]
        counts[ci]++
      }
      centroids.forEach((c, ci) => {
        const n = counts[ci] || 1
        c.x /= n; c.y /= n; c.z /= n
        const len = Math.sqrt(c.x*c.x + c.y*c.y + c.z*c.z) || 1
        c.x /= len; c.y /= len; c.z /= len
      })

      // ── Shader ──
      const pointsMat = new THREE.ShaderMaterial({
        vertexShader: `
          attribute float size; attribute vec3 color; varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            vec2 uv = gl_PointCoord - 0.5; float d = length(uv);
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.18, d);
            float glow = smoothstep(0.5, 0.0, d) * 0.55;
            gl_FragColor = vec4(vColor + glow, alpha * 0.92);
          }`,
        transparent: true, depthWrite: false,
        uniforms: { uTime: { value: 0 } },
      })

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color',    new THREE.BufferAttribute(colors.slice(), 3))
      geo.setAttribute('size',     new THREE.BufferAttribute(baseSizes.slice(), 1))
      const points = new THREE.Points(geo, pointsMat)

      // ── Connection lines ──
      const linePts: number[] = []
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = positions[i*3]-positions[j*3], dy = positions[i*3+1]-positions[j*3+1], dz = positions[i*3+2]-positions[j*3+2]
        if (dx*dx + dy*dy + dz*dz < 0.36*0.36)
          linePts.push(positions[i*3],positions[i*3+1],positions[i*3+2],positions[j*3],positions[j*3+1],positions[j*3+2])
      }
      const lineGeo = new THREE.BufferGeometry()
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePts), 3))
      const lineMat = new THREE.LineBasicMaterial({ color: 0x1e40af, transparent: true, opacity: 0.14 })
      const lines   = new THREE.LineSegments(lineGeo, lineMat)

      // ── Audit trail: 3 particles closest to Contratos centroid ──
      const auditParticleIndices: number[] = []
      {
        const cen = centroids[0]
        const candidates: { idx: number; d2: number }[] = []
        for (let i = 0; i < N; i++) {
          if (clusterIds[i] !== 0) continue
          const dx = positions[i*3]-cen.x, dy = positions[i*3+1]-cen.y, dz = positions[i*3+2]-cen.z
          candidates.push({ idx: i, d2: dx*dx+dy*dy+dz*dz })
        }
        candidates.sort((a, b) => a.d2 - b.d2)
        // Pick 3 with some spread: first, ~8th, ~16th to form a visible trail
        const chosen = [0, Math.min(7, candidates.length-1), Math.min(15, candidates.length-1)]
        chosen.forEach(k => auditParticleIndices.push(candidates[k].idx))
      }
      const auditPts = new Float32Array([
        positions[auditParticleIndices[0]*3],   positions[auditParticleIndices[0]*3+1], positions[auditParticleIndices[0]*3+2],
        positions[auditParticleIndices[1]*3],   positions[auditParticleIndices[1]*3+1], positions[auditParticleIndices[1]*3+2],
        positions[auditParticleIndices[1]*3],   positions[auditParticleIndices[1]*3+1], positions[auditParticleIndices[1]*3+2],
        positions[auditParticleIndices[2]*3],   positions[auditParticleIndices[2]*3+1], positions[auditParticleIndices[2]*3+2],
      ])
      const auditLineGeo = new THREE.BufferGeometry()
      auditLineGeo.setAttribute('position', new THREE.BufferAttribute(auditPts, 3))
      const auditLineMat = new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0 })
      const auditLine = new THREE.LineSegments(auditLineGeo, auditLineMat)

      // ── Raycasting sphere ──
      const rayGeo = new THREE.SphereGeometry(1, 32, 32)
      const rayMat = new THREE.MeshBasicMaterial({ visible: false })
      const raySphere = new THREE.Mesh(rayGeo, rayMat)

      const group = new THREE.Group()
      group.add(points, lines, auditLine, raySphere)
      scene.add(group)

      const raycaster = new THREE.Raycaster()
      raycaster.params.Points = { threshold: 0.06 }
      const ndcMouse = new THREE.Vector2()

      // ── Events ──
      const canvas = renderer.domElement
      function onMouseDown(e: MouseEvent) { isDragging.current = true; lastMouse.current = { x: e.clientX, y: e.clientY }; velocity.current = { x: 0, y: 0 } }
      function onMouseMove(e: MouseEvent) {
        const rect = canvas.getBoundingClientRect()
        mouseCanvas.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        if (isDragging.current) {
          velocity.current = { x: (e.clientY - lastMouse.current.y) * 0.006, y: (e.clientX - lastMouse.current.x) * 0.006 }
          rotation.current.x += velocity.current.x; rotation.current.y += velocity.current.y
          lastMouse.current = { x: e.clientX, y: e.clientY }
        }
      }
      function onMouseUp() { isDragging.current = false }
      function onMouseLeave() { isDragging.current = false; mouseCanvas.current = { x: -9999, y: -9999 }; if (hoveredRef.current) setHoveredSync(null) }
      function onTouchStart(e: TouchEvent) { const t = e.touches[0]; isDragging.current = true; lastMouse.current = { x: t.clientX, y: t.clientY }; velocity.current = { x: 0, y: 0 } }
      function onTouchMove(e: TouchEvent) {
        e.preventDefault(); const t = e.touches[0]
        velocity.current = { x: (t.clientY - lastMouse.current.y) * 0.006, y: (t.clientX - lastMouse.current.x) * 0.006 }
        rotation.current.x += velocity.current.x; rotation.current.y += velocity.current.y
        lastMouse.current = { x: t.clientX, y: t.clientY }
      }
      function onTouchEnd() { isDragging.current = false }
      canvas.addEventListener('mousedown', onMouseDown)
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      canvas.addEventListener('mouseleave', onMouseLeave)
      canvas.addEventListener('touchstart', onTouchStart, { passive: true })
      canvas.addEventListener('touchmove', onTouchMove, { passive: false })
      canvas.addEventListener('touchend', onTouchEnd)

      const colorAttr = geo.getAttribute('color') as import('three').BufferAttribute
      const sizeAttr  = geo.getAttribute('size')  as import('three').BufferAttribute
      const baseColors = colors.slice()
      const tmpVec = new THREE.Vector3()
      let t = 0

      function tick() {
        if (!alive) return
        frameRef.current = requestAnimationFrame(tick)
        t += 0.008

        // Rotation
        if (!isDragging.current) {
          velocity.current.x *= 0.92; velocity.current.y *= 0.92
          rotation.current.x += velocity.current.x; rotation.current.y += velocity.current.y + 0.0025
        }
        group.rotation.x = rotation.current.x; group.rotation.y = rotation.current.y
        group.updateMatrixWorld(true)

        const rect = canvas.getBoundingClientRect()
        ndcMouse.x = (mouseCanvas.current.x / rect.width) * 2 - 1
        ndcMouse.y = -(mouseCanvas.current.y / rect.height) * 2 + 1
        raycaster.setFromCamera(ndcMouse, camera)

        // ── Cluster label positions + hover detection ──
        let closestCluster: HoveredCluster | null = null
        let closestDist = 100
        let contratsFacing = false, contratsScreenX = 0, contratsScreenY = 0

        for (let ci = 0; ci < CLUSTERS.length; ci++) {
          const c = centroids[ci]
          tmpVec.set(c.x, c.y, c.z).applyMatrix4(group.matrixWorld)
          const worldZ = tmpVec.z
          const proj   = tmpVec.clone().project(camera)
          const sx = (proj.x + 1) / 2 * rect.width
          const sy = (1 - (proj.y + 1) / 2) * rect.height

          if (ci === 0) { contratsFacing = worldZ > -0.1 && proj.z < 1; contratsScreenX = sx; contratsScreenY = sy }

          const el = labelEls.current[ci]
          if (el) {
            if (proj.z < 1) {
              el.style.left = `${sx}px`
              el.style.top  = `${sy}px`
              // Always visible: full when facing, 0.40 minimum when behind
              const op = worldZ > 0.1 ? 0.95 : worldZ > -0.35 ? 0.40 + (worldZ + 0.35) / 0.45 * 0.55 : 0.40
              el.style.opacity = String(op)
            } else {
              el.style.opacity = '0'
            }
          }

          const d = Math.sqrt((sx - mouseCanvas.current.x) ** 2 + (sy - mouseCanvas.current.y) ** 2)
          if (d < closestDist && proj.z < 1) {
            closestDist = d
            closestCluster = { ...CLUSTERS[ci], x: sx, y: sy, containerW: rect.width, containerH: rect.height }
          }
        }

        const nextLabel = closestCluster?.label ?? null
        const prevLabel = hoveredRef.current?.label ?? null
        if (nextLabel !== prevLabel) setHoveredSync(closestCluster)

        // Hide mini label for hovered cluster
        const hovCI = hoveredRef.current ? CLUSTERS.findIndex(c => c.label === hoveredRef.current!.label) : -1
        if (hovCI >= 0 && labelEls.current[hovCI]) labelEls.current[hovCI]!.style.opacity = '0'

        // ── Contratos floating info card ──
        if (contratsCardRef.current) {
          const cardX = Math.max(4, Math.min(contratsScreenX - 112, rect.width - 228))
          const cardY = Math.max(4, contratsScreenY - 78)
          contratsCardRef.current.style.transform = `translate(${cardX}px, ${cardY}px)`
          contratsCardRef.current.style.opacity   = contratsFacing ? '1' : '0'
        }

        // ── Audit trail animation ──
        const cycleT = t % 3.0
        const globalFade = cycleT < 0.15
          ? cycleT / 0.15
          : cycleT > 2.2 ? Math.max(0, 1 - (cycleT - 2.2) / 0.6) : 1
        const auditVis = [
          cycleT > 0.25 ? Math.min(1, (cycleT - 0.25) / 0.25) : 0,
          cycleT > 0.70 ? Math.min(1, (cycleT - 0.70) / 0.25) : 0,
          cycleT > 1.15 ? Math.min(1, (cycleT - 1.15) / 0.25) : 0,
        ].map(v => v * globalFade * (contratsFacing ? 1 : 0))

        auditLineMat.opacity = globalFade * 0.7 * (contratsFacing ? 1 : 0)

        for (let ai = 0; ai < 3; ai++) {
          const el = auditLabelRefs.current[ai]
          if (!el) continue
          const idx = auditParticleIndices[ai]
          tmpVec.set(positions[idx*3], positions[idx*3+1], positions[idx*3+2]).applyMatrix4(group.matrixWorld)
          const proj = tmpVec.clone().project(camera)
          const asx  = (proj.x + 1) / 2 * rect.width
          const asy  = (1 - (proj.y + 1) / 2) * rect.height
          el.style.transform = `translate(${asx + 10}px, ${asy - 13}px)`
          el.style.opacity   = String(auditVis[ai])
        }

        // ── Particle animation ──
        for (let i = 0; i < N; i++) {
          const ci    = clusterIds[i]
          const isHov = ci === hovCI
          const pulse = 0.82 + 0.18 * Math.sin(t * 1.2 + i * 0.31)
          const boost = isHov ? 1.55 : 1.0
          colorAttr.setXYZ(i,
            Math.min(1, baseColors[i*3]   * pulse * boost),
            Math.min(1, baseColors[i*3+1] * pulse * boost),
            Math.min(1, baseColors[i*3+2] * pulse * boost),
          )
          sizeAttr.setX(i, baseSizes[i] * (isHov ? 1.45 : 1.0))
        }
        colorAttr.needsUpdate = true; sizeAttr.needsUpdate = true
        pointsMat.uniforms.uTime.value = t
        renderer.render(scene, camera)
      }

      tick()

      function onResize() {
        if (!mountRef.current) return
        const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight
        camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      cleanupRef.current = () => {
        alive = false; cancelAnimationFrame(frameRef.current)
        canvas.removeEventListener('mousedown', onMouseDown)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
        canvas.removeEventListener('mouseleave', onMouseLeave)
        canvas.removeEventListener('touchstart', onTouchStart)
        canvas.removeEventListener('touchmove', onTouchMove)
        canvas.removeEventListener('touchend', onTouchEnd)
        window.removeEventListener('resize', onResize)
        geo.dispose(); lineGeo.dispose(); auditLineGeo.dispose(); rayGeo.dispose()
        pointsMat.dispose(); lineMat.dispose(); auditLineMat.dispose(); rayMat.dispose()
        renderer.dispose()
        if (mountRef.current && renderer.domElement.parentNode === mountRef.current)
          mountRef.current.removeChild(renderer.domElement)
      }
    }

    init()
    return () => { if (cleanupRef.current) cleanupRef.current() }
  }, [setHoveredSync])

  // Hover card position
  const CARD_W = 214, CARD_H = 136, PAD = 10
  let cardLeft = 0, cardTop = 0
  if (hovered) {
    const { x: sx, y: sy, containerW, containerH } = hovered
    cardLeft = sx + 18
    if (cardLeft + CARD_W > containerW - PAD) cardLeft = sx - CARD_W - 18
    cardLeft = Math.max(PAD, Math.min(cardLeft, containerW - CARD_W - PAD))
    cardTop  = Math.max(PAD, Math.min(sy - CARD_H / 2, containerH - CARD_H - PAD))
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480, aspectRatio: '1 / 1' }}>

      {/* Three.js canvas */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab', borderRadius: 24, overflow: 'hidden' }} />

      {/* ── Always-visible cluster pills (position+opacity via DOM in tick) ── */}
      {CLUSTERS.map((c, i) => (
        <div
          key={c.label}
          ref={el => { labelEls.current[i] = el }}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'translate(-50%, -58%)', pointerEvents: 'none', opacity: 0 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(4, 9, 24, 0.80)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${c.color}38`,
            borderRadius: 100,
            padding: '5px 12px 5px 7px',
            boxShadow: `0 2px 14px rgba(0,0,0,0.55), 0 0 0 1px ${c.color}18`,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: c.color,
              boxShadow: `0 0 8px ${c.color}cc, 0 0 16px ${c.color}55`,
              flexShrink: 0,
            }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', letterSpacing: '0.025em', whiteSpace: 'nowrap' }}>
              {c.label}
            </span>
          </div>
        </div>
      ))}

      {/* ── Contratos floating status card (auto-visible, pulsing) ── */}
      <div
        ref={contratsCardRef}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0, transition: 'opacity 0.5s ease', zIndex: 15 }}
      >
        <motion.div
          animate={{
            boxShadow: [
              `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px ${CLUSTERS[0].color}30, 0 0 14px ${CLUSTERS[0].color}20`,
              `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px ${CLUSTERS[0].color}60, 0 0 26px ${CLUSTERS[0].color}40`,
              `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px ${CLUSTERS[0].color}30, 0 0 14px ${CLUSTERS[0].color}20`,
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'rgba(5, 10, 28, 0.90)',
            backdropFilter: 'blur(14px)',
            border: `1px solid ${CLUSTERS[0].color}40`,
            borderRadius: 10,
            padding: '8px 13px',
            display: 'flex', alignItems: 'center', gap: 8,
            whiteSpace: 'nowrap',
          }}
        >
          {/* Green checkmark badge */}
          <div style={{
            width: 18, height: 18, borderRadius: '50%',
            background: 'rgba(34,197,94,0.18)',
            border: '1px solid rgba(34,197,94,0.50)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M1.5 4.5L3.7 6.7L7.5 2.3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.82)', letterSpacing: '0.01em' }}>
            Clasificado automáticamente ·{' '}
            <span style={{ color: CLUSTERS[0].color }}>v3.2</span>
            {' '}· Aprobado
          </span>
        </motion.div>
      </div>

      {/* ── Audit trail timestamp labels (position via DOM in tick) ── */}
      {AUDIT_TRAIL.map((entry, i) => (
        <div
          key={entry.text}
          ref={el => { auditLabelRefs.current[i] = el }}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0, zIndex: 12 }}
        >
          <div style={{
            background: 'rgba(4, 9, 24, 0.85)',
            border: `1px solid ${entry.color}40`,
            borderRadius: 6, padding: '4px 9px',
            fontSize: 10, fontWeight: 600,
            color: entry.color, letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
            boxShadow: `0 2px 10px rgba(0,0,0,0.5), 0 0 8px ${entry.color}20`,
          }}>
            {entry.text}
          </div>
        </div>
      ))}

      {/* ── Hover detail card ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.label}
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 8 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.7 }}
            style={{
              position: 'absolute', left: cardLeft, top: cardTop, width: CARD_W,
              pointerEvents: 'none', zIndex: 20,
              background: 'rgba(8, 14, 32, 0.92)',
              border: `1px solid ${hovered.color}45`,
              borderRadius: 14, padding: '14px 16px',
              backdropFilter: 'blur(16px)',
              boxShadow: [`0 8px 40px rgba(0,0,0,0.6)`, `0 0 0 1px ${hovered.color}18`, `inset 0 1px 0 rgba(255,255,255,0.06)`].join(', '),
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: hovered.color, boxShadow: `0 0 10px ${hovered.color}cc`, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>{hovered.label}</span>
              </div>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5.2L4.2 7.4L8 3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div style={{ height: 1, background: `linear-gradient(90deg, ${hovered.color}30, transparent)`, marginBottom: 10 }} />
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontSize: 28, fontWeight: 900, color: hovered.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{fmt(hovered.docs)}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginLeft: 6 }}>documentos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {hovered.types.map(type => (
                  <span key={type} style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', color: hovered.color, background: `${hovered.color}18`, border: `1px solid ${hovered.color}30`, borderRadius: 4, padding: '2px 6px' }}>{type}</span>
                ))}
              </div>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)' }}>{hovered.updated}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', pointerEvents: 'none', whiteSpace: 'nowrap' }}
      >
        Arrastra para explorar
      </motion.div>
    </div>
  )
}
