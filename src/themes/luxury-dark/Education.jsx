import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

export const Education = () => {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic Background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="p-6 rounded-xl glass hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-xs font-mono text-[#6b6b80]">{edu.year}</span>
            </div>

            <h3 className="text-sm font-semibold text-white mb-2 leading-tight">
              {edu.title}
            </h3>

            <p className="text-xs text-[#6b6b80] mb-3">{edu.institution}</p>

            {edu.note && (
              <p className="text-xs text-cyan-400/60 italic">{edu.note}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
