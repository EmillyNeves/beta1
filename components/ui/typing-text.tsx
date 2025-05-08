
"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypingText({ text, className = "", delay = 0 }: TypingTextProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50 + delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
    </motion.span>
  )
}
