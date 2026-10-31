import { ArrowUpRight, Printer } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
const roles = [
 {date:'09.2025 — 02.2026',title:'Product & Packaging Designer · Supply Chain Specialist',company:'Movopack · Milan, Italy',description:'End-to-end packaging design, brand experience, manufacturing, suppliers, and international logistics. Clients included Columbia, Lego, Superdry, Hudson, and Reflo.'},
 {date:'09.2023 — 02.2026',title:'Product & Project Manager',company:'Woodie Milano · Milan, Italy',description:'Led Foldie from concept to launch, including research, product strategy, go-to-market, production, and brand communication. Reported post-launch results: +162% website traffic, +256% revenue, +495% orders.'},
 {date:'06.2023 — 08.2023',title:'Experience Design Intern',company:'Woodie Milano · Milan, Italy',description:'User research, visual identity, digital touchpoints, marketing campaigns, and packaging experiences.'},
 {date:'05.2021 — 10.2022',title:'Content Creator & Lead',company:'CardesignPics · Remote',description:'Automotive design content, designer interviews, vehicle launches, and editorial coverage.'},
 {date:'05.2019 — 12.2019',title:'Post-Production & Esports Event Coordinator (Intern)',company:'imbaTV · Shanghai, China',description:'Gaming and esports video production and event coordination.'},
]
const education = [
 {date:'2022 — 2024',title:'MSc Management & MA Service Design',school:'Domus Academy & Regent’s University London · Dual degree · Scholarship'},
 {date:'2016 — 2020',title:'BA Digital Media Arts — Game Design',school:'Nanjing University of Information Science & Technology & Anglia Ruskin University · Sino-foreign cooperative program'},
 {date:'Current studies',title:'AI & Data Analytics',school:'Indiana Wesleyan University'},
]
const skills = [
 ['Design','User Research · Service Design · UI/UX · Prototyping · Packaging Design · CMF · Brand Strategy'],
 ['Product & Business','Product Development · Go-to-Market · Project Management · Cross-functional Collaboration · Supplier Management · Logistics'],
 ['Tools','Adobe Creative Suite · Figma · Notion · Miro · Asana · Pipedrive'],
 ['Languages','Chinese (Native) · English (Fluent) · Italian (Basic)'],
]
export function CV(){return <section id="cv" className="scroll-mt-24 border-t border-line py-24 sm:py-32"><Container><Reveal><SectionLabel number="03" label="CV"/><div className="flex flex-wrap items-end justify-between gap-6"><div><h2 className="font-display text-4xl sm:text-5xl">Curriculum Vitae.</h2><p className="mt-5 text-[17px] text-muted">A closer look at my experience, education, and skills.</p></div><button type="button" onClick={()=>window.print()} className="inline-flex items-center gap-2 border-b border-ink pb-2 text-[14px] hover:text-accent"><Printer size={16}/> Print / Save as PDF <ArrowUpRight size={15}/></button></div></Reveal>
 <div className="mt-16 grid gap-12 lg:grid-cols-[220px_1fr]"><h3 className="text-[12px] font-medium tracking-[.2em] text-accent uppercase">Experience</h3><div>{roles.map(role=><article key={role.title+role.date} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[150px_1fr]"><span className="text-[12px] text-muted">{role.date}</span><div><h4 className="text-[17px] font-medium">{role.title}</h4><p className="mt-1 text-[14px] text-accent">{role.company}</p><p className="mt-3 text-[14px] leading-relaxed text-muted">{role.description}</p></div></article>)}</div></div>
 <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]"><h3 className="text-[12px] font-medium tracking-[.2em] text-accent uppercase">Education</h3><div>{education.map(e=><article key={e.title} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[150px_1fr]"><span className="text-[12px] text-muted">{e.date}</span><div><h4 className="text-[17px] font-medium">{e.title}</h4><p className="mt-2 text-[14px] text-muted">{e.school}</p></div></article>)}</div></div>
 <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]"><h3 className="text-[12px] font-medium tracking-[.2em] text-accent uppercase">Skills</h3><div>{skills.map(([category,detail])=><div key={category} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[150px_1fr]"><h4 className="text-[15px] font-medium">{category}</h4><p className="text-[14px] leading-relaxed text-muted">{detail}</p></div>)}</div></div>
 </Container></section>}
