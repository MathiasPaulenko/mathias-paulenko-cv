import { fadeInUp } from '../../helpers/animations'
import { motion } from 'framer-motion'

export const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-10"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-[#999999] text-sm mb-1">
                {'/* '}
                <span className="text-[#ffb000]">{subtitle}</span>
                {' */'}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#33ff33] text-lg">$</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ffb000]">
                  {title}
                </h2>
              </div>
              <div className="mt-3 h-px bg-[#2a2a2a]" />
            </motion.div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
