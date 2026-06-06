import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t border-[#2a2a2a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-[#8f8f8f]">
        <p>
          <span className="text-[#33ff33]">$</span> echo "Mathias Paulenko {new Date().getFullYear()}"
        </p>
        <div className="flex gap-4">
          <a
            href="#portfolio"
            className="hover:text-[#33ff33] transition-colors"
          >
            Portfolio
          </a>
          <Link
            to="/privacy"
            className="hover:text-[#33ff33] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
