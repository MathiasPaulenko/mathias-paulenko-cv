import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CopyButton } from './CopyButton'

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
})

describe('CopyButton', () => {
  it('renders with label and Copy icon', () => {
    render(<CopyButton text="hello@example.com" label="email" />)
    expect(screen.getByText('./email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /copy email/i })).toBeInTheDocument()
  })

  it('copies text to clipboard on click', async () => {
    render(<CopyButton text="hello@example.com" label="email" />)
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('hello@example.com')
    await waitFor(() => {
      expect(screen.getByText('copied!')).toBeInTheDocument()
    })
  })

  it('resets to copy state after 2 seconds', async () => {
    render(<CopyButton text="test" label="url" />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('copied!')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('./url')).toBeInTheDocument()
    }, { timeout: 3000 })
  }, 10000)
})
