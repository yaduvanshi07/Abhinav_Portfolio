import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { certifications } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import {
  FaLaptopCode,
  FaBrain,
  FaFlask,
  FaIndustry,
  FaDesktop,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

const getCertIcon = (icon) => {
  switch (icon) {
    case '💻':
      return <FaLaptopCode className="w-6 h-6 sm:w-7 sm:h-7" />
    case '🧠':
      return <FaBrain className="w-6 h-6 sm:w-7 sm:h-7" />
    case '🧪':
      return <FaFlask className="w-6 h-6 sm:w-7 sm:h-7" />
    case '🏭':
      return <FaIndustry className="w-6 h-6 sm:w-7 sm:h-7" />
    case '🖥️':
      return <FaDesktop className="w-6 h-6 sm:w-7 sm:h-7" />
    default:
      return <FaLaptopCode className="w-6 h-6 sm:w-7 sm:h-7" />
  }
}

const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  skills,
  icon,
  color,
  pdf,
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
        className={`p-6 sm:p-7 rounded-2xl w-full border flex flex-col justify-between h-full transition-colors duration-300 shadow-card overflow-hidden ${
          isActive
            ? 'bg-black border-[#3B82F6]/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.25)]'
            : 'bg-[#18181B] border-white/10 hover:border-white/20'
        }`}
      >
        {/* Upper content section with smooth scroll */}
        <div className="flex flex-col flex-1 overflow-hidden min-h-0">
          {/* Header */}
          <div className="flex items-start gap-3.5 mb-3.5 flex-shrink-0">
            <div
              className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-lg transition-transform duration-300"
              style={{
                backgroundColor: `${color}15`,
                borderColor: `${color}35`,
                color: color,
                boxShadow: isActive ? `0 0 20px ${color}25` : 'none',
              }}
            >
              {getCertIcon(icon)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-[16px] sm:text-[17px] font-bold tracking-wide leading-tight font-heading">
                {title}
              </h3>
              <p className="text-secondary text-[12px] sm:text-[13px] font-medium mt-0.5">
                {issuer}
              </p>
              <span
                className="inline-block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mt-1.5 font-heading"
                style={{
                  backgroundColor: `${color}15`,
                  color: color,
                  border: `1px solid ${color}25`,
                }}
              >
                {date}
              </span>
            </div>
          </div>

          {/* Scrollable Description & Skills */}
          <div
            className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar"
            style={{ overscrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
          >
            <p className="text-secondary text-[13px] leading-[22px] font-light">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-white/5 text-secondary border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button pinned at bottom */}
        <div className="pt-3.5 border-t border-white/5 mt-3 flex-shrink-0">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View verified certificate for ${title}`}
            onClick={(e) => e.stopPropagation()}
            className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 border font-heading cursor-pointer hover:scale-[1.02]"
            style={{
              backgroundColor: `${color}15`,
              borderColor: `${color}30`,
              color: color,
            }}
          >
            <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover/btn:scale-110" />
            <span>View Certificate</span>
          </a>
        </div>
      </Tilt>
    </div>
  )
}

const Certifications = () => {
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

  const total = certifications.length
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, total - 1))

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

  // Responsive layout dimensions tailored for certificate cards
  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  const cardWidth = isMobile
    ? Math.min(windowWidth - 36, 360)
    : isTablet
      ? 370
      : 400

  const cardHeight = isMobile ? 470 : 440
  const containerHeight = cardHeight + 35

  const translateXAmount = isMobile
    ? Math.min(windowWidth * 0.8, 280)
    : isTablet
      ? 240
      : 280

  // Calculate dynamic 3D carousel transform
  const getCardTransform = (index) => {
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
        x = 0
        rotateY = 0
        scale = 1
        opacity = 1
        zIndex = 30
      } else if (diff === -1) {
        x = -translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 7)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      } else if (diff === 1) {
        x = translateXAmount
        rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -7)
        scale = isMobile ? 0.85 : 0.9
        opacity = isMobile ? 0.35 : 0.75
        zIndex = 20
      } else if (diff === -2) {
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

    // 5+ items
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
      x = 0
      rotateY = 0
      scale = 1
      opacity = 1
      zIndex = 30
    } else if (diff === -1) {
      x = -translateXAmount
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 7)
      scale = isMobile ? 0.85 : 0.9
      opacity = isMobile ? 0.35 : 0.75
      zIndex = 20
    } else if (diff === 1) {
      x = translateXAmount
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -7)
      scale = isMobile ? 0.85 : 0.9
      opacity = isMobile ? 0.35 : 0.75
      zIndex = 20
    } else if (diff === -2) {
      x = isMobile ? -translateXAmount * 1.5 : -translateXAmount * 1.82
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : 12)
      scale = isMobile ? 0.75 : 0.8
      opacity = isMobile ? 0 : 0.45
      zIndex = 10
      isVisible = !isMobile
    } else if (diff === 2) {
      x = isMobile ? translateXAmount * 1.5 : translateXAmount * 1.82
      rotateY = prefersReducedMotion ? 0 : (isMobile ? 0 : -12)
      scale = isMobile ? 0.75 : 0.8
      opacity = isMobile ? 0 : 0.45
      zIndex = 10
      isVisible = !isMobile
    } else {
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
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Validated expertise & credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[16px] leading-[28px] max-w-3xl font-light"
      >
        These certifications reflect my commitment to continuous learning and professional
        development across diverse domains — from full-stack engineering and algorithmic
        problem-solving to emerging technologies like IIoT and human-centered design.
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
          {certifications.map((cert, index) => {
            const transform = getCardTransform(index)

            return (
              <motion.div
                key={`cert-${cert.title}`}
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
                  ease: [0.16, 1, 0.3, 1],
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
                {/* Certification Card with isActive flag */}
                <CertificationCard {...cert} isActive={transform.isActive} />

                {/* Subtle Dimming Overlay on Side Cards */}
                {!transform.isActive && (
                  <div
                    className="absolute inset-0 bg-black/50 rounded-2xl z-30 transition-opacity duration-300 hover:bg-black/25 cursor-pointer"
                    aria-label={`Select ${cert.title}`}
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
                key={`cert-progress-${safeActiveIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.0, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] shadow-[0_0_8px_#3B82F6]"
              />
            )}
            {isPaused && <div className="h-full w-full bg-[#3B82F6]/50" />}
          </div>
        )}

        {/* Active Certification Title Indicator */}
        {total > 1 && (
          <p className="font-heading font-bold text-white text-sm sm:text-base text-center mt-3 drop-shadow tracking-wide px-4 truncate max-w-lg">
            {certifications[safeActiveIndex]?.title}
          </p>
        )}

        {/* Navigation Controls Bar */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-5 sm:gap-7 mt-3 sm:mt-4">
            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous certification"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group"
            >
              <FaChevronLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Dots & Counter */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {certifications.map((cert, idx) => {
                  const isSelected = idx === safeActiveIndex
                  return (
                    <button
                      key={`cert-dot-${cert.title}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Jump to certification ${idx + 1}: ${cert.title}`}
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
              aria-label="Next certification"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group"
            >
              <FaChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Certifications, 'certifications')
