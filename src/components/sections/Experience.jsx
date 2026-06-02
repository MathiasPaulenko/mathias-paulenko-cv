import { useTranslation } from '../../hooks/useTranslation'
import { Landmark, Zap, Factory, Shield, ShoppingCart, Dumbbell, Link, Camera } from 'lucide-react'
import { experience } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { motion } from 'framer-motion'

export const Experience = () => {
  const t = useTranslation()

  return (
    <SectionWrapper id="experience" title={t.sectionExperience} subtitle={t.sectionExperienceSub}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        {t.experience.map((job, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8 hover:border-[#ffb000]/30 transition-all duration-500 group"
          >
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-[#ffb000] shrink-0 text-sm">{t.expCommit}</span>
              <span className="text-[#999999] text-sm font-mono">
                {Array.from({ length: 7 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-6 text-sm text-[#999999] mb-4">
              <span>{t.expDate}: <span className="text-[#d0d0d0]">{job.period}</span></span>
              <span>{t.expAuthor}: <span className="text-[#d0d0d0]">{job.company}</span></span>
            </div>

            <h3 className="text-[#33ff33] font-bold mb-3 text-lg group-hover:text-[#ffb000] transition-colors">
              {job.role}
            </h3>

            <p className="text-base text-[#d0d0d0] leading-relaxed mb-4 pl-4 border-l border-[#2a2a2a]">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {experience[i]?.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-sm text-[#999999] border border-[#2a2a2a] font-mono hover:text-[#ffb000] hover:border-[#ffb000] transition-all duration-300 cursor-default"
                >
                  # {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8 mt-4"
      >
        <div className="text-sm mb-5">
          <span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">git log --sectors</span>
          <span className="text-[#999999] ml-2">{t.expSectorsComment}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {t.sectors.map((sector, i) => {
            const icons = [Landmark, Zap, Factory, Shield, ShoppingCart, Dumbbell, Link, Camera]
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="group flex items-center gap-3 px-4 py-3 border border-[#2a2a2a] bg-[#111111] hover:border-[#33ff33]/40 hover:bg-[#1a1a1a] transition-all duration-300 cursor-default"
              >
                <Icon size={16} className="shrink-0 text-[#33ff33] group-hover:text-[#ffb000] transition-colors duration-300" />
                <span className="text-sm text-[#d0d0d0] group-hover:text-white transition-colors duration-300 font-mono">
                  {sector}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
