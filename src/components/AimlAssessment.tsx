import { aimlCompetencies, aimlReflection } from '../data/assessments'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { CompetencyBars } from './visualizations/CompetencyBars'

export function AimlAssessment() {
  return (
    <section id="aiml" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
            01 / AI &amp; ML Leadership
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Strengths I can already use, and the gaps I need to close.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            These indicators are qualitative. They show where I currently feel
            practiced, and where I am prioritizing development. They are not
            numeric scores.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <CompetencyBars items={aimlCompetencies} />
        </Reveal>

        <Reveal delay={0.12} className="mt-16 max-w-2xl border-l-2 border-accent pl-6">
          <p className="font-display text-2xl leading-snug tracking-[-0.01em] text-ink sm:text-[28px]">
            {aimlReflection}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
