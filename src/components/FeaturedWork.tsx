import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'
const works = [
  {n:'01',kind:'Product / Strategy / Launch',name:'Foldie',subtitle:'From concept to launch',description:'A foldable 3-in-1 wireless charger developed at Woodie Milano. I connected research, product decisions, production and go-to-market work.',href:'#foldie',color:'bg-[#c6cec4]',label:'PRODUCT'},
  {n:'02',kind:'Packaging / Operations',name:'Movopack',subtitle:'Design meets delivery',description:'Designing packaging experiences while coordinating materials, suppliers, manufacturing and international logistics.',href:'#movopack',color:'bg-[#e1d3c3]',label:'SYSTEMS'},
  {n:'03',kind:'AI / Service Design',name:'First30',subtitle:'A better first month',description:'An AI assistant designed to help international students navigate arrival tasks and important university procedures.',href:'#first30',color:'bg-[#d7dce8]',label:'DIGITAL'},
]
export function FeaturedWork(){
 return <section id="work" className="scroll-mt-24 border-t border-line py-24 sm:py-32"><Container>
  <Reveal><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="editorial-kicker mb-6 text-accent">01 / Selected projects</p><h2 className="editorial-display text-[clamp(4.5rem,10vw,9rem)]">Work<span className="text-accent">.</span></h2></div><p className="max-w-[260px] text-[14px] text-muted">A collection of things I have built, shaped and helped bring into the world.</p></div></Reveal>
  <div className="mt-16 space-y-6">{works.map((w,i)=><Reveal key={w.n} delay={i*.07}><a href={w.href} className={`editorial-card group grid overflow-hidden border border-line md:grid-cols-[.9fr_1.1fr] ${i%2===1?'md:[&>div:first-child]:order-2':''}`}>
   <div className={`relative flex min-h-[290px] flex-col justify-between overflow-hidden p-7 sm:min-h-[400px] sm:p-10 ${w.color}`}>
    <div className="flex justify-between"><span className="editorial-kicker">{w.label} / 2023—26</span><ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
    {w.name==='First30'?<img src={`${import.meta.env.BASE_URL}images/first30-interface.png`} alt="First30 product interface" className="absolute inset-x-6 top-[28%] w-[calc(100%-3rem)] rounded-md border border-ink/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy"/>:<div className="pointer-events-none select-none text-center font-display text-[clamp(5rem,11vw,11rem)] italic leading-none tracking-[-.07em] text-ink/80">{w.name==='Foldie'?'F.':'M.'}</div>}
    <span className="editorial-kicker relative">{w.n} / 03</span>
   </div>
   <div className="flex flex-col justify-between bg-canvas p-8 sm:p-12"><div><p className="editorial-kicker text-accent">{w.kind}</p><h3 className="mt-8 font-display text-[clamp(3.5rem,6vw,6rem)] leading-none tracking-[-.055em]">{w.name}</h3><p className="mt-4 font-display text-2xl italic text-muted">{w.subtitle}</p><p className="mt-10 max-w-sm text-[16px] leading-relaxed text-muted">{w.description}</p></div><span className="mt-12 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[.1em]">Explore case study <ArrowRight size={18}/></span></div>
  </a></Reveal>)}</div>
 </Container></section>
}
export function First30CaseStudy(){return <section id="first30" className="scroll-mt-24 border-t border-line py-24 sm:py-32"><Container><Reveal>
 <p className="editorial-kicker text-accent">03 / Featured digital project</p><div className="mt-6 grid gap-10 md:grid-cols-[1fr_.8fr]"><h2 className="editorial-display text-[clamp(4rem,9vw,8rem)]">First30<span className="text-accent">.</span></h2><p className="self-end text-[17px] leading-relaxed text-muted">A conversational arrival assistant for international students navigating their first month in the U.S.</p></div>
 <figure className="editorial-image mt-12 border border-line bg-[#d7dce8] p-4 sm:p-12"><img src={`${import.meta.env.BASE_URL}images/first30-interface.png`} alt="First30 assistant interface" className="block w-full rounded-md shadow-lg" loading="lazy"/><figcaption className="mt-5 editorial-kicker text-muted">Product interface / First30</figcaption></figure>
 <div className="mt-12 grid gap-8 md:grid-cols-3">{[['Challenge','Arrival tasks, SEVIS procedures, and deadlines can be confusing. Information is scattered.'],['Approach','A focused conversational experience with clear next steps and references to official sources and DSOs.'],['Scope','Arrival checklists, SEVIS guidance, deadlines, and help drafting messages to a DSO.']].map(([h,p])=><div key={h} className="border-t border-ink pt-5"><h3 className="font-display text-3xl">{h}</h3><p className="mt-4 text-[15px] text-muted">{p}</p></div>)}</div>
 <a href="https://first30.shawen559.workers.dev/" target="_blank" rel="noopener noreferrer" className="editorial-link mt-12 text-[14px]">Visit live project <ArrowUpRight size={18}/></a>
 </Reveal></Container></section>}
