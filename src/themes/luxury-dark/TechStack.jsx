import { motion } from 'framer-motion'
import { techStack } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { useState } from 'react'

const categories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'testing', label: 'Testing' },
  { key: 'databases', label: 'Databases' },
  { key: 'devops', label: 'DevOps' },
  { key: 'aiMl', label: 'AI / ML' },
]

const SkillPill = ({ name, color, delay }) => (
  <motion.span
    variants={fadeInUp}
    custom={delay}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-sm text-[#a0a0b8] hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-default"
  >
    <span
      className="w-2 h-2 rounded-full shrink-0"
      style={{ backgroundColor: color }}
    />
    {name}
  </motion.span>
)

export const TechStack = () => {
  const [active, setActive] = useState('languages')

  const currentItems = techStack[active] || []

  return (
    <SectionWrapper id="skills" title="Tech Stack" subtitle="What I Work With">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === cat.key
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'glass text-[#6b6b80] hover:text-[#a0a0b8] hover:bg-white/[0.05]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div
        key={active}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2"
      >
        {currentItems.map((item, i) => (
          <SkillPill key={item.name} name={item.name} color={item.color} delay={i} />
        ))}
      </motion.div>

      {/* Extra sections */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="p-6 rounded-xl glass"
        >
          <h4 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider">METHODOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.methodologies.map((m) => (
              <span key={m} className="px-3 py-1 rounded-md bg-white/[0.04] text-sm text-[#a0a0b8]">
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="p-6 rounded-xl glass"
        >
          <h4 className="text-sm font-mono text-emerald-400 mb-3 tracking-wider">AI TOOLS & AGENTS</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.aiTools.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-white/[0.04] text-sm text-[#a0a0b8]">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
