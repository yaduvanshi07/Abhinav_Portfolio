import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'
import { FaFilePdf, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'

// Dynamically import all PDFs from src/assets/documents
const pdfModules = import.meta.glob('../assets/documents/*.pdf', {
  eager: true,
  import: 'default',
})

// Dynamically import generated high-res preview images of the first page
const previewModules = import.meta.glob('../assets/documents/previews/*.png', {
  eager: true,
  import: 'default',
})

const ProofOfKnowledge = () => {
  // Build document metadata from actual imported PDF assets and preview images
  const documents = useMemo(() => {
    return Object.entries(pdfModules)
      .map(([pdfPath, url], index) => {
        const filename = pdfPath.split('/').pop() || `document-${index + 1}.pdf`
        const rawTitle = filename.replace(/\.[^/.]+$/, '')
        const title = rawTitle.replace(/[_-]+/g, ' ').trim()

        // Match preview image by base title
        const matchedPreviewEntry = Object.entries(previewModules).find(([previewPath]) => {
          const previewBase = previewPath.split('/').pop().replace(/\.png$/i, '')
          return previewBase.toLowerCase() === rawTitle.toLowerCase()
        })

        const previewUrl = matchedPreviewEntry ? matchedPreviewEntry[1] : null

        return {
          id: `pdf-doc-${index}`,
          filename,
          title,
          url,
          preview: previewUrl,
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [])

  const total = documents.length
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

  const handlePrev = useCallback(() => {
    if (total <= 1) return
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }, [total])

  const handleNext = useCallback(() => {
    if (total <= 1) return
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }, [total])

  // 3.5s Auto-play interval
  useEffect(() => {
    if (isPaused || total <= 1) return

    const timer = setInterval(() => {
      handleNext()
    }, 3500)

    return () => clearInterval(timer)
  }, [isPaused, total, activeIndex, handleNext])

  // Keyboard navigation & Escape key
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

  // Open the authentic PDF asset in a new tab safely
  const handleOpenPdf = (url, e) => {
    if (e) e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Calculate circular offset relative to active card
  const getOffset = (index) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  // Responsive dimension calculations matching the 1.41:1 landscape certificate ratio
  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  const cardWidth = isMobile
    ? Math.min(windowWidth - 40, 360)
    : isTablet
      ? 470
      : 590

  // Height calculated from exact 1.41:1 aspect ratio so the entire certificate is 100% visible
  const cardHeight = Math.round(cardWidth / 1.41)

  const translateXAmount = isMobile
    ? Math.min(windowWidth * 0.48, 195)
    : isTablet
      ? 310
      : 410

  // Drag handler for mouse drag & touch swipe
  const handleDragEnd = (_event, info) => {
    const swipeThreshold = 40
    if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      handlePrev()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      handleNext()
    }
  }

  if (documents.length === 0) {
    return null
  }

  return (
    <section
      id="proof-of-knowledge"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden`}
    >
      {/* Subtle Anchor Target */}
      <span className="hash-span">&nbsp;</span>

      {/* Section Header */}
      <div className="space-y-4">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Veni, Vidi, Vici</p>
          <h2 className={styles.sectionHeadText}>Proof of Knowledge.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-white text-[16px] sm:text-[17px] leading-[28px] max-w-4xl font-light"
        >
          Proof that I have learned by building, debugging, experimenting, and understanding the fundamentals behind what I create. Every project represents hands-on problem solving, from writing and structuring the code to troubleshooting issues and understanding why a solution works. AI tools like Cursor and Antigravity are part of my development workflow and help me move faster, explore ideas, and improve productivity, but they do not replace the understanding behind the code. I take responsibility for the technical decisions, architecture, implementation, debugging, and the final result.
        </motion.p>
      </div>

      {/* 3D Horizontal Document Carousel Container */}
      <div className="relative w-full mt-10 sm:mt-14 flex flex-col items-center select-none">
        {/* Carousel Viewport with 3D perspective */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden py-4"
          style={{
            height: `${cardHeight + 40}px`,
            perspective: '1200px',
          }}
        >
          {documents.map((doc, index) => {
            const offset = getOffset(index)
            const isActive = offset === 0
            const isPrev = offset === -1
            const isNext = offset === 1
            const isVisible = Math.abs(offset) <= 1

            // Compute dynamic 3D transform values
            let targetX = 0
            let targetRotateY = 0
            let targetScale = 1
            let targetOpacity = 1
            let zIndex = 30

            if (isActive) {
              targetX = 0
              targetRotateY = 0
              targetScale = 1
              targetOpacity = 1
              zIndex = 30
            } else if (isPrev) {
              targetX = -translateXAmount
              targetRotateY = prefersReducedMotion ? 0 : 15
              targetScale = isMobile ? 0.82 : 0.85
              targetOpacity = 0.5
              zIndex = 10
            } else if (isNext) {
              targetX = translateXAmount
              targetRotateY = prefersReducedMotion ? 0 : -15
              targetScale = isMobile ? 0.82 : 0.85
              targetOpacity = 0.5
              zIndex = 10
            } else {
              targetX = offset > 0 ? translateXAmount * 1.8 : -translateXAmount * 1.8
              targetRotateY = offset > 0 ? -25 : 25
              targetScale = 0.65
              targetOpacity = 0
              zIndex = 1
            }

            return (
              <motion.div
                key={doc.id}
                initial={false}
                animate={{
                  x: targetX,
                  y: 0,
                  rotateY: targetRotateY,
                  scale: targetScale,
                  opacity: targetOpacity,
                  zIndex,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 1.1,
                  ease: [0.25, 1, 0.5, 1], // Smooth, cinematic deceleration glide
                }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => {
                  if (isPrev) handlePrev()
                  else if (isNext) handleNext()
                  else if (isActive) handleOpenPdf(doc.url)
                }}
                className={`absolute inset-y-0 my-auto rounded-[24px] p-[1.5px] transition-shadow duration-500 cursor-pointer ${isActive
                  ? 'bg-gradient-to-b from-[#3B82F6]/60 via-[#60A5FA]/25 to-[#3B82F6]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(59,130,246,0.25)]'
                  : 'bg-white/10 hover:bg-white/20'
                  }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformStyle: 'preserve-3d',
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                whileHover={
                  isActive && !prefersReducedMotion
                    ? {
                      scale: 1.015,
                      y: -6,
                      boxShadow:
                        '0 25px 70px -15px rgba(0,0,0,0.95), 0 0 45px rgba(59,130,246,0.35)',
                    }
                    : {}
                }
              >
                {/* Inner Card Shell - 100% full view of certificate */}
                <div className="relative w-full h-full bg-[#0d0e12] rounded-[22.5px] overflow-hidden flex items-center justify-center p-1 sm:p-1.5 border border-white/10 group">
                  {/* Real Certificate Image */}
                  {doc.preview ? (
                    <img
                      src={doc.preview}
                      alt={doc.title}
                      className="w-full h-full object-contain rounded-[20px] select-none pointer-events-none drop-shadow-md"
                      loading="eager"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <FaFilePdf className="w-14 h-14 text-[#60A5FA] mb-3" />
                      <h4 className="text-white font-heading font-bold text-base">{doc.title}</h4>
                    </div>
                  )}

                  {/* Minimalist Top-Left Floating PDF Badge */}
                  <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                      PDF
                    </span>
                  </div>

                  {/* Minimalist Top-Right Counter Badge */}
                  <div className="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80">
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </div>

                  {/* Bottom-Right Floating "View PDF" Action Pill */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => handleOpenPdf(doc.url, e)}
                      className="absolute bottom-2.5 right-2.5 z-20 py-1.5 px-3.5 rounded-full bg-[#18181B]/85 hover:bg-[#3B82F6] text-white backdrop-blur-md border border-white/20 hover:border-[#3B82F6] font-heading font-semibold text-[11px] tracking-wider uppercase flex items-center gap-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer group/btn"
                      aria-label={`Open original PDF for ${doc.title} in new tab`}
                    >
                      <span>View PDF</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5 text-[#60A5FA] group-hover/btn:text-white transition-colors" />
                    </button>
                  )}

                  {/* Dimming overlay on side cards */}
                  {!isActive && (
                    <div
                      className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px] z-25 transition-opacity duration-300 hover:bg-black/20 rounded-[22.5px]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Dynamic Auto-Play Progress Line */}
        <div className="w-full max-w-[280px] sm:max-w-[360px] h-[2.5px] bg-white/10 rounded-full mt-4 overflow-hidden relative">
          {!isPaused && (
            <motion.div
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] shadow-[0_0_8px_#3B82F6]"
            />
          )}
          {isPaused && <div className="h-full w-full bg-[#3B82F6]/50" />}
        </div>

        {/* Active Document Title */}
        <p className="font-heading font-bold text-white text-sm sm:text-base text-center mt-3 drop-shadow tracking-wide px-4 truncate max-w-lg">
          {documents[activeIndex]?.title}
        </p>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-3 sm:mt-4">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={total <= 1}
            aria-label="Previous document"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B]/80 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Dots & Counter - Clean without extra auto text */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {documents.map((doc, idx) => {
                const isSelected = idx === activeIndex
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to document ${idx + 1}: ${doc.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isSelected
                      ? 'w-7 sm:w-8 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] shadow-[0_0_10px_#3B82F6]'
                      : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
                      }`}
                  />
                )
              })}
            </div>

            <span className="font-mono text-[11px] sm:text-xs text-secondary/80 tracking-widest uppercase">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={total <= 1}
            aria-label="Next document"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B]/80 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300 text-secondary hover:text-white cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProofOfKnowledge
