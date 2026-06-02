import { Share2, Twitter, Linkedin, Link } from 'lucide-react'
import { useState } from 'react'

export const ShareButtons = () => {
  const url = 'https://mathiaspaulenko.com'
  const title = 'Mathias Paulenko — Project Leader & Test Solutions Architect'

  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const shareToTwitter = () => {
    const text = encodeURIComponent(`Check out ${title}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer')
  }

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-[#999999] text-xs font-mono">share:</span>
      <button
        onClick={shareToTwitter}
        className="flex items-center gap-1.5 px-2 py-1 border border-[#2a2a2a] hover:border-[#00cccc] hover:text-[#00cccc] text-[#d0d0d0] transition-all duration-300"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={shareToLinkedIn}
        className="flex items-center gap-1.5 px-2 py-1 border border-[#2a2a2a] hover:border-[#00cccc] hover:text-[#00cccc] text-[#d0d0d0] transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 px-2 py-1 border border-[#2a2a2a] hover:border-[#00cccc] hover:text-[#00cccc] text-[#d0d0d0] transition-all duration-300"
        aria-label="Copy link"
      >
        {copied ? <Link className="w-3.5 h-3.5 text-[#33ff33]" /> : <Link className="w-3.5 h-3.5" />}
      </button>
    </div>
  )
}
