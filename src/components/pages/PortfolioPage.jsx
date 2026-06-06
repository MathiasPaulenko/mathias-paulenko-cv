import { useTranslation } from '../../hooks/useTranslation'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'
import { Link } from 'react-router-dom'
import { FolderOpen } from 'lucide-react'

export const PortfolioPage = () => {
  const t = useTranslation()

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#d0d0d0]">
      <Navbar />

      <main role="main" className="max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-10">
            <span className="text-[#33ff33] font-mono text-sm">
              $ ls {t.sectionPortfolio || 'portfolio/'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#d0d0d0] mt-4 mb-2">
              {t.portfolioPageTitle || 'Portfolio'}
            </h1>
            <p className="text-[#999999] font-mono text-sm">
              {t.portfolioPageDesc || 'A collection of my projects and work.'}
            </p>
          </div>

          <div className="border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 text-center">
            <FolderOpen size={48} className="mx-auto text-[#ffb000] mb-4" />
            <h2 className="text-xl font-bold text-[#d0d0d0] mb-2">
              {t.portfolioPagePlaceholder || 'Projects coming soon'}
            </h2>
            <p className="text-[#999999] font-mono text-sm mb-6 max-w-md mx-auto">
              {t.portfolioPagePlaceholderDesc || 'This section is being built. Check back later to see all my work.'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300 font-mono text-xs"
            >
              <span className="text-[#33ff33]">$</span> {t.portfolioPageBack || 'cd ~'}
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
