import { ArrowRight } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="02" label="Work" />
          <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Selected Work.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 border-t border-line pt-10">
          <article>
            <p className="text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
              01 / Professional Development
            </p>
            <h3 className="mt-5 font-display text-3xl leading-tight tracking-[-0.02em] sm:text-[42px]">
              Understanding My Leadership Skills
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              AI/ML Integration &amp; Change Management Self-Assessments
            </p>
            <p className="mt-8 text-[13px] tracking-[0.04em] text-muted">
              Leadership / Artificial Intelligence / Self-Reflection
            </p>
            <a
              href="#assessment"
              className="mt-10 inline-flex items-center gap-2 text-[15px] text-ink transition-colors hover:text-accent"
            >
              Explore Assessment
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </article>
        </Reveal>
      </Container>
    </section>
  )
}
