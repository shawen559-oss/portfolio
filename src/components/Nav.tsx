import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/content'
import { Container } from './Container'
export function Nav() {
  const [open,setOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[])
  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled||open?'border-b border-line bg-canvas/95 backdrop-blur-md':'bg-canvas/85'}`}>
    <Container className="flex h-[76px] items-center justify-between gap-5">
      <a href="#top" className="flex items-baseline gap-2 text-[17px] font-semibold tracking-[-.05em]" aria-label="Jiawen Ji, home">JIAWEN<span className="font-display text-[24px] italic font-normal text-accent">Ji.</span></a>
      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">{navItems.map(item=><a key={item.id} href={`#${item.id}`} className="editorial-kicker transition-colors hover:text-accent">{item.label}</a>)}</nav>
      <a href="mailto:shawen559@gmail.com" className="hidden items-center gap-1 border-b border-ink pb-1 text-[12px] font-medium md:inline-flex">Let's talk <ArrowUpRight size={14}/></a>
      <button type="button" className="flex h-11 w-11 items-center justify-center md:hidden" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open?<X/>:<Menu/>}</button>
    </Container>
    {open&&<nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-canvas md:hidden"><Container className="flex flex-col py-5">{navItems.map(item=><a key={item.id} href={`#${item.id}`} onClick={()=>setOpen(false)} className="border-b border-line py-4 font-display text-3xl">{item.label}</a>)}</Container></nav>}
  </header>
}
