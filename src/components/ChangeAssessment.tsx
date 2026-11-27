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
            Portfolio Artifact 02 / Leading Change
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Change Management Self-Assessment.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            Hover or focus a skill to see how a current strength connects to a
            related development area. Descriptions stay qualitative — no scores.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            ['Introduction', 'Introducing new technology requires people and processes to adapt.'],
            ['Description', 'A qualitative review of my change management capabilities and areas for growth.'],
            ['Objective', 'Understand how my existing skills can support technology adoption and identify gaps.'],
            ['Process', 'Reflect on the assessment, connect current strengths to development areas, and set future priorities.'],
            ['Tools and Technology', 'Course self-assessment, reflective analysis, and an interactive capability map.'],
            ['Value Proposition of the Artifact', 'The assessment gives me a practical starting point for leading organizational change.'],
            ['Unique Value', 'It connects communication and problem solving from my product experience to risk management and technology implementation.'],
            ['Relevance', 'Relevant to product managers and AI teams introducing new workflows.'],
            ['References', 'Indiana Wesleyan University. (2026). Change management self-assessment [DTAN500 course activity].'],
          ].map(([heading, body]) => <div key={heading} className="border-t border-line pt-5"><h3 className="font-display text-2xl">{heading}</h3><p className="mt-3 text-muted">{body}</p></div>)}
        </div>
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
