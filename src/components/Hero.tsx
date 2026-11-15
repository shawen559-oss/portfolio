import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react'
import { Container } from './Container'
const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden pt-32 pb-10 sm:pt-40">
      <div className="editorial-grain absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <motion.div initial={reduce ? false : {opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,ease}} className="mb-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-4">
          <span className="editorial-kicker">Independent designer / Product thinker</span>
          <span className="editorial-kicker text-muted">China · Italy · Los Angeles</span>
        </motion.div>
        <div className="relative">
          <motion.p initial={reduce ? false : {opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1,ease}} className="editorial-kicker mb-5 text-accent">Selected work & thinking — 2026</motion.p>
          <h1 className="editorial-display max-w-[1200px] text-[clamp(5.3rem,13vw,12.5rem)]">
            <motion.span className="block" initial={reduce ? false : {opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.12,ease}}>Ideas into</motion.span>
            <motion.span className="flex flex-wrap items-baseline gap-x-6" initial={reduce ? false : {opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.25,ease}}>
              <em className="font-normal text-accent">impact.</em><Asterisk aria-hidden="true" className="mb-2 h-10 w-10 text-accent sm:h-16 sm:w-16" strokeWidth={1}/>
            </motion.span>
          </h1>
          <motion.p initial={reduce ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.5,ease}} className="mt-10 max-w-[460px] text-[17px] leading-relaxed text-muted sm:ml-auto sm:mt-0">
            I’m Jiawen (Shaw) Ji. I connect design, product strategy and emerging technology to make thoughtful ideas real.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-ink pt-5">
          <p className="max-w-[280px] text-[13px] text-muted">Designing with purpose.<br/>Learning to lead change.</p>
          <a href="#work" className="editorial-link text-[14px] font-medium">Discover the work <ArrowDownRight size={18}/></a>
          <a href="#contact" className="editorial-link text-[14px] font-medium">Get in touch <ArrowUpRight size={18}/></a>
        </div>
      </Container>
    </section>
  )
}
