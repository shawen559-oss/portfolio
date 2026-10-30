import { journey } from '../data/content'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel number="01" label="About" />
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-24">
            <div>
              <h2 className="font-display text-4xl leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl">
                A little about me.
              </h2>
              <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-relaxed text-muted">
                <p>
                  My background is in game design, service design, and product
                  management. I studied in China and Italy and spent several
                  years working with design and product teams in Italy.
                </p>
                <p>
                  My experience has taught me how to connect user needs,
                  business goals, and practical solutions. I&apos;m now
                  developing my skills in artificial intelligence, data
                  analytics, and leadership.
                </p>
              </div>
            </div>

            <ol className="self-end">
              {journey.map((item, index) => (
                <li
                  key={item.number}
                  className={`flex items-baseline justify-between gap-6 py-5 ${
                    index === 0 ? 'border-t border-line' : ''
                  } border-b border-line`}
                >
                  <span className="text-[12px] tracking-[0.16em] text-accent">
                    {item.number}
                  </span>
                  <span className="flex-1 text-lg text-ink sm:text-xl">
                    {item.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
