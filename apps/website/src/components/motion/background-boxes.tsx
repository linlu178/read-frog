'use client'
import { motion } from 'motion/react'
import React from 'react'
import { cn } from '@/lib/cn'

export function BoxesCore({ className, ...rest }: { className?: string }) {
  const rows = Array.from({ length: 150 }).fill(1)
  const cols = Array.from({ length: 100 }).fill(1)
  const colors = [
    '#93c5fd',
    '#f9a8d4',
    '#86efac',
    '#fde047',
    '#fca5a5',
    '#d8b4fe',
    '#93c5fd',
    '#a5b4fc',
    '#c4b5fd',
  ]
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        'absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4',
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="relative h-8 w-16 border-l border-neutral-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col${j}`}
              className="relative h-8 w-16 border-t border-r border-neutral-700"
            >
              {j % 2 === 0 && i % 2 === 0
                ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-neutral-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )
                : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
