import { useTranslation } from '../../hooks/useTranslation'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../../data/cvData'
import { fadeInUp, staggerContainer } from '../../helpers/animations'
import { motion } from 'framer-motion'

export const Contact = () => {
  const t = useTranslation()

  return (
    <section id="contact" className="py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-10"
        >
          <motion.div variants={fadeInUp}>
            <div className="text-[#999999] text-sm mb-1">
              {'/* '}
              <span className="text-[#ffb000]">{t.sectionContactSub}</span>
              {' */'}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#33ff33] text-lg">$</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#ffb000]">
                {t.sectionContact}
              </h2>
            </div>
            <div className="mt-3 h-px bg-[#2a2a2a]" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#2a2a2a] bg-[#0c0c0c]"
        >
          <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#2a2a2a] bg-[#141414]">
            <span className="text-[#7a7a7a] text-xs">contact — ping</span>
            <div className="flex gap-px">
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">─</span>
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">□</span>
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#ff4444] hover:text-white text-xs cursor-default">✕</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-[#33ff33]">mathias@dev</span>
              <span className="text-[#7a7a7a]">:</span>
              <span className="text-[#6688cc]">~</span>
              <span className="text-[#7a7a7a]">$ </span>
              <span className="text-[#d0d0d0]">echo "{t.contactTitle}"</span>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="mb-8">
              <p className="text-[#ffb000] text-xl font-bold mb-2">{t.contactTitle}</p>
              <p className="text-base text-[#999999]">
                {t.contactDesc}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} custom={2} className="mb-6">
              <span className="text-[#33ff33]">mathias@dev</span>
              <span className="text-[#7a7a7a]">:</span>
              <span className="text-[#6688cc]">~</span>
              <span className="text-[#7a7a7a]">$ </span>
              <span className="text-[#d0d0d0]">cat contact_info.sh</span>
            </motion.div>

            <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#3a3a3a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">./linkedin.sh</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#3a3a3a] hover:border-[#33ff33] hover:text-[#33ff33] text-[#d0d0d0] transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">./github.sh</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 border border-[#3a3a3a] hover:border-[#ff4444] hover:text-[#ff4444] text-[#d0d0d0] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">./email.sh</span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} custom={4} className="mt-8">
              <span className="text-[#33ff33]">mathias@dev</span>
              <span className="text-[#7a7a7a]">:</span>
              <span className="text-[#6688cc]">~</span>
              <span className="text-[#7a7a7a]">$ </span>
              <span className="cursor-blink" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
