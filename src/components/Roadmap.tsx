import { useReducedMotion, AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { roadmapStages } from '../data/roadmap'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function Roadmap() {
  const [openId, setOpenId] = useState<string | null>(roadmapStages[0]?.id ?? null)

  return (
    <section id="roadmap" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
            04 / Next
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            What&apos;s next?
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            A three-stage plan. These are future goals, not completed
            accomplishments.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <ol>
            {roadmapStages.map((stage, index) => {
              const open = openId === stage.id
              return (
                <li
                  key={stage.id}
                  className={`border-b border-line ${index === 0 ? 'border-t' : ''}`}
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-6 py-7 text-left sm:gap-10"
                    aria-expanded={open}
                    aria-controls={`stage-${stage.id}`}
                    onClick={() =>
                      setOpenId((current) => (current === stage.id ? null : stage.id))
                    }
                  >
                    <span className="pt-1 text-[12px] tracking-[0.16em] text-accent">
                      {stage.number}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-3xl tracking-[-0.02em] sm:text-4xl">
                        {stage.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-[16px] text-muted">
                        {stage.summary}
                      </span>
                    </span>
                    <span className="pt-2 text-muted">
                      {open ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <StagePanel stage={stage} open={open} />
                </li>
              )
            })}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}

function StagePanel({
  stage,
  open,
}: {
  stage: (typeof roadmapStages)[number]
  open: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          id={`stage-${stage.id}`}
          className="overflow-hidden"
          initial={reduce ? false : { height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={reduce ? undefined : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-8 pb-10 pl-10 sm:grid-cols-3 sm:pl-[68px]">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Practical action
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{stage.action}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] text-accent uppercase">
                Future milestone
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{stage.milestone}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Reflection question
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{stage.question}</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
