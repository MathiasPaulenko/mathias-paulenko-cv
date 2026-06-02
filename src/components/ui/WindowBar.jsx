export const WindowBar = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2a2a2a]">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      {title && (
        <span className="text-xs text-[#7a7a7a] ml-2 font-mono">{title}</span>
      )}
    </div>
  )
}
