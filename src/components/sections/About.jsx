import { useTranslation } from '../../hooks/useTranslation'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { Flag } from '../ui/Flag'
import { motion } from 'framer-motion'

export const About = () => {
  const t = useTranslation()

  return (
    <SectionWrapper id="about" title={t.sectionAbout} subtitle={t.sectionAboutSub}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8 mb-6">
          <div className="text-sm mb-3"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">who_am_i</span></div>
          <p className="text-[#d0d0d0] leading-relaxed mb-4 text-base">
            {t.about}
          </p>
          <p className="text-[#d0d0d0] leading-relaxed text-base">
            {t.aboutExtra}{' '}
            <span className="text-[#ffb000]">Spain<Flag code="es" alt="Spain" /></span> and{' '}
            <span className="text-[#ff4444]">China<Flag code="cn" alt="China" /></span> {t.aboutExtra2}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={1} className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8">
          <div className="text-sm mb-4"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">highlights.forEach(print)</span></div>
          <div className="flex flex-col gap-2">
            {t.highlights.map((trait, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 2}
                className="flex items-start gap-3 group"
              >
                <span className="text-[#33ff33] shrink-0">→</span>
                <span className="text-[#d0d0d0] text-base group-hover:text-[#ffb000] transition-colors duration-300">
                  {trait}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
