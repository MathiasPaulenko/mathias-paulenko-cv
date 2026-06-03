import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { PrivacyPage } from '../components/pages/PrivacyPage'
import { NotFound } from '../components/pages/NotFound'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
