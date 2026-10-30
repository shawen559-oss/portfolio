import { useReducedMotion, AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import type { Competency } from '../../data/assessments'

type CompetencyBarsProps = {
  items: Competency[]
}

export function CompetencyBars({ items }: CompetencyBarsProps) {
  const strengths = items.filter((item) => item.group === 'strength')
  const development = items.filter((item) => item.group === 'development')

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <CompetencyGroup title="Current Strengths" items={strengths} />
      <CompetencyGroup title="Development Priorities" items={development} />
    </div>
  )
}

type GroupProps = {
  title: string
  items: Competency[]
}

function CompetencyGroup({ title, items }: GroupProps) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div>
      <p className="mb-6 text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <CompetencyRow
            key={item.id}
            item={item}
            expanded={active === item.id}
            onActivate={() => setActive(item.id)}
            onDeactivate={() =>
              setActive((current) => (current === item.id ? null : current))
            }
            onToggle={() =>
              setActive((current) => (current === item.id ? null : item.id))
            }
          />
        ))}
      </ul>
    </div>
  )
}

type RowProps = {
  item: Competency
  expanded: boolean
  onActivate: () => void
  onDeactivate: () => void
  onToggle: () => void
}

function CompetencyRow({
  item,
  expanded,
  onActivate,
  onDeactivate,
  onToggle,
}: RowProps) {
  const reduce = useReducedMotion()
  const labelId = useId()
  const descId = useId()
  const isStrength = item.group === 'strength'
  const cx = isStrength ? 86 : 18

  return (
    <li
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      <button
        type="button"
        className="w-full rounded-sm px-1 py-3 text-left transition-colors hover:bg-accent-soft/70 focus-visible:bg-accent-soft/70"
        aria-expanded={expanded}
        aria-controls={descId}
        onClick={onToggle}
        onFocus={onActivate}
        onBlur={onDeactivate}
      >
        <span id={labelId} className="block text-[15px] text-ink">
          {item.name}
        </span>
        <svg
          viewBox="0 0 100 16"
          className="mt-3 h-4 w-full"
          role="img"
          aria-labelledby={labelId}
        >
          <title>
            {`${item.name}: ${isStrength ? 'current strength' : 'development priority'}`}
          </title>
          <line x1="2" y1="8" x2="98" y2="8" stroke="#E2E2DC" strokeWidth="1" />
          <motion.circle
            cx={cx}
            cy="8"
            r="3.4"
            fill={isStrength ? '#4568F5' : '#9A9A94'}
            initial={false}
            animate={expanded && !reduce ? { r: 4.4 } : { r: 3.4 }}
            transition={{ duration: 0.22 }}
          />
        </svg>
        <span className="mt-1 block text-[11px] tracking-[0.08em] text-muted uppercase">
          {isStrength ? 'Practiced' : 'To develop'}
        </span>
      </button>
      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.p
              id={descId}
              className="px-1 pb-4 text-[14px] leading-relaxed text-muted"
              initial={reduce ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
            >
              {item.description}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </li>
  )
}
