import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import { certifications, training } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

export const Certifications = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications & Training" subtitle="Continuous Learning">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Professional Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-mono text-cyan-400 mb-6 tracking-wider">
            <Award className="w-4 h-4" />
            PROFESSIONAL CERTIFICATIONS
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="flex items-start justify-between gap-4 p-4 rounded-xl glass hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="flex-1">
                  <p className="text-sm text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[#6b6b80] mt-1">{cert.org}</p>
                </div>
                <span className="text-xs font-mono text-[#6b6b80] shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Training */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-mono text-emerald-400 mb-6 tracking-wider">
            <BookOpen className="w-4 h-4" />
            ADDITIONAL TRAINING
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {training.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="flex items-center justify-between gap-4 p-4 rounded-xl glass hover:bg-white/[0.05] transition-all duration-300"
              >
                <p className="text-sm text-[#a0a0b8] flex-1">{t.name}</p>
                <div className="flex items-center gap-3 shrink-0">
                  {t.hours && (
                    <span className="text-xs font-mono text-emerald-400/60">{t.hours}</span>
                  )}
                  {t.year && (
                    <span className="text-xs font-mono text-[#6b6b80]">{t.year}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
