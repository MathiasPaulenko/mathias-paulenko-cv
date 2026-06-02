import { describe, it, expect } from 'vitest'
import { translations } from './translations'

describe('translations', () => {
  const langs = ['en', 'es', 'zh']

  it('has all three language keys', () => {
    langs.forEach((lang) => {
      expect(translations[lang]).toBeDefined()
    })
  })

  it('has the same keys across all languages', () => {
    const enKeys = Object.keys(translations.en)
    langs.slice(1).forEach((lang) => {
      const langKeys = Object.keys(translations[lang])
      expect(langKeys).toEqual(enKeys)
    })
  })

  it('has required top-level keys', () => {
    const required = [
      'title',
      'subtitle',
      'about',
      'highlights',
      'sectionAbout',
      'sectionSkills',
      'sectionExperience',
      'sectionEducation',
      'sectionCerts',
      'sectionLanguages',
      'sectionContact',
      'experience',
      'education',
      'languages',
      'contactTitle',
      'contactDesc',
    ]
    langs.forEach((lang) => {
      required.forEach((key) => {
        expect(translations[lang][key]).toBeDefined()
      })
    })
  })

  it('experience array has same length in all languages', () => {
    const enLen = translations.en.experience.length
    langs.slice(1).forEach((lang) => {
      expect(translations[lang].experience.length).toBe(enLen)
    })
  })

  it('education array has same length in all languages', () => {
    const enLen = translations.en.education.length
    langs.slice(1).forEach((lang) => {
      expect(translations[lang].education.length).toBe(enLen)
    })
  })

  it('languages array has 3 items in all languages', () => {
    langs.forEach((lang) => {
      expect(translations[lang].languages.length).toBe(3)
    })
  })
})
