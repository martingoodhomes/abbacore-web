'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoadAnimation() {
  const [mounted, setMounted] = useState(false)
  const [visible,  setVisible]  = useState(true)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(t)
  }, [])

  // Don't render the overlay in SSR — prevents a black flash in production
  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black z-[200] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        />
      )}
    </AnimatePresence>
  )
}
