import { useState } from 'react'
import { Command, X } from 'lucide-react'

const shortcuts = [
  { key: 'H', action: 'Home / Hero' },
  { key: 'A', action: 'About' },
  { key: 'S', action: 'Skills' },
  { key: 'E', action: 'Experience' },
  { key: 'D', action: 'Education' },
  { key: 'C', action: 'Certifications' },
  { key: 'L', action: 'Languages' },
  { key: 'N', action: 'Contact' },
]

export const KeyboardShortcutsHint = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1.5 px-2 py-1.5 border border-[#2a2a2a] bg-[#0c0c0c] text-[#8f8f8f] hover:text-[#ffb000] hover:border-[#ffb000] transition-all duration-300 text-xs font-mono"
          aria-label="Show keyboard shortcuts"
          title="Keyboard shortcuts"
        >
          <Command size={14} />
          <span>?</span>
        </button>
      ) : (
        <div className="border border-[#2a2a2a] bg-[#0c0c0c] p-4 min-w-[220px]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#ffb000] text-xs font-mono font-bold">Keyboard Shortcuts</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#8f8f8f] hover:text-[#ff4444] transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
          <div className="space-y-1">
            {shortcuts.map(({ key, action }) => (
              <div key={key} className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#d0d0d0]">{action}</span>
                <kbd className="px-1.5 py-0.5 border border-[#3a3a3a] bg-[#141414] text-[#33ff33] min-w-[24px] text-center">
                  {key}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
