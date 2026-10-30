import { useReducedMotion, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Container } from './Container'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center pb-28 pt-28"
    >
      <Container>
        <motion.p
          className="mb-8 text-[11px] font-medium tracking-[0.28em] text-muted uppercase"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Portfolio / 2026
        </motion.p>

        <h1 className="font-display text-[12vw] leading-[0.95] tracking-[-0.03em] text-ink sm:text-[72px] lg:text-[96px]">
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: reduce ? 0 : 0.08, ease }}
          >
            Designing with purpose.
          </motion.span>
          <motion.span
            className="mt-2 block text-ink/80"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: reduce ? 0 : 0.22, ease }}
          >
            Learning to lead change.
          </motion.span>
        </h1>

        <motion.p
          className="mt-10 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: reduce ? 0 : 0.38, ease }}
        >
          I&apos;m Jiawen Ji, a designer and former product manager exploring
          the intersection of design, artificial intelligence, and business
          leadership.
        </motion.p>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-6 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted uppercase transition-colors hover:text-ink sm:bottom-14 sm:left-8 lg:left-[max(2rem,calc(50%-560px))]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 0.7 }}
        >
          Scroll to explore
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.a>
      </Container>
    </section>
  )
}
