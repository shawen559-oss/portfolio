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
            Portfolio Artifact 01 / AI &amp; ML Leadership
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            AI/ML Integration Leadership Self-Assessment.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            These indicators are qualitative. They show where I currently feel
            practiced, and where I am prioritizing development. They are not
            numeric scores.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            ['Introduction', 'AI leadership requires technical understanding and responsible decision making.'],
            ['Description', 'A qualitative self-assessment of my strengths and development needs in AI integration.'],
            ['Objective', 'Identify the skills I can use now and the skills I need to develop.'],
            ['Process', 'Review the assessment results, reflect on my professional experience, and identify development priorities.'],
            ['Tools and Technology', 'Course self-assessment, reflective analysis, and an interactive competency visualization.'],
            ['Value Proposition of the Artifact', 'The assessment helps me plan my professional development around specific AI leadership skills.'],
            ['Unique Value', 'It connects my design and product experience with responsible AI adoption.'],
            ['Relevance', 'Useful for teams introducing AI into products and business processes.'],
            ['References', 'Indiana Wesleyan University. (2026). AI/ML integration leadership self-assessment [DTAN500 course activity].'],
          ].map(([heading, body]) => <div key={heading} className="border-t border-line pt-5"><h3 className="font-display text-2xl">{heading}</h3><p className="mt-3 text-muted">{body}</p></div>)}
        </div>
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
