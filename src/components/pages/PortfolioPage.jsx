import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'
import { Link } from 'react-router-dom'
import { FolderOpen, Code2, Globe } from 'lucide-react'

export const PortfolioPage = () => {
  const t = useTranslation()
  const [activeTab, setActiveTab] = useState('libraries')

  const tabs = [
    { id: 'libraries', label: t.tabLibraries || 'libraries/', icon: Code2 },
    { id: 'webs', label: t.tabWebs || 'webs/', icon: Globe },
  ]

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

          <div className="border border-[#2a2a2a] bg-[#141414]">
            <div className="flex border-b border-[#2a2a2a]">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 font-mono text-xs transition-all duration-300 border-r border-[#2a2a2a] ${
                      isActive
                        ? 'text-[#ffb000] bg-[#0c0c0c] border-b-2 border-b-[#ffb000]'
                        : 'text-[#999999] hover:text-[#d0d0d0] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div className="p-6 md:p-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'libraries' && (
                  <motion.div
                    key="libraries"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-center py-12"
                  >
                    <Code2 size={40} className="mx-auto text-[#33ff33] mb-4" />
                    <h3 className="text-lg font-bold text-[#d0d0d0] mb-2">
                      {t.librariesPlaceholder || 'Libraries & Packages'}
                    </h3>
                    <p className="text-[#999999] font-mono text-sm max-w-md mx-auto">
                      {t.librariesPlaceholderDesc || 'Reusable libraries, CLI tools and Python packages. Coming soon.'}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'webs' && (
                  <motion.div
                    key="webs"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-center py-12"
                  >
                    <Globe size={40} className="mx-auto text-[#00cccc] mb-4" />
                    <h3 className="text-lg font-bold text-[#d0d0d0] mb-2">
                      {t.websPlaceholder || 'Websites & Web Apps'}
                    </h3>
                    <p className="text-[#999999] font-mono text-sm max-w-md mx-auto">
                      {t.websPlaceholderDesc || 'Full websites, landing pages and web applications. Coming soon.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 text-center">
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
