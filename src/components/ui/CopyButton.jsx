import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 border border-[#3a3a3a] hover:border-[#33ff33] hover:text-[#33ff33] text-[#d0d0d0] transition-all duration-300"
      aria-label={`Copy ${label}`}
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-[#33ff33]" /> : <Copy className="w-4 h-4" />}
      <span className="text-xs">{copied ? 'copied!' : `./${label}`}</span>
    </button>
  )
}
