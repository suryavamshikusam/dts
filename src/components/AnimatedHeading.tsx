import React, { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  initialDelay?: number
  charDelay?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), initialDelay)
    return () => clearTimeout(t)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const chars = line.split('')
        const lineOffset = lines
          .slice(0, lineIndex)
          .reduce((acc, l) => acc + l.length, 0)

        return (
          <React.Fragment key={lineIndex}>
            {chars.map((char, charIndex) => {
              const delay = (lineOffset + charIndex) * charDelay
              return (
                <span
                  key={charIndex}
                  style={{
                    display: 'inline-block',
                    opacity: ready ? 1 : 0,
                    transform: ready ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity 500ms ${delay}ms, transform 500ms ${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        )
      })}
    </h1>
  )
}
