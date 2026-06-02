import { useTranslation } from '../../hooks/useTranslation'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { motion } from 'framer-motion'

const levelBars = { Native: 20, Nativo: 20, '母语': 20, B2: 14, A2: 7 }
const levelColor = { Native: '#33ff33', Nativo: '#33ff33', '母语': '#33ff33', B2: '#ffb000', A2: '#00cccc' }

const ProgressBar = ({ filled, color, delay }) => {
  const blocks = Array.from({ length: 20 }, (_, i) => i < filled)

  return (
    <div className="flex items-center gap-px md:gap-0.5 font-mono text-[10px] md:text-xs">
      <span className="text-[#7a7a7a]">[</span>
      {blocks.map((active, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.05,
            delay: delay + i * 0.04,
            ease: 'easeOut',
          }}
          style={{ color: active ? color : '#2a2a2a' }}
        >
          {active ? '█' : '░'}
        </motion.span>
      ))}
      <span className="text-[#7a7a7a]">]</span>
      <motion.span
        className="text-[#7a7a7a] ml-1 md:ml-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 20 * 0.04 }}
      >
        {Math.round((filled / 20) * 100)}%
      </motion.span>
    </div>
  )
}

export const Languages = () => {
  const t = useTranslation()

  return (
    <SectionWrapper id="languages" title={t.sectionLanguages} subtitle={t.sectionLanguagesSub}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8"
      >
        <div className="text-[#999999] text-xs mb-6">
          <span className="text-[#33ff33]">mathias@dev</span>:<span className="text-[#6688cc]">~</span>$ locale --list
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.languages.map((lang, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i}>
              <div className="flex items-center gap-3 mb-3">
                <img
                  loading="lazy"
                  src={`https://flagcdn.com/24x18/${lang.code}.png`}
                  srcSet={`https://flagcdn.com/48x36/${lang.code}.png 2x`}
                  width="24"
                  height="18"
                  alt={lang.name}
                  className="inline-block"
                />
                <span className="text-[#d0d0d0] font-bold text-base">{lang.name}</span>
                <span className="text-[#999999] text-sm">({lang.level})</span>
              </div>
              <ProgressBar
                filled={levelBars[lang.level]}
                color={levelColor[lang.level]}
                delay={i * 0.8}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
