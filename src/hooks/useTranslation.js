import { useLanguage } from './useLanguage'
import { translations } from '../data/translations'

export const useTranslation = () => {
  const { lang } = useLanguage()
  return translations[lang]
}
