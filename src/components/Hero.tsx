import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Container } from './Container'
const ease = [0.22, 1, 0.36, 1] as const
export function Hero() {
  const reduce = useReducedMotion()
  return <section id="top" className="relative flex min-h-svh flex-col justify-center pb-28 pt-28">
    <Container>
      <motion.p className="mb-8 text-[11px] font-medium tracking-[0.28em] text-muted uppercase" initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7,ease}}>Jiawen (Shaw) Ji / Portfolio 2026 · Design / Product / Technology</motion.p>
      <h1 className="font-display text-[clamp(3.3rem,8.2vw,7rem)] leading-[1.02] tracking-[-0.035em] text-ink">
        <motion.span className="block" initial={reduce ? false : {opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.08,ease}}>Designing with purpose.</motion.span>
        <motion.span className="mt-3 block text-ink/75" initial={reduce ? false : {opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.22,ease}}>Learning to lead change.</motion.span>
      </h1>
      <motion.p className="mt-10 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg" initial={reduce ? false : {opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.38,ease}}>I work across design, product development, and business strategy. My experience connects creative thinking with the practical side of bringing ideas to life.</motion.p>
      <div className="mt-9 flex flex-wrap gap-7 text-[14px]">
        <a className="inline-flex items-center gap-2 border-b border-ink pb-2 transition-colors hover:text-accent" href="#work">Explore Work <ArrowUpRight size={16}/></a>
        <a className="inline-flex items-center gap-2 border-b border-line pb-2 transition-colors hover:text-accent" href="#cv">View CV <ArrowUpRight size={16}/></a>
      </div>
      <a href="#about" className="absolute bottom-10 left-6 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-muted uppercase transition-colors hover:text-ink sm:bottom-14 sm:left-8 lg:left-[max(2rem,calc(50%-560px))]">Scroll to explore <ArrowDown size={14}/></a>
    </Container>
  </section>
}
