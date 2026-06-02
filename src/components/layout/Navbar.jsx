import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'

const navLinks = [
  { label: './about', href: '#about' },
  { label: './skills', href: '#skills' },
  { label: './experience', href: '#experience' },
  { label: './education', href: '#education' },
  { label: './certs', href: '#certifications' },
  { label: './contact', href: '#contact' },
]

const langOptions = [
  { code: 'en', flag: 'gb', label: 'EN' },
  { code: 'es', flag: 'es', label: 'ES' },
  { code: 'zh', flag: 'cn', label: 'ZH' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const langRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const currentFlag = langOptions.find((l) => l.code === lang)?.flag || 'gb'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <a href="#hero" className="text-[#ffb000] font-bold text-sm font-mono">
          ~/mathias<span className="text-[#33ff33]">$</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-mono transition-colors duration-300 ${
                  isActive
                    ? 'text-[#ffb000] border-b border-[#ffb000]'
                    : 'text-[#d0d0d0] hover:text-[#ffb000]'
                }`}
              >
                {link.label}
              </a>
            )
          })}

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2 py-1 border border-[#2a2a2a] hover:border-[#ffb000] text-xs font-mono text-[#d0d0d0] hover:text-[#ffb000] transition-all duration-300"
            >
              <img
                loading="lazy"
                src={`https://flagcdn.com/16x12/${currentFlag}.png`}
                width="16"
                height="12"
                alt={lang}
                className="inline-block"
              />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown size={10} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-1 border border-[#2a2a2a] bg-[#0c0c0c] min-w-[100px] z-50"
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setLangOpen(false) }}
                      className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs font-mono transition-colors duration-200 ${
                        lang === opt.code
                          ? 'text-[#ffb000] bg-[#1a1a1a]'
                          : 'text-[#d0d0d0] hover:text-[#ffb000] hover:bg-[#141414]'
                      }`}
                    >
                      <img
                        loading="lazy"
                        src={`https://flagcdn.com/16x12/${opt.flag}.png`}
                        width="16"
                        height="12"
                        alt={opt.label}
                        className="inline-block"
                      />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2 py-1 border border-[#2a2a2a] hover:border-[#ffb000] text-xs font-mono text-[#d0d0d0] hover:text-[#ffb000] transition-all duration-300"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#d0d0d0] hover:text-[#ffb000] transition-colors"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-sm border-b border-[#2a2a2a] px-4 pb-4"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-xs font-mono transition-colors border-b border-[#2a2a2a]/50 ${
                  isActive
                    ? 'text-[#ffb000]'
                    : 'text-[#d0d0d0] hover:text-[#ffb000]'
                }`}
              >
                <span className={isActive ? 'text-[#ffb000]' : 'text-[#33ff33]'}>$ </span>{link.label}
              </a>
            )
          })}
          <div className="flex items-center gap-2 py-2">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { setLang(opt.code); setMobileOpen(false) }}
                className={`flex items-center gap-1.5 px-2 py-1 border text-xs font-mono transition-all duration-200 ${
                  lang === opt.code
                    ? 'border-[#ffb000] text-[#ffb000]'
                    : 'border-[#2a2a2a] text-[#d0d0d0] hover:border-[#ffb000] hover:text-[#ffb000]'
                }`}
              >
                <img
                  src={`https://flagcdn.com/16x12/${opt.flag}.png`}
                  width="16"
                  height="12"
                  alt={opt.label}
                  className="inline-block"
                />
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => { toggleTheme(); setMobileOpen(false) }}
            className="flex items-center gap-2 py-2 text-xs font-mono text-[#d0d0d0] hover:text-[#ffb000] transition-colors"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
