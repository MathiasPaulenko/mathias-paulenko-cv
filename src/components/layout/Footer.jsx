export const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t border-[#2a2a2a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-[#7a7a7a]">
        <p>
          <span className="text-[#33ff33]">$</span> echo "Mathias Paulenko {new Date().getFullYear()}"
        </p>
      </div>
    </footer>
  )
}
