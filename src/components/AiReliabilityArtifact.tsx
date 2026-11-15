import { ArrowUpRight } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'

const details = [
  {
    heading: 'Objective',
    body: 'Understand when AI is useful, when it can be unreliable, and how to evaluate an answer before trusting it.',
  },
  {
    heading: 'Process',
    body: 'I tested ChatGPT with different tasks, including fictional information, multiplication, current stock prices, recent research, private conversations, and creative writing. I compared how convincing each answer sounded with how much I could actually verify.',
  },
  {
    heading: 'Tools',
    body: 'ChatGPT, critical thinking, task comparison, and independent verification methods such as calculators and up-to-date sources.',
  },
  {
    heading: 'Value Proposition',
    body: 'Knowing when to question AI helps me choose the right tool, avoid unsupported claims, and make more careful decisions in product design and data analytics.',
  },
]

export function AiReliabilityArtifact() {
  return (
    <section id="ai-reliability" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] tracking-[.22em] text-accent uppercase">Portfolio Artifact 03 / AIML500</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight sm:text-5xl">Evaluating AI Reliability and Limitations.</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            A course exercise exploring why a confident AI answer is not always a correct one.
          </p>
          <p className="mt-4 text-[12px] tracking-[.08em] text-muted">Machine Learning Fundamentals · November 2026</p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {details.map((item, index) => (
            <Reveal key={item.heading} delay={index * 0.05}>
              <div className="h-full border-t border-line pt-6">
                <h3 className="font-display text-2xl">{item.heading}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 border-t border-line pt-8">
            <h3 className="font-display text-3xl">What I learned.</h3>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-muted">
              I questioned a prompt about Velmora because I had never heard of the country.
              I also reconsidered my first impression that AI was a good fit for exact multiplication.
              A calculator is more dependable for that task. AI can help draft a cover letter
              or brainstorm product names, but current information needs updated sources.
              It also cannot recall private conversations it has not received.
            </p>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">
              For this portfolio, I organized the original exercise into a clear objective,
              process, tools, and practical value so that readers can see both the work and
              what I learned from it.
            </p>
            <a
              href="https://chatgpt.com/share/6af8e424-2c14-83ea-a330-dbc76755e89a"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-2 text-[14px] hover:text-accent"
            >
              View original ChatGPT exercise <ArrowUpRight size={17} />
            </a>
            <p className="mt-3 text-[12px] text-muted">Evidence: shared conversation from the AIML500 exercise.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
