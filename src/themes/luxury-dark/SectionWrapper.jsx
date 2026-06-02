import { motion } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'

export const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                {subtitle}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {title}
            </motion.h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
