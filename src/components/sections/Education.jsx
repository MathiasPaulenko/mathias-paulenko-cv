import { motion } from 'framer-motion'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { useTranslation } from '../../hooks/useTranslation'

export const Education = () => {
  const t = useTranslation()

  return (
    <SectionWrapper id="education" title={t.sectionEducation} subtitle={t.sectionEducationSub}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8"
      >
        <div className="text-sm mb-4"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">cat education.json</span></div>

        {t.education.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="ml-4 mb-6 last:mb-2 group"
          >
            <div className="text-sm mb-1">
              <span className="text-[#ff4444]">"{t.eduQualification}_{i + 1}"</span>
              <span className="text-[#7a7a7a]">: {'{'}</span>
            </div>
            <div className="ml-4 text-sm">
              <div>
                <span className="text-[#ff4444]">"{t.eduTitle}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#33ff33]">"{edu.title}"</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduInstitution}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#33ff33]">"{edu.institution}"</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduLocation}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#33ff33]">"{edu.location}"</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduYear}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#ffb000]">{edu.year}</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduDuration}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#33ff33]">"{edu.duration}"</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduSpecialization}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#00cccc]">"{edu.specialization}"</span>
                <span className="text-[#7a7a7a]">,</span>
              </div>
              <div>
                <span className="text-[#ff4444]">"{t.eduStatus}"</span>
                <span className="text-[#7a7a7a]">: </span>
                <span className="text-[#33ff33]">"{edu.status}"</span>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-[#7a7a7a]">{'}'}{i < t.education.length - 1 ? ',' : ''}</span>
            </div>
          </motion.div>
        ))}

        <div className="text-[#666666] text-sm">{'}'}</div>
      </motion.div>
    </SectionWrapper>
  )
}
