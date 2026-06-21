'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  const x = useSpring(rawX, { stiffness: 180, damping: 28 })
  const y = useSpring(rawY, { stiffness: 180, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <div className="w-7 h-7 rounded-full bg-primary/35 blur-[6px] mix-blend-multiply" />
    </motion.div>
  )
}
