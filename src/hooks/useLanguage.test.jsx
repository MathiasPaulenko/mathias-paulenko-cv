import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './useLanguage'

const TestComponent = () => {
  const { lang, toggleLang } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <button onClick={toggleLang}>toggle</button>
    </div>
  )
}

describe('useLanguage', () => {
  it('defaults to en', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    expect(screen.getByTestId('lang').textContent).toBe('en')
  })

  it('toggles through en → es → zh → en', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )
    const btn = screen.getByRole('button')
    expect(screen.getByTestId('lang').textContent).toBe('en')
    fireEvent.click(btn)
    expect(screen.getByTestId('lang').textContent).toBe('es')
    fireEvent.click(btn)
    expect(screen.getByTestId('lang').textContent).toBe('zh')
    fireEvent.click(btn)
    expect(screen.getByTestId('lang').textContent).toBe('en')
  })
})
