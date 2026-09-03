import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProjectCard = ({
  name,
  description,
  achievements,
  tags,
  image,
  source_code_link,
  live_link,
  category,
  isActive,
}) => {
  return (
    <div className="h-full flex flex-col justify-between overflow-hidden rounded-2xl">
      <Tilt
        options={{
          max: isActive ? 8 : 0,
          scale: isActive ? 1.01 : 1,
          speed: 400,
        }}
        className={`p-5 sm:p-6 rounded-2xl w-full border flex flex-col justify-between h-full transition-colors duration-300 shadow-card overflow-hidden ${
          isActive
            ? 'bg-black border-[#3B82F6]/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.25)]'
            : 'bg-[#18181B] border-white/10 hover:border-white/20'
        }`}
      >
        {/* Upper section: Full-width image + smooth scrollable content */}
        <div className="flex flex-col flex-1 overflow-hidden min-h-0">
          {/* Full-width image container */}
          {image && (
            <div className="relative w-full h-[200px] sm:h-[210px] mb-4 overflow-hidden rounded-xl border border-white/10 bg-[#09090B] flex items-center justify-center flex-shrink-0 group">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {category && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#09090B]/90 text-[#60A5FA] border border-white/15 shadow-md">
                  {category}
                </div>
              )}
            </div>
          )}

          {/* Smooth scrollable text area with natural page scroll chaining */}
          <div
            className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar"
            style={{ overscrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
          >
            <div>
              <h3 className="text-white font-bold text-[22px] sm:text-[24px] tracking-wide font-heading group-hover:text-[#60A5FA] transition-colors duration-300">
                {name}
              </h3>
              <p className="text-secondary text-[13.5px] leading-relaxed font-light mt-1.5">
                {description}
              </p>
            </div>

            {/* Key Impact & Deliverables Bullet List */}
            {achievements && achievements.length > 0 && (
              <div className="pt-3 border-t border-white/5 space-y-2">
                <p className="text-white text-xs font-semibold uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  Key Impact & Deliverables:
                </p>
                <ul className="space-y-2 pl-0.5">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className="text-secondary text-[12.5px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60 mt-1.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Lower section: Tags & Action Buttons */}
        <div className="pt-4 border-t border-white/5 mt-4 flex-shrink-0">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            {source_code_link ? (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} source code on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 hover:border-[#3B82F6]/40 text-white border border-white/10 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                <FaGithub className="w-4 h-4 text-white" />
                <span>Codebase</span>
              </a>
            ) : (
              <span className="text-xs text-secondary font-light">Internal</span>
            )}

            {live_link ? (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${name}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#60A5FA] px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-[0_2px_10px_rgba(59,130,246,0.25)] hover:scale-105"
              >
                <FaExternalLinkAlt className="w-3 h-3 text-white" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-secondary"
                title="Supervised/Unsupervised machine learning experimentation pipeline"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span>ML Pipeline</span>
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Track responsive screen width and reduced motion
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  )

  const total = filteredProjects.length
  // Safe active index prevents out-of-bounds access
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, total - 1))

  // Safely reset active index when switching category
  useEffect(() => {
    setActiveIndex(0)
  }, [filter])

  const handlePrev = useCallback(() => {
    if (total <= 1) return
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }, [total])

  const handleNext = useCallback(() => {
    if (total <= 1) return
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }, [total])

  // Auto-play interval
  useEffect(() => {
    if (isPaused || total <= 1) return

    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused, total, activeIndex, handleNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Drag handler for swipe
  const handleDragEnd = (_event, info) => {
    const swipeThreshold = 40
    if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      handlePrev()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      handleNext()
    }
  }

  // Responsive layout measurements
  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  const cardWidth = isMobile
    ? Math.min(windowWidth - 36, 370)
    : isTablet
      ? 380
      : 420

  const cardHeight = isMobile ? 730 : 710
  const containerHeight = cardHeight + 35

  const translateXAmount = isMobile
    ? Math.min(windowWidth * 0.8, 290)
    : isTablet
      ? 250
      : 290

  // Calculate dynamic transform based on count and position
  const getCardTransform = (index) => {
    // Single project: centered
    if (total === 1) {
      return {
        x: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        isActive: true,
        isVisible: true,
      }
    }

    // 2 projects: balanced side-by-side on desktop/tablet, swipeable on mobile
    if (total === 2) {
      if (isMobile) {
        const isActive = index === safeActiveIndex
        const isNext = (index - safeActiveIndex + 2) % 2 === 1
        return {
          x: isActive ? 0 : (isNext ? translateXAmount : -translateXAmount),
          rotateY: 0,
          scale: isActive ? 1 : 0.88,
          opacity: isActive ? 1 : 0.45,
          zIndex: isActive ? 30 : 10,
          isActive,
          isVisible: true,
        }
      }
      const isFirst = index === 0
      const offsetSide = cardWidth * 0.54
      const x = isFirst ? -offsetSide : offsetSide
      const isActive = index === safeActiveIndex
      return {
        x,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: isActive ? 30 : 20,
        isActive,
        isVisible: true,
      }
    }

    // 3 projects: [LEFT] [CENTER] [RIGHT]
    if (total === 3) {
      let diff = index - safeActiveIndex
      if (diff > 1) diff -= 3
      if (diff < -1) diff += 3

      const isActive = diff === 0
      const isLeft = diff === -1
      const isRight = diff === 1

      let x = 0
      let rotateY = 0
      let scale = 1
      let opacity = 1
      let zIndex = 30

      if (isActive) {
        x = 0
        rotateY = 0
        scale = 1
        opacity = 1
        zIndex = 30
      } else if (isLeft) {
        x = -translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 8)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      } else if (isRight) {
        x = translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -8)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      }

      return {
        x,
        rotateY,
        scale,
        opacity,
        zIndex,
        isActive,
        isVisible: true,
      }
    }

    // 4 projects: balanced 4-card variation [OUTER LEFT] [INNER LEFT] [CENTER] [INNER RIGHT]
    if (total === 4) {
      let diff = index - safeActiveIndex
      if (diff > 1) diff -= 4
      if (diff < -2) diff += 4

      const isActive = diff === 0
      let x = 0
      let rotateY = 0
      let scale = 1
      let opacity = 1
      let zIndex = 30

      if (diff === 0) {
        // CENTER
        x = 0
        rotateY = 0
        scale = 1
        opacity = 1
        zIndex = 30
      } else if (diff === -1) {
        // INNER LEFT
        x = -translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 7)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      } else if (diff === 1) {
        // INNER RIGHT
        x = translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -7)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      } else if (diff === -2) {
        // OUTER LEFT
        x = isMobile ? -translateXAmount * 1.5 : -translateXAmount * 1.82
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 12)
        scale = isMobile ? 0.75 : 0.8
        opacity = isMobile ? 0 : 0.45
        zIndex = 10
      }

      return {
        x,
        rotateY,
        scale,
        opacity,
        zIndex,
        isActive,
        isVisible: isMobile ? Math.abs(diff) <= 1 : true,
      }
    }

    // 5+ projects: [OUTER LEFT] [INNER LEFT] [CENTER] [INNER RIGHT] [OUTER RIGHT]
    let diff = index - safeActiveIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    const isActive = diff === 0
    let x = 0
    let rotateY = 0
    let scale = 1
    let opacity = 1
    let zIndex = 30
    let isVisible = true

    if (diff === 0) {
      // CENTER
      x = 0
      rotateY = 0
      scale = 1
      opacity = 1
      zIndex = 30
    } else if (diff === -1) {
      // INNER LEFT
      x = -translateXAmount
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 7)
      scale = isMobile ? 0.85 : 0.9
      opacity = isMobile ? 0.35 : 0.75
      zIndex = 20
    } else if (diff === 1) {
      // INNER RIGHT
      x = translateXAmount
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -7)
      scale = isMobile ? 0.85 : 0.9
      opacity = isMobile ? 0.35 : 0.75
      zIndex = 20
    } else if (diff === -2) {
      // OUTER LEFT
      x = isMobile ? -translateXAmount * 1.5 : -translateXAmount * 1.82
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 12)
      scale = isMobile ? 0.75 : 0.8
      opacity = isMobile ? 0 : 0.45
      zIndex = 10
      isVisible = !isMobile
    } else if (diff === 2) {
      // OUTER RIGHT
      x = isMobile ? translateXAmount * 1.5 : translateXAmount * 1.82
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -12)
      scale = isMobile ? 0.75 : 0.8
      opacity = isMobile ? 0 : 0.45
      zIndex = 10
      isVisible = !isMobile
    } else {
      // Hidden pool for rotating remaining cards
      x = diff > 0 ? translateXAmount * 2.3 : -translateXAmount * 2.3
      rotateY = 0
      scale = 0.65
      opacity = 0
      zIndex = 1
      isVisible = false
    }

    return {
      x,
      rotateY,
      scale,
      opacity,
      zIndex,
      isActive,
      isVisible,
    }
  }

  return (
    <div className="w-full space-y-12">
      {/* Header & Category Tabs */}
      <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work & contributions</p>
          <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
        </motion.div>

        {/* Filter buttons in heading row right side */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex gap-1.5 sm:gap-2 bg-[#18181B] p-1.5 rounded-full border border-white/10 shadow-lg flex-shrink-0 self-start sm:self-end"
        >
          {['All', 'Full Stack', 'AI / ML'].map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-heading ${
                filter === cat
                  ? 'bg-[#3B82F6] text-white shadow-[0_0_12px_rgba(59,130,246,0.35)]'
                  : 'text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] font-light"
      >
        Each project represents an end-to-end production loop or experiment. Click on links to view Git repos or explore active server-deployed applications. Key backend optimizations and algorithmic results are highlighted for review.
      </motion.p>

      {/* Dynamic 3D Carousel Showcase */}
      <div className="relative w-full mt-10 sm:mt-14 flex flex-col items-center select-none">
        {/* Carousel Viewport with 3D Perspective */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden py-4"
          style={{
            height: `${containerHeight}px`,
            perspective: '1200px',
          }}
        >
          {filteredProjects.map((project, index) => {
            const transform = getCardTransform(index)

            return (
              <motion.div
                key={`project-${project.name}`}
                initial={false}
                animate={{
                  x: transform.x,
                  y: 0,
                  rotateY: transform.rotateY,
                  scale: transform.scale,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.65,
                  ease: [0.16, 1, 0.3, 1], // Silky-smooth, high-performance cubic-bezier curve
                }}
                drag={transform.isActive && !isMobile ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => {
                  if (!transform.isActive) {
                    setActiveIndex(index)
                  }
                }}
                className={`absolute inset-y-0 my-auto rounded-2xl overflow-hidden ${
                  transform.isActive
                    ? 'bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(59,130,246,0.25)] ring-1 ring-[#3B82F6]/50'
                    : 'cursor-pointer hover:ring-1 hover:ring-white/20'
                }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformStyle: 'preserve-3d',
                  pointerEvents: transform.isVisible ? 'auto' : 'none',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Original ProjectCard Component with isActive flag */}
                <ProjectCard {...project} isActive={transform.isActive} />

                {/* Subtle Dimming Overlay on Side Cards */}
                {!transform.isActive && (
                  <div
                    className="absolute inset-0 bg-black/50 rounded-2xl z-30 transition-opacity duration-300 hover:bg-black/25 cursor-pointer"
                    aria-label={`Select ${project.name}`}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Dynamic Auto-Play Progress Indicator Line */}
        {total > 1 && (
          <div className="w-full max-w-[280px] sm:max-w-[360px] h-[2.5px] bg-white/10 rounded-full mt-4 overflow-hidden relative">
            {!isPaused && (
              <motion.div
                key={`${filter}-${safeActiveIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.0, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] shadow-[0_0_8px_#3B82F6]"
              />
            )}
            {isPaused && <div className="h-full w-full bg-[#3B82F6]/50" />}
          </div>
        )}

        {/* Active Project Title Indicator */}
        {total > 1 && (
          <p className="font-heading font-bold text-white text-sm sm:text-base text-center mt-3 drop-shadow tracking-wide px-4 truncate max-w-lg">
            {filteredProjects[safeActiveIndex]?.name}
          </p>
        )}

        {/* Navigation Controls Bar */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-5 sm:gap-7 mt-3 sm:mt-4">
            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group"
            >
              <FaChevronLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Dots & Counter */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {filteredProjects.map((proj, idx) => {
                  const isSelected = idx === safeActiveIndex
                  return (
                    <button
                      key={`dot-${proj.name}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Jump to project ${idx + 1}: ${proj.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'w-7 sm:w-8 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] shadow-[0_0_10px_#3B82F6]'
                          : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  )
                })}
              </div>

              <span className="font-mono text-[11px] sm:text-xs text-secondary/80 tracking-widest uppercase">
                {String(safeActiveIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group"
            >
              <FaChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
