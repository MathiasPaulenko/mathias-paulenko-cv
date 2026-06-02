import { motion } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <div className="text-[#ffb000] font-mono text-sm mb-4">
          <span className="text-[#33ff33]">$</span> error 404
        </div>
        <pre className="text-[#d0d0d0] font-mono text-xs leading-relaxed mb-6 overflow-x-auto inline-block text-left">
{`╭──────────────────────────────────╮
│  404 NOT FOUND                   │
│                                  │
│  The page you requested does     │
│  not exist in this directory.    │
│                                  │
│  Try: cd ~ && ls                 │
╰──────────────────────────────────╯`}
        </pre>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] hover:border-[#ffb000] hover:text-[#ffb000] text-[#d0d0d0] transition-all duration-300 font-mono text-xs"
        >
          <span className="text-[#33ff33]">$</span> cd ~/home
        </a>
      </motion.div>
    </div>
  )
}
