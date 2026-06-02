import { useEffect } from 'react'
import { useLanguage } from './useLanguage'

const titles = {
  en: {
    default: 'Mathias Paulenko — Project Leader & Test Solutions Architect',
    about: 'About | Mathias Paulenko',
    skills: 'Tech Stack | Mathias Paulenko',
    experience: 'Experience | Mathias Paulenko',
    education: 'Education | Mathias Paulenko',
    certifications: 'Certifications | Mathias Paulenko',
    languages: 'Languages | Mathias Paulenko',
    contact: 'Contact | Mathias Paulenko',
  },
  es: {
    default: 'Mathias Paulenko — Líder de Proyecto y Arquitecto de Test',
    about: 'Sobre Mí | Mathias Paulenko',
    skills: 'Stack Tecnológico | Mathias Paulenko',
    experience: 'Experiencia | Mathias Paulenko',
    education: 'Educación | Mathias Paulenko',
    certifications: 'Certificaciones | Mathias Paulenko',
    languages: 'Idiomas | Mathias Paulenko',
    contact: 'Contacto | Mathias Paulenko',
  },
  zh: {
    default: 'Mathias Paulenko — 项目领导者与测试解决方案架构师',
    about: '关于我 | Mathias Paulenko',
    skills: '技术栈 | Mathias Paulenko',
    experience: '工作经验 | Mathias Paulenko',
    education: '教育背景 | Mathias Paulenko',
    certifications: '证书 | Mathias Paulenko',
    languages: '语言能力 | Mathias Paulenko',
    contact: '联系方式 | Mathias Paulenko',
  },
}

export const useSEO = (sectionId) => {
  const { lang } = useLanguage()

  useEffect(() => {
    const sectionTitles = titles[lang] || titles.en
    const newTitle = sectionId && sectionTitles[sectionId]
      ? sectionTitles[sectionId]
      : sectionTitles.default

    if (document.title !== newTitle) {
      document.title = newTitle
    }
  }, [sectionId, lang])
}
