import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'work', 'assessment', 'contact'] as const

export function useActiveSection() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const update = () => {
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id
        }
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}
