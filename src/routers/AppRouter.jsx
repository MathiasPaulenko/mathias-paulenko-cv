import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { NotFound } from '../components/pages/NotFound'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
