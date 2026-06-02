import { motion } from 'framer-motion'
import { projects } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

export const Projects = () => {
  return (
    <SectionWrapper id="projects" title="cat README.md" subtitle="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8 hover:border-[#ffb000]/30 transition-all duration-500 group"
          >
            <div className="text-sm text-[#999999] mb-4">
              {'# '}<span className="text-[#ffb000] text-lg font-bold">🤖 {project.title}</span>
            </div>

            <p className="text-base text-[#d0d0d0] leading-relaxed mb-4">
              {project.description}
            </p>

            {project.note && (
              <div className="text-sm text-[#999999] mb-4 pl-4 border-l-2 border-[#ffb000]/30 italic">
                {'> '}{project.note}
              </div>
            )}

            <div className="text-sm text-[#999999] mb-2">## Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-sm text-[#33ff33] border border-[#1a9e1a]/30 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
