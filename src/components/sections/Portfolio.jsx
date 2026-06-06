import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { SectionWrapper } from '../ui/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { FolderOpen, ArrowRight } from 'lucide-react'

export const Portfolio = () => {
  const t = useTranslation()

  return (
    <SectionWrapper
      id="portfolio"
      title={t.sectionPortfolio}
      subtitle={t.sectionPortfolioSub}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8"
      >
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 border border-[#2a2a2a] bg-[#0c0c0c] flex items-center justify-center">
              <FolderOpen size={32} className="text-[#ffb000]" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#d0d0d0] mb-1">
              {t.portfolioSectionTitle || 'My Portfolio'}
            </h3>
            <p className="text-[#999999] text-sm font-mono mb-4">
              {t.portfolioSectionDesc || 'Explore all my projects, experiments and case studies in one place.'}
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] hover:border-[#33ff33] hover:text-[#33ff33] text-[#d0d0d0] transition-all duration-300 font-mono text-xs"
            >
              <span className="text-[#33ff33]">$</span> {t.portfolioSectionCta || 'cd portfolio/'}
              <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
