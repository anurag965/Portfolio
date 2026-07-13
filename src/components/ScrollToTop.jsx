import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-50 term-btn text-[10px] rounded-sm px-3 py-2"
      aria-label="Scroll to top"
    >
      ↑ top
    </button>
  )
}

export default ScrollToTop
