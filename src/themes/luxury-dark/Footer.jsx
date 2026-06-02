export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6b6b80]">
          © {new Date().getFullYear()} Mathias Paulenko. All rights reserved.
        </p>
        <p className="text-xs text-[#6b6b80] font-mono">
          Built with React + TailwindCSS
        </p>
      </div>
    </footer>
  )
}
