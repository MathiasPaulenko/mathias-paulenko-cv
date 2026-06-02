import { motion } from 'framer-motion'
import { languages } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

const levelWidth = { Native: '100%', B2: '70%', A2: '35%' }
const levelColor = { Native: 'from-cyan-400 to-cyan-500', B2: 'from-emerald-400 to-emerald-500', A2: 'from-amber-400 to-amber-500' }

export const Languages = () => {
  return (
    <SectionWrapper id="languages" title="Languages" subtitle="Communication">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="p-6 rounded-xl glass hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{lang.flag}</span>
              <div>
                <h4 className="text-white font-medium">{lang.name}</h4>
                <span className="text-xs font-mono text-[#6b6b80]">{lang.level}</span>
              </div>
            </div>

            {/* Level bar */}
            <div className="w-full h-1.5 rounded-full bg-white/[0.05] mb-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: levelWidth[lang.level] }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`h-full rounded-full bg-gradient-to-r ${levelColor[lang.level]}`}
              />
            </div>

            {lang.detail && (
              <p className="text-xs text-[#6b6b80]">{lang.detail}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
