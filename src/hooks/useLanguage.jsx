import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const langOrder = ['en', 'es', 'zh']

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  const toggleLang = () => setLang((prev) => {
    const idx = langOrder.indexOf(prev)
    return langOrder[(idx + 1) % langOrder.length]
  })

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
