import { useTranslation } from '../../hooks/useTranslation'
import { Flag } from '../ui/Flag'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/cvData'
import { fadeInUp, staggerContainer } from '../../helpers/animations'

export const Terminal = () => {
  const t = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(51,255,51,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51,255,51,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-[#33ff33]/50 z-0"
          style={{
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${10 + (i * 13) % 75}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 md:px-6 max-w-6xl w-full"
      >
        {/* Terminal window */}
        <motion.div variants={fadeInUp} className="border border-[#2a2a2a] bg-[#0c0c0c]">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#2a2a2a] bg-[#141414]">
            <span className="text-[#999999] text-xs">mathias@dev ~ </span>
            <div className="flex gap-px">
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">─</span>
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#2a2a2a] text-xs cursor-default">□</span>
              <span className="w-6 h-5 flex items-center justify-center text-[#d0d0d0] hover:bg-[#ff4444] hover:text-white text-xs cursor-default">✕</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm leading-relaxed">
            <motion.div variants={fadeInUp} custom={0} className="mb-6">
              <span className="text-[#33ff33]">mathias@dev</span>
              <span className="text-[#666666]">:</span>
              <span className="text-[#6688cc]">~</span>
              <span className="text-[#666666]">$ </span>
              <span className="text-[#d0d0d0]">cat about.txt</span>
            </motion.div>

            <motion.div variants={fadeInUp} custom={2} className="mb-8 text-center">
              <pre
                className="text-[#ffb000] text-[11px] md:text-sm overflow-x-auto inline-block text-left"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontVariantLigatures: 'none',
                  fontKerning: 'none',
                  letterSpacing: '0px',
                  lineHeight: '1.2',
                  whiteSpace: 'pre',
                  tabSize: 4,
                }}
              >
{"███╗   ███╗ █████╗ ████████╗██╗  ██╗██╗ █████╗ ███████╗\n████╗ ████║██╔══██╗╚══██╔══╝██║  ██║██║██╔══██╗██╔════╝\n██╔████╔██║███████║   ██║   ███████║██║███████║███████╗\n██║╚██╔╝██║██╔══██║   ██║   ██╔══██║██║██╔══██║╚════██║\n██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██║  ██║███████║\n╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝"}</pre>
              <p className="text-[#ffb000] font-bold text-sm mt-3 tracking-[0.3em]">
                VLADIMIR
              </p>
              <p className="text-[#ffb000] font-bold text-base md:text-lg mt-1 tracking-widest">
                PAULENKO ECHEVERZ
              </p>
            </motion.div>

            {/* Roles (left) + Details (right) */}
            <motion.div variants={fadeInUp} custom={3} className="flex flex-col md:flex-row md:justify-between gap-6 mb-8 text-[#d0d0d0]">
              {/* Left: roles */}
              <div>
                <div className="mb-0.5">
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroRolesLabel}</span>
                  {' = ['}
                </div>
                {t.heroRoles.map((role, i) => (
                  <div key={i} className="ml-6 mb-0.5">
                    <span className="text-[#33ff33]">"{role}"</span>
                    {i < t.heroRoles.length - 1 && <span className="text-[#666666]">,</span>}
                  </div>
                ))}
                <div>{'];'}</div>
              </div>

              {/* Right: experience, location, status, birthdate */}
              <div className="flex flex-col gap-1">
                <div>
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroExperienceLabel}</span>
                  {' = "'}<span className="text-[#33ff33]">{t.heroExperience}</span>{'";'}
                </div>
                <div>
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroLocationLabel}</span>
                  {' = "'}<Flag code="es" alt="Spain" /><span className="text-[#33ff33]"> / </span><Flag code="cn" alt="China" />{'";'}
                </div>
                <div>
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroNationalityLabel}</span>
                  {' = "'}<Flag code="es" alt="Spain" /><span className="text-[#33ff33]"> / </span><Flag code="uy" alt="Uruguay" />{'";'}
                </div>
                <div>
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroStatusLabel}</span>
                  {' = "'}<span className="text-[#33ff33]">{t.heroStatus}</span>{'";'}
                </div>
                <div>
                  <span className="text-[#666666]">{'>'} </span>
                  <span className="text-[#ffb000]">{t.heroBirthdateLabel}</span>
                  {' = "'}<span className="text-[#33ff33]">02/11/1991</span>{'";'}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} custom={7}>
              <div className="mb-4">
                <span className="text-[#33ff33]">mathias@dev</span>
                <span className="text-[#666666]">:</span>
                <span className="text-[#6688cc]">~</span>
                <span className="text-[#666666]">$ </span>
                <span className="text-[#d0d0d0]">ls links/</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-[#3a3a3a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs">github</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-[#3a3a3a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs">linkedin</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 border border-[#3a3a3a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">email</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} custom={8} className="mt-8">
              <span className="text-[#33ff33]">mathias@dev</span>
              <span className="text-[#666666]">:</span>
              <span className="text-[#6688cc]">~</span>
              <span className="text-[#666666]">$ </span>
              <span className="cursor-blink" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#666666]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
