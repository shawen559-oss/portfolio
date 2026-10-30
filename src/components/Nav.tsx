import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { Container } from './Container'

export function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? 'border-line bg-canvas/90 backdrop-blur-sm'
          : 'border-transparent bg-canvas/70'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a
          href="#top"
          className="text-[13px] font-medium tracking-[0.22em] text-ink"
        >
          JIAWEN JI
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-[13px] tracking-[0.04em] transition-colors outline-none ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-accent/40 transition-transform duration-300 peer-focus:scale-x-100" />
                {isActive ? <span className="sr-only">(current section)</span> : null}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-canvas md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col py-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`border-b border-line py-4 text-base ${
                  active === item.id ? 'text-accent' : 'text-ink'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
