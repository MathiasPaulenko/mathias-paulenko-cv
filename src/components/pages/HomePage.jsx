import { About } from '../sections/About'
import { Certifications } from '../sections/Certifications'
import { Contact } from '../sections/Contact'
import { Education } from '../sections/Education'
import { Experience } from '../sections/Experience'
import { Footer } from '../layout/Footer'
import { Languages } from '../sections/Languages'
import { Navbar } from '../layout/Navbar'
import { KeyboardShortcutsHint } from '../ui/KeyboardShortcutsHint'
import { Portfolio } from '../sections/Portfolio'
import { ScrollToTop } from '../ui/ScrollToTop'
import { TechStack } from '../sections/TechStack'
import { Terminal } from '../sections/Terminal'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <main role="main">
        <Terminal />
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <TechStack />
        <div className="glow-line" />
        <Experience />
        <div className="glow-line" />
        <Education />
        <div className="glow-line" />
        <Certifications />
        <div className="glow-line" />
        <Portfolio />
        <div className="glow-line" />
        <Languages />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <KeyboardShortcutsHint />
    </>
  )
}
