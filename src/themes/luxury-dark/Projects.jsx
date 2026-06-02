import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp } from '../../helpers/animations'

export const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="What I've Built">
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 rounded-2xl glass hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500/50 via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                  🤖 {project.title}
                </h3>
              </div>
              <ExternalLink className="w-5 h-5 text-[#6b6b80] group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
            </div>

            <p className="text-sm text-[#a0a0b8] leading-relaxed mb-4">
              {project.description}
            </p>

            {project.note && (
              <p className="text-xs text-[#6b6b80] italic mb-6">{project.note}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-cyan-500/10 text-xs text-cyan-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
