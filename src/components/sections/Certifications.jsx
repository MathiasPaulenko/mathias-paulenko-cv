import { motion } from 'framer-motion'
import { certifications } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp } from '../../helpers/animations'
import { useTranslation } from '../../hooks/useTranslation'

export const Certifications = () => {
  const t = useTranslation()

  return (
    <SectionWrapper id="certifications" title={t.sectionCerts} subtitle={t.sectionCertsSub}>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Certifications */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8"
        >
          <div className="text-sm mb-4"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">cat professional_certs.lock</span></div>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-start gap-2 mb-3 last:mb-0 group"
            >
              <span className="text-[#33ff33] shrink-0 text-xs">├──</span>
              <div className="flex-1">
                <span className="text-sm text-[#d0d0d0] group-hover:text-[#ffb000] transition-colors">
                  {cert.name}
                </span>
                <span className="text-sm text-[#999999]"> @{cert.org}</span>
                <span className="text-sm text-[#ffb000] ml-1">v{cert.year}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Training */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8"
        >
          <div className="text-sm mb-4"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">cat training.lock</span></div>
          {t.training.map((tr, i) => (
            <div
              key={i}
              className="flex items-start gap-2 mb-3 last:mb-0 group"
            >
              <span className="text-[#00cccc] shrink-0 text-xs">├──</span>
              <div className="flex-1">
                <span className="text-sm text-[#d0d0d0] group-hover:text-[#ffb000] transition-colors">
                  {tr.name}
                </span>
                {tr.hours && <span className="text-sm text-[#999999]"> ({tr.hours})</span>}
                {tr.year && <span className="text-sm text-[#ffb000] ml-1">v{tr.year}</span>}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Self-learning */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8 mt-4"
      >
        <div className="text-sm mb-4"><span className="text-[#33ff33]">$</span> <span className="text-[#d0d0d0]">cat self_learning.lock</span></div>
        <div className="grid md:grid-cols-2 gap-x-8">
          {t.selfTraining.map((st, i) => (
            <div
              key={i}
              className="flex items-start gap-2 mb-3 last:mb-0 group"
            >
              <span className="text-[#ff4444] shrink-0 text-xs">├──</span>
              <div className="flex-1">
                <span className="text-sm text-[#d0d0d0] group-hover:text-[#ffb000] transition-colors">
                  {st.name}
                </span>
                {st.hours && <span className="text-sm text-[#999999]"> ({st.hours})</span>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
