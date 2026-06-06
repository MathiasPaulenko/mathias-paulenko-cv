import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { PrivacyPage } from '../components/pages/PrivacyPage'
import { NotFound } from '../components/pages/NotFound'
import { PortfolioPage } from '../components/pages/PortfolioPage'
import { CookieBanner } from '../components/ui/CookieBanner'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
