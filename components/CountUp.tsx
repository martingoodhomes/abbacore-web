'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  className?: string
}

export default function CountUp({ end, duration = 1.4, className }: CountUpProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const total = duration * 1000

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / total, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {String(count).padStart(2, '0')}
    </span>
  )
}
