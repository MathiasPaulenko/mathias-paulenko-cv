import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { personalInfo } from '../../data/cvData'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div variants={fadeInUp} custom={0} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-cyan-400 font-mono text-xs tracking-wider">
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-4"
        >
          {personalInfo.name}
          <br />
          <span className="text-gradient">{personalInfo.surname}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="text-lg md:text-xl text-[#6b6b80] max-w-2xl mx-auto mb-4 font-light"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={3}
          className="text-sm text-[#6b6b80] font-mono mb-10"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass hover:bg-white/[0.06] transition-all duration-300"
          >
            <Github className="w-5 h-5 text-[#6b6b80] group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass hover:bg-white/[0.06] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-[#6b6b80] group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-3 rounded-xl glass hover:bg-white/[0.06] transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-[#6b6b80] group-hover:text-cyan-400 transition-colors" />
          </a>

          <div className="w-px h-8 bg-[#1e1e2e] mx-2" />

          <a
            href="#about"
            className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all duration-300"
          >
            Explore my work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#6b6b80]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
