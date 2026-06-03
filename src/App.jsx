import { AppRouter } from './routers/AppRouter'
import { CookieBanner } from './components/ui/CookieBanner'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'

export const App = () => {
  useKeyboardShortcuts()

  return (
    <>
      <AppRouter />
      <CookieBanner />
    </>
  )
}
