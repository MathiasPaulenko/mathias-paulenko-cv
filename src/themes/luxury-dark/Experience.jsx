import { motion } from 'framer-motion'
import { experience } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp } from '../../helpers/animations'

export const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Career Path">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-[#1e1e2e] to-transparent" />

        <div className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              custom={i * 0.5}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a0a0f] border-2 border-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.3)]" />

              <div className="p-6 rounded-xl glass hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-[#6b6b80] text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400/70 bg-cyan-500/10 px-3 py-1 rounded-full shrink-0 w-fit">
                    {job.period}
                  </span>
                </div>

                <p className="text-sm text-[#a0a0b8] leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-xs text-[#6b6b80] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
