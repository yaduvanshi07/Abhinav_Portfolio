import React, { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import StarsCanvas from './components/canvas/StarsCanvas'
import SectionWrapper from './hoc/SectionWrapper'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

const Works = lazy(() => import('./components/Works'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Certifications = lazy(() => import('./components/Certifications'))

const AboutSection = SectionWrapper(About, 'about')
const TechSection = SectionWrapper(Tech, 'skills')
const WorksSection = SectionWrapper(Works, 'work')
const ProjectsSection = SectionWrapper(Projects, 'projects')
const ContactSection = SectionWrapper(Contact, 'contact')

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#050816] flex flex-col justify-center items-center">
        {/* Sleek spinning gradient ring */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 border-[3px] border-white/5 rounded-full" />
          <div className="absolute inset-0 border-[3px] border-t-[#915eff] border-r-transparent border-b-[#bf61ff] border-l-transparent rounded-full animate-spin" />
          <span className="text-[#915eff] font-bold text-lg">AKY</span>
        </div>
        <h2 className="text-white text-xl font-black tracking-[0.25em] animate-pulse">
          ABHINAV KUMAR YADAV
        </h2>
        <p className="text-secondary text-[11px] mt-2 uppercase tracking-[0.3em] font-light">
          Initializing Portfolio Systems...
        </p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <AboutSection />
        <TechSection />
        <Suspense fallback={null}>
          <WorksSection />
        </Suspense>
        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>
        <Education />
        <Suspense fallback={null}>
          <Achievements />
        </Suspense>
        <Suspense fallback={null}>
          <Certifications />
        </Suspense>
        <ContactSection />
        <StarsCanvas />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
