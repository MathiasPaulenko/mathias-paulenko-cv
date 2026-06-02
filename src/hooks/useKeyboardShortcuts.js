import { useEffect } from 'react'

export const useKeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      const key = e.key.toLowerCase()
      const sections = {
        h: '#hero',
        a: '#about',
        s: '#skills',
        e: '#experience',
        d: '#education',
        c: '#certifications',
        l: '#languages',
        n: '#contact',
        t: '#contact',
      }

      if (sections[key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        const el = document.querySelector(sections[key])
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }

      if (key === 'home' || (e.shiftKey && key === 'h')) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      if (key === 'm' && e.shiftKey) {
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
