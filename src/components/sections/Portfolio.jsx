import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { portfolio } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'
import {
  Code2,
  Globe,
  Github,
  ExternalLink,
  BookOpen,
  Package,
  ChevronLeft,
  ChevronRight,
  Wrench,
} from 'lucide-react'

const PAGE_SIZE = 8

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-[#2a2a2a] bg-[#0c0c0c] p-5 md:p-6 transition-all duration-300 hover:border-[#3a3a3a]"
    >
      <div className="mb-2">
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

export const Portfolio = () => {
  const t = useTranslation()
  const [activeTab, setActiveTab] = useState('libraries')
  const [page, setPage] = useState(1)

  const tabs = [
    { id: 'libraries', label: t.tabLibraries || 'libraries/', icon: Code2 },
    { id: 'tools', label: t.tabTools || 'tools/', icon: Wrench },
    { id: 'webs', label: t.tabWebs || 'webs/', icon: Globe },
  ]

  const items = portfolio[activeTab] || []
  const totalPages = Math.ceil(items.length / PAGE_SIZE)
  const paginated = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleTab = (id) => {
    setActiveTab(id)
    setPage(1)
  }

  return (
    <SectionWrapper
      id="portfolio"
      title={t.sectionPortfolio}
      subtitle={t.sectionPortfolioSub}
    >
      <div className="border border-[#2a2a2a] bg-[#141414]">
        <div className="flex border-b border-[#2a2a2a]">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTab(tab.id)}
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

        <div className="p-5 md:p-6 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + page}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {items.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {paginated.map((item) => (
                    <ProjectCard key={item.title} item={item} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={
                    activeTab === 'libraries'
                      ? Code2
                      : activeTab === 'tools'
                        ? Wrench
                        : Globe
                  }
                  title={
                    activeTab === 'libraries'
                      ? t.librariesPlaceholder || 'Libraries & Packages'
                      : activeTab === 'tools'
                        ? t.toolsPlaceholder || 'Tools & Utilities'
                        : t.websPlaceholder || 'Websites & Web Apps'
                  }
                  desc={
                    activeTab === 'libraries'
                      ? t.librariesPlaceholderDesc || 'Reusable libraries, CLI tools and Python packages. Coming soon.'
                      : activeTab === 'tools'
                        ? t.toolsPlaceholderDesc || 'Desktop apps, CLI tools and development utilities. Coming soon.'
                        : t.websPlaceholderDesc || 'Full websites, landing pages and web applications. Coming soon.'
                  }
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-[#2a2a2a] px-5 py-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 text-[#999999] hover:text-[#ffb000] disabled:text-[#3a3a3a] disabled:hover:text-[#3a3a3a] transition-colors font-mono text-xs"
            >
              <ChevronLeft size={12} />
              prev
            </button>
            <span className="text-[#999999] font-mono text-xs">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 text-[#999999] hover:text-[#ffb000] disabled:text-[#3a3a3a] disabled:hover:text-[#3a3a3a] transition-colors font-mono text-xs"
            >
              next
              <ChevronRight size={12} />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
