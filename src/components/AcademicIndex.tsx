import { ArrowUpRight } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'
const items=[
 {number:'01',title:'AI / ML Integration Leadership',type:'Self-assessment',href:'#aiml',desc:'Understanding strengths in responsible AI and areas for growth in managing AI projects.'},
 {number:'02',title:'Change Management',type:'Self-assessment',href:'#change',desc:'Reflecting on communication, adaptability and the skills needed to guide change.'},
 {number:'03',title:'Evaluating AI Reliability',type:'AIML500 / Critical thinking',href:'#ai-reliability',desc:'Testing where AI can help, where it can fail, and why verification matters.'},
]
export function AcademicIndex(){return <section id="academic" className="scroll-mt-24 bg-ink py-24 text-canvas sm:py-32"><Container><Reveal><div className="grid gap-8 md:grid-cols-[1fr_.55fr] md:items-end"><div><p className="editorial-kicker text-[#f4a18c]">04 / Research & learning</p><h2 className="editorial-display mt-8 text-[clamp(4rem,9vw,8rem)]">Curious by<br/><em className="font-normal text-[#f4a18c]">design.</em></h2></div><p className="max-w-sm text-[16px] leading-relaxed text-[#c7c8c1]">Exploring how AI, data and leadership can support better decisions. These artifacts document the questions, experiments and reflections behind the work.</p></div></Reveal>
 <div className="mt-20">{items.map((item,i)=><Reveal key={item.number} delay={i*.06}><a href={item.href} className="group grid gap-5 border-t border-[#62655e] py-8 transition-colors hover:text-[#f4a18c] md:grid-cols-[90px_1fr_1fr_30px] md:items-center"><span className="editorial-kicker text-[#f4a18c]">{item.number}</span><div><p className="editorial-kicker mb-3 text-[#aaa9a2]">{item.type}</p><h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none">{item.title}</h3></div><p className="max-w-sm text-[14px] text-[#c7c8c1]">{item.desc}</p><ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></a></Reveal>)}</div>
 </Container></section>}
