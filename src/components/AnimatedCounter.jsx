import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const AnimatedCounter = ({ from = 0, to, duration = 1.6, decimals = 0, suffix = '', prefix = '' }) => {
  const [val, setVal] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return

    let start = null
    const target = typeof to === 'number' ? to : parseFloat(to)

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (target - from) * eased

      setVal(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setVal(target)
      }
    }

    requestAnimationFrame(step)
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default AnimatedCounter

