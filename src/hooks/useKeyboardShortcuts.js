import { useEffect } from 'react'

export const useKeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip if user is typing in an input
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
        t: '#contact', // 't' for talk/contact
      }

      if (sections[key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        const el = document.querySelector(sections[key])
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Home key
      if (key === 'home' || (e.shiftKey && key === 'h')) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      // Dark/light mode toggle
      if (key === 'm' && e.shiftKey) {
        e.preventDefault()
        // This would need access to toggleTheme - better handled in Navbar
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
