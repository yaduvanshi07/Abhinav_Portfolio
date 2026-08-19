import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { certifications } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { FaLaptopCode, FaBrain, FaFlask, FaIndustry, FaDesktop, FaExternalLinkAlt } from 'react-icons/fa'

const getCertIcon = (icon) => {
  switch (icon) {
    case "💻":
      return <FaLaptopCode className="w-7 h-7" />
    case "🧠":
      return <FaBrain className="w-7 h-7" />
    case "🧪":
      return <FaFlask className="w-7 h-7" />
    case "🏭":
      return <FaIndustry className="w-7 h-7" />
    case "🖥️":
      return <FaDesktop className="w-7 h-7" />
    default:
      return <FaLaptopCode className="w-7 h-7" />
  }
}

const CertificationCard = ({ index, title, issuer, date, description, skills, icon, color, pdf }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Tilt
      options={{
        max: 12,
        scale: 1.02,
        speed: 400,
      }}
      className="w-full h-full flex"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
        className="relative w-full h-full group flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          style={{ background: `linear-gradient(135deg, ${color}40, transparent, ${color}20)` }}
        />

        <div className="relative bg-[#18181B]/70 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group-hover:border-white/10 transition-all duration-500 flex flex-col justify-between h-full shadow-card">
          {/* Top accent bar */}
          <div
            className="h-1 w-full flex-shrink-0"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}60, transparent)` }}
          />

          <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${color}10`,
                    borderColor: `${color}30`,
                    color: color,
                    boxShadow: isHovered ? `0 0 20px ${color}20` : 'none'
                  }}
                >
                  {getCertIcon(icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-[16px] sm:text-[17px] font-bold tracking-wide leading-tight font-heading group-hover:text-[#60A5FA] transition-colors">{title}</h3>
                  <p className="text-secondary text-[12px] sm:text-[13px] font-medium mt-1">{issuer}</p>
                  <span
                    className="inline-block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mt-2 font-heading"
                    style={{
                      backgroundColor: `${color}15`,
                      color: color,
                      border: `1px solid ${color}25`
                    }}
                  >
                    {date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary text-[13px] leading-[22px] font-light">
                {description}
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 text-secondary border border-white/5 hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Certificate Button */}
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View verified certificate for ${title}`}
                className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 border font-heading cursor-pointer"
                style={{
                  backgroundColor: `${color}10`,
                  borderColor: `${color}20`,
                  color: color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${color}25`
                  e.currentTarget.style.borderColor = `${color}40`
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}15`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${color}10`
                  e.currentTarget.style.borderColor = `${color}20`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Certifications = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Certifications, 'certifications')
