import { motion } from 'framer-motion'
import { MapPin, Briefcase, Music, Brain } from 'lucide-react'
import { personalInfo } from '../../data/cvData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

const highlights = [
  { icon: Briefcase, text: '12+ years of experience in tech', color: 'text-cyan-400' },
  { icon: MapPin, text: 'Remote · Spain & China', color: 'text-emerald-400' },
  { icon: Brain, text: 'AI, DevOps & Cybersecurity enthusiast', color: 'text-amber-400' },
  { icon: Music, text: 'Piano interpretation & solfeggio', color: 'text-purple-400' },
]

export const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div className="grid md:grid-cols-5 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#a0a0b8] leading-relaxed mb-8"
          >
            {personalInfo.about}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-[#6b6b80] leading-relaxed"
          >
            A remote work enthusiast who frequently moves between Spain 🇪🇸 and China 🇨🇳 for family reasons.
            A technology enthusiast at heart, driven by curiosity and a constant desire to learn.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 flex flex-col gap-3"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <item.icon className={`w-5 h-5 ${item.color} shrink-0`} />
              <span className="text-sm text-[#a0a0b8] group-hover:text-white transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
