import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../../data/cvData'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

const links = [
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: 'hover:text-blue-400' },
  { icon: Github, label: 'GitHub', href: personalInfo.github, color: 'hover:text-white' },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, color: 'hover:text-red-400' },
]

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-cyan-400 font-mono text-sm tracking-widest mb-6"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's work together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[#6b6b80] max-w-lg mx-auto mb-12"
          >
            I'm always open to interesting conversations, collaborations, and new opportunities.
            Feel free to reach out!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-xl glass text-[#a0a0b8] ${link.color} hover:bg-white/[0.06] transition-all duration-300`}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
