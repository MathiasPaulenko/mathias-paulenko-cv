import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { portfolio } from '../../data/cvData'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'
import { Link } from 'react-router-dom'
import {
  Code2,
  Globe,
  Github,
  ExternalLink,
  BookOpen,
  Package,
} from 'lucide-react'

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-[#2a2a2a] bg-[#0c0c0c] p-5 md:p-6 transition-all duration-300 hover:border-[#3a3a3a]"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#ffb000] font-mono text-sm font-bold">
              {item.title}
            </span>
            {item.version && (
              <span className="text-[#33ff33] font-mono text-xs border border-[#2a2a2a] px-1.5 py-0.5">
                v{item.version}
              </span>
            )}
          </div>
          {item.license && (
            <p className="text-[#999999] font-mono text-xs">
              {item.license} license
            </p>
          )}
        </div>
      </div>

      <p className="text-[#d0d0d0] text-sm leading-relaxed mb-4">
        {item.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tech.map((tag) => (
          <span
            key={tag}
            className="text-[#999999] font-mono text-xs border border-[#2a2a2a] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {item.github && (
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#6688cc] hover:text-[#33ff33] transition-colors font-mono text-xs"
          >
            <Github size={12} />
            source
          </a>
        )}
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#6688cc] hover:text-[#33ff33] transition-colors font-mono text-xs"
          >
            <ExternalLink size={12} />
            live
          </a>
        )}
        {item.pypi && (
          <a
            href={item.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#6688cc] hover:text-[#33ff33] transition-colors font-mono text-xs"
          >
            <Package size={12} />
            pypi
          </a>
        )}
        {item.docs && (
          <a
            href={item.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#6688cc] hover:text-[#33ff33] transition-colors font-mono text-xs"
          >
            <BookOpen size={12} />
            docs
          </a>
        )}
      </div>
    </motion.div>
  )
}

const EmptyState = ({ icon: Icon, title, desc }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="text-center py-12"
  >
    <Icon size={40} className="mx-auto text-[#999999] mb-4" />
    <h3 className="text-lg font-bold text-[#d0d0d0] mb-2">{title}</h3>
    <p className="text-[#999999] font-mono text-sm max-w-md mx-auto">{desc}</p>
  </motion.div>
)

export const PortfolioPage = () => {
  const t = useTranslation()
  const [activeTab, setActiveTab] = useState('libraries')

  const tabs = [
    { id: 'libraries', label: t.tabLibraries || 'libraries/', icon: Code2 },
    { id: 'webs', label: t.tabWebs || 'webs/', icon: Globe },
  ]

  const items = activeTab === 'libraries' ? portfolio.libraries : portfolio.webs

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

            <div className="p-5 md:p-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'libraries' && (
                  <motion.div
                    key="libraries"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {items.length > 0 ? (
                      <div className="grid gap-4">
                        {items.map((item) => (
                          <ProjectCard key={item.title} item={item} />
                        ))}
                      </div>
                    ) : (
                      <EmptyState
                        icon={Code2}
                        title={t.librariesPlaceholder || 'Libraries & Packages'}
                        desc={t.librariesPlaceholderDesc || 'Reusable libraries, CLI tools and Python packages. Coming soon.'}
                      />
                    )}
                  </motion.div>
                )}

                {activeTab === 'webs' && (
                  <motion.div
                    key="webs"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {items.length > 0 ? (
                      <div className="grid gap-4">
                        {items.map((item) => (
                          <ProjectCard key={item.title} item={item} />
                        ))}
                      </div>
                    ) : (
                      <EmptyState
                        icon={Globe}
                        title={t.websPlaceholder || 'Websites & Web Apps'}
                        desc={t.websPlaceholderDesc || 'Full websites, landing pages and web applications. Coming soon.'}
                      />
                    )}
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
