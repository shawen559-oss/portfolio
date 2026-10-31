import { About } from './components/About'
import { AimlAssessment } from './components/AimlAssessment'
import { AssessmentIntro } from './components/AssessmentIntro'
import { ChangeAssessment } from './components/ChangeAssessment'
import { Closing } from './components/Closing'
import { FeaturedWork, First30CaseStudy } from './components/FeaturedWork'
import { CV } from './components/CV'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Roadmap } from './components/Roadmap'

export default function App() {
  return (
    <div className="min-h-svh bg-canvas text-ink">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-canvas focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <First30CaseStudy />
        <AssessmentIntro />
        <AimlAssessment />
        <ChangeAssessment />
        <Roadmap />
        <CV />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}
