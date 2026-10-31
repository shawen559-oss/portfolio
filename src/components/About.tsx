import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { journey } from '../data/content'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
export function About() {
 const [open,setOpen]=useState<number|null>(null)
 return <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32"><Container><Reveal><SectionLabel number="01" label="About" />
 <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-24">
 <div><h2 className="font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">A little about me.</h2>
 <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-relaxed text-muted">
 <p>My journey has taken me from China through academic connections in the UK, to Italy, and now the United States. Each experience has shaped how I think, design, and work.</p>
 <p>My background spans digital media art, service design, and product management. I have worked across creative and business roles, from shaping product experiences to coordinating development and cross-functional teams.</p>
 <p>I’m now exploring AI and data analytics to understand how technology can support design and business decisions. I’m most interested in what happens when these fields come together.</p>
 </div></div>
 <ol className="self-end border-t border-line">{journey.map((item,index)=><li key={item.number} className="border-b border-line" onMouseEnter={()=>setOpen(index)} onMouseLeave={()=>setOpen(current=>current===index?null:current)}>
 <button type="button" className="flex w-full items-center gap-5 py-5 text-left" aria-expanded={open===index} aria-controls={`discipline-${index}`} onClick={()=>setOpen(current=>current===index?null:index)}>
 <span className="text-[12px] tracking-[0.16em] text-accent">{item.number}</span><span className="flex-1 text-lg text-ink sm:text-xl">{item.title}</span>{open===index?<Minus size={17}/>:<Plus size={17}/>}</button>
 <div id={`discipline-${index}`} className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${open===index?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className="pb-5 pl-10 pr-3 text-[14px] leading-relaxed text-muted">{item.description}</p>{index===3&&<a className="mb-6 ml-10 inline-flex items-center gap-2 text-[14px] text-accent hover:underline" href="#work">View Work <ArrowUpRight size={15}/></a>}</div></div>
 </li>)}</ol></div></Reveal></Container></section>
}
