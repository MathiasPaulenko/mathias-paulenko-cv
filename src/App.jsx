import { AppRouter } from './routers/AppRouter'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'

export const App = () => {
  useKeyboardShortcuts()

  return <AppRouter />
}
