import React, { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProofOfKnowledge from './components/ProofOfKnowledge'
import About from './components/About'
import Tech from './components/Tech'
import StarsCanvas from './components/canvas/StarsCanvas'
import SectionWrapper from './hoc/SectionWrapper'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// Lazy-load all below-the-fold sections to keep initial bundle lean
const Works = lazy(() => import('./components/Works'))
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Achievements = lazy(() => import('./components/Achievements'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const AboutSection = SectionWrapper(About, 'about')
const TechSection = SectionWrapper(Tech, 'skills')
const WorksSection = SectionWrapper(Works, 'work')
const ProjectsSection = SectionWrapper(Projects, 'projects')
const ContactSection = SectionWrapper(Contact, 'contact')

// Lightweight section skeleton shown while lazy chunks load
const SectionFallback = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin opacity-50" />
  </div>
)

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Reduced from 1500ms → 1000ms for faster first contentful paint
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#09090B] flex flex-col justify-center items-center">
        {/* Sleek spinning gradient ring */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 border-[3px] border-white/5 rounded-full" />
          <div className="absolute inset-0 border-[3px] border-t-[#3B82F6] border-r-transparent border-b-[#60A5FA] border-l-transparent rounded-full animate-spin" />
          <span className="text-[#3B82F6] font-bold text-lg">AKY</span>
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
      <div className="relative z-0 bg-[#09090B]">
        <div>
          <Navbar />
          <Hero />
        </div>
        <ProofOfKnowledge />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <TechSection />
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <WorksSection />
        </Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
        <StarsCanvas />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App

