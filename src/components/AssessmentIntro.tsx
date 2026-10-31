import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

const panels = [
  {
    number: '01',
    title: 'AI/ML Integration Leadership',
    href: '#aiml',
    note: 'Responsible AI, technical understanding, and the work still ahead in managing AI projects.',
  },
  {
    number: '02',
    title: 'Change Management',
    href: '#change',
    note: 'Communication, problem-solving, and the structured change skills I want to build next.',
  },
] as const

export function AssessmentIntro() {
  return (
    <section
      id="assessment"
      className="scroll-mt-24 border-t border-line py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel number="04" label="Work / Professional Self-Assessment" />
          <p className="mb-5 text-[12px] tracking-[.12em] text-muted">DTAN500 · Workshop 1 · Professional Assessment</p>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Where I stand.
            <br />
            Where I want to grow.
          </h2>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted">
            I completed two professional self-assessments to better understand
            my current strengths and areas for development. The results helped
            me connect my past experience in design and product management with
            my future goals in technology leadership.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {panels.map((panel, index) => (
            <Reveal key={panel.number} delay={index * 0.08}>
              <a
                href={panel.href}
                className={`group flex h-full min-h-[280px] flex-col justify-between bg-canvas p-8 transition-colors sm:p-10 ${
                  index === 0 ? 'hover:bg-accent-soft' : ''
                }`}
              >
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
                    {panel.number}
                  </p>
                  <h3 className="mt-6 font-display text-3xl leading-tight tracking-[-0.02em]">
                    {panel.title}
                  </h3>
                </div>
                <p className="mt-10 max-w-sm text-[15px] leading-relaxed text-muted">
                  {panel.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
