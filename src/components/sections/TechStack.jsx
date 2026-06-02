import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { motion } from 'framer-motion'
import { techStack } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

// yeah i know, folder icons. fight me.

const categories = [
  { key: 'languages', label: 'languages/', icon: '📁' },
  { key: 'frontend', label: 'frontend/', icon: '📁' },
  { key: 'backend', label: 'backend/', icon: '📁' },
  { key: 'testing', label: 'testing/', icon: '📁' },
  { key: 'databases', label: 'databases/', icon: '📁' },
  { key: 'devops', label: 'ci_cd/', icon: '📁' },
  { key: 'aiMlTools', label: 'ai_ml/', icon: '📁' },
  { key: 'platforms', label: 'platforms/', icon: '📁' },
  { key: 'ides', label: 'ides/', icon: '📁' },
  { key: 'os', label: 'os/', icon: '📁' },
  { key: 'mobile', label: 'mobile/', icon: '📁' },
  { key: 'tools', label: 'tools/', icon: '📁' },
  { key: 'infrastructure', label: 'infra/', icon: '📁' },
  { key: 'cli', label: 'cli/', icon: '📁' },
  { key: 'patterns', label: 'patterns/', icon: '📁' },
  { key: 'methodologies', label: 'methods/', icon: '📁' },
]

export const TechStack = () => {
  const [active, setActive] = useState('languages')
  const currentItems = techStack[active] || []
  const t = useTranslation()

  return (
    <SectionWrapper id="skills" title={t.sectionSkills} subtitle={t.sectionSkillsSub}>
      <div className="border border-[#2a2a2a] bg-[#0c0c0c]">
        <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#2a2a2a] bg-[#141414]">
          <span className="text-[#7a7a7a] text-xs">skills — ls -la</span>
          <div className="flex gap-px">
            <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">─</span>
            <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">□</span>
            <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#ff4444] hover:text-white text-xs cursor-default">✕</span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <div className="text-[#999999] text-sm mb-3">
              <span className="text-[#33ff33]">mathias@dev</span>:<span className="text-[#6688cc]">~/skills</span>$ ls
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-300 border ${
                    active === cat.key
                      ? 'border-[#ffb000] text-[#ffb000] bg-[#ffb000]/5'
                      : 'border-[#3a3a3a] text-[#d0d0d0] hover:text-[#ffb000] hover:border-[#ffb000]'
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-[#999999] text-sm mb-3">
            <span className="text-[#33ff33]">mathias@dev</span>:<span className="text-[#6688cc]">~/skills</span>${' '}cat{' '}
            {categories.find(c => c.key === active)?.label}*
          </div>
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mb-8"
          >
            {currentItems.map((item, i) => (
              <motion.span
                key={item.name}
                variants={fadeInUp}
                custom={i}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] text-sm hover:border-[#ffb000] hover:text-[#ffb000] text-[#b8b8b8] transition-all duration-300 cursor-default"
              >
                {item.icon ? (
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                ) : (
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                )}
                {item.name}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
