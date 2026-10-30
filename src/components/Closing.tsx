import { Container } from './Container'
import { Reveal } from './Reveal'

export function Closing() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <blockquote className="max-w-4xl font-display text-4xl leading-[1.15] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[56px]">
            &ldquo;Leadership isn&apos;t only about what I already know. It&apos;s also
            about recognizing what I still need to learn.&rdquo;
          </blockquote>
          <p className="mt-12 max-w-2xl text-[17px] leading-relaxed text-muted">
            These assessments gave me a clearer understanding of my professional
            development. I want this portfolio to document not only what I have
            completed, but also how my thinking and skills evolve over time.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
