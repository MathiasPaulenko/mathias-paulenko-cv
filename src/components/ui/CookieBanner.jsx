import { useState, useEffect } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { Link } from 'react-router-dom'

export const CookieBanner = () => {
  const t = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2a2a2a] bg-[#0c0c0c] p-4 md:p-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 font-mono text-sm text-[#999999]">
          <p className="mb-1">
            <span className="text-[#33ff33]">$</span>{' '}
            <span className="text-[#d0d0d0]">cookie-consent --status</span>
          </p>
          <p>
            {t.cookieText}{' '}
            <Link
              to="/privacy"
              className="text-[#6688cc] hover:text-[#33ff33] transition-colors underline"
              onClick={() => setVisible(false)}
            >
              {t.cookiePolicyLink}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-mono border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/10 transition-all duration-300"
          >
            {t.cookieAccept}
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-mono border border-[#2a2a2a] text-[#999999] hover:border-[#ff4444] hover:text-[#ff4444] transition-all duration-300"
          >
            {t.cookieDecline}
          </button>
        </div>
      </div>
    </div>
  )
}
