import { changePairs, changeReflection } from '../data/assessments'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { CapabilityMap } from './visualizations/CapabilityMap'

export function ChangeAssessment() {
  return (
    <section id="change" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
            02 / Leading Change
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            What I already bring, and what I still need to learn.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            Hover or focus a skill to see how a current strength connects to a
            related development area. Descriptions stay qualitative — no scores.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <CapabilityMap pairs={changePairs} />
        </Reveal>

        <Reveal delay={0.12} className="mt-16 max-w-2xl border-l-2 border-accent pl-6">
          <p className="font-display text-2xl leading-snug tracking-[-0.01em] text-ink sm:text-[28px]">
            {changeReflection}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
