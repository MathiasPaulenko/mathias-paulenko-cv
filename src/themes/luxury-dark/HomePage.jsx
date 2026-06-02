import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { TechStack } from '../sections/TechStack'
import { Experience } from '../sections/Experience'
import { Education } from '../sections/Education'
import { Certifications } from '../sections/Certifications'
import { Projects } from '../sections/Projects'
import { Languages } from '../sections/Languages'
import { Contact } from '../sections/Contact'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
        <Projects />
        <div className="glow-line" />
        <Languages />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
