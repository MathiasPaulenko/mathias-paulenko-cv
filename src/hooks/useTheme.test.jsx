import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from './useTheme'

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

describe('useTheme', () => {
  it('defaults to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })

  it('toggles between dark and light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    const btn = screen.getByRole('button')
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    fireEvent.click(btn)
    expect(screen.getByTestId('theme').textContent).toBe('light')
    fireEvent.click(btn)
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })
})
