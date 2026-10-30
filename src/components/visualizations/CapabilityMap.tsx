import { useReducedMotion, motion } from 'framer-motion'
import { useState } from 'react'
import type { CapabilityPair } from '../../data/assessments'

type CapabilityMapProps = {
  pairs: CapabilityPair[]
}

export function CapabilityMap({ pairs }: CapabilityMapProps) {
  const [active, setActive] = useState<string | null>(null)
  const reduce = useReducedMotion()

  return (
    <div>
      <div className="mb-8 hidden grid-cols-[1fr_96px_1fr] gap-4 text-[11px] font-medium tracking-[0.18em] text-muted uppercase md:grid">
        <p>Skills I Already Use</p>
        <span aria-hidden="true" />
        <p className="text-right">Skills I Want to Develop</p>
      </div>

      <ul className="space-y-4">
        {pairs.map((pair) => {
          const isActive = active === pair.id
          const panelClass = isActive
            ? 'md:border-accent md:bg-accent-soft'
            : 'md:border-line md:bg-canvas'

          return (
            <li key={pair.id}>
              <button
                type="button"
                className={`grid w-full items-stretch gap-3 border p-5 text-left transition-colors md:grid-cols-[1fr_96px_1fr] md:gap-4 md:border-0 md:bg-transparent md:p-0 ${
                  isActive
                    ? 'border-accent bg-accent-soft'
                    : 'border-line bg-canvas'
                }`}
                aria-expanded={isActive}
                onMouseEnter={() => setActive(pair.id)}
                onMouseLeave={() =>
                  setActive((current) => (current === pair.id ? null : current))
                }
                onFocus={() => setActive(pair.id)}
                onBlur={() =>
                  setActive((current) => (current === pair.id ? null : current))
                }
                onClick={() =>
                  setActive((current) => (current === pair.id ? null : pair.id))
                }
              >
                <span className={`md:border md:px-5 md:py-5 md:transition-colors ${panelClass}`}>
                  <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase md:hidden">
                    Skills I Already Use
                  </span>
                  <span className="block text-[16px] text-ink">{pair.current.name}</span>
                  <PairDescription
                    text={pair.current.description}
                    active={isActive}
                    reduce={Boolean(reduce)}
                  />
                </span>

                <span className="hidden h-full min-h-[104px] items-center md:flex" aria-hidden="true">
                  <svg viewBox="0 0 96 24" className="h-6 w-full">
                    <motion.line
                      x1="6"
                      y1="12"
                      x2="90"
                      y2="12"
                      stroke={isActive ? '#4568F5' : '#E2E2DC'}
                      strokeWidth="1"
                      strokeDasharray="84"
                      initial={false}
                      animate={
                        reduce
                          ? { strokeDashoffset: 0 }
                          : { strokeDashoffset: isActive ? 0 : 28 }
                      }
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <circle
                      cx="6"
                      cy="12"
                      r="2.4"
                      fill={isActive ? '#4568F5' : '#9A9A94'}
                    />
                    <circle
                      cx="90"
                      cy="12"
                      r="2.4"
                      fill={isActive ? '#4568F5' : '#9A9A94'}
                    />
                  </svg>
                </span>

                <span
                  className={`md:border md:px-5 md:py-5 md:text-right md:transition-colors ${panelClass}`}
                >
                  <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase md:hidden">
                    Skills I Want to Develop
                  </span>
                  <span className="block text-[16px] text-ink">
                    {pair.developing.name}
                  </span>
                  <PairDescription
                    text={pair.developing.description}
                    active={isActive}
                    reduce={Boolean(reduce)}
                  />
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function PairDescription({
  text,
  active,
  reduce,
}: {
  text: string
  active: boolean
  reduce: boolean
}) {
  if (reduce) {
    return (
      <span
        className={`mt-3 block text-[14px] leading-relaxed text-muted ${active ? '' : 'md:hidden'}`}
      >
        {text}
      </span>
    )
  }

  return (
    <motion.span
      className="mt-3 block overflow-hidden text-[14px] leading-relaxed text-muted"
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        height: active ? 'auto' : 0,
        marginTop: active ? 12 : 0,
      }}
      transition={{ duration: 0.24 }}
    >
      {text}
    </motion.span>
  )
}
