import { ArrowUp } from 'lucide-react'
import { Container } from './Container'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line py-12 sm:py-16">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] font-medium tracking-[0.22em] text-ink">
            JIAWEN JI
          </p>
          <p className="mt-3 text-[15px] text-muted">Professional Portfolio</p>
          <p className="mt-1 text-[15px] text-muted">DTAN500 / 2026</p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted uppercase transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp size={14} strokeWidth={1.5} />
        </a>
      </Container>
    </footer>
  )
}
